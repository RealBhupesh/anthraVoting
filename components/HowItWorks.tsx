'use client';

import { motion } from 'framer-motion';
import { FileEdit, Vote, Shield, BarChart3, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import CountUp from 'react-countup';

const steps = [
  {
    number: 1,
    title: 'Create',
    subtitle: 'Launch Your Election in Minutes',
    description: 'Set up in 3 easy steps: Add candidates, invite voters, go live. No technical knowledge required.',
    icon: FileEdit,
    color: 'from-trust-blue-500 to-trust-blue-600',
    demo: 'form-builder',
  },
  {
    number: 2,
    title: 'Vote',
    subtitle: 'Voting Made Delightful',
    description: 'Intuitive interface that anyone can use. One tap to cast, instant verification.',
    icon: Vote,
    color: 'from-democracy-purple-500 to-democracy-purple-600',
    demo: 'voting',
  },
  {
    number: 3,
    title: 'Verify',
    subtitle: 'Blockchain-Verified Integrity',
    description: 'Every vote is cryptographically secured and independently verifiable. Trust through transparency.',
    icon: Shield,
    color: 'from-success-green-500 to-success-green-600',
    demo: 'blockchain',
  },
  {
    number: 4,
    title: 'Results',
    subtitle: 'Real-Time Analytics, Zero Delay',
    description: 'Watch results flow in live. Export reports, generate certificates, share instantly.',
    icon: BarChart3,
    color: 'from-vote-gold-500 to-vote-gold-600',
    demo: 'analytics',
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-trust-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-democracy-purple-500 rounded-full blur-3xl" />
      </div>

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
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From creation to results in 4 simple steps
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onMouseEnter={() => setActiveStep(index)}
                className="relative group cursor-pointer"
              >
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-1">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                      className="h-full bg-gradient-to-r from-slate-300 to-slate-200 origin-left"
                    />
                  </div>
                )}

                {/* Step card */}
                <div
                  className={`relative bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 ${
                    activeStep === index
                      ? 'scale-105 shadow-2xl ring-2 ring-trust-blue-500'
                      : 'hover:shadow-xl'
                  }`}
                >
                  {/* Number badge */}
                  <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br ${step.color} text-white font-bold text-xl flex items-center justify-center shadow-lg`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center mb-4 mt-4`}>
                    <step.icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm font-semibold text-trust-blue-600 mb-3">
                    {step.subtitle}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Hover indicator */}
                  <div className={`mt-4 flex items-center gap-2 text-trust-blue-600 font-semibold text-sm transition-all duration-300 ${activeStep === index ? 'opacity-100 translate-x-2' : 'opacity-0 translate-x-0'}`}>
                    Try it
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interactive demo area */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-3xl p-8 shadow-2xl"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Interactive Demo: {steps[activeStep].title}
              </h3>
              <p className="text-slate-600">
                {steps[activeStep].description}
              </p>
            </div>

            {/* Demo visualization */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 min-h-[300px] flex items-center justify-center">
              {activeStep === 0 && <FormBuilderDemo />}
              {activeStep === 1 && <VotingDemo />}
              {activeStep === 2 && <BlockchainDemo />}
              {activeStep === 3 && <AnalyticsDemo />}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FormBuilderDemo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-md space-y-4"
    >
      <div className="bg-white rounded-lg p-4 shadow-md">
        <div className="h-3 bg-slate-200 rounded w-3/4 mb-3" />
        <div className="h-2 bg-slate-100 rounded w-1/2" />
      </div>
      <div className="bg-white rounded-lg p-4 shadow-md">
        <div className="h-3 bg-slate-200 rounded w-2/3 mb-3" />
        <div className="h-2 bg-slate-100 rounded w-5/6" />
      </div>
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="bg-gradient-to-r from-trust-blue-500 to-trust-blue-600 text-white rounded-lg p-4 shadow-lg text-center font-semibold"
      >
        Create Election
      </motion.div>
    </motion.div>
  );
}

function VotingDemo() {
  const [voted, setVoted] = useState(false);

  return (
    <div className="w-full max-w-md space-y-3">
      {[1, 2, 3].map((option) => (
        <motion.button
          key={option}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setVoted(true)}
          className={`w-full bg-white rounded-lg p-4 shadow-md text-left transition-all ${
            voted && option === 2
              ? 'ring-2 ring-success-green-500 bg-success-green-50'
              : 'hover:shadow-lg'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className={`w-5 h-5 rounded-full border-2 ${
              voted && option === 2
                ? 'border-success-green-500 bg-success-green-500'
                : 'border-slate-300'
            } flex items-center justify-center`}>
              {voted && option === 2 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-2 h-2 bg-white rounded-full"
                />
              )}
            </div>
            <div className="flex-1">
              <div className="h-3 bg-slate-200 rounded w-3/4" />
            </div>
          </div>
        </motion.button>
      ))}
      {voted && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-success-green-600 font-semibold"
        >
          ✓ Vote Recorded!
        </motion.div>
      )}
    </div>
  );
}

function BlockchainDemo() {
  return (
    <div className="relative w-full max-w-lg">
      {/* Blockchain nodes */}
      <div className="grid grid-cols-3 gap-4">
        {[...Array(9)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="aspect-square bg-white rounded-lg shadow-md flex items-center justify-center"
          >
            <Shield className="w-6 h-6 text-success-green-500" />
          </motion.div>
        ))}
      </div>

      {/* Connecting lines animation */}
      <svg className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.line
            key={i}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: i * 0.2, repeat: Infinity, repeatDelay: 3 }}
            x1={`${(i % 3) * 33 + 16}%`}
            y1={`${Math.floor(i / 3) * 50 + 25}%`}
            x2={`${((i + 1) % 3) * 33 + 16}%`}
            y2={`${Math.floor((i + 1) / 3) * 50 + 25}%`}
            stroke="rgba(5, 150, 105, 0.3)"
            strokeWidth="2"
          />
        ))}
      </svg>
    </div>
  );
}

function AnalyticsDemo() {
  return (
    <div className="w-full max-w-md space-y-4">
      <div className="flex items-end gap-2 h-40">
        {[65, 45, 80, 55, 90, 70].map((height, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex-1 bg-gradient-to-t from-trust-blue-600 to-trust-blue-400 rounded-t-lg"
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-3 shadow-md text-center">
          <div className="text-2xl font-bold text-trust-blue-600">
            <CountUp end={1247} duration={2} />
          </div>
          <div className="text-xs text-slate-600">Total Votes</div>
        </div>
        <div className="bg-white rounded-lg p-3 shadow-md text-center">
          <div className="text-2xl font-bold text-success-green-600">
            <CountUp end={89} duration={2} />%
          </div>
          <div className="text-xs text-slate-600">Turnout</div>
        </div>
        <div className="bg-white rounded-lg p-3 shadow-md text-center">
          <div className="text-2xl font-bold text-democracy-purple-600">
            <CountUp end={100} duration={2} />%
          </div>
          <div className="text-xs text-slate-600">Verified</div>
        </div>
      </div>
    </div>
  );
}
