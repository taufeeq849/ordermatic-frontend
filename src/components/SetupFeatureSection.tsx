import { Button } from "@/components/ui/button";

const SetupFeatureSection = () => {
  return (
    <section className="w-full py-16 max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Easy Setup for Your Business
          </h2>
          <p className="text-ordermatic-secondaryText mb-6">
            Getting started is a breeze. Just upload your menu items or service offerings, set your available hours, and let our AI do the rest. Our system instantly responds to customer queries, confirms orders, and even schedules appointments based on your specified settings—no coding or complex integrations required.
          </p>
          <Button
            className="bg-ordermatic-blue hover:bg-ordermatic-blue/90 text-white rounded-full px-6"
          >
            Learn more
          </Button>
        </div>

        {/* Setup UI Mockup */}
        <div className="bg-ordermatic-lightBlue p-6 rounded-xl">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h4 className="font-semibold text-center mb-6">Set Up Your Ordermatic Account</h4>

            <div className="space-y-4">
              {/* Timeline Stepper */}
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-ordermatic-blue text-white flex items-center justify-center text-xs">
                  1
                </div>
                <div className="flex-1 h-1 bg-ordermatic-blue mx-2"></div>
                <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs">
                  2
                </div>
                <div className="flex-1 h-1 bg-gray-200 mx-2"></div>
                <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs">
                  3
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-3 mt-6">
                <div>
                  <label className="block text-sm mb-1">Business Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-200 rounded-md"
                    placeholder="Your business name"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Business Category</label>
                  <select className="w-full p-2 border border-gray-200 rounded-md">
                    <option>Restaurant</option>
                    <option>Retail</option>
                    <option>Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-1">Business Hours</label>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="text-center p-2 border border-gray-200 rounded-md">
                      <div className="text-sm">Mon</div>
                      <div className="text-xs">09:00</div>
                      <div className="text-xs">21:00</div>
                    </div>
                    <div className="text-center p-2 border border-gray-200 rounded-md">
                      <div className="text-sm">Tue</div>
                      <div className="text-xs">09:00</div>
                      <div className="text-xs">21:00</div>
                    </div>
                    <div className="text-center p-2 border border-gray-200 rounded-md">
                      <div className="text-sm">Wed</div>
                      <div className="text-xs">09:00</div>
                      <div className="text-xs">21:00</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button className="w-full bg-ordermatic-blue text-white">
                    Continue to Next Step
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SetupFeatureSection;
