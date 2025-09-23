import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Privacy Policy - Ordermatic AI",
  description: "Learn how Ordermatic AI collects, uses, and protects your personal information. Our privacy policy outlines our data practices for our AI-powered WhatsApp ordering solutions.",
  keywords: [
    'privacy policy',
    'data protection',
    'information security',
    'Ordermatic privacy',
    'WhatsApp automation privacy',
    'business data protection',
    'personal data',
    'data retention'
  ],
  openGraph: {
    title: "Privacy Policy - Ordermatic AI",
    description: "Learn how Ordermatic AI protects your data and privacy while providing AI-powered WhatsApp ordering solutions.",
    url: "https://www.ordermatic.ai/privacy-policy",
  },
  twitter: {
    title: "Privacy Policy - Ordermatic AI",
    description: "Learn how Ordermatic AI protects your data and privacy while providing AI-powered WhatsApp ordering solutions.",
  },
  alternates: {
    canonical: "https://www.ordermatic.ai/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <StructuredData type="privacy" />
      <Navbar />
      <div className="flex-1 max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center text-ordermatic-blue hover:underline">
              ← Back to Ordermatic AI
            </Link>
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-3">
            Privacy Policy for Ordermatic AI
          </h1>
          
          <div className="bg-gray-100 p-4 border-l-4 border-blue-500 mb-6">
            <strong>Effective Date:</strong> December 23, 2024
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Introduction</h2>
              <p className="text-gray-600 mb-4">
                Ordermatic AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information when you interact with our WhatsApp ordering system and related services provided to <strong>Mochachos Trade Route</strong>.
              </p>
              <p className="text-gray-600">
                By using our services, you agree to the collection and use of your information in accordance with this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Information We Collect</h2>
              <p className="text-gray-600 mb-4">We collect the following types of information:</p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">1. Personal Information:</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li>Name</li>
                    <li>Phone number</li>
                    <li>Email address (if provided)</li>
                    <li>Delivery or pickup details</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">2. Order Information:</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li>Menu items selected</li>
                    <li>Payment details (processed securely through third-party providers)</li>
                    <li>Order history</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">3. Technical Information:</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-600">
                    <li>Device information</li>
                    <li>IP address</li>
                    <li>Interaction logs for analytics and support</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                <li>Process and manage your orders</li>
                <li>Provide customer support via WhatsApp</li>
                <li>Improve our services and product offerings</li>
                <li>Send important updates about your orders</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Sharing Your Information</h2>
              <p className="text-gray-600 mb-4">We <strong>do not sell</strong> your information to third parties. We may share limited data with:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                <li><strong>Mochachos Trade Route</strong> to fulfill and manage your orders</li>
                <li><strong>Third-party payment processors</strong> for secure transactions</li>
                <li><strong>Law enforcement or regulators</strong>, if required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Data Retention</h2>
              <p className="text-gray-600 mb-4">We retain your order and account information only for as long as necessary to:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-4">
                <li>Fulfill orders</li>
                <li>Meet legal obligations</li>
                <li>Resolve disputes</li>
              </ul>
              <p className="text-gray-600">After this period, your data will be securely deleted.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your Privacy Rights</h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                <li>Access and review your personal data</li>
                <li>Request corrections to your data</li>
                <li>Request deletion of your personal data</li>
                <li>Withdraw consent to data processing</li>
              </ul>

              <div className="bg-green-50 border border-green-200 p-4 rounded-lg mt-6">
                <p className="font-semibold text-green-900 mb-2">To exercise these rights, please contact us at:</p>
                <p className="text-green-800"><strong>Email:</strong> <a href="mailto:support@ordermaticai.com" className="text-ordermatic-blue hover:underline">support@ordermaticai.com</a></p>
                <p className="text-green-800"><strong>Phone:</strong> +27 72 460 1033</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Changes to This Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy occasionally. Updates will be posted on our website with a revised effective date.
              </p>
            </section>
          </div>

          <hr className="my-8 border-gray-200" />
          
          <div className="text-center text-sm text-gray-500 space-x-4">
            <Link href="/terms" className="text-ordermatic-blue hover:underline">Terms of Service</Link>
            <span>|</span>
            <Link href="/data-deletion" className="text-ordermatic-blue hover:underline">Data Deletion Instructions</Link>
            <span>|</span>
            <Link href="/" className="text-ordermatic-blue hover:underline">Ordermatic AI Home</Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
