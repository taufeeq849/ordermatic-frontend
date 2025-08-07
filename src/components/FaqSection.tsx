import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section className="w-full py-16 max-w-3xl mx-auto px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">FAQ</h2>
      <p className="text-center mb-8 text-ordermatic-secondaryText">Got questions? We got you.</p>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-b border-gray-200">
          <AccordionTrigger className="py-5 text-left font-medium">
            What's the setup process like?
          </AccordionTrigger>
          <AccordionContent className="text-ordermatic-secondaryText pb-5">
            Setup is straightforward: simply upload your product menu or service listings, set your business hours, and customize basic responses. We provide an intuitive dashboard where you can quickly manage all your content and settings—no coding required.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border-b border-gray-200">
          <AccordionTrigger className="py-5 text-left font-medium">
            How does the AI handle customer inquiries and orders?
          </AccordionTrigger>
          <AccordionContent className="text-ordermatic-secondaryText pb-5">
            Our system uses advanced natural language processing (NLP) to understand customer messages and provide instant, context-aware responses. It can confirm orders, book appointments, and answer FAQs without human intervention.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border-b border-gray-200">
          <AccordionTrigger className="py-5 text-left font-medium">
            Can it integrate with my existing POS or CRM system?
          </AccordionTrigger>
          <AccordionContent className="text-ordermatic-secondaryText pb-5">
            Yes! Ordermatic supports seamless integrations with popular POS and CRM platforms. This ensures order data, customer details, and inventory information remain automatically synchronized across all tools you already use.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border-b border-gray-200">
          <AccordionTrigger className="py-5 text-left font-medium">
            How do I monitor and manage orders?
          </AccordionTrigger>
          <AccordionContent className="text-ordermatic-secondaryText pb-5">
            All customer interactions and orders are aggregated in a single, easy-to-use dashboard. From there, you can track statuses, modify details, and respond to any inquiries that need a human touch—giving you full control at any point in the process.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="border-b border-gray-200">
          <AccordionTrigger className="py-5 text-left font-medium">
            Can the AI handle special requests or customized orders?
          </AccordionTrigger>
          <AccordionContent className="text-ordermatic-secondaryText pb-5">
            Absolutely. Our AI can handle variations like extra cheese, no onions, or specific dietary requirements, thanks to its built-in language understanding. If a request is exceptionally unique, the system can flag it for a human review to ensure accuracy.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6" className="border-b border-gray-200">
          <AccordionTrigger className="py-5 text-left font-medium">
            What if a customer needs to speak directly with a real person?
          </AccordionTrigger>
          <AccordionContent className="text-ordermatic-secondaryText pb-5">
            We understand some situations require a personal touch. Our platform allows you to seamlessly step into any conversation at any time. You'll receive a notification in the dashboard, and you can take over whenever human expertise is needed.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FAQSection;
