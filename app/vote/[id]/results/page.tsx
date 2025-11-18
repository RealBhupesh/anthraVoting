'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp,
  Users,
  Clock,
  Award,
  BarChart3,
  PieChart,
  Activity,
  CheckCircle2,
  ArrowLeft,
  Share2,
  Download,
  RefreshCw,
  Eye,
  Calendar,
  MapPin,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

interface Candidate {
  id: number;
  name: string;
  party: string;
  votes: number;
  percentage: number;
  trend: 'up' | 'down' | 'stable';
  color: string;
}

export default function ElectionResultsPage({ params }: { params: { id: string } }) {
  const [liveVotes, setLiveVotes] = useState(0);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [candidates, setCandidates] = useState<Candidate[]>([
    {
      id: 1,
      name: 'Sarah Kumar',
      party: 'Progressive Student Alliance',
      votes: 487,
      percentage: 39.1,
      trend: 'up',
      color: 'from-trust-blue-500 to-trust-blue-600',
    },
    {
      id: 2,
      name: 'Rajesh Patel',
      party: 'Student Welfare Front',
      votes: 352,
      percentage: 28.3,
      trend: 'up',
      color: 'from-democracy-purple-500 to-democracy-purple-600',
    },
    {
      id: 3,
      name: 'Priya Sharma',
      party: 'Independent',
      votes: 298,
      percentage: 23.9,
      trend: 'stable',
      color: 'from-success-green-500 to-success-green-600',
    },
    {
      id: 4,
      name: 'Amit Verma',
      party: 'Tech Innovation Party',
      votes: 108,
      percentage: 8.7,
      trend: 'down',
      color: 'from-slate-500 to-slate-600',
    },
  ]);

  const electionInfo = {
    title: 'Student Council President 2025',
    category: 'Student Elections',
    startDate: 'Jan 15, 2025',
    endDate: 'Jan 20, 2025',
    location: 'Mumbai University',
    totalVoters: 1856,
    votedCount: 1245,
    turnout: 67.1,
    status: 'active', // active | completed | counting
  };

  // Simulate live vote updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.6) {
        const randomCandidate = Math.floor(Math.random() * candidates.length);
        const voteIncrease = Math.floor(Math.random() * 3) + 1;

        setCandidates((prev) => {
          const updated = [...prev];
          updated[randomCandidate].votes += voteIncrease;

          // Recalculate percentages
          const totalVotes = updated.reduce((sum, c) => sum + c.votes, 0);
          updated.forEach((c) => {
            c.percentage = (c.votes / totalVotes) * 100;
          });

          // Sort by votes
          updated.sort((a, b) => b.votes - a.votes);

          return updated;
        });

        setLiveVotes((prev) => prev + voteIncrease);
        setLastUpdate(new Date());
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [candidates.length]);

  const totalVotes = candidates.reduce((sum, c) => sum + c.votes, 0);
  const leading = candidates[0];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/vote"
                className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden sm:inline">Back to Elections</span>
              </Link>
              <div className="h-6 w-px bg-slate-300" />
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-success-green-500 animate-pulse" />
                <span className="text-sm font-semibold text-slate-900">LIVE RESULTS</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
                <RefreshCw className="w-4 h-4" />
                <span className="hidden sm:inline">Auto-refresh</span>
              </button>
              <button className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
                <Share2 className="w-4 h-4" />
                <span className="hidden sm:inline">Share</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Election Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-trust-blue-100 text-trust-blue-700 text-sm font-semibold rounded-full">
                  {electionInfo.category}
                </span>
                {electionInfo.status === 'active' && (
                  <span className="px-3 py-1 bg-success-green-100 text-success-green-700 text-sm font-semibold rounded-full flex items-center gap-1">
                    <Activity className="w-3 h-3 animate-pulse" />
                    Voting Active
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                {electionInfo.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {electionInfo.startDate} - {electionInfo.endDate}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {electionInfo.location}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  Updated {lastUpdate.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            {
              label: 'Total Votes Cast',
              value: totalVotes,
              icon: BarChart3,
              color: 'from-trust-blue-500 to-trust-blue-600',
              suffix: '',
            },
            {
              label: 'Voter Turnout',
              value: electionInfo.turnout,
              icon: Users,
              color: 'from-success-green-500 to-success-green-600',
              suffix: '%',
            },
            {
              label: 'Registered Voters',
              value: electionInfo.totalVoters,
              icon: Eye,
              color: 'from-democracy-purple-500 to-democracy-purple-600',
              suffix: '',
            },
            {
              label: 'Leading Margin',
              value: candidates[0].votes - candidates[1].votes,
              icon: TrendingUp,
              color: 'from-vote-gold-500 to-vote-gold-600',
              suffix: ' votes',
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
                <CountUp end={stat.value} duration={2} separator="," decimals={typeof stat.value === 'number' && stat.value % 1 !== 0 ? 1 : 0} />
                {stat.suffix}
              </p>
              <p className="text-sm text-slate-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Results */}
          <div className="lg:col-span-2 space-y-6">
            {/* Leading Candidate Highlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-to-br from-vote-gold-50 to-vote-gold-100 border-2 border-vote-gold-300 rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-vote-gold-500 to-vote-gold-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-vote-gold-900">Currently Leading</h3>
                    {leading.trend === 'up' && <TrendingUp className="w-5 h-5 text-vote-gold-700" />}
                  </div>
                  <h2 className="text-2xl font-bold text-vote-gold-900 mb-1">{leading.name}</h2>
                  <p className="text-sm text-vote-gold-700 mb-3">{leading.party}</p>
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-3xl font-bold text-vote-gold-900">
                        <CountUp end={leading.percentage} duration={2} decimals={1} />%
                      </p>
                      <p className="text-xs text-vote-gold-700">of votes</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-vote-gold-900">
                        <CountUp end={leading.votes} duration={2} separator="," />
                      </p>
                      <p className="text-xs text-vote-gold-700">total votes</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* All Candidates */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">All Candidates</h3>
              <AnimatePresence mode="popLayout">
                {candidates.map((candidate, index) => (
                  <motion.div
                    key={candidate.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-slate-100 rounded-full flex-shrink-0">
                        <span className="text-xl font-bold text-slate-700">#{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="text-lg font-bold text-slate-900">{candidate.name}</h4>
                            <p className="text-sm text-slate-600">{candidate.party}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-slate-900">
                              <CountUp end={candidate.percentage} duration={2} decimals={1} />%
                            </p>
                            <p className="text-sm text-slate-600">
                              <CountUp end={candidate.votes} duration={2} separator="," /> votes
                            </p>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="relative">
                          <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${candidate.percentage}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              className={`h-full bg-gradient-to-r ${candidate.color}`}
                            />
                          </div>
                        </div>

                        {/* Trend Indicator */}
                        <div className="mt-2 flex items-center gap-2">
                          {candidate.trend === 'up' && (
                            <span className="text-xs text-success-green-600 font-semibold flex items-center gap-1">
                              <TrendingUp className="w-3 h-3" />
                              Trending Up
                            </span>
                          )}
                          {candidate.trend === 'stable' && (
                            <span className="text-xs text-slate-500 font-semibold">Stable</span>
                          )}
                          {index === 0 && (
                            <span className="ml-auto text-xs text-vote-gold-600 font-semibold flex items-center gap-1">
                              <Award className="w-3 h-3" />
                              Leading
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Sidebar Stats */}
          <div className="space-y-6">
            {/* Vote Distribution */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <PieChart className="w-5 h-5 text-trust-blue-600" />
                Vote Distribution
              </h3>
              <div className="space-y-3">
                {candidates.map((candidate, index) => (
                  <div key={candidate.id} className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${candidate.color}`} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-700 font-medium">{candidate.name.split(' ')[0]}</span>
                        <span className="font-semibold text-slate-900">{candidate.percentage.toFixed(1)}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Participation Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-success-green-600" />
                Participation Stats
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-slate-600">Votes Cast</span>
                    <span className="font-semibold text-slate-900">
                      {electionInfo.votedCount.toLocaleString()} / {electionInfo.totalVoters.toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${electionInfo.turnout}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full bg-gradient-to-r from-success-green-500 to-success-green-600"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Average votes/hour</span>
                    <span className="font-semibold text-slate-900">124</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Peak voting time</span>
                    <span className="font-semibold text-slate-900">2:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Estimated final turnout</span>
                    <span className="font-semibold text-success-green-600">72%</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Live Updates */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-trust-blue-600 animate-pulse" />
                Live Updates
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-success-green-500 rounded-full mt-1.5 animate-pulse" />
                  <div>
                    <p className="text-slate-700">New vote recorded</p>
                    <p className="text-xs text-slate-500">Just now</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-trust-blue-500 rounded-full mt-1.5" />
                  <div>
                    <p className="text-slate-700">Turnout crossed 67%</p>
                    <p className="text-xs text-slate-500">2 min ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-democracy-purple-500 rounded-full mt-1.5" />
                  <div>
                    <p className="text-slate-700">Sarah Kumar takes the lead</p>
                    <p className="text-xs text-slate-500">5 min ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-slate-400 rounded-full mt-1.5" />
                  <div>
                    <p className="text-slate-700">1000th vote milestone reached</p>
                    <p className="text-xs text-slate-500">15 min ago</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Actions */}
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-trust-blue-600 hover:bg-trust-blue-700 text-white font-semibold rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                Download Report
              </button>
              <Link
                href={`/vote/${params.id}`}
                className="block w-full text-center px-4 py-3 border-2 border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold rounded-lg transition-colors"
              >
                View Election Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
