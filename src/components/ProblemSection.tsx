import { Phone, Users, TrendingUp } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="w-full bg-ordermatic-lightBlue py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Tired of missing orders? Overwhelmed by phone calls?
          </h2>
          <p className="text-ordermatic-secondaryText max-w-2xl mx-auto">
            Streamline every interaction and boost sales with AI-powered WhatsApp automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-ordermatic-blue" />
            </div>
            <h3 className="font-bold text-lg mb-2">Phone lines always ringing?</h3>
            <p className="text-ordermatic-secondaryText">
              Stop juggling calls and reduce wait times with AI-driven responses on WhatsApp
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-ordermatic-blue" />
            </div>
            <h3 className="font-bold text-lg mb-2">Losing Orders and Customer Patience?</h3>
            <p className="text-ordermatic-secondaryText">
              Centralize and automate order-taking to avoid costly errors
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-ordermatic-blue" />
            </div>
            <h3 className="font-bold text-lg mb-2">Struggling to Scale Your Business?</h3>
            <p className="text-ordermatic-secondaryText">
              Let AI handle routine queries while you focus on growing revenue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
