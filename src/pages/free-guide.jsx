import { useState } from 'react';
import Head from 'next/head';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FileText, Download, Check, Lock, Shield, Users, Star, TrendingUp, Award } from 'lucide-react';

export default function FreeGuidePage() {
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
          source: 'free-guide-landing',
          leadMagnet: 'diy-solar-guide'
        })
      });

      if (response.ok) {
        setSubmitted(true);
        if (window.gtag) {
          window.gtag('event', 'conversion', {
            event_category: 'Lead Generation',
            event_label: 'Free Guide Download',
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
        <title>Free DIY Solar Guide - Save $15,000+ on Installation | DIY Solar Consultants</title>
        <meta
          name="description"
          content="Download our comprehensive 97-page DIY Solar Guide. Learn how to install solar panels yourself and save $15,000+. Expert advice from NABCEP-certified professionals."
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <p>Free Guide Page - Coming Soon</p>
      </main>

      <Footer />
    </>
  );
}
