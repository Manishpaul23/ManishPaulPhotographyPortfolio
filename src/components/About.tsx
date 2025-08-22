const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background-secondary to-background">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
            About Manish Paul
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full mb-6" />
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-8 text-center md:text-left">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              My Photography Journey
            </h3>
            <p className="text-lg text-foreground-secondary leading-relaxed">
              Based in the vibrant city of Bangalore, I am a passionate photographer dedicated to
              capturing life’s most beautiful and authentic moments. What started as a creative
              outlet quickly evolved into a lifelong passion for visual storytelling.
            </p>
            <p className="text-lg text-foreground-secondary leading-relaxed">
              I specialize in portrait photography, event coverage, and commercial work, blending
              technical expertise with artistic vision. Every photograph tells a story, and I focus
              on capturing fleeting moments that become timeless memories.
            </p>
            <p className="text-lg text-foreground-secondary leading-relaxed">
              My goal is to create not just photographs, but pieces of art that resonate with
              emotion and authenticity—images you’ll treasure forever.
            </p>
          </div>
inline-flex items-center px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 transition

          {/* My Vision Block */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-8 rounded-2xl shadow-lg text-center text-white">
            <h4 className="text-2xl font-semibold mb-4">My Vision</h4>
            <p className="text-base leading-relaxed opacity-90">
              “Photography is not just about capturing what you see, but about revealing what you
              feel. Every frame is an opportunity to tell a story that words cannot express.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
