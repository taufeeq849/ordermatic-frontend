import Image from "next/image";

const TestimonialSection = () => {
  return (
    <section className="w-full py-10 max-w-7xl mx-auto px-4 md:px-8">
      <div className="bg-ordermatic-blue rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/4 mb-4 md:mb-0 flex justify-center">
          <div className="w-20 h-20 md:w-24 md:h-24 relative rounded-full overflow-hidden border-4 border-white">
            <Image
              src="https://ext.same-assets.com/1395551780/1264056216.jpeg"
              alt="Customer"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="md:w-3/4 text-white text-center md:text-left">
          <p className="text-xl md:text-2xl font-medium mb-4">
            "We cut missed orders by 90% in 2 days. It's like hiring a 24/7 superstar employee."
          </p>
          <p className="text-sm">
            Alex Owner of Pizza Truly
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
