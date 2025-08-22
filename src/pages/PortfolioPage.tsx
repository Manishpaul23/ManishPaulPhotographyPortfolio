import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { supabase } from '@/lib/supabase';

const PortfolioPage = () => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
  try {
    console.log('Fetching images from database...');
    
    const { data, error } = await supabase
      .from('portfolio_projects')
      .select('image_url')
      .eq('is_active', true)
      .order('created_at', { ascending: false });

    console.log('Database query result:', data);
    console.log('Database query error:', error);

    if (error) throw error;

    const imageUrls = data?.map(item => item.image_url) || [];
    console.log('Image URLs:', imageUrls);
    setImages(imageUrls);
  } catch (error) {
    console.error('Error fetching images:', error);
  } finally {
    setLoading(false);
  }
};


  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  if (loading) {
    return (
      <>
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <div className="p-6">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-4"
          columnClassName="my-masonry-column"
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Portfolio ${i}`}
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer mb-4"
            />
          ))}
        </Masonry>

        {open && (
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            index={index}
            slides={images.map((src) => ({ src }))}
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default PortfolioPage;
