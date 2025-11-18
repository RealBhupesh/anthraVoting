'use client';

import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Users,
  Vote,
  TrendingUp,
  Clock,
  Download,
  Send,
  BarChart3,
  Activity,
  AlertCircle,
  CheckCircle2,
  Eye,
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import AdminLayout from '@/components/admin/AdminLayout';

const candidates = [
  { id: 1, name: 'Sarah Kumar', votes: 474, percentage: 38, trend: '+2.3%' },
  { id: 2, name: 'Rahul Verma', votes: 362, percentage: 29, trend: '+1.8%' },
  { id: 3, name: 'Priya Sharma', votes: 237, percentage: 19, trend: '+0.5%' },
  { id: 4, name: 'Amit Patel', votes: 175, percentage: 14, trend: '-0.2%' },
];

const votingActivity = [
  { time: '14:30', votes: 47, peak: false },
  { time: '14:45', votes: 52, peak: false },
  { time: '15:00', votes: 89, peak: true },
  { time: '15:15', votes: 73, peak: false },
  { time: '15:30', votes: 61, peak: false },
  { time: '15:45', votes: 55, peak: false },
];

export default function ElectionMonitoring({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [liveVotes, setLiveVotes] = useState(1248);
  const [isLive, setIsLive] = useState(true);

  // Simulate live vote updates
  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      if (Math.random() > 0.5) {
        setLiveVotes((prev) => prev + Math.floor(Math.random() * 5) + 1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isLive]);

  return (
    <AdminLayout>
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Elections
        </button>

        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold text-slate-900">Student Council President 2025</h1>
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-success-green-100 text-success-green-700 rounded-full text-sm font-semibold">
                <Activity className="w-3 h-3" />
                Live
              </span>
            </div>
            <p className="text-slate-600">Real-time monitoring and analytics</p>
          </div>

          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
              <Download className="w-4 h-4" />
              Export
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
              <Send className="w-4 h-4" />
              Send Reminder
            </button>
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
              End Early
            </button>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          {
            label: 'Participation',
            value: 67.2,
            suffix: '%',
            icon: TrendingUp,
            color: 'from-success-green-500 to-success-green-600',
            change: '+0.5%',
            subtitle: '1,248 / 1,856',
          },
          {
            label: 'Vote Rate',
            value: 24,
            suffix: ' votes/hr',
            icon: Activity,
            color: 'from-trust-blue-500 to-trust-blue-600',
            change: 'Steady',
            subtitle: 'Current trend',
          },
          {
            label: 'Time Remaining',
            value: '2d 14h',
            suffix: '',
            icon: Clock,
            color: 'from-democracy-purple-500 to-democracy-purple-600',
            change: '32m',
            subtitle: 'Until close',
          },
          {
            label: 'Blockchain',
            value: 100,
            suffix: '%',
            icon: CheckCircle2,
            color: 'from-vote-gold-500 to-vote-gold-600',
            change: 'Verified',
            subtitle: '1,248 txns',
          },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-semibold text-success-green-600">{stat.change}</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">
              {typeof stat.value === 'number' ? <CountUp end={stat.value} duration={2} decimals={stat.label === 'Participation' ? 1 : 0} /> : stat.value}
              {stat.suffix}
            </h3>
            <p className="text-sm text-slate-600">{stat.label}</p>
            <p className="text-xs text-slate-500 mt-1">{stat.subtitle}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Real-Time Results */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl p-6 shadow-lg mb-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-900">🔴 LIVE RESULTS</h2>
              <div className="flex items-center gap-4 text-sm text-slate-600">
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-success-green-500 rounded-full animate-pulse" />
                  Updates every 5 seconds
                </span>
                <span>{liveVotes.toLocaleString()} votes</span>
              </div>
            </div>

            <div className="space-y-4">
              {candidates.map((candidate, index) => (
                <div key={candidate.id} className="border border-slate-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-slate-400">
                        {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}`}
                      </span>
                      <div>
                        <h3 className="font-semibold text-slate-900">{candidate.name}</h3>
                        <p className="text-sm text-slate-600">
                          {candidate.votes.toLocaleString()} votes • {candidate.percentage}%
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      {index === 0 && (
                        <span className="inline-block px-2 py-1 bg-vote-gold-100 text-vote-gold-700 text-xs font-bold rounded-full mb-1">
                          LEADING
                        </span>
                      )}
                      <p className="text-sm font-semibold text-success-green-600">{candidate.trend}</p>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="relative w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${candidate.percentage}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`h-full ${
                        index === 0
                          ? 'bg-gradient-to-r from-vote-gold-400 to-vote-gold-500'
                          : 'bg-gradient-to-r from-trust-blue-500 to-trust-blue-600'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 p-4 bg-slate-50 rounded-lg">
              <p className="text-sm text-slate-700 mb-2">
                <strong>Projected Winner:</strong> Sarah Kumar (67% confidence)
              </p>
              <p className="text-xs text-slate-600">
                Based on current voting patterns and historical data
              </p>
            </div>
          </motion.div>

          {/* Participation Trend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <h2 className="text-xl font-bold text-slate-900 mb-6">📈 Voting Activity</h2>

            {/* Chart */}
            <div className="flex items-end gap-2 h-48 mb-4">
              {votingActivity.map((activity, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(activity.votes / 100) * 100}%` }}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                    className={`w-full rounded-t-lg ${
                      activity.peak
                        ? 'bg-gradient-to-t from-vote-gold-600 to-vote-gold-400'
                        : 'bg-gradient-to-t from-trust-blue-600 to-trust-blue-400'
                    }`}
                  />
                  <p className="text-xs text-slate-600">{activity.time}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
              <div>
                <p className="text-xs text-slate-600">Peak Hour</p>
                <p className="text-lg font-bold text-slate-900">15:00</p>
                <p className="text-xs text-success-green-600">89 votes</p>
              </div>
              <div>
                <p className="text-xs text-slate-600">Average/Hour</p>
                <p className="text-lg font-bold text-slate-900">63</p>
                <p className="text-xs text-slate-600">Last 6 hours</p>
              </div>
              <div>
                <p className="text-xs text-slate-600">Projected Final</p>
                <p className="text-lg font-bold text-slate-900">1,673</p>
                <p className="text-xs text-slate-600">90.2% turnout</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Alerts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <h2 className="text-xl font-bold text-slate-900 mb-4">🚨 Alerts</h2>

            <div className="space-y-3">
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-amber-900">Engineering Dept Low</p>
                    <p className="text-xs text-amber-700 mt-1">Only 28% participation</p>
                    <button className="text-xs text-amber-600 hover:text-amber-700 font-semibold mt-2">
                      Send Reminder
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-success-green-50 border border-success-green-200 rounded-lg">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-success-green-900">All Systems Normal</p>
                    <p className="text-xs text-success-green-700 mt-1">No issues detected</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Demographics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <h2 className="text-xl font-bold text-slate-900 mb-4">👥 Demographics</h2>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-slate-700">CSE</span>
                  <span className="font-semibold text-slate-900">38%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-[38%] bg-gradient-to-r from-trust-blue-500 to-trust-blue-600" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-slate-700">ME</span>
                  <span className="font-semibold text-slate-900">24%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-[24%] bg-gradient-to-r from-democracy-purple-500 to-democracy-purple-600" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-slate-700">ECE</span>
                  <span className="font-semibold text-slate-900">18%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-[18%] bg-gradient-to-r from-success-green-500 to-success-green-600" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-slate-700">Others</span>
                  <span className="font-semibold text-slate-900">20%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-[20%] bg-gradient-to-r from-vote-gold-500 to-vote-gold-600" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="bg-gradient-to-br from-trust-blue-600 to-democracy-purple-600 rounded-xl p-6 shadow-lg text-white"
          >
            <h3 className="text-lg font-bold mb-4">⚡ Quick Actions</h3>
            <div className="space-y-2">
              <Link
                href={`/admin/elections/${params.id}/voters`}
                className="block w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg transition-all text-center font-medium"
              >
                Manage Voters
              </Link>
              <button className="block w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg transition-all text-center font-medium">
                Send Reminder
              </button>
              <button className="block w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg transition-all text-center font-medium">
                Download Report
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </AdminLayout>
  );
}
