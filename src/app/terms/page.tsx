import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

        <div className="mb-6">
          <Link href="/" className="text-ordermatic-blue hover:underline">
            &larr; Back to Home
          </Link>
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
            <p className="text-ordermatic-secondaryText">
              Welcome to Ordermatic. These Terms & Conditions govern your use of our website and services.
              By using Ordermatic, you agree to these terms. Please read them carefully.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Use of Services</h2>
            <p className="text-ordermatic-secondaryText">
              Our services are designed to help businesses manage customer interactions via WhatsApp.
              You agree to use our services only for lawful purposes and in accordance with these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Account Registration</h2>
            <p className="text-ordermatic-secondaryText">
              To use our services, you may need to create an account. You are responsible for maintaining
              the confidentiality of your account information and for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Privacy</h2>
            <p className="text-ordermatic-secondaryText">
              Your privacy is important to us. Please review our Privacy Policy to understand how we collect,
              use and disclose information about you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Intellectual Property</h2>
            <p className="text-ordermatic-secondaryText">
              All content on Ordermatic, including but not limited to text, graphics, logos, and software,
              is the property of Ordermatic or its content suppliers and is protected by copyright laws.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
