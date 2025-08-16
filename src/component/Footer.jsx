import { MailIcon, MapPin, PhoneIcon } from 'lucide-react';
import React from 'react';
import { LiaFacebook, LiaLinkedin, LiaTwitter, LiaInstagram } from 'react-icons/lia';

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-white dark:bg-secondary text-primary dark:text-white px-3 py-3 sm:px-2 md:px-12 xl:px-40 lg:px-40  border-t border-gray-200 dark:border-gray-700">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <img src="./dc.png" alt="Digital Career Agency Logo" className="w-12 h-12 object-contain" />
              <span className="font-bold text-xl">Digital Career</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Expertly trained, battle-tested, elite software developers and tech professionals on demand. Your gateway to exceptional talent.
            </p>
            <div className="space-y-2">
              <a href="tel:+923499999999" className="flex items-center gap-2 text-sm hover:text-third transition-colors">
                <PhoneIcon size={16} className="text-third" /> +92 349-xxxxxxx
              </a>
              <a href="mailto:hello@digitalcareer.co" className="flex items-center gap-2 text-sm hover:text-third transition-colors">
                <MailIcon size={16} className="text-third" /> hello@digitalcareer.co
              </a>
              <div className="flex items-center gap-2 text-sm">
                <MapPin size={16} className="text-third" /> Shikarpur, Pakistan
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg mb-2">Company</h3>
            <nav className="flex flex-col gap-2">
              <a href="/about" className="text-sm hover:text-third transition-colors duration-200">About Us</a>
              <a href="/success-stories" className="text-sm hover:text-third transition-colors duration-200">Success Stories</a>
              <a href="/careers" className="text-sm hover:text-third transition-colors duration-200">Careers</a>
              <a href="/blog" className="text-sm hover:text-third transition-colors duration-200">Blog</a>
              <a href="/contact" className="text-sm hover:text-third transition-colors duration-200">Contact Us</a>
            </nav>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg mb-2">Services</h3>
            <nav className="flex flex-col gap-2">
              <a href="/hire-permanent" className="text-sm hover:text-third transition-colors duration-200">Hire Permanent Staff</a>
              <a href="/staff-augmentation" className="text-sm hover:text-third transition-colors duration-200">Staff Augmentation</a>
              <a href="/software-outsourcing" className="text-sm hover:text-third transition-colors duration-200">Software Outsourcing</a>
              <a href="/remote-office" className="text-sm hover:text-third transition-colors duration-200">Build Remote Office</a>
              <a href="/consulting" className="text-sm hover:text-third transition-colors duration-200">Tech Consulting</a>
            </nav>
          </div>

          {/* How to Start & Newsletter */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-lg mb-2">How to start</h3>
              <div className="flex flex-col gap-2">
                <div className="text-sm flex items-center gap-2">
                  <span className="w-5 h-5 bg-primary text-white rounded-full text-xs flex items-center justify-center font-semibold">1</span>
                  You Asked
                </div>
                <div className="text-sm flex items-center gap-2">
                  <span className="w-5 h-5  bg-primary text-white rounded-full text-xs flex items-center justify-center font-semibold">2</span>
                  We Proceed
                </div>
                <div className="text-sm flex items-center gap-2">
                  <span className="w-5 h-5  bg-primary text-white rounded-full text-xs flex items-center justify-center font-semibold">3</span>
                  Negotiate
                </div>
                <div className="text-sm flex items-center gap-2">
                  <span className="w-5 h-5 bg-primary text-white rounded-full text-xs flex items-center justify-center font-semibold">4</span>
                  You Get
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold">Stay Updated</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Get tech career insights & opportunities</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-xs border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-third focus:border-transparent bg-white dark:bg-gray-800"
                />
                <button className="px-4 py-2 bg-third text-white rounded hover:opacity-90 transition-opacity text-xs font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-300 dark:border-gray-600" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
            <span>© {new Date().getFullYear()} Digital Career Agency. All Rights Reserved.</span>
            <div className="flex gap-4">
              <a href="/privacy" className="hover:text-third transition-colors text-xs">Privacy Policy</a>
              <a href="/terms" className="hover:text-third transition-colors text-xs">Terms & Conditions</a>
              <a href="/cookies" className="hover:text-third transition-colors text-xs">Cookie Policy</a>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium mr-2">Follow Us:</span>
            <a 
              href="https://linkedin.com/company/yourcompany" 
              className="hover:text-third transition-colors duration-200 hover:scale-110 transform"
              aria-label="Follow us on LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LiaLinkedin size={28} />
            </a>
            <a 
              href="https://facebook.com/yourcompany" 
              className="hover:text-third transition-colors duration-200 hover:scale-110 transform"
              aria-label="Follow us on Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LiaFacebook size={28} />
            </a>
            <a 
              href="https://twitter.com/yourcompany" 
              className="hover:text-third transition-colors duration-200 hover:scale-110 transform"
              aria-label="Follow us on Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LiaTwitter size={28} />
            </a>
            <a 
              href="https://instagram.com/yourcompany" 
              className="hover:text-third transition-colors duration-200 hover:scale-110 transform"
              aria-label="Follow us on Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LiaInstagram size={28} />
            </a>
          </div>
        </div>

        {/* Trust Indicators (Optional) */}
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-gray-500 dark:text-gray-400">
            {/* <span className="flex items-center gap-1">
              ✓ ISO 27001 Certified
            </span>
            <span className="flex items-center gap-1">
              ✓ GDPR Compliant
            </span> */}
            <span className="flex items-center gap-1">
              ✓ 500+ Happy Clients
            </span>
            <span className="flex items-center gap-1">
              ✓ 99.9% Uptime SLA
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;