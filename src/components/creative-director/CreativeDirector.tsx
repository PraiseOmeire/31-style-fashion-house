import {FaInstagram, FaLinkedin} from "react-icons/fa";

const CreativeDirector = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Section */}
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <img
              src="https://res.cloudinary.com/dzfcy2b1x/image/upload/v1770214712/Creative-D.jpg"
              alt="Mercy C. David-Eze — Founder & Creative Director"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Bio Section */}
          <div className="space-y-6">
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{fontFamily: "'Mozilla Headline', sans-serif"}}
              >
                Meet the Creative Director
              </h2>
            </div>

            <div
              className="space-y-4 text-lg leading-relaxed text-gray-700"
              style={{fontFamily: "'Roboto Condensed', sans-serif"}}
            >
              <p>
                Founded by <strong>Mercy C. David-Eze</strong>, 31 STYLE FASHION
                HOUSE is a premier fashion destination dedicated to the modern
                woman who values elegance, integrity, and individuality.
              </p>

              <div>
                <p className="font-bold text-gray-900 mb-3">
                  Our Pillars of Excellence:
                </p>
                <ul className="space-y-3">
                  <li>
                    <strong className="text-gray-900">
                      Creative Distinction:
                    </strong>{" "}
                    We shun the "norm" to create masterpieces that reflect the
                    unique identity of our clients.
                  </li>
                  <li>
                    <strong className="text-gray-900">
                      The Modesty Standard:
                    </strong>{" "}
                    We prove that high fashion can be both modest and majestic.
                    To us, modesty is synonymous with luxury.
                  </li>
                  <li>
                    <strong className="text-gray-900">Reliability:</strong> We
                    are committed to ending the culture of "tailor
                    disappointment." We prioritize your deadlines, ensuring your
                    garments are delivered with excellence, right on time.
                  </li>
                </ul>
              </div>

              <p className="italic text-gray-800">
                "Our mission is simple: To provide fashion that screams your
                name through its creativity, while honoring your silhouette with
                grace."
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#bc8cd5] hover:text-[#897191] transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="text-3xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#bc8cd5] hover:text-[#897191] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeDirector;
