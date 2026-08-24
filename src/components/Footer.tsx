import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="gap-3">
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Avzentric
              </span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-sm">
              Transforming businesses through innovative digital
              solutions, modern web experiences, and scalable
              technology.
            </p>
          </div>

          <div id="contact">
            <h4 className="mb-4 text-lg md:text-xl font-semibold">
              Contact
            </h4>
            <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 shrink-0" />
                <span>+91 6909145362</span>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 shrink-0" />
                <span>avzentric@gmail.com</span>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 shrink-0" />
                <span>
                  Ward 4, near Weekly Market, Chumukedima,
                  Nagaland - 797103
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg md:text-xl font-semibold">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="https://x.com/Avzentric"
                className="w-11 h-11 md:w-12 md:h-12 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/avzentric_"
                className="w-11 h-11 md:w-12 md:h-12 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p className="text-sm sm:text-base">
            &copy; 2026 Avzentric. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}