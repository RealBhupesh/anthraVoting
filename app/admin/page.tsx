'use client';

import { motion } from 'framer-motion';
import {
  Vote,
  CheckCircle2,
  Users,
  TrendingUp,
  ArrowUp,
  ArrowDown,
  Clock,
  AlertCircle,
  BarChart3,
  Activity,
} from 'lucide-react';
import Link from 'next/link';
import CountUp from 'react-countup';
import AdminLayout from '@/components/admin/AdminLayout';

const stats = [
  {
    name: 'Active Elections',
    value: 7,
    change: '+2',
    trend: 'up',
    icon: Vote,
    color: 'from-trust-blue-500 to-trust-blue-600',
    subtitle: 'today',
  },
  {
    name: 'Completed Elections',
    value: 142,
    change: '+8',
    trend: 'up',
    icon: CheckCircle2,
    color: 'from-success-green-500 to-success-green-600',
    subtitle: 'this week',
  },
  {
    name: 'Total Voters',
    value: 24856,
    change: '+1,247',
    trend: 'up',
    icon: Users,
    color: 'from-democracy-purple-500 to-democracy-purple-600',
    subtitle: 'this month',
  },
  {
    name: 'Votes This Month',
    value: 15247,
    change: '+23%',
    trend: 'up',
    icon: TrendingUp,
    color: 'from-vote-gold-500 to-vote-gold-600',
    subtitle: 'vs last month',
  },
];

const activeElections = [
  {
    id: 1,
    title: 'Student Council President 2025',
    participants: 1247,
    total: 1856,
    percentage: 67,
    timeLeft: '2d 14h left',
    status: 'active',
  },
  {
    id: 2,
    title: 'Department Budget Allocation',
    participants: 784,
    total: 1856,
    percentage: 42,
    timeLeft: '5d 3h left',
    status: 'active',
  },
  {
    id: 3,
    title: 'Class Representative Election',
    participants: 289,
    total: 1034,
    percentage: 28,
    timeLeft: '1d 8h left',
    status: 'warning',
  },
];

const recentActivity = [
  {
    action: '47 votes cast',
    election: 'Budget Poll',
    time: '2 min ago',
    icon: Vote,
  },
  {
    action: 'Reached 80% participation',
    election: 'Class Rep Election',
    time: '15 min ago',
    icon: TrendingUp,
  },
  {
    action: 'New voter list imported',
    election: '247 voters',
    time: '1 hour ago',
    icon: Users,
  },
  {
    action: 'Election closed',
    election: 'Sports Captain 2025',
    time: '3 hours ago',
    icon: CheckCircle2,
  },
];

export default function AdminDashboard() {
  return (
    <AdminLayout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Dashboard Overview</h1>
        <p className="text-slate-600">Welcome back, Admin! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <span className={`flex items-center gap-1 text-sm font-semibold ${
                stat.trend === 'up' ? 'text-success-green-600' : 'text-red-600'
              }`}>
                {stat.trend === 'up' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">
              <CountUp end={stat.value} duration={2} separator="," />
            </h3>
            <p className="text-sm text-slate-600">{stat.name}</p>
            <p className="text-xs text-slate-500 mt-1">{stat.subtitle}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Elections */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-900">🔴 Active Elections</h2>
              <Link
                href="/admin/elections"
                className="text-sm text-trust-blue-600 hover:text-trust-blue-700 font-semibold"
              >
                View All →
              </Link>
            </div>

            <div className="space-y-4">
              {activeElections.map((election) => (
                <div
                  key={election.id}
                  className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{election.title}</h3>
                      <p className="text-sm text-slate-600">
                        {election.participants.toLocaleString()} / {election.total.toLocaleString()} voters • {election.percentage}%
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span className="text-sm text-slate-600">{election.timeLeft}</span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="relative w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${election.percentage}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className={`h-full ${
                        election.status === 'warning'
                          ? 'bg-gradient-to-r from-red-400 to-red-500'
                          : 'bg-gradient-to-r from-trust-blue-500 to-trust-blue-600'
                      }`}
                    />
                  </div>

                  {election.status === 'warning' && (
                    <div className="mt-2 flex items-center gap-2 text-xs text-amber-600">
                      <AlertCircle className="w-3 h-3" />
                      <span>Low participation - Consider sending reminder</span>
                    </div>
                  )}

                  <div className="mt-3 flex gap-2">
                    <Link
                      href={`/admin/elections/${election.id}`}
                      className="flex-1 text-center px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg transition-colors"
                    >
                      View Dashboard
                    </Link>
                    <button className="px-3 py-1.5 bg-trust-blue-50 hover:bg-trust-blue-100 text-trust-blue-600 text-sm font-medium rounded-lg transition-colors">
                      Manage
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-6 grid grid-cols-2 gap-4"
          >
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-success-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-success-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">100%</p>
                  <p className="text-xs text-slate-600">Blockchain Verified</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-trust-blue-100 rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-trust-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">99.9%</p>
                  <p className="text-xs text-slate-600">System Uptime</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Recent Activity */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <h2 className="text-xl font-bold text-slate-900 mb-6">🔔 Recent Activity</h2>

            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <activity.icon className="w-4 h-4 text-slate-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900">{activity.action}</p>
                    <p className="text-xs text-slate-600">{activity.election}</p>
                    <p className="text-xs text-slate-400 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/admin/activity"
              className="block mt-4 text-center text-sm text-trust-blue-600 hover:text-trust-blue-700 font-semibold"
            >
              View All Activity →
            </Link>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-6 bg-gradient-to-br from-trust-blue-600 to-democracy-purple-600 rounded-xl p-6 shadow-lg text-white"
          >
            <h3 className="text-lg font-bold mb-4">⚡ Quick Actions</h3>
            <div className="space-y-2">
              <Link
                href="/admin/elections/create"
                className="block w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg transition-all text-center font-medium"
              >
                + Create Election
              </Link>
              <Link
                href="/admin/voters"
                className="block w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg transition-all text-center font-medium"
              >
                Import Voters
              </Link>
              <Link
                href="/admin/analytics"
                className="block w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg transition-all text-center font-medium"
              >
                View Reports
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </AdminLayout>
  );
}
