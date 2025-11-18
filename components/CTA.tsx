'use client';

import { motion } from 'framer-motion';
import { Vote, ArrowRight, Calendar, MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-trust-blue-900 via-democracy-purple-900 to-trust-blue-800 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
            }}
            animate={{
              y: [null, (Math.random() - 0.5) * 200 + '%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Revolutionize Voting?
          </h2>

          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join 10,000+ organizations making democracy digital
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-success-green-600 to-success-green-500 text-white font-bold px-8 py-4 rounded-xl shadow-2xl flex items-center gap-2 hover:shadow-success-green-500/50 transition-all"
            >
              <Vote className="w-5 h-5" />
              Start Free Trial - No Credit Card
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:bg-white/20 hover:border-white/50 flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Schedule Demo
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:bg-white/20 hover:border-white/50 flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Chat with Sales
            </motion.button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-success-green-500 rounded-full flex items-center justify-center">
                <span className="text-xs">✓</span>
              </div>
              Setup in 5 minutes
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-success-green-500 rounded-full flex items-center justify-center">
                <span className="text-xs">✓</span>
              </div>
              14-day free trial
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-success-green-500 rounded-full flex items-center justify-center">
                <span className="text-xs">✓</span>
              </div>
              No credit card
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-success-green-500 rounded-full flex items-center justify-center">
                <span className="text-xs">✓</span>
              </div>
              Cancel anytime
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
