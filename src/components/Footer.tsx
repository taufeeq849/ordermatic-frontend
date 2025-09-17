import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-ordermatic-lightBlue py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center mb-6">
          <p className="text-ordermatic-secondaryText mb-4">
            Effortlessss customer connections start here
          </p>
        </div>

        <div className="flex items-center justify-center space-x-3 mb-6">
          <div className="relative h-6 w-6">
            <Image
              src="https://ext.same-assets.com/21843630/1278528489.png"
              alt="Ordermatic Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-bold text-gray-800">ORDERMATIC</span>
        </div>

        <div className="flex justify-center space-x-4 mb-6">
          <Link href="https://www.instagram.com/ordermaticai/" className="p-2 bg-white rounded-full" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <Instagram className="h-4 w-4 text-ordermatic-blue" />
          </Link>
        </div>

        <div className="text-center text-sm text-ordermatic-secondaryText">
          <p className="mb-4">
            Copyright © Ordermatic LLC. All rights reserved
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/terms" className="hover:text-ordermatic-blue">
              Terms & Conditions
            </Link>
            <Link href="/privacy-policy" className="hover:text-ordermatic-blue">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
