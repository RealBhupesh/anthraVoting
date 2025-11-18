'use client';

import { motion } from 'framer-motion';
import {
  Search,
  Filter,
  Vote,
  Clock,
  Users,
  TrendingUp,
  Star,
  Calendar,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const elections = [
  {
    id: 1,
    title: 'Student Council President 2025',
    category: 'Student Elections',
    description: 'Elect the next president who will represent all students in administrative matters.',
    participants: 1247,
    total: 1856,
    percentage: 67,
    startDate: 'Jan 15, 2025',
    endDate: 'Jan 20, 2025',
    timeLeft: '2d 14h',
    status: 'active',
    hasVoted: false,
    image: '/api/placeholder/400/200',
  },
  {
    id: 2,
    title: 'Department Budget Allocation',
    category: 'Corporate',
    description: 'Vote on how to allocate the departmental budget for next fiscal year.',
    participants: 784,
    total: 1856,
    percentage: 42,
    startDate: 'Jan 16, 2025',
    endDate: 'Jan 22, 2025',
    timeLeft: '5d 3h',
    status: 'active',
    hasVoted: false,
    image: '/api/placeholder/400/200',
  },
  {
    id: 3,
    title: 'Best Innovation Award 2024',
    category: 'Event',
    description: 'Vote for the most innovative project of the year from the finalists.',
    participants: 2543,
    total: 3200,
    percentage: 79,
    startDate: 'Jan 14, 2025',
    endDate: 'Jan 18, 2025',
    timeLeft: '12h',
    status: 'active',
    hasVoted: true,
    image: '/api/placeholder/400/200',
  },
  {
    id: 4,
    title: 'Community Center Name Selection',
    category: 'Community',
    description: 'Help us choose the perfect name for our new community center.',
    participants: 456,
    total: 890,
    percentage: 51,
    startDate: 'Jan 17, 2025',
    endDate: 'Jan 25, 2025',
    timeLeft: '7d 2h',
    status: 'active',
    hasVoted: false,
    image: '/api/placeholder/400/200',
  },
];

export default function VoterDashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const userStats = {
    totalVoted: 19,
    activeElections: 3,
    participationRate: 95,
    level: 5,
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-trust-blue-600 to-democracy-purple-600 rounded-lg flex items-center justify-center">
                <Vote className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text hidden sm:inline">ANTHRA VOTING</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link href="/vote" className="text-trust-blue-600 font-semibold">
                Browse Elections
              </Link>
              <Link href="/profile" className="text-slate-700 hover:text-slate-900">
                My Profile
              </Link>
              <Link href="/admin" className="text-slate-700 hover:text-slate-900">
                Admin
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <Link
                href="/profile"
                className="w-10 h-10 bg-gradient-to-br from-trust-blue-500 to-democracy-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm"
              >
                B
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Welcome back, Bhavesh! 👋
          </h1>
          <p className="text-slate-600">You have {userStats.activeElections} active elections to vote in</p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            {
              label: 'Elections Joined',
              value: 23,
              icon: Vote,
              color: 'from-trust-blue-500 to-trust-blue-600',
            },
            {
              label: 'Votes Cast',
              value: userStats.totalVoted,
              icon: CheckCircle2,
              color: 'from-success-green-500 to-success-green-600',
            },
            {
              label: 'Participation',
              value: `${userStats.participationRate}%`,
              icon: TrendingUp,
              color: 'from-democracy-purple-500 to-democracy-purple-600',
            },
            {
              label: 'Level',
              value: userStats.level,
              icon: Star,
              color: 'from-vote-gold-500 to-vote-gold-600',
              suffix: '🔥',
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
              </div>
              <p className="text-2xl font-bold text-slate-900">
                {stat.value} {stat.suffix}
              </p>
              <p className="text-sm text-slate-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl p-4 shadow-lg mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search elections..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-trust-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex gap-2">
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-trust-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                <option value="student">Student Elections</option>
                <option value="corporate">Corporate</option>
                <option value="community">Community</option>
                <option value="event">Event</option>
              </select>

              <button className="flex items-center gap-2 px-4 py-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
                <Filter className="w-4 h-4" />
                Filters
              </button>
            </div>
          </div>
        </div>

        {/* Active Elections */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">🔴 Active Elections</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {elections.map((election, index) => (
              <motion.div
                key={election.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Vote className="w-16 h-16 text-slate-400" />
                  </div>
                  {election.hasVoted && (
                    <div className="absolute top-4 right-4 bg-success-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" />
                      Voted
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-trust-blue-100 text-trust-blue-700 text-xs font-semibold rounded-full">
                      {election.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-600">
                      <Clock className="w-3 h-3" />
                      {election.timeLeft} left
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">
                    {election.title}
                  </h3>

                  <p className="text-sm text-slate-600 mb-4 line-clamp-2">{election.description}</p>

                  {/* Progress */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-slate-600">
                        <Users className="w-4 h-4 inline mr-1" />
                        {election.participants.toLocaleString()} / {election.total.toLocaleString()}
                      </span>
                      <span className="font-semibold text-slate-900">{election.percentage}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-trust-blue-500 to-trust-blue-600"
                        style={{ width: `${election.percentage}%` }}
                      />
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                    <Calendar className="w-3 h-3" />
                    {election.startDate} - {election.endDate}
                  </div>

                  {/* CTA */}
                  {election.hasVoted ? (
                    <Link
                      href={`/vote/${election.id}/results`}
                      className="block w-full text-center px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg transition-colors"
                    >
                      View Results
                    </Link>
                  ) : (
                    <Link
                      href={`/vote/${election.id}`}
                      className="block w-full text-center px-4 py-3 bg-gradient-to-r from-success-green-600 to-success-green-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all group-hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <Vote className="w-4 h-4" />
                      Vote Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
