import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageCircle, MapPin, CheckCircle2 } from 'lucide-react';
import { beforeAfterGallery } from '../data/galleryData';
import { DEFAULT_PHONE, waHref } from '../data/contactData';

const FOCUS = 'focus:outline-none focus:ring-2 focus:ring-brand-blue';

// Interactive Before/After Split Slider Card
function ComparisonCard({ item }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleSliderKeyDown = (event) => {
    const step = event.shiftKey ? 10 : 1;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
      event.preventDefault();
      setSliderPosition((position) => Math.max(0, position - step));
    } else if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
      event.preventDefault();
      setSliderPosition((position) => Math.min(100, position + step));
    } else if (event.key === 'Home') {
      event.preventDefault();
      setSliderPosition(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      setSliderPosition(100);
    }
  };

  const whatsappInquiryUrl = waHref(
    DEFAULT_PHONE,
    `Hi AW Carpet Cleaning, I saw the before & after transformation for "${item.title}" on your website. Can I get a quote for a similar clean?`
  );

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
      {/* Interactive Visual Comparison Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        onKeyDown={handleSliderKeyDown}
        role="slider"
        tabIndex={0}
        aria-label={`Before and after comparison for ${item.title}`}
        aria-orientation="horizontal"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuetext={`${Math.round(sliderPosition)}% showing before`}
        className={`relative h-72 sm:h-80 w-full overflow-hidden select-none cursor-ew-resize bg-slate-900 ${FOCUS}`}
      >
        {/* After Image (Background layer) */}
        <img
          src={item.afterImg}
          alt={item.altAfter}
          width="700"
          height="700"
          loading="lazy"
          decoding="async"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 z-10">
          <span className="px-3 py-1 rounded-full text-xs font-black bg-[#25D366] text-slate-950 shadow-md">
            AFTER (CLEAN)
          </span>
        </div>

        {/* Before Image (Clipped overlay layer) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={item.beforeImg}
            alt={item.altBefore}
            width="700"
            height="700"
            loading="lazy"
            decoding="async"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ width: containerWidth > 0 ? `${containerWidth}px` : '100%', maxWidth: 'none' }}
          />
          <div className="absolute top-3 left-3 z-10">
            <span className="px-3 py-1 rounded-full text-xs font-black bg-rose-600 text-white shadow-md">
              BEFORE
            </span>
          </div>
        </div>

        {/* Divider Slider Handle Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-[#043263] shadow-xl border-2 border-[#0072CE] flex items-center justify-center font-bold text-xs">
            ⇄
          </div>
        </div>

        {/* Hint banner */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white text-[11px] font-medium px-3 py-1 rounded-full pointer-events-none">
          Drag slider to compare
        </div>
      </div>

      {/* Card Information */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#0072CE]/10 text-[#0072CE]">
              {item.tag}
            </span>
            <span className="flex items-center gap-1 text-xs font-medium text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-[#00B2FE]" />
              {item.location}
            </span>
          </div>

          <h3 className="text-lg font-bold text-[#043263] leading-snug">
            {item.title}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
            {item.description}
          </p>

          <div className="mt-3 py-1.5 px-3 rounded-lg bg-emerald-50 border border-emerald-200/60 flex items-center gap-2 text-xs font-semibold text-emerald-800">
            <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
            <span>{item.stats}</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-5 pt-4 border-t border-slate-100">
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-[#25D366] text-[#043263] hover:text-white font-bold text-xs sm:text-sm transition-all duration-200 ${FOCUS}`}
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Book Similar Clean</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfterGallery() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterOptions = ['All', 'Carpets', 'Sofas & Couches', 'Stairs', 'Rugs', 'Car Seats', 'Mattresses'];

  const filteredItems = activeFilter === 'All'
    ? beforeAfterGallery
    : beforeAfterGallery.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00B2FE]/15 text-[#043263] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#0072CE]" />
            <span>Proof in Every Fibre</span>
          </div>
          <h2 id="gallery-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#043263] tracking-tight">
            Real Before &amp; After Results
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            See the transformative difference our commercial hot water extraction makes in UK homes. Drag each slider to view before and after.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${FOCUS} ${
                  activeFilter === filter
                    ? 'bg-[#043263] text-white shadow'
                    : 'bg-[#F4F8FC] text-slate-700 hover:bg-slate-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <ComparisonCard item={item} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
