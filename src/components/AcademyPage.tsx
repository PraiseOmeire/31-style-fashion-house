import Footer from "./footer/Footer";
import { ScrollAnimated } from './ScrollAnimated';

interface ProgramModule {
  title: string;
  outcome: string;
}

const AcademyPage = () => {
  // Data: 5 program modules
  const modules: ProgramModule[] = [
    {
      title: "Foundations",
      outcome:
        "Master essential sewing techniques, hand-stitching, and garment construction fundamentals.",
    },
    {
      title: "Pattern & Fit",
      outcome:
        "Learn pattern drafting, alterations, and achieve perfect fitting for diverse body types.",
    },
    {
      title: "Fabric & Finishing",
      outcome:
        "Understand fabric properties, selection strategies, and professional finishing techniques.",
    },
    {
      title: "Design Thinking",
      outcome:
        "Develop your creative vision, design process, and build a cohesive collection concept.",
    },
    {
      title: "Final Project",
      outcome:
        "Create a complete garment from concept to finish, demonstrating all skills learned.",
    },
  ];

  // Data: Learning format bullets
  const learningFormat = [
    "Hands-on, studio-based training",
    "Designed for beginner to intermediate levels",
    "Small group sessions for personalized attention",
    "Guided by industry professionals",
    "Access to professional equipment and materials",
  ];

  return (
    <>
      {/* Section 1: Introduction/Hero */}
      <section className="py-20 md:py-32 px-4 md:px-16 bg-[#fefcff]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <ScrollAnimated animation="fade-down">
                <div className="w-20 h-1 bg-[#bc8cd5] rounded-full mb-6"></div>
              </ScrollAnimated>
              <ScrollAnimated animation="fade-up" delay={100}>
                <h1
                  className="text-3xl md:text-5xl font-bold mb-6 text-gray-900"
                  style={{fontFamily: "'Mozilla Headline', sans-serif"}}
                >
                  Building Designers Through Craftsmanship & Vision.
                </h1>
                <p
                className="text-lg text-gray-700 leading-relaxed"
                style={{fontFamily: "'Roboto Condensed', sans-serif"}}
              >
                At 31 Styles Academy, we believe fashion design is both an art
                and a discipline. Our curriculum is intentionally structured to
                build your skills progressively—from foundational techniques to
                confident, independent creation. You'll learn in a supportive
                studio environment where every stitch, pattern, and fabric
                choice brings you closer to becoming the designer you aspire to
                be.
                </p>
              </ScrollAnimated>
            </div>

            {/* Images */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://res.cloudinary.com/dzfcy2b1x/image/upload/v1755638431/Academy-1.jpg"
                alt="Academy Studio"
                className="rounded-lg w-full h-64 object-cover shadow-lg"
              />
              <img
                src="https://res.cloudinary.com/dzfcy2b1x/image/upload/v1755638431/Academy-2.jpg"
                alt="Fashion Design Work"
                className="rounded-lg w-full h-64 object-cover shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Program Overview */}
      <section className="py-20 md:py-32 px-4 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-xs tracking-widest uppercase text-gray-500 mb-8"
            style={{fontFamily: "'Roboto Condensed', sans-serif"}}
          >
            What You'll Learn
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {modules.map((module, index) => (
              <ScrollAnimated
                key={index}
                animation="scale"
                delay={index * 100}
              >
                <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
                <h3
                  className="text-xl font-bold mb-3 text-[#bc8cd5]"
                  style={{fontFamily: "'Mozilla Headline', sans-serif"}}
                >
                  {module.title}
                </h3>
                <p
                  className="text-base text-gray-700 leading-relaxed"
                  style={{fontFamily: "'Roboto Condensed', sans-serif"}}
                >
                  {module.outcome}
                </p>
                </div>
              </ScrollAnimated>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Learning Format */}
      <section className="py-16 md:py-24 px-4 md:px-16 bg-[#fefcff]">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-xs tracking-widest uppercase text-gray-500 mb-6"
            style={{fontFamily: "'Roboto Condensed', sans-serif"}}
          >
            How You'll Learn
          </h2>

          <div className="space-y-4">
            {learningFormat.map((item, index) => (
              <ScrollAnimated
                key={index}
                animation="fade-left"
                delay={index * 50}
              >
                <div className="flex items-start gap-3">
                {/* Purple bullet dot */}
                <div className="w-2 h-2 bg-[#bc8cd5] rounded-full mt-2 flex-shrink-0"></div>
                <p
                  className="text-lg text-gray-700"
                  style={{fontFamily: "'Roboto Condensed', sans-serif"}}
                >
                  {item}
                </p>
                </div>
              </ScrollAnimated>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Call to Action */}
      <section className="py-16 md:py-24 px-4 md:px-16 bg-gradient-to-br from-[#bc8cd5] to-[#897191]">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollAnimated animation="zoom">
            <h2
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              style={{fontFamily: "'Mozilla Headline', sans-serif"}}
            >
              Ready to Start Your Journey?
            </h2>
            <p
              className="text-lg text-white/90 mb-8"
              style={{fontFamily: "'Roboto Condensed', sans-serif"}}
            >
              Learn more about enrollment and upcoming programs.
            </p>
            <a
              href="mailto:omeirepraise99@gmail.com"
              className="inline-flex items-center gap-2 bg-white text-[#bc8cd5] px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#fefcff] hover:shadow-xl transition-all duration-300"
              style={{fontFamily: "'Roboto Condensed', sans-serif"}}
            >
              Request Program Information
            </a>
          </ScrollAnimated>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AcademyPage;
