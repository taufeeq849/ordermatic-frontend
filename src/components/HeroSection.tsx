import Image from "next/image";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 flex flex-col md:flex-row items-center">
      {/* Left side - Text Content */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
          Stop missing orders - automate customer interactions 24/7 on whatsapp
        </h1>
        <p className="text-ordermatic-secondaryText text-lg mb-6">
          Ordermatic&apos;s AI manages bookings, support, and orders instantly on WhatsApp—so you never lose a sale or waste time on calls again.
        </p>

        <div className="space-y-3">
          <div className="flex items-center">
            <div className="w-6 h-6 mr-2 flex items-center justify-center">
              <div className="w-4 h-4 bg-ordermatic-blue rounded-full"></div>
            </div>
            <p>24/7 Automated Responses on Whatsapp</p>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 mr-2 flex items-center justify-center">
              <div className="w-4 h-4 bg-ordermatic-blue rounded-full"></div>
            </div>
            <p>Consistent quality customer interactions</p>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 mr-2 flex items-center justify-center">
              <div className="w-4 h-4 bg-ordermatic-blue rounded-full"></div>
            </div>
            <p>View all interactions in a single dashboard</p>
          </div>
        </div>

        <div className="mt-8">
          <Button
            className="bg-ordermatic-blue hover:bg-ordermatic-blue/90 text-white rounded-full px-8 py-6 text-base"
          >
            Get started
          </Button>
        </div>
      </div>

      {/* Right side - Phone Mockup */}
      <div className="md:w-1/2 flex justify-center relative">
        <div className="relative w-[280px] h-[570px]">
          <div className="absolute inset-0 border-[10px] border-gray-800 rounded-[40px] shadow-xl bg-white overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-12 bg-gray-800"></div>
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-white border-t border-gray-200"></div>
            <div className="absolute top-12 left-0 right-0 bottom-12 overflow-y-auto p-3">
              <div className="flex flex-col gap-3">
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%] self-start">
                  <p className="text-sm">Hey, I&apos;ve been calling, but no one&apos;s picking up. Can I place an order here?</p>
                </div>
                <div className="bg-ordermatic-blue rounded-lg p-3 max-w-[80%] self-end text-white">
                  <p className="text-sm">Yes! We&apos;re always available here on WhatsApp. What would you like to order?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
