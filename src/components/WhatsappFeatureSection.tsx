import { Button } from "@/components/ui/button";

const WhatsappFeatureSection = () => {
  return (
    <section className="w-full py-16 max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Deliver Exceptional WhatsApp Interactions
          </h2>
          <p className="text-ordermatic-secondaryText mb-6">
            Engage your customers effortlessly with AI-powered WhatsApp replies. Every inquiry is met with tailored responses, real-time updates, and a friendly tone that reflects your brand. No more missed messages or delayed responses—Ordermatic ensures your customers always feel heard and supported.
          </p>
          <Button
            className="bg-ordermatic-blue hover:bg-ordermatic-blue/90 text-white rounded-full px-6"
          >
            Learn more
          </Button>
        </div>

        {/* WhatsApp Chat Mockup */}
        <div className="bg-ordermatic-lightBlue p-6 rounded-xl">
          <div className="flex flex-col space-y-4">
            <div className="bg-gray-100 rounded-lg p-4 max-w-[80%] self-start shadow-sm">
              <p className="text-sm">Hey I know it's late but I have a medical emergency. Can you help me?</p>
            </div>

            <div className="bg-ordermatic-blue rounded-lg p-4 max-w-[80%] self-end text-white shadow-sm">
              <p className="text-sm">Yes Ordermatic is always availale. We can schedule you in first thing tomorrow morning?</p>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 max-w-[80%] self-start shadow-sm">
              <p className="text-sm">Perfect. The appointment is for John.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsappFeatureSection;
