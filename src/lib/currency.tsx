import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Currency = 'USD' | 'EUR' | 'TRY' | 'GBP' | 'AED';

interface ExchangeRates {
  [key: string]: number;
}

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  convert: (usdAmount: number) => number;
  formatPrice: (usdAmount: number) => string;
  symbol: string;
  loading: boolean;
}

const currencySymbols: Record<Currency, string> = {
  USD: '$',
  EUR: '€',
  TRY: '₺',
  GBP: '£',
  AED: 'د.إ',
};

const currencyLocales: Record<Currency, string> = {
  USD: 'en-US',
  EUR: 'de-DE',
  TRY: 'tr-TR',
  GBP: 'en-GB',
  AED: 'ar-AE',
};

const CurrencyContext = createContext<CurrencyContextType>({
  currency: 'USD',
  setCurrency: () => {},
  convert: (n) => n,
  formatPrice: (n) => `$${n}`,
  symbol: '$',
  loading: false,
});

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [rates, setRates] = useState<ExchangeRates>({ USD: 1 });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRates = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://open.er-api.com/v6/latest/USD');
        const data = await res.json();
        if (data.result === 'success' && data.rates) {
          setRates(data.rates);
        }
      } catch (err) {
        console.warn('Failed to fetch exchange rates, using fallback rates');
        setRates({
          USD: 1,
          EUR: 0.92,
          TRY: 38.5,
          GBP: 0.79,
          AED: 3.67,
        });
      } finally {
        setLoading(false);
      }
    };
    fetchRates();
  }, []);

  const convert = (usdAmount: number): number => {
    const rate = rates[currency] || 1;
    return usdAmount * rate;
  };

  const roundPrice = (amount: number): number => {
    if (amount >= 1_000_000) {
      return Math.round(amount / 1000) * 1000;
    } else if (amount >= 100_000) {
      return Math.round(amount / 100) * 100;
    } else if (amount >= 10_000) {
      return Math.round(amount / 10) * 10;
    }
    return Math.round(amount);
  };

  const formatPrice = (usdAmount: number): string => {
    const converted = convert(usdAmount);
    const rounded = roundPrice(converted);

    return new Intl.NumberFormat(currencyLocales[currency], {
      style: 'currency',
      currency: currency,
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    }).format(rounded);
  };

  return (
    <CurrencyContext.Provider value={{
      currency,
      setCurrency,
      convert,
      formatPrice,
      symbol: currencySymbols[currency],
      loading,
    }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);
