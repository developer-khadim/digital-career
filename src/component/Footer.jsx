import { MailIcon, MapPin, PhoneIcon } from 'lucide-react';
import React from 'react';
import { LiaFacebook, LiaLinkedin } from 'react-icons/lia';

const Footer = () => {
  return (
    <footer className="overflow-x-hidden w-full bg-white dark:bg-secondary text-primary dark:text-white px-4 py-3 sm:px-2 md:px-8 xl:px-40 lg:px-10 border-t border-gray-200 dark:border-gray-700">
      {/* Main Footer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Logo & Info */}
        <div className="flex flex-col gap-3 lg:col-span-1">
          <div className="flex items-center gap-3">
            <img src="./dc.png" alt="Digital Career Agency Logo" className="w-12 h-12 object-contain" />
            <span className="font-bold text-xl">Digital Career</span>
          </div>

          <p className="text-sm leading-relaxed max-w-xs">
            Expertly trained, battle-tested, elite software developers and tech professionals on demand. Your gateway to exceptional talent.
          </p>

          <div className="space-y-2">
            <a 
              href="tel:+923499999999" 
              className="flex items-center gap-2 text-sm hover:text-third transition-colors"
            >
              <PhoneIcon size={16} className="text-third" /> +92 349-xxxxxxx
            </a>

            <a 
              href="mailto:digitalcareerIT@gmail.com" 
              className="flex items-center gap-2 text-sm hover:text-third transition-colors"
            >
              <MailIcon size={16} className="text-third" /> digitalcareerIT@gmail.com
            </a>

            <div className="flex items-center gap-2 text-sm">
              <MapPin size={16} className="text-third" /> Karachi, Pakistan
            </div>
          </div>
        </div>

        {/* Company Links */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-lg mb-2">Company</h3>
          <nav className="flex flex-col gap-2">
            {["About Us","Success Stories","Careers","Blog","Contact Us"].map((link, i) => (
              <a
                key={i}
                href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm hover:text-third transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Creators Section */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-lg mb-2">Creators</h3>    
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Want to join us as a creator? Apply on our website and start your journey with Digital Career.
          </p>
          <a 
            href="/apply" 
            className="text-sm font-medium text-third hover:underline"
          >
            Apply Now →
          </a>
        </div>

        {/* Stay Updated */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold">Stay Updated</h4>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Get tech career insights & opportunities
            </p>
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

          {/* Social Media */}
          <div className="flex items-center gap-3 mt-2">
            <a href="mailto:digitalcareerIT@gmail.com" className="hover:text-third transition-colors duration-200 hover:scale-110 transform">
              <MailIcon size={24} className="text-third" />
            </a>
            <a href="http://www.linkedin.com/in/digital-career-agency-76a00537b" target="_blank" rel="noopener noreferrer" className="hover:text-third transition-colors duration-200 hover:scale-110 transform">
              <LiaLinkedin size={30} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61579067426818" target="_blank" rel="noopener noreferrer" className="hover:text-third transition-colors duration-200 hover:scale-110 transform">
              <LiaFacebook size={30} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-300 dark:border-gray-600" />

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <span>© {new Date().getFullYear()} Digital Career Agency. All Rights Reserved.</span>
        <div className="flex gap-4">
          <a href="/privacy" className="hover:text-third transition-colors text-xs">Privacy Policy</a>
          <a href="/terms" className="hover:text-third transition-colors text-xs">Terms & Conditions</a>
          <a href="/cookies" className="hover:text-third transition-colors text-xs">Cookie Policy</a>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-1">✓ 500+ Happy Clients</span>
          <span className="flex items-center gap-1">✓ 99.9% Uptime SLA</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
