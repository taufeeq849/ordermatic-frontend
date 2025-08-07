import { Button } from "@/components/ui/button";
import Image from "next/image";

const DashboardFeatureSection = () => {
  return (
    <section className="w-full py-16 max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Dashboard UI Mockup */}
        <div className="bg-white p-6 rounded-xl shadow-sm order-2 md:order-1">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-4">
              <h4 className="font-semibold">Recent Orders</h4>
              <button className="bg-ordermatic-blue text-white text-xs px-3 py-1 rounded-md">
                View all
              </button>
            </div>

            <div className="space-y-3">
              {/* Order Item */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Large Pepperoni Pizza</span>
                </div>
                <span className="text-sm text-gray-500">12:30 PM</span>
              </div>

              {/* Order Item */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>1x Margherita Pizza</span>
                </div>
                <span className="text-sm text-gray-500">12:15 PM</span>
              </div>

              {/* Order Item */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>2x Garlic Bread</span>
                </div>
                <span className="text-sm text-gray-500">11:45 AM</span>
              </div>

              {/* Order Item */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>1x Bottle Soda</span>
                </div>
                <span className="text-sm text-gray-500">11:30 AM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="order-1 md:order-2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Seamless Order Flow into Your Dashboard
          </h2>
          <p className="text-ordermatic-secondaryText mb-6">
            Watch each WhatsApp conversation automatically sync with our intuitive dashboard. Track orders, manage queries, and update statuses in real time—all in one place. No toggling between apps or drowning in paperwork. With Ordermatic, you can monitor every interaction at a glance.
          </p>
          <Button
            className="bg-ordermatic-blue hover:bg-ordermatic-blue/90 text-white rounded-full px-6"
          >
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DashboardFeatureSection;
