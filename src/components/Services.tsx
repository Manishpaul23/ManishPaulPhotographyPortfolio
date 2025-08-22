import { Camera, Users, Building, User } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: User,
      title: 'Portrait Photography',
      description:
        'Professional headshots and portraits that reflect your personality and style, captured with artistic precision.',
    },
    {
      icon: Users,
      title: 'Event Coverage',
      description:
        'Comprehensive coverage of your events, ensuring every important detail and candid moment is beautifully documented.',
    },
    {
      icon: Building,
      title: 'Commercial Photography',
      description:
        'High-quality visuals for brands and businesses, tailored to elevate your marketing campaigns and corporate presence.',
    },
    {
      icon: Camera,
      title: 'Lifestyle Photography',
      description:
        'Authentic, candid photography that tells your story through natural and creative imagery.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-background-secondary">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
            My Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
            Offering a curated range of photography services designed to capture your most important
            moments with creativity and professionalism.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-background border border-border rounded-2xl p-8 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto mb-6">
                <service.icon className="text-white" size={28} />
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-foreground-secondary text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="mt-20 bg-gradient-to-r from-indigo-600 to-purple-600 p-10 rounded-2xl shadow-lg text-center text-white">
          <h3 className="text-3xl font-semibold mb-4">
            Custom Photography Packages
          </h3>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Every project is unique, and I believe your photography should be too.
            I offer customized packages tailored to your specific needs, timeline,
            and budget. Let’s create something beautiful together.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="mt-8 px-8 py-3 bg-white text-gray-900 font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
          >
            Discuss Your Project →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
