'use client';

import { motion } from 'framer-motion';
import { Check, Sparkles, Building2, Crown } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    icon: '🌱',
    price: 0,
    period: 'Forever Free',
    description: 'Perfect for small elections and testing',
    features: [
      'Up to 100 votes/month',
      '1 active election at a time',
      'Basic analytics',
      'Email support',
      '3 question types',
      'Mobile app access',
    ],
    cta: 'Get Started Free',
    highlighted: false,
    badge: null,
  },
  {
    name: 'Growth',
    icon: '🚀',
    price: 2999,
    period: '/month',
    description: 'For growing organizations',
    features: [
      'Up to 10,000 votes/month',
      'Unlimited active elections',
      'Advanced analytics & exports',
      'Priority support (24/7)',
      'Custom branding',
      '2FA authentication',
      'API access',
      'Remove watermark',
    ],
    cta: 'Start 14-Day Free Trial',
    highlighted: true,
    badge: 'MOST POPULAR',
  },
  {
    name: 'Scale',
    icon: '💼',
    price: 9999,
    period: '/month',
    description: 'For large-scale operations',
    features: [
      'Unlimited votes',
      'White-label solution',
      'Dedicated account manager',
      'Custom domain',
      'Advanced fraud detection',
      'SSO integration',
      'Custom workflows',
      'SLA guarantee (99.9%)',
      'Training sessions',
    ],
    cta: 'Schedule Demo',
    highlighted: false,
    badge: null,
  },
  {
    name: 'Enterprise',
    icon: '👑',
    price: null,
    period: 'Custom',
    description: 'For governments & large organizations',
    features: [
      'Unlimited everything',
      'On-premise deployment',
      'Custom integrations',
      'Dedicated infrastructure',
      'Legal & compliance support',
      'Custom SLA',
      'Multi-region deployment',
      'Executive sponsor',
    ],
    cta: 'Contact Sales',
    highlighted: false,
    badge: null,
  },
];

export default function Pricing() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96 bg-democracy-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-trust-blue-500 rounded-full blur-3xl" />
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
            <span className="gradient-text">Plans for Everyone</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            From small teams to global enterprises. Start free, scale as you grow.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className="text-slate-600">Monthly</span>
            <button className="relative w-14 h-8 bg-trust-blue-600 rounded-full transition-all">
              <div className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md" />
            </button>
            <span className="text-slate-900 font-semibold">
              Yearly <span className="text-success-green-600 text-sm">(Save 17%)</span>
            </span>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-success-green-500" />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-success-green-500" />
              14-day free trial
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-success-green-500" />
              Cancel anytime
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PricingCard({ plan, index }: { plan: typeof plans[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={`relative bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 ${
        plan.highlighted
          ? 'lg:scale-110 lg:-mt-4 ring-2 ring-trust-blue-500 shadow-2xl z-10'
          : 'hover:shadow-xl'
      }`}
    >
      {/* Badge */}
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-vote-gold-500 to-vote-gold-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1">
          <Sparkles className="w-3 h-3" />
          {plan.badge}
        </div>
      )}

      {/* Icon */}
      <div className="text-4xl mb-4">{plan.icon}</div>

      {/* Plan name */}
      <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>

      {/* Price */}
      <div className="mb-4">
        {plan.price !== null ? (
          <div className="flex items-baseline gap-1">
            <span className="text-sm text-slate-600">₹</span>
            <span className="text-4xl font-bold text-slate-900">
              {plan.price.toLocaleString('en-IN')}
            </span>
            <span className="text-slate-600">{plan.period}</span>
          </div>
        ) : (
          <div className="text-3xl font-bold text-slate-900">{plan.period}</div>
        )}
      </div>

      {/* Description */}
      <p className="text-slate-600 text-sm mb-6">{plan.description}</p>

      {/* CTA Button */}
      <button
        className={`w-full font-semibold py-3 px-6 rounded-lg transition-all duration-300 mb-6 ${
          plan.highlighted
            ? 'bg-gradient-to-r from-trust-blue-600 to-trust-blue-500 text-white shadow-lg hover:shadow-xl hover:scale-105'
            : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
        }`}
      >
        {plan.cta}
      </button>

      {/* Features */}
      <div className="space-y-3">
        {plan.features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + i * 0.05 }}
            className="flex items-start gap-3"
          >
            <Check className="w-5 h-5 text-success-green-500 flex-shrink-0 mt-0.5" />
            <span className="text-slate-700 text-sm">{feature}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
