import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Star, CheckCircle2, ZoomIn, X } from 'lucide-react';
import { reviewScreenshots } from '../data/galleryData';
import { DEFAULT_PHONE, waHref } from '../data/contactData';

const FOCUS = 'focus:outline-none focus:ring-2 focus:ring-brand-blue';

export default function ReviewScreenshots() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section aria-labelledby="proof-heading" className="py-20 bg-gradient-to-b from-[#F4F8FC] to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#25D366]/15 text-[#128C7E] text-xs font-bold uppercase tracking-wider mb-3">
            <MessageCircle className="w-3.5 h-3.5 fill-[#25D366]" />
            <span>Unfiltered Social Proof</span>
          </div>
          <h2 id="proof-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#043263] tracking-tight">
            Direct WhatsApp Customer Chats
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Real feedback sent straight to our technician's phone from delighted clients across Manchester, Leeds, Birmingham, and Liverpool.
          </p>
        </div>

        {/* Screenshots Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviewScreenshots.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setSelectedImage(item)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setSelectedImage(item);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Open larger view of ${item.alt}`}
              className={`bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col ${FOCUS}`}
            >
              {/* WhatsApp Screenshot Image */}
              <div className="relative aspect-[9/16] overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-[#043263]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2.5 rounded-full bg-white text-[#043263] shadow-lg flex items-center gap-1.5 text-xs font-bold">
                    <ZoomIn className="w-4 h-4 text-[#0072CE]" />
                    <span>Click to Zoom</span>
                  </span>
                </div>
              </div>

              {/* Chat Info Below */}
              <div className="p-4 flex-1 flex flex-col justify-between bg-white border-t border-slate-100">
                <div>
                  <div className="flex items-center gap-1 mb-1.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs font-bold text-[#043263] line-clamp-2">
                    "{item.highlight}"
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center gap-1 text-[11px] text-[#25D366] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified WhatsApp Message</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Button Below Gallery */}
        <div className="mt-12 text-center">
          <a
            href={waHref(DEFAULT_PHONE, 'Hi AW Carpet Cleaning, I saw your customer reviews and would like to book a clean.')}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-extrabold text-sm shadow-md hover:shadow-lg transition-all ${FOCUS}`}
          >
            <MessageCircle className="w-5 h-5 fill-slate-950 text-slate-950" />
            <span>Chat Directly on WhatsApp</span>
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className={`absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors ${FOCUS}`}
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={selectedImage.image}
                alt={selectedImage.alt}
                width={selectedImage.width}
                height={selectedImage.height}
                decoding="async"
                className="w-full h-auto max-h-[80vh] object-contain bg-slate-900"
              />

              <div className="p-4 bg-white flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#043263]">Verified customer review</h3>
                  <p className="text-xs text-slate-500">{selectedImage.highlight}</p>
                </div>
                <a
                  href={waHref(DEFAULT_PHONE, 'Hi AW, I saw a customer review on your site. Can I get a quote?')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 bg-[#25D366] text-slate-950 text-xs font-bold rounded-lg ${FOCUS}`}
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
