import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ComponentExamples from '@/components/ComponentExamples';
import { ToastProvider } from '@/components/ui/toast';

export default function ComponentsDemo() {
  return (
    <ToastProvider>
      <div className="min-h-screen flex flex-col">
        <Head>
          <title>Component Library Demo | DIY Solar Consultants</title>
          <meta
            name="description"
            content="Explore our modern, accessible component library"
          />
        </Head>

        <Header />

        <main className="flex-grow">
          <ComponentExamples />
        </main>

        <Footer />
      </div>
    </ToastProvider>
  );
}
