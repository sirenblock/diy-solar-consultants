import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | DIY Solar Consultants</title>
        <meta
          name="description"
          content="Privacy Policy for DIY Solar Consultants. Learn how we protect and handle your personal information."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://diysolar.com/privacy" />
      </Head>

      <Header />

      <main className="pt-20 min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600 text-lg">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <p className="text-blue-900 font-semibold mb-2">Our Commitment to Your Privacy</p>
              <p className="text-blue-800">
                At DIY Solar Consultants, we are committed to protecting your privacy and handling
                your personal information with care. We will never sell your data to third parties.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Information You Provide</h3>
              <p className="text-gray-700 mb-4">
                We collect information you voluntarily provide when you:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Request a solar design consultation</li>
                <li>Fill out contact forms</li>
                <li>Subscribe to our newsletter</li>
                <li>Create an account on our website</li>
                <li>Communicate with us via email or phone</li>
              </ul>
              <p className="text-gray-700 mb-4">
                This information may include:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Property details (roof type, energy usage, location)</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Project preferences and requirements</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
              <p className="text-gray-700 mb-4">
                When you visit our website, we automatically collect certain information about your device and browsing behavior:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on each page</li>
                <li>Referring website</li>
                <li>Device information (operating system, screen size)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Provide solar design consultations and services</li>
                <li>Process your requests and transactions</li>
                <li>Send you project updates and communications</li>
                <li>Improve our website and services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send marketing communications (only with your consent)</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud and enhance security</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing and Disclosure</h2>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-6">
                <p className="text-green-900 font-semibold">
                  We DO NOT sell your personal information to third parties.
                </p>
              </div>

              <p className="text-gray-700 mb-4">
                We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>
                  <strong>Service Providers:</strong> With trusted third-party service providers who assist
                  us in operating our website, conducting our business, or servicing you (e.g., payment processors,
                  email service providers, hosting providers). These providers are contractually obligated to
                  protect your information.
                </li>
                <li>
                  <strong>Licensed Engineers:</strong> With our licensed professional engineers who need access
                  to your project information to design your solar system.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law, court order, or government
                  regulation.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale
                  of all or a portion of our business (you will be notified beforehand).
                </li>
                <li>
                  <strong>With Your Consent:</strong> When you explicitly authorize us to share your information.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
              </ul>
              <p className="text-gray-700">
                You can control cookies through your browser settings. Note that disabling cookies may
                affect website functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement industry-standard security measures to protect your personal information:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure servers and databases</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication</li>
                <li>Employee training on data protection</li>
              </ul>
              <p className="text-gray-700">
                While we strive to protect your information, no method of transmission over the internet
                is 100% secure. We cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights and Choices</h2>
              <p className="text-gray-700 mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Access:</strong> Request a copy of your personal information</li>
                <li><strong>Correction:</strong> Request corrections to inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong>Data Portability:</strong> Request your data in a portable format</li>
                <li><strong>Object:</strong> Object to certain processing of your information</li>
              </ul>
              <p className="text-gray-700">
                To exercise these rights, please contact us at{' '}
                <a href="mailto:privacy@diysolar.com" className="text-solar-600 underline">
                  privacy@diysolar.com
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Children's Privacy</h2>
              <p className="text-gray-700">
                Our services are not directed to individuals under the age of 18. We do not knowingly
                collect personal information from children. If we become aware that we have collected
                information from a child, we will take steps to delete it promptly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Third-Party Links</h2>
              <p className="text-gray-700">
                Our website may contain links to third-party websites. We are not responsible for the
                privacy practices of these external sites. We encourage you to review their privacy
                policies before providing any personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. California Privacy Rights</h2>
              <p className="text-gray-700 mb-4">
                If you are a California resident, you have additional rights under the California
                Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Right to know what personal information we collect and how it&apos;s used</li>
                <li>Right to request deletion of your personal information</li>
                <li>Right to opt-out of the sale of personal information (we do not sell your data)</li>
                <li>Right to non-discrimination for exercising your privacy rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy periodically to reflect changes in our practices or
                legal requirements. We will notify you of significant changes by posting the new policy
                on this page and updating the &quot;Last Updated&quot; date. Your continued use of our
                services after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions or concerns about this Privacy Policy or our data practices,
                please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-900 font-semibold mb-2">DIY Solar Consultants</p>
                <p className="text-gray-700">Email: <a href="mailto:privacy@diysolar.com" className="text-solar-600 underline">privacy@diysolar.com</a></p>
                <p className="text-gray-700">Phone: <a href="tel:+18885551234" className="text-solar-600 underline">(888) 555-1234</a></p>
                <p className="text-gray-700 mt-4">
                  <Link href="/contact" className="text-solar-600 underline font-semibold">
                    Contact Form
                  </Link>
                </p>
              </div>
            </section>
          </div>

          {/* Back Link */}
          <div className="mt-8 text-center">
            <Link href="/" className="text-solar-600 hover:text-solar-700 font-semibold text-lg">
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
