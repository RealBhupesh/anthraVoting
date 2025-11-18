'use client';

import { motion } from 'framer-motion';
import { Vote, Shield, Zap, CheckCircle2, ArrowRight, Play } from 'lucide-react';
import CountUp from 'react-countup';
import { useState } from 'react';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-trust-blue-900 to-democracy-purple-900">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/50" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
            >
              <Shield className="w-4 h-4 text-success-green-400" />
              <span className="text-white/90 text-sm font-medium">
                Blockchain-Secured Voting Platform
              </span>
            </motion.div>

            {/* Main headline with typewriter effect */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
            >
              Democracy That Works
              <br />
              <span className="bg-gradient-to-r from-vote-gold-400 via-success-green-400 to-democracy-purple-400 bg-clip-text text-transparent">
                At the Speed of Trust
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Secure, transparent, and delightfully simple voting for the modern world.
              <br />
              <span className="text-success-green-400 font-semibold">Powered by blockchain.</span>
            </motion.p>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-8 mb-12"
            >
              <StatItem
                icon={<Vote className="w-6 h-6" />}
                value={2400000}
                suffix="+"
                label="Votes Cast"
              />
              <StatItem
                icon={<Zap className="w-6 h-6" />}
                value={99.9}
                suffix="%"
                label="Uptime"
                decimals={1}
              />
              <StatItem
                icon={<Shield className="w-6 h-6" />}
                value={256}
                suffix="-bit"
                label="Encryption"
              />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button
                className="group relative bg-gradient-to-r from-success-green-600 to-success-green-500 text-white font-bold px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 hover:shadow-success-green-500/50 hover:scale-105 flex items-center gap-2"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Vote className="w-5 h-5" />
                Start Free Election
                <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />

                {/* Pulse animation */}
                <span className="absolute inset-0 rounded-xl bg-white/20 animate-ping opacity-75" />
              </button>

              <button className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-white/20 hover:border-white/50 flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </motion.div>
          </motion.div>

          {/* 3D Voting Booth Placeholder (will be enhanced with Three.js) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="relative mx-auto max-w-4xl mt-16"
          >
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl hero-glow">
              {/* Visual representation */}
              <div className="aspect-video bg-gradient-to-br from-trust-blue-500/20 to-democracy-purple-500/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Animated ballot */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotateZ: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  <div className="w-32 h-40 bg-white rounded-lg shadow-2xl p-4 flex flex-col gap-2">
                    <div className="h-3 bg-trust-blue-200 rounded" />
                    <div className="h-3 bg-trust-blue-200 rounded w-3/4" />
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full border-2 border-trust-blue-400" />
                        <div className="h-2 bg-slate-200 rounded flex-1" />
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full border-2 border-trust-blue-400 bg-success-green-500 flex items-center justify-center">
                          <CheckCircle2 className="w-3 h-3 text-white" />
                        </div>
                        <div className="h-2 bg-slate-200 rounded flex-1" />
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full border-2 border-trust-blue-400" />
                        <div className="h-2 bg-slate-200 rounded flex-1" />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Particles flowing */}
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-success-green-400 rounded-full"
                    initial={{
                      x: '50%',
                      y: '50%',
                    }}
                    animate={{
                      x: `${50 + (Math.random() - 0.5) * 100}%`,
                      y: `${50 + (Math.random() - 0.5) * 100}%`,
                      opacity: [1, 0],
                      scale: [1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.1,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </div>

              {/* Blockchain verification badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-success-green-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 font-semibold"
              >
                <CheckCircle2 className="w-5 h-5" />
                Blockchain Verified
              </motion.div>
            </div>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-20 text-center"
          >
            <p className="text-white/60 text-sm mb-6">Trusted by 1,000+ organizations worldwide</p>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
              {['Universities', 'Companies', 'NGOs', 'Events', 'Communities'].map((org, i) => (
                <div key={i} className="text-white/80 font-semibold text-sm px-4 py-2 bg-white/5 rounded-lg">
                  {org}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

function StatItem({ icon, value, suffix, label, decimals = 0 }: {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-vote-gold-400">
        {icon}
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-3xl md:text-4xl font-bold text-white">
          <CountUp end={value} duration={2.5} decimals={decimals} />
        </span>
        <span className="text-xl text-white/80">{suffix}</span>
      </div>
      <span className="text-sm text-white/60">{label}</span>
    </div>
  );
}
