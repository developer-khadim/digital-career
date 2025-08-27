import { Mail } from "lucide-react";
import React, { useState } from "react";
import { LiaFacebook, LiaLinkedin } from "react-icons/lia";
import { Link } from "react-router-dom";
import Modal from "react-modal";

// Bind modal to your app root (important for accessibility)
Modal.setAppElement("#root");

const companyLinks = [
  { name: "About Us", href: "/what-are-we" },
  { name: "Success Stories", href: "/testimonials" },
  { name: "Contact Us", href: "/contact" },
];

const Footer = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showCookies, setShowCookies] = useState(false); // ✅ fixed typo

  return (
    <>
      <footer className="overflow-x-hidden w-full bg-white dark:bg-secondary text-primary dark:text-white px-4 py-3 sm:px-2 md:px-8 xl:px-40 lg:px-10 border-t border-gray-200 dark:border-gray-700">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div className="flex flex-col gap-3 lg:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src="./dc.png"
                alt="Digital Career Agency Logo"
                className="w-12 h-12 object-contain"
              />
              <span className="font-bold text-xl">Digital Career</span>
            </div>

            <p className="text-sm leading-relaxed max-w-xs">
              Expertly trained, battle-tested, elite software developers and
              tech professionals on demand. Your gateway to exceptional talent.
            </p>

            <div className="space-y-2">
              <a
                href="mailto:digitalcareeerit@gmail.com"
                className="flex items-center text-secondary gap-2 text-sm hover:text-third transition-colors"
              >
                <Mail size={16} className="text-third" />{" "}
                digitalcareeerit@gmail.com
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg mb-2">Company</h3>
            <nav className="flex flex-col gap-2">
              {companyLinks.map((link, i) => (
                <Link
                  key={i}
                  to={link.href}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-secondary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Careers Section */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg mb-2">Careers</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              We’re always looking for passionate and creative individuals to
              join our team. Explore exciting opportunities and build your
              career with Digital Career.
            </p>
            <Link
              to="/careers"
              className="text-sm font-medium text-third hover:underline"
            >
              Apply Now →
            </Link>
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
              <a
                href="mailto:digitalcareeerit@gmail.com"
                className="hover:text-third transition-colors duration-200 hover:scale-110 transform"
              >
                <Mail size={24} className="text-third" />
              </a>
              <a
                href="http://www.linkedin.com/in/digital-career-agency-76a00537b"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-third transition-colors duration-200 hover:scale-110 transform"
              >
                <LiaLinkedin size={30} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61579067426818"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-third transition-colors duration-200 hover:scale-110 transform"
              >
                <LiaFacebook size={30} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-300 dark:border-gray-600" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <span>
            © {new Date().getFullYear()} Digital Career Agency. All Rights
            Reserved.
          </span>
          <div className="flex gap-4">
            <button
              onClick={() => setShowPrivacy(true)}
              className="hover:text-third transition-colors text-xs cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setShowTerms(true)}
              className="hover:text-third transition-colors text-xs"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => setShowCookies(true)}
              className="hover:text-third transition-colors text-xs"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <Modal
        isOpen={showPrivacy}
        onRequestClose={() => setShowPrivacy(false)}
        shouldCloseOnOverlayClick={true}
        className="max-w-2xl mx-auto my-20 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-lg font-semibold text-primary">Privacy Policy</h2>
          <button
            onClick={() => setShowPrivacy(false)}
            className="text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>
        </div>
        <div className="overflow-y-auto max-h-[70vh] text-sm space-y-4">
          <p>
            At <strong className="text-primary">Digital Career Agency</strong>,
            your privacy is important to us. This Privacy Policy explains how we
            collect, use, and protect your personal information.
          </p>
          <p>
            We may collect information such as your name, email address, and
            usage data when you interact with our services. This information
            helps us improve user experience and provide better services.
          </p>
          <p>
            We do not share your data with third parties without your consent,
            except when required by law. All information is stored securely and
            handled responsibly.
          </p>
          <p>
            By using our website, you agree to the terms of this Privacy Policy.
            If you have any questions, feel free to contact us at{" "}
            <a
              href="mailto:digitalcareeerit@gmail.com"
              className="text-secondary underline"
            >
              digitalcareeerit@gmail.com
            </a>
            .
          </p>
        </div>
      </Modal>

      {/* Terms & Conditions Modal */}
      <Modal
        isOpen={showTerms}
        onRequestClose={() => setShowTerms(false)}
        shouldCloseOnOverlayClick={true}
        className="max-w-2xl mx-auto my-20 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-lg font-semibold text-primary">
            Terms & Conditions
          </h2>
          <button
            onClick={() => setShowTerms(false)}
            className="text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>
        </div>
        <div className="overflow-y-auto max-h-[70vh] text-sm space-y-4">
          <p>
            Welcome to{" "}
            <strong className="text-primary">Digital Career Agency</strong>. By
            accessing our website and services, you agree to comply with the
            following Terms & Conditions.
          </p>
          <p>
            1. Use of our services must be lawful and respectful. <br />
            2. We reserve the right to modify or discontinue services at any
            time. <br />
            3. Content shared on this site is for informational purposes only
            and should not be copied without permission.
          </p>
          <p>
            By continuing to use our services, you agree to these terms. If you
            have any questions, please reach out to us at
            <a
              href="mailto:digitalcareeerit@gmail.com"
              className="text-secondary underline"
            >
              {" "}
              digitalcareeerit@gmail.com
            </a>
            .
          </p>
        </div>
      </Modal>

      {/* Cookie Policy Modal */}
      <Modal
        isOpen={showCookies} // ✅ use correct state
        onRequestClose={() => setShowCookies(false)}
        shouldCloseOnOverlayClick={true}
        className="max-w-2xl mx-auto my-20 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-lg font-semibold text-primary">Cookie Policy</h2>
          <button
            onClick={() => setShowCookies(false)}
            className="text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>
        </div>
        <div className="overflow-y-auto max-h-[70vh] text-sm space-y-4">
          <p>
            Our website uses cookies to enhance your browsing experience,
            analyze site traffic, and improve functionality.
          </p>
          <p>
            Cookies are small text files stored on your device. They help us
            remember your preferences and provide a personalized experience.
          </p>
          <p>
            You can disable cookies in your browser settings, but some features
            of our site may not work properly without them.
          </p>
          <p>
            By continuing to use our site, you agree to our use of cookies. For
            questions, contact us at
            <a
              href="mailto:digitalcareeerit@gmail.com"
              className="text-secondary underline"
            >
              {" "}
             digitalcareeerit@gmail.com
            </a>
            .
          </p>
        </div>
      </Modal>
    </>
  );
};

export default Footer;
