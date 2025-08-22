import { Mail, Phone, MapPin, Instagram, ExternalLink } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa'; // WhatsApp icon

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center space-y-12 mb-16">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground">
                Get in Touch
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full mb-6" />
              <p className="text-foreground-secondary max-w-2xl mx-auto leading-relaxed">
                Ready to capture your special moments? Let's discuss your photography 
                needs and create something beautiful together.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Inquiry Form Card */}
            <div className="animate-slide-up">
              <div className="bg-card p-10 rounded-xl shadow-md border border-border text-center hover:shadow-lg transition duration-300">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Book Your Session
                </h3>
                <p className="text-foreground-secondary mb-6 leading-relaxed">
                  Ready to capture your special moments? Fill out the inquiry form to start planning your shoot.
                </p>
                <a
                  href="https://forms.gle/vp5G81q1CpiqthHZA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 transition"
                >
                  OPEN INQUIRY FORM
                  <ExternalLink size={18} className="ml-2" />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-elegant rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Phone</h4>
                      <p className="text-foreground-secondary">+91 70025 37750</p>
                      <p className="text-sm text-foreground-muted">Available Sat-Sun, 8 AM - 9 PM</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-elegant rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Email</h4>
                      <a 
                        //  href="mailto:paulaimanish@gmail.com"
                        className="text-foreground-secondary hover:text-primary transition-colors"
                      >
                       paulaimanish@gmail.com
                      </a>
                      <p className="text-sm text-foreground-muted">I'll respond within 24 hours</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-elegant rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Location</h4>
                      <p className="text-foreground-secondary">Bangalore, Karnataka</p>
                      <p className="text-sm text-foreground-muted">Available for shoots </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="font-medium text-foreground mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/manishpaul_23"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-elegant rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  >
                    <Instagram className="text-primary" size={20} />
                  </a>
                  <a
                    href="https://wa.me/7086142984"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-elegant rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  >
                    <FaWhatsapp className="text-primary" size={22} />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
