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
    <footer className="dark:bg-black/90 border-t bg-slate-300 dark:border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-black dark:text-white">TalentConnect</h3>
            <p className="dark:text-gray-400 text-gray-800">
              Connecting exceptional talent with casting professionals
              worldwide.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="dark:text-gray-400 text-gray-800 hover:text-white transition"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="dark:text-gray-400 text-gray-800 hover:text-white transition"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#"
                className="dark:text-gray-400 text-gray-800 hover:text-white transition"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                className="dark:text-gray-400 text-gray-800 hover:text-white transition"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold dark:text-gray-400 text-gray-800 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="dark:text-gray-400 text-gray-800 hover:text-white transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/talent"
                  className="dark:text-gray-400 text-gray-800 hover:text-white transition"
                >
                  Browse Talent
                </Link>
              </li>
              <li>
                <Link
                  href="/cast"
                  className="dark:text-gray-400 text-gray-800 hover:text-white transition"
                >
                  Casting Calls
                </Link>
              </li>
              <li>
                <Link
                  className="dark:text-gray-400 text-gray-800 hover:text-white transition"
                  href={"/post"}
                >
                  Post
                </Link>

              </li>
              <li>
                <Link
                  className="dark:text-gray-400 text-gray-800 hover:text-white transition"
                  href={"/signin"}
                >
                  Sign In
                </Link>
                
              </li>
              <li>
                <Link
                  href="/about"
                  className="dark:text-gray-400 text-gray-800 hover:text-white transition"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold dark:text-gray-400 text-gray-800 mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/Blog"
                  className="dark:text-gray-400 text-gray-800 hover:text-white transition"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold dark:text-gray-400 text-gray-800 mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 dark:text-gray-400 text-gray-800">
                <Mail size={18} />
                <span className="overflow-hidden ">
                  contact@talentconnect.com
                </span>
              </li>
              <li className="flex items-center space-x-2 dark:text-gray-400 text-gray-800">
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="dark:text-gray-400 text-gray-800 mt-4">
                123 Industry Plaza
                <br />
                Ethiopia
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center dark:text-gray-500 text-gray-800">
          <p>
            © {new Date().getFullYear()} TalentConnect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
