import { useRouter } from 'next/router';
import Head from 'next/head';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Check } from 'lucide-react';

export default function ThankYouPage() {
  const router = useRouter();
  const { source = 'general', email = '' } = router.query;

  return (
    <>
      <Head>
        <title>Thank You | DIY Solar Consultants</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <Check className="w-12 h-12 text-green-600" />
            </div>
            
            <h1 className="text-5xl font-bold mb-6">Thank You!</h1>
            
            {email && (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 mb-8 border-2 border-green-200">
                <p className="text-2xl text-gray-700 mb-4">
                  Check your email at:
                </p>
                <p className="text-3xl font-bold text-green-600">{email}</p>
              </div>
            )}

            <p className="text-xl text-gray-600">
              We've received your information and will be in touch soon!
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
