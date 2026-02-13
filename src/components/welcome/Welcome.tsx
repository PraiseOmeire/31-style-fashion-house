import { ScrollAnimated } from '../ScrollAnimated';

const Welcome = () => {
  return (
    <section className="pt-20 md:pt-28 pb-2 md:pb-4 px-4 md:px-16 bg-[#fefcff]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Text */}
          <div>
            <ScrollAnimated animation="fade-down" duration="normal">
              <h2
                className="text-2xl md:text-3xl font-bold mb-6 uppercase tracking-normal"
                style={{fontFamily: "'Mozilla Headline', sans-serif"}}
              >
                Why 31 Styles?
              </h2>
            </ScrollAnimated>
            <p
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
              style={{fontFamily: "'Roboto Condensed', sans-serif"}}
            >
              31 Styles exists for those who move with intent.
              <br />
              Every piece is designed to outlast trends
              <br />
              and speak before you do.
            </p>
          </div>

          {/* Right Column - Empty (white space = luxury) */}
          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
