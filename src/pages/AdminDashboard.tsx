import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { supabase } from '@/lib/supabase';

const AdminDashboard = () => {
  const [images, setImages] = useState<File[]>([]);
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error logging out:', error);
    } else {
      navigate('/admin-login');
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const fileArray = Array.from(event.target.files);
      setImages(prev => [...prev, ...fileArray]);
    }
  };

  const handleSubmit = async () => {
    if (images.length === 0) {
      alert('Please select at least one image.');
      return;
    }

    try {
      setIsLoading(true);

      const image = images[0];
      const fileExt = image.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `portfolio/${fileName}`;

      // Upload to storage
      const { error: uploadError } = await supabase.storage
        .from('portfolio-images')
        .upload(filePath, image);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('portfolio-images')
        .getPublicUrl(filePath);

      // Insert into DB
      const { error: dbError } = await supabase
        .from('portfolio_projects')
        .insert({
          image_url: publicUrl,
          description: "New upload",
          category: "Uncategorized",
          is_active: true
        });

      if (dbError) throw dbError;

      setUploadedUrls(prev => [...prev, publicUrl]);
      setImages([]);
      alert('Upload successful!');
    } catch (error: any) {
      console.error(error);
      alert('Error: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navigation />
      <div className="p-6 pt-28 max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Admin Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-5 py-2 rounded-lg shadow hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>

        {/* Upload Box */}
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Upload Portfolio Images
          </h2>

          <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-indigo-500 transition">
            <span className="text-gray-500">Click or drag images here</span>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>

          {images.length > 0 && (
            <p className="mt-3 text-sm text-gray-600">
              {images.length} file(s) selected
            </p>
          )}

          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className={`mt-6 w-full py-3 rounded-lg font-medium text-white shadow transition ${
              isLoading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
          >
            {isLoading ? 'Uploading...' : 'Upload'}
          </button>
        </div>

        {/* Preview Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {uploadedUrls.map((url, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={url}
                alt={`Uploaded ${index}`}
                className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminDashboard;
