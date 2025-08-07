import { Button } from "@/components/ui/button";

const BeyondOrdersSection = () => {
  return (
    <section className="w-full py-16 max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Beyond Orders: A Complete Customer Experience
          </h2>
          <p className="text-ordermatic-secondaryText mb-6">
            With automated follow-ups, you can send timely reminders or thank-you messages to keep customers engaged, while analytics and insights let you track key metrics—like top-selling items or peak hours—and make data-driven decisions to boost profits. Already have a POS or CRM? Our multi-channel integration effortlessly unifies your data, ensuring a streamlined, efficient workflow.
          </p>
          <Button
            className="bg-ordermatic-blue hover:bg-ordermatic-blue/90 text-white rounded-full px-6"
          >
            Learn more
          </Button>
        </div>

        {/* WhatsApp Promo Message Mockup */}
        <div className="bg-ordermatic-lightBlue p-6 rounded-xl">
          <div className="flex flex-col space-y-4">
            <div className="bg-ordermatic-blue rounded-lg p-4 max-w-[80%] self-end text-white shadow-sm">
              <p className="text-sm">Hey, we're currently running a special on a pizza you've ordered before. Would you like to order one tonight?</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondOrdersSection;
