import { ArrowDown } from 'lucide-react';
import portraitImage from '@/assets/Manish_Portrait.jpg';

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex flex-col relative overflow-hidden bg-background">

      {/* Headline under navbar */}
      <div className="w-full flex justify-center pt-32 pb-8">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight tracking-tight text-center">
          <span className="text-foreground-muted block">EXPLORE</span>
          <span className="text-foreground block">MY</span>
          <span className="text-foreground block">PORTFOLIO</span>
        </h1>
      </div>

      {/* Portrait image centered below headline */}
      <div className="flex justify-center py-6">
        <img
          src={portraitImage}
          alt="Manish Paul - Photographer"
          className="w-40 h-auto  grayscale  select-none pointer-events-none transition-all duration-500"
        />
      </div>

      {/* Quote centered below portrait */}
      <div className="flex justify-center mt-4 mb-2">
        <div className="text-center max-w-sm space-y-4 px-2">
          <p className="text-sm text-foreground-secondary leading-relaxed tracking-wide uppercase">
            I AM PASSIONATE ABOUT
            <br />
            CREATING IMAGES THAT
            <br />
            STAND OUT FROM THE
            <br />
            CROWD.
          </p>
        </div>
      </div>

      {/* Subheading and scroll indicator */}
      <div className="flex items-center justify-center mt-12 animate-fade-in w-full px-8 max-w-4xl mx-auto relative">
        <span className="text-foreground-muted font-medium text-sm tracking-[0.2em] uppercase text-center flex-1">
          PHOTOGRAPHER EST.2023
        </span>
        <div className="absolute right-0">
          <button
            onClick={scrollToPortfolio}
            className="w-16 h-16 rounded-full border-2 border-foreground-muted flex items-center justify-center cursor-pointer hover:bg-foreground hover:text-background transition-all duration-300 group ml-4"
          >
            <ArrowDown size={20} className="group-hover:animate-bounce" />
          </button>
        </div>
      </div>
<br />
<br />
<br />
<br />
<br />
      {/* Action Buttons - Positioned at bottom */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex items-center space-x-8">
        <button
          onClick={scrollToPortfolio}
          className="btn-elegant"
        >
          <span>VIEW PORTFOLIO</span>
        </button>
        <button
          onClick={scrollToContact}
          className="btn-elegant"
        >
          <span>CONTACT ME</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;