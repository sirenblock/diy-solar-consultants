import { useState } from 'react';
import Head from 'next/head';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Calculator, Download, Check } from 'lucide-react';

export default function CalculatorSpreadsheetPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: 'calculator-landing',
          leadMagnet: 'calculator-spreadsheet'
        })
      });

      if (response.ok) {
        setSubmitted(true);
        if (window.gtag) {
          window.gtag('event', 'conversion', {
            event_category: 'Lead Generation',
            event_label: 'Calculator Download',
            value: 1
          });
        }
      }
    } catch (error) {
      console.error('Subscription error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Free Solar ROI Calculator - Calculate Your Exact Savings | DIY Solar Consultants</title>
        <meta
          name="description"
          content="Download our free Solar ROI Calculator spreadsheet. Calculate your exact savings, payback period, and 25-year returns."
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
        <p>Calculator Page - Coming Soon</p>
      </main>

      <Footer />
    </>
  );
}
