import {FaWhatsapp, FaPhone, FaEnvelope, FaInstagram} from "react-icons/fa";

const ContactCTA = () => {
  const whatsappNumber = "+234XXXXXXXXXX"; // Replace with actual number
  const whatsappMessage = encodeURIComponent(
    "Hello! I'm interested in learning more about 31 Styles Fashion House and would like to place an order."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-16 md:py-24 px-4 md:px-16 bg-gradient-to-br from-[#bc8cd5] to-[#897191]">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-4xl md:text-6xl font-bold text-white mb-6"
          style={{fontFamily: "'Mozilla Headline', sans-serif"}}
        >
          Ready to Transform Your Style?
        </h2>

        <p
          className="text-xl md:text-2xl text-white/90 mb-12"
          style={{fontFamily: "'Roboto Condensed', sans-serif"}}
        >
          Get in touch with us today to discuss your custom fashion needs and
          place your order
        </p>

        {/* WhatsApp Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 bg-white text-[#bc8cd5] px-8 py-4 rounded-full text-xl font-bold hover:bg-[#fefcff] hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          style={{fontFamily: "'Mozilla Headline', sans-serif"}}
        >
          <FaWhatsapp className="text-3xl" />
          <span>Message Us on WhatsApp</span>
        </a>

        {/* Alternative Contact Methods */}
        <div
          className="mt-12 flex flex-col md:flex-row justify-center gap-6 text-white"
          style={{fontFamily: "'Roboto Condensed', sans-serif"}}
        >
          <div className="flex items-center justify-center gap-2">
            <FaPhone className="text-xl" />
            <span>+234 XXX XXX XXXX</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <FaEnvelope className="text-xl" />
            <span>info@31stylesfashionhouse.com</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <FaInstagram className="text-xl" />
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @31stylesfashionhouse
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
