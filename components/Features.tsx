'use client';

import { motion } from 'framer-motion';
import {
  Lock,
  Zap,
  Gamepad2,
  Smartphone,
  Globe,
  BarChart3,
  Accessibility,
  Palette,
} from 'lucide-react';

const features = [
  {
    title: 'Bank-Grade Security',
    description: '256-bit AES encryption, two-factor authentication, and blockchain audit trail. Your votes are Fort Knox secure.',
    icon: Lock,
    color: 'from-red-500 to-red-600',
    details: ['256-bit encryption', '2FA authentication', 'Blockchain audit', 'GDPR compliant'],
  },
  {
    title: 'Real-Time Results',
    description: 'WebSocket updates with <100ms latency. Watch democracy happen live.',
    icon: Zap,
    color: 'from-yellow-500 to-yellow-600',
    details: ['<100ms latency', 'Live updates', 'Auto-refresh', 'Push notifications'],
  },
  {
    title: 'Gamification Engine',
    description: 'Make voting fun with achievements, leaderboards, and rewards. Democracy has never been this engaging.',
    icon: Gamepad2,
    color: 'from-purple-500 to-purple-600',
    details: ['Achievements', 'Leaderboards', 'Voting streaks', 'XP rewards'],
  },
  {
    title: 'Cross-Platform',
    description: 'Web, iOS, Android, desktop—vote anywhere. Even offline mode supported.',
    icon: Smartphone,
    color: 'from-blue-500 to-blue-600',
    details: ['PWA', 'Native iOS/Android', 'Desktop app', 'Offline mode'],
  },
  {
    title: 'Multi-Language',
    description: '50+ languages with AI-powered translation. Democracy speaks your language.',
    icon: Globe,
    color: 'from-green-500 to-green-600',
    details: ['50+ languages', 'RTL support', 'Auto-translation', 'Unicode ready'],
  },
  {
    title: 'Advanced Analytics',
    description: '20+ chart types, custom reports, and demographic breakdowns. Data that tells stories.',
    icon: BarChart3,
    color: 'from-indigo-500 to-indigo-600',
    details: ['20+ charts', 'PDF/Excel export', 'Demographics', 'Trend analysis'],
  },
  {
    title: 'Accessibility First',
    description: 'WCAG AAA compliant. Screen readers, keyboard navigation, and voice voting. Voting for everyone.',
    icon: Accessibility,
    color: 'from-teal-500 to-teal-600',
    details: ['WCAG AAA', 'Screen reader', 'Keyboard nav', 'Voice voting'],
  },
  {
    title: 'White Label Ready',
    description: 'Your brand, your domain, your way. Fully customizable from colors to emails.',
    icon: Palette,
    color: 'from-pink-500 to-pink-600',
    details: ['Custom branding', 'Your domain', 'Email templates', 'API access'],
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">Built Different</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Every feature designed to make voting secure, transparent, and delightful
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const isLarge = index === 0 || index === 2;
  const gridClass = isLarge ? 'lg:col-span-2 lg:row-span-2' : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.6 }}
      className={`group relative bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 ${gridClass} overflow-hidden`}
    >
      {/* Hover gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} text-white flex items-center justify-center mb-4 shadow-lg`}
        >
          <feature.icon className="w-7 h-7" />
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 mb-4 text-sm leading-relaxed">
          {feature.description}
        </p>

        {/* Details list */}
        <div className="mt-auto space-y-2">
          {feature.details.map((detail, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 + i * 0.05 }}
              className="flex items-center gap-2 text-sm"
            >
              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${feature.color}`} />
              <span className="text-slate-700">{detail}</span>
            </motion.div>
          ))}
        </div>

        {/* Hover effect - "Learn More" */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <div className={`text-sm font-semibold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
            Learn more →
          </div>
        </motion.div>
      </div>

      {/* Animated border on hover */}
      <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-br group-hover:${feature.color} transition-all duration-300`} />
    </motion.div>
  );
}
