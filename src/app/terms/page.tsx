import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Terms of Service - Ordermatic AI",
  description: "Read Ordermatic AI's terms of service to understand the rules and guidelines for using our AI-powered WhatsApp ordering platform.",
  keywords: [
    'terms of service',
    'user agreement',
    'terms and conditions',
    'Ordermatic terms',
    'WhatsApp automation terms',
    'business automation agreement',
    'service agreement',
    'liability'
  ],
  openGraph: {
    title: "Terms of Service - Ordermatic AI",
    description: "Read Ordermatic AI's terms of service for our AI-powered WhatsApp ordering platform.",
    url: "https://www.ordermatic.ai/terms",
  },
  twitter: {
    title: "Terms of Service - Ordermatic AI", 
    description: "Read Ordermatic AI's terms of service for our AI-powered WhatsApp ordering platform.",
  },
  alternates: {
    canonical: "https://www.ordermatic.ai/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <StructuredData type="terms" />
      <Navbar />
      <div className="flex-1 max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center text-ordermatic-blue hover:underline">
              ← Back to Ordermatic AI
            </Link>
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-red-500 pb-3">
            Terms of Service for Ordermatic AI
          </h1>
          
          <div className="bg-gray-100 p-4 border-l-4 border-red-500 mb-6">
            <strong>Effective Date:</strong> December 23, 2024
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="flex items-center text-2xl font-semibold text-gray-700 mb-4">
                <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">1</span>
                Acceptance of Terms
              </h2>
              <p className="text-gray-600">
                By using Ordermatic AI's WhatsApp ordering service, you agree to these Terms of Service. If you do not agree, please do not use the service.
              </p>
            </section>

            <section>
              <h2 className="flex items-center text-2xl font-semibold text-gray-700 mb-4">
                <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">2</span>
                Description of Service
              </h2>
              <p className="text-gray-600 mb-4">Ordermatic AI provides a platform that enables customers to:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-4">
                <li>Place food orders via WhatsApp</li>
                <li>Communicate directly with <strong>Mochachos Trade Route</strong></li>
                <li>Receive order updates and confirmations</li>
              </ul>
              
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <strong className="text-yellow-800">Important:</strong> <span className="text-yellow-700">We act as a technology provider, not the restaurant itself.</span>
              </div>
            </section>

            <section>
              <h2 className="flex items-center text-2xl font-semibold text-gray-700 mb-4">
                <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">3</span>
                User Responsibilities
              </h2>
              <p className="text-gray-600 mb-4">By using the service, you agree to:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                <li>Provide accurate information when placing orders</li>
                <li>Only use the service for lawful purposes</li>
                <li>Pay for any orders placed using your account or phone number</li>
                <li>Treat our support staff and restaurant partners with respect</li>
              </ul>
            </section>

            <section>
              <h2 className="flex items-center text-2xl font-semibold text-gray-700 mb-4">
                <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">4</span>
                Payment and Transactions
              </h2>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                <li>Payments are processed through secure third-party payment processors</li>
                <li>We do not store your full payment card information</li>
                <li>Any disputes related to payments should be directed to <strong>Mochachos Trade Route</strong></li>
                <li>All prices are subject to change without notice</li>
              </ul>
            </section>

            <section>
              <h2 className="flex items-center text-2xl font-semibold text-gray-700 mb-4">
                <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">5</span>
                Service Availability
              </h2>
              <p className="text-gray-600 mb-4">While we aim for high reliability, we do not guarantee uninterrupted service.</p>
              <p className="text-gray-600 mb-4"><strong>We are not liable for:</strong></p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                <li>Downtime caused by WhatsApp outages</li>
                <li>Delays due to network or technical issues</li>
                <li>Restaurant delays or stock shortages</li>
                <li>Force majeure events beyond our control</li>
              </ul>
            </section>

            <section>
              <h2 className="flex items-center text-2xl font-semibold text-gray-700 mb-4">
                <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">6</span>
                Data Privacy
              </h2>
              <p className="text-gray-600">
                Use of the service is governed by our <Link href="/privacy-policy" className="text-ordermatic-blue hover:underline">Privacy Policy</Link>. Please review it to understand how we handle your personal information.
              </p>
            </section>

            <section>
              <h2 className="flex items-center text-2xl font-semibold text-gray-700 mb-4">
                <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">7</span>
                Limitation of Liability
              </h2>
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <p className="font-semibold text-yellow-800 mb-3">Ordermatic AI is NOT liable for:</p>
                <ul className="list-disc pl-6 space-y-1 text-yellow-700">
                  <li>Food quality, safety, or preparation</li>
                  <li>Delivery times or fulfillment errors</li>
                  <li>Any indirect, incidental, or consequential damages</li>
                  <li>Loss of profits, data, or business interruption</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="flex items-center text-2xl font-semibold text-gray-700 mb-4">
                <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">8</span>
                Intellectual Property
              </h2>
              <p className="text-gray-600">
                All content, trademarks, and intellectual property rights in our service belong to Ordermatic AI or our licensors. You may not copy, modify, or distribute our content without permission.
              </p>
            </section>

            <section>
              <h2 className="flex items-center text-2xl font-semibold text-gray-700 mb-4">
                <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">9</span>
                Termination
              </h2>
              <p className="text-gray-600">
                We reserve the right to terminate or suspend your access to our service at any time, with or without cause, including for violation of these terms.
              </p>
            </section>

            <section>
              <h2 className="flex items-center text-2xl font-semibold text-gray-700 mb-4">
                <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">10</span>
                Changes to Terms
              </h2>
              <p className="text-gray-600">
                We may update these Terms periodically. Continued use of the service indicates acceptance of any changes. We will notify users of significant changes via WhatsApp or email.
              </p>
            </section>

            <section>
              <h2 className="flex items-center text-2xl font-semibold text-gray-700 mb-4">
                <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">11</span>
                Governing Law
              </h2>
              <p className="text-gray-600">
                These Terms are governed by the laws of South Africa. Any disputes will be resolved in the courts of South Africa.
              </p>
            </section>

            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-red-900 mb-3">Contact Information</h3>
              <p className="text-red-800 mb-2">If you have questions about these Terms of Service, please contact us:</p>
              <p className="text-red-800"><strong>Email:</strong> <a href="mailto:support@ordermaticai.com" className="text-ordermatic-blue hover:underline">support@ordermaticai.com</a></p>
              <p className="text-red-800"><strong>Phone:</strong> +27 72 460 1033</p>
            </div>
          </div>

          <hr className="my-8 border-gray-200" />
          
          <div className="text-center text-sm text-gray-500 space-x-4">
            <Link href="/privacy-policy" className="text-ordermatic-blue hover:underline">Privacy Policy</Link>
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
