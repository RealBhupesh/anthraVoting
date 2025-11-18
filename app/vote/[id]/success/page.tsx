'use client';

import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Shield,
  Download,
  Share2,
  Home,
  TrendingUp,
  Award,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Confetti = dynamic(() => import('react-confetti'), { ssr: false });

export default function VoteSuccessPage({ params }: { params: { id: string } }) {
  const [showConfetti, setShowConfetti] = useState(true);
  const [verificationStep, setVerificationStep] = useState(0);

  const verificationSteps = [
    { label: 'Encrypting your vote...', duration: 1000 },
    { label: 'Submitting to blockchain...', duration: 1500 },
    { label: 'Verifying transaction...', duration: 1200 },
    { label: 'Vote confirmed!', duration: 800 },
  ];

  useEffect(() => {
    // Animate through verification steps
    const timer = setTimeout(() => {
      if (verificationStep < verificationSteps.length - 1) {
        setVerificationStep(verificationStep + 1);
      }
    }, verificationSteps[verificationStep].duration);

    return () => clearTimeout(timer);
  }, [verificationStep]);

  useEffect(() => {
    // Hide confetti after 5 seconds
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const voteData = {
    transactionId: '0x7f3c8a9b2e1d5c4f6a8e9b0c7d2a1e3f',
    blockNumber: '847392',
    timestamp: new Date().toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }),
    electionTitle: 'Student Council President 2025',
    candidate: 'Sarah Kumar',
    voterNumber: 1248,
    currentParticipation: 67.2,
  };

  const achievement = {
    title: 'Speed Voter',
    description: 'Voted in under 2 minutes',
    xp: 50,
    progress: 68,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-trust-blue-900 to-democracy-purple-900 flex items-center justify-center p-6 relative overflow-hidden">
      {showConfetti && <Confetti recycle={false} numberOfPieces={500} />}

      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
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

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl relative z-10"
      >
        {/* Verification Animation */}
        {verificationStep < 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="w-full h-full border-4 border-white/20 border-t-white rounded-full"
              />
            </div>
            <p className="text-white text-xl font-semibold">{verificationSteps[verificationStep].label}</p>
          </motion.div>
        )}

        {/* Success Content */}
        {verificationStep === 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Success Header */}
            <div className="bg-gradient-to-r from-success-green-600 to-success-green-500 p-8 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.2 }}
                className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center"
              >
                <CheckCircle2 className="w-12 h-12 text-success-green-600" />
              </motion.div>
              <h1 className="text-3xl font-bold text-white mb-2">Vote Successfully Cast!</h1>
              <p className="text-white/90">Your voice has been heard. Thank you for participating!</p>
            </div>

            {/* Vote Details */}
            <div className="p-8">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-3 mb-4">
                  <Shield className="w-5 h-5 text-success-green-600 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 mb-3">Blockchain Verification</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Transaction ID:</span>
                        <span className="font-mono text-slate-900 text-xs">{voteData.transactionId.slice(0, 20)}...</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Block Number:</span>
                        <span className="font-semibold text-slate-900">#{voteData.blockNumber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Timestamp:</span>
                        <span className="font-semibold text-slate-900">{voteData.timestamp}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Status:</span>
                        <span className="text-success-green-600 font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" />
                          Verified & Immutable
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Impact Stats */}
              <div className="bg-gradient-to-br from-trust-blue-50 to-democracy-purple-50 border border-trust-blue-200 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-trust-blue-600" />
                  Your Impact
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-slate-600">You're voter</p>
                    <p className="text-2xl font-bold text-trust-blue-600">#{voteData.voterNumber.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Current participation</p>
                    <p className="text-2xl font-bold text-success-green-600">{voteData.currentParticipation}%</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 mt-3">
                  Participation increased by 0.05% with your vote!
                </p>
              </div>

              {/* Achievement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-r from-vote-gold-50 to-vote-gold-100 border-2 border-vote-gold-300 rounded-xl p-6 mb-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-vote-gold-500 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles className="w-4 h-4 text-vote-gold-600" />
                      <h3 className="font-bold text-vote-gold-900">Achievement Unlocked!</h3>
                    </div>
                    <p className="text-sm text-vote-gold-700">{achievement.title}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-vote-gold-700">+{achievement.xp} XP</p>
                  </div>
                </div>
                <p className="text-sm text-vote-gold-700 mb-2">{achievement.description}</p>
                <div>
                  <div className="flex items-center justify-between text-xs text-vote-gold-700 mb-1">
                    <span>Progress to Level 6</span>
                    <span>{achievement.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-vote-gold-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${achievement.progress}%` }}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="h-full bg-gradient-to-r from-vote-gold-500 to-vote-gold-600"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Actions */}
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg transition-colors">
                    <Download className="w-4 h-4" />
                    Download Certificate
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg transition-colors">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                </div>

                <Link
                  href={`/vote/${params.id}/results`}
                  className="block w-full text-center px-4 py-3 bg-trust-blue-600 hover:bg-trust-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  View Live Results
                </Link>

                <Link
                  href="/vote"
                  className="block w-full text-center px-4 py-3 border-2 border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Home className="w-4 h-4" />
                  Return to Dashboard
                </Link>
              </div>

              {/* Notification Opt-in */}
              <div className="mt-6 pt-6 border-t border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-3">🔔 Results Notification</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" defaultChecked />
                    <span className="text-sm text-slate-700">Email me when results are announced</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" defaultChecked />
                    <span className="text-sm text-slate-700">Push notification</span>
                  </label>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
