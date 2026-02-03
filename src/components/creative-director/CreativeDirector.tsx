import {FaInstagram, FaLinkedin} from "react-icons/fa";

const CreativeDirector = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl md:text-6xl font-bold text-center mb-12"
          style={{fontFamily: "'Mozilla Headline', sans-serif"}}
        >
          Meet the Creative Director
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Video Section */}
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <video
              controls
              poster="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop"
              className="w-full h-auto"
            >
              <source
                src="https://res.cloudinary.com/dzfcy2b1x/video/upload/f_mp4,q_auto/v1755619578/31_styles_header.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Bio Section */}
          <div className="space-y-6">
            <div>
              <h3
                className="text-3xl font-bold mb-2"
                style={{fontFamily: "'Mozilla Headline', sans-serif"}}
              >
                [Founder Name]
              </h3>
              <p
                className="text-xl text-[#bc8cd5] mb-4"
                style={{fontFamily: "'Roboto Condensed', sans-serif"}}
              >
                Founder & Creative Director
              </p>
            </div>

            <div
              className="space-y-4 text-lg leading-relaxed text-gray-700"
              style={{fontFamily: "'Roboto Condensed', sans-serif"}}
            >
              <p>
                With a passion for fashion that began at an early age, our
                founder has dedicated over a decade to mastering the art of
                design and garment construction. Trained in both traditional
                techniques and contemporary fashion, she brings a unique blend
                of heritage and innovation to every creation.
              </p>
              <p>
                Her vision for 31 Styles Fashion House is simple yet profound:
                to create pieces that make every woman feel confident,
                beautiful, and authentically herself. Every stitch tells a
                story, and every design is crafted with love and intention.
              </p>
              <p>
                Beyond designing, she is committed to nurturing the next
                generation of fashion talents through the 31 Styles Academy,
                where aspiring designers learn the skills to bring their own
                visions to life.
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
