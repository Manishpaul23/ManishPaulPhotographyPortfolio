import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

const Index = () => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch recent portfolio images
  useEffect(() => {
    const fetchImages = async () => {
      const { data, error } = await supabase
        .from('portfolio_projects')
        .select('image_url')
        .eq('is_active', true)
        .order('created_at', { ascending: false })
        .limit(3); // 👈 show latest 3

      if (error) {
        console.error('Error fetching images:', error);
      } else {
        setImages(data?.map((item) => item.image_url) || []);
      }
      setLoading(false);
    };

    fetchImages();
    window.scrollTo(0, 0); // optional scroll reset
  }, []);

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        {/* 🔥 Portfolio Preview Section */}
        <section id="portfolio" className="py-16 px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Recent Work</h2>

          {loading ? (
            <p className="text-gray-400">Loading...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {images.map((url, i) => (
                <a
                  key={i}
                  href="/portfolio"
                  className="block group rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src={url}
                    alt={`Portfolio ${i}`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </a>
              ))}
            </div>
          )}
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
