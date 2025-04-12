import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="dark:bg-black/90 border-t  bg-blue-950 text-white  dark:border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">TalentConnect</h3>
            <p>
              Connecting exceptional talent with casting professionals
              worldwide.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className=" hover:text-white transition">
                <Facebook size={20} />
              </Link>
              <Link href="#" className=" hover:text-white transition">
                <Twitter size={20} />
              </Link>
              <Link href="#" className=" hover:text-white transition">
                <Instagram size={20} />
              </Link>
              <Link href="#" className=" hover:text-white transition">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className=" hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className=" hover:text-white transition">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#products" className=" hover:text-white transition">
                  Products
                </Link>
              </li>
              <li>
                <Link className=" hover:text-white transition" href={"/post"}>
                  Post
                </Link>
              </li>
   
    
            </ul>
          </div>



          <div>
            <h4 className="text-lg font-semibold  mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 ">
                <Mail size={18} />
                <span className="overflow-hidden ">
                  afrobillbord@talentconnect.com
                </span>
              </li>
              <li className="flex items-center space-x-2 ">
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className=" mt-4">
                22
                <br />
                Ethiopia
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center ">
          <p>
            © {new Date().getFullYear()} TalentConnect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
