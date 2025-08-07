import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="py-4 px-4 md:px-8 w-full max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <div className="relative h-8 w-8 mr-2">
            <Image
              src="https://ext.same-assets.com/21843630/1278528489.png"
              alt="Ordermatic Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="font-bold text-gray-800">ORDERMATIC</span>
        </Link>
      </div>
      <div>
        <Button
          className="bg-ordermatic-blue hover:bg-ordermatic-blue/90 text-white rounded-full px-6"
        >
          Get started
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
