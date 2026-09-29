import { motion } from 'framer-motion';
import { Star, CheckCircle, ShieldCheck } from 'lucide-react';
import { reviewsData, reviewSummary } from '../data/reviewsData';

export default function CustomerReviews() {
  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Summary Banner */}
        <div className="bg-[#043263] rounded-3xl p-8 lg:p-10 text-white mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#00B2FE]/20 blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-6 text-center lg:text-left">
              <span className="text-[#00B2FE] text-xs font-bold uppercase tracking-widest">
                VERIFIED UK TESTIMONIALS
              </span>
              <h2 id="reviews-heading" className="text-3xl sm:text-4xl font-extrabold mt-1">
                Rated 5.0 Stars Across Great Britain
              </h2>
              <p className="mt-2 text-sm text-blue-100 font-medium">
                Our customers love our courteous team, deep steam extraction results, and our "Pay Only If You're Happy" zero-risk policy.
              </p>
            </div>

            {/* Metrics Counter */}
            <div className="lg:col-span-6 grid grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                <div className="text-2xl sm:text-3xl font-black text-amber-400">{reviewSummary.averageRating.toFixed(1)} ★</div>
                <div className="text-[11px] sm:text-xs text-slate-200 mt-1 font-semibold">Average Rating</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                <div className="text-2xl sm:text-3xl font-black text-[#25D366]">{reviewSummary.satisfactionRate}</div>
                <div className="text-[11px] sm:text-xs text-slate-200 mt-1 font-semibold">Satisfaction</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                <div className="text-2xl sm:text-3xl font-black text-[#00B2FE]">{reviewSummary.totalReviews}+</div>
                <div className="text-[11px] sm:text-xs text-slate-200 mt-1 font-semibold">Happy Homes</div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsData.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-6 rounded-2xl bg-[#F4F8FC] border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Rating & Verification */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                    <CheckCircle className="w-3 h-3 text-[#25D366]" />
                    <span>{review.platform}</span>
                  </span>
                </div>

                {/* Review Title */}
                <h3 className="text-base font-bold text-[#043263] leading-snug mb-2">
                  "{review.title}"
                </h3>

                {/* Review Body */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-4">
                  "{review.comment}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#043263] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#043263]">{review.name}</h4>
                    <p className="text-[11px] text-slate-500">{review.location}</p>
                  </div>
                </div>

                <span className="text-[11px] font-medium text-slate-400">
                  {review.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leave a review / satisfaction callout */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
            <ShieldCheck className="w-5 h-5 text-[#0072CE]" />
            <span>
              Every clean comes backed by our <strong>"Pay Only If You're Happy"</strong> guarantee. Zero risk!
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
