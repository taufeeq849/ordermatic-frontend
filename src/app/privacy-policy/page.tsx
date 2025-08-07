import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <div className="mb-6">
          <Link href="/" className="text-ordermatic-blue hover:underline">
            &larr; Back to Home
          </Link>
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
            <p className="text-ordermatic-secondaryText">
              We collect information you provide directly to us, such as when you create an account,
              submit a form, or communicate with us. This may include your name, email, business information,
              and other details necessary for providing our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
            <p className="text-ordermatic-secondaryText">
              We use the information we collect to provide, maintain, and improve our services,
              to process transactions, send you related information, and communicate with you.
              We may also use your information to personalize your experience and develop new services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Information Sharing</h2>
            <p className="text-ordermatic-secondaryText">
              We do not share your personal information with third parties except as described in this
              Privacy Policy, including to comply with laws, to protect our rights, to facilitate our
              business operations, and with your consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Data Security</h2>
            <p className="text-ordermatic-secondaryText">
              We take reasonable measures to help protect your personal information from loss, theft,
              misuse, unauthorized access, disclosure, alteration, and destruction. However, no data
              transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Your Choices</h2>
            <p className="text-ordermatic-secondaryText">
              You may update, correct, or delete your information at any time by logging into your account
              or by contacting us. You may also opt out of receiving promotional communications from us by
              following the instructions in those communications.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
