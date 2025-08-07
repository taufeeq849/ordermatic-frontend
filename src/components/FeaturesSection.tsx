import { MessageSquare, Clock, LayoutDashboard } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="w-full py-16 bg-ordermatic-lightBlue">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Grow Your Business with AI-Powered WhatsApp Automation
          </h2>
          <p className="text-ordermatic-secondaryText max-w-2xl mx-auto">
            Stop juggling phone calls and missed orders. Ordermatic streamlines every customer interaction so you can focus on what matters
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-5">
              <MessageSquare className="w-7 h-7 text-ordermatic-blue" />
            </div>
            <h3 className="font-semibold text-lg mb-3">Easy to use</h3>
            <p className="text-ordermatic-secondaryText">
              Set up and integrate with WhatsApp quickly. Our streamlined process gets you automating orders in no time.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-5">
              <Clock className="w-7 h-7 text-ordermatic-blue" />
            </div>
            <h3 className="font-semibold text-lg mb-3">Expertly Trained AI</h3>
            <p className="text-ordermatic-secondaryText">
              Our system has been trained on thousands of real customer interactions, ensuring accurate, helpful responses every time.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-5">
              <LayoutDashboard className="w-7 h-7 text-ordermatic-blue" />
            </div>
            <h3 className="font-semibold text-lg mb-3">Unified Dashboard</h3>
            <p className="text-ordermatic-secondaryText">
              All conversations, orders, and appointments flow into one intuitive dashboard—making it easy to stay organized, track progress, and never miss a customer need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
