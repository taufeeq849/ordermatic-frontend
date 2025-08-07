import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="w-full py-16 bg-ordermatic-blue">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          Start Capturing More Orders with AI-Powered Efficiency
        </h2>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
          Elevate your customer interactions and streamline operations with Ordermatic.
        </p>

        <Button
          className="bg-white text-ordermatic-blue hover:bg-white/90 rounded-full px-8 py-6 text-base mb-12"
        >
          Get started
        </Button>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div>
            <div className="text-3xl md:text-4xl font-bold mb-2">100k+</div>
            <p className="text-white/80">Orders placed</p>
          </div>

          <div>
            <div className="text-3xl md:text-4xl font-bold mb-2">100+</div>
            <p className="text-white/80">Active Stores</p>
          </div>

          <div>
            <div className="text-3xl md:text-4xl font-bold mb-2">97%</div>
            <p className="text-white/80">Satisfaction rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
