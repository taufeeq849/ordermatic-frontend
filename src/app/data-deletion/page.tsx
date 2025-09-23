import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Data Deletion Instructions - Ordermatic AI",
  description: "Learn how to request complete removal of your personal data from Ordermatic AI systems. Simple step-by-step guide for data deletion requests.",
  keywords: [
    'data deletion',
    'privacy rights',
    'data removal',
    'GDPR compliance',
    'personal data',
    'Ordermatic data deletion',
    'WhatsApp data removal'
  ],
  openGraph: {
    title: "Data Deletion Instructions - Ordermatic AI",
    description: "Simple guide to request complete removal of your personal data from our systems.",
    url: "https://www.ordermatic.ai/data-deletion",
  },
  twitter: {
    title: "Data Deletion Instructions - Ordermatic AI",
    description: "Simple guide to request complete removal of your personal data from our systems.",
  },
  alternates: {
    canonical: "https://www.ordermatic.ai/data-deletion",
  },
};

export default function DataDeletionPage() {
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

          <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-ordermatic-blue pb-3">
            Data Deletion Instructions
          </h1>
          
          <div className="bg-gray-100 p-4 border-l-4 border-ordermatic-blue mb-6">
            <strong>Effective Date:</strong> December 23, 2024
          </div>

          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6">
            <p className="font-semibold text-blue-900 mb-2">🛡️ Your Privacy Matters</p>
            <p className="text-blue-800">
              We respect your privacy and provide a straightforward process for deleting your personal data. 
              This page explains how to request complete removal of your information from our systems.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">How to Request Data Deletion</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500 mb-6">
            <p className="font-semibold mb-4">Follow these simple steps to delete your data:</p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="flex items-center text-lg font-semibold mb-2">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">1</span>
                  Send a Deletion Request Email
                </h3>
                <p className="mb-2">Send an email to <strong><a href="mailto:support@ordermaticai.com" className="text-ordermatic-blue hover:underline">support@ordermaticai.com</a></strong> with the subject line:</p>
                <p className="bg-gray-100 p-3 rounded font-mono"><strong>"Data Deletion Request"</strong></p>
              </div>

              <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="flex items-center text-lg font-semibold mb-2">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">2</span>
                  Include Required Information
                </h3>
                <p className="mb-2">Please include the following information in your request:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Your full name</li>
                  <li>Phone number used for WhatsApp ordering</li>
                  <li>Email address (if applicable)</li>
                  <li>Any specific data concerns (optional)</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="flex items-center text-lg font-semibold mb-2">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">3</span>
                  Verification and Processing
                </h3>
                <p className="mb-2">Once we receive your request, we will:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Verify your identity for security purposes</li>
                  <li>Delete your personal data from our systems</li>
                  <li>Confirm deletion via email or WhatsApp within <strong>7 business days</strong></li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">Email Template</h2>
          <p className="mb-4">You can copy and use this template for your deletion request:</p>

          <div className="bg-gray-100 border border-gray-300 p-5 rounded-lg font-mono text-sm whitespace-pre-line mb-6">
{`Subject: Data Deletion Request

Dear Ordermatic AI Support Team,

I would like to request the complete deletion of my personal data from your systems.

My Details:
- Full Name: [Your Full Name]
- Phone Number: [Your WhatsApp Number]
- Email Address: [Your Email Address]

Please confirm once my data has been deleted.

Thank you,
[Your Name]`}
          </div>

          <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">What Data Will Be Deleted</h2>
          <p className="mb-4">Upon your request, we will permanently delete:</p>
          <ul className="list-none space-y-2 mb-6">
            <li className="flex items-center"><span className="text-green-500 mr-2">✅</span> Your account and personal information</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✅</span> Past order history and preferences</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✅</span> Communication logs (except where legally required to retain)</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✅</span> Payment information (processed securely through third parties)</li>
            <li className="flex items-center"><span className="text-green-500 mr-2">✅</span> Technical data associated with your account</li>
          </ul>

          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-6">
            <p className="text-yellow-800">
              <strong>⚠️ Important Note:</strong> Once your data is deleted, this action cannot be undone. 
              You will lose access to your order history and will need to create a new account if you wish to use our services again.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">Data Retention Exceptions</h2>
          <p className="mb-4">In some cases, we may be legally required to retain certain information for:</p>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Tax and accounting purposes (as required by South African law)</li>
            <li>Fraud prevention and security investigations</li>
            <li>Legal compliance and regulatory requirements</li>
          </ul>
          <p className="mb-6">We will inform you if any such exceptions apply to your data.</p>

          <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">Timeline for Deletion</h2>
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6">
            <p className="font-semibold text-blue-900 mb-3">📅 Processing Timeline:</p>
            <ul className="list-disc pl-5 space-y-1 text-blue-800">
              <li><strong>1-2 business days:</strong> Identity verification</li>
              <li><strong>3-5 business days:</strong> Data deletion process</li>
              <li><strong>7 business days:</strong> Confirmation sent to you</li>
            </ul>
          </div>

          <div className="bg-orange-50 border-2 border-ordermatic-blue p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">📞 Contact for Data Deletion</h3>
            <div className="space-y-2">
              <p><strong>Email:</strong> <a href="mailto:support@ordermaticai.com" className="text-ordermatic-blue hover:underline">support@ordermaticai.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+27724601033" className="text-ordermatic-blue hover:underline">+27 72 460 1033</a></p>
              <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM (SAST)</p>
              
              <p className="mt-4 text-sm text-gray-600">
                <strong>Alternative:</strong> You can also send a WhatsApp message to our support number requesting data deletion.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">Need Help?</h2>
          <p className="mb-8">
            If you have questions about the data deletion process or need assistance, please don't hesitate to contact our support team. 
            We're here to help ensure your privacy rights are respected.
          </p>

          <hr className="my-8 border-gray-200" />
          
          <div className="text-center text-sm text-gray-500 space-x-4">
            <Link href="/privacy-policy" className="text-ordermatic-blue hover:underline">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms" className="text-ordermatic-blue hover:underline">Terms of Service</Link>
            <span>|</span>
            <Link href="/" className="text-ordermatic-blue hover:underline">Ordermatic AI Home</Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}