import { motion } from 'framer-motion';
import BrandLogo from './BrandLogo';

export default function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#043263] px-4"
    >
      {/* Background ambient water glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#00B2FE]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#0072CE]/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-sm w-full text-center">
        {/* Animated Logo Container */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: [0.85, 1.03, 1], opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative mb-6"
        >
          <BrandLogo variant="dark" heightClass="h-20 sm:h-24" className="drop-shadow-lg" />
        </motion.div>

        {/* Brand Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-[#00B2FE] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6"
        >
          A Cleaner Home Feels Better!
        </motion.p>

        {/* Loading Bar */}
        <div className="w-56 h-1.5 bg-white/15 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: 'easeInOut'
            }}
            className="w-1/2 h-full bg-gradient-to-r from-[#0072CE] via-[#00B2FE] to-[#25D366] rounded-full shadow-[0_0_12px_rgba(0,178,254,0.8)]"
          />
        </div>

        {/* Trust Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-4 flex items-center gap-2 text-xs text-blue-100"
        >
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
          <span>UK Professional Steam Cleaning</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
