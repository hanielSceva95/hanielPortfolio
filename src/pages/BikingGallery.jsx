import React, { useState } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import bike6Img from '../assets/bike6.JPG';
import bike1Img from '../assets/bike1.jpeg';
import bike2Img from '../assets/bike2.jpg';
import bike3Img from '../assets/bike3.jpeg';
import bike4Img from '../assets/bike4.jpeg';
import bike7Img from '../assets/bike7.jpeg';
import bike8Img from '../assets/bike8.jpg';
import bike9Img from '../assets/bike9.jpeg';
import bike10Img from '../assets/bike10.jpeg';
import bike11Img from '../assets/bike11.JPG';
import bike12Img from '../assets/bike12.jpg';
import bike13Img from '../assets/bike13.jpeg';
import bike15Img from '../assets/bike15.jpeg';
import bike16Img from '../assets/bike16.JPG';
import bike17Img from '../assets/bike17.jpg';
import bike18Img from '../assets/bike18.jpg';


function BikingGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const bikingImages = [
    { src: bike6Img, title: "Trail Exploring", desc: "Exploring off-road tracks and hidden paths." },
      { src: bike1Img, title: "Golden Sunrise Ride", desc: "Leaning back to enjoy the sunrise over the valley." },
    { src: bike2Img, title: "Coastal Cycling", desc: "Cruising along the gravel path by the ocean at sunset." },
      { src: bike3Img, title: "Summit View", desc: "The reward after a steep climb - an incredible vista." },
    { src: bike4Img, title: "Sunset on the Trail", desc: "Rolling into the evening with golden hour light." },
      { src: bike7Img, title: "Morning Coffee Ride", desc: "A refreshing morning cycle with a break for coffee." },
    { src: bike8Img, title: "Sunset Views", desc: "Chasing the sunset on a long evening ride." },
    { src: bike9Img, title: "Forest Bathing", desc: "Deep woods ride, surrounded by tall trees." },
    { src: bike10Img, title: "Mountain Air", desc: "High altitude cycling with crisp mountain air." },
    { src: bike11Img, title: "Solo Adventure", desc: "A peaceful solo journey on an open road." },
    { src: bike12Img, title: "Golden Hour", desc: "Riding as the golden hour light washes over the landscape." },
    { src: bike13Img, title: "Golden Hour", desc: "Riding as the golden hour light washes over the landscape." },
    { src: bike15Img, title: "Golden Hour", desc: "Riding as the golden hour light washes over the landscape." },
    { src: bike16Img, title: "Golden Hour", desc: "Riding as the golden hour light washes over the landscape." },
    { src: bike17Img, title: "Golden Hour", desc: "Riding as the golden hour light washes over the landscape." },
    { src: bike18Img, title: "Golden Hour", desc: "Riding as the golden hour light washes over the landscape." }

    
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] font-sans px-4 py-8 md:px-12 md:py-16 animate-fade-in">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header with Back Button */}
        <div className="flex items-center justify-between mb-8 md:mb-12 border-b border-[#222] pb-6">
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#111] hover:bg-[#222] text-[#ededed] hover:text-[#d4af37] border border-[#222] hover:border-[#d4af37]/30 transition-all font-medium text-sm group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </a>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-[#d4af37] tracking-tight">Biking Adventures</h1>
        </div>

        {/* Intro text */}
        <div className="mb-8 md:mb-12 text-center md:text-left max-w-2xl">
          <p className="text-gray-400 leading-relaxed text-base md:text-lg">
            A collection of moments from my bike journeys, ranging from challenging climbs in the mountains to scenic coastal paths. Biking offers me a balance of adventure, mindfulness, and a great way to explore the beauty of nature.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bikingImages.map((img, index) => (
            <div 
              key={index}
              onClick={() => setSelectedImage(img)}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-[#111] border border-[#222] hover:border-emerald-500/30 transition-all duration-300"
            >
              {/* Image wrapper with aspect ratio */}
              <div className="aspect-[3/2] w-full overflow-hidden bg-zinc-900">
                <img 
                  src={img.src} 
                  alt="Biking" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-3 bg-black/50 hover:bg-black/80 rounded-full text-white hover:text-[#d4af37] border border-[#333] transition-colors z-50 cursor-pointer"
          >
            <X size={24} />
          </button>

          {/* Modal Content */}
          <div 
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.src} 
              alt="Biking" 
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl border border-[#222]" 
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default BikingGallery;
