'use client';

import { motion } from 'framer-motion';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  TrendingUp,
  CheckCircle2,
  Vote,
  Target,
  Zap,
  Star,
  Trophy,
  Medal,
  Crown,
  Sparkles,
  Clock,
  ArrowLeft,
  Edit2,
  Settings,
  Bell,
  Shield,
  Eye,
  EyeOff,
  Camera,
  Download,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import CountUp from 'react-countup';

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: any;
  color: string;
  unlocked: boolean;
  date?: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

interface VoteHistory {
  id: number;
  electionTitle: string;
  category: string;
  date: string;
  candidate: string;
  verified: boolean;
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'history' | 'achievements' | 'settings'>('overview');
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const userProfile = {
    name: 'Bhavesh Kumar',
    email: 'bhavesh.kumar@university.edu',
    phone: '+91 98765 43210',
    location: 'Mumbai, Maharashtra',
    joinDate: 'September 2023',
    avatar: 'B',
    level: 5,
    xp: 1340,
    nextLevelXp: 2000,
    bio: 'Active participant in democratic processes. Passionate about making informed decisions for our community.',
  };

  const stats = {
    totalVotes: 23,
    electionsJoined: 27,
    participationRate: 95,
    currentStreak: 12,
    longestStreak: 18,
    totalXP: 1340,
    achievements: 14,
    rank: 247,
  };

  const achievements: Achievement[] = [
    {
      id: 1,
      title: 'First Vote',
      description: 'Cast your first vote',
      icon: Vote,
      color: 'from-trust-blue-500 to-trust-blue-600',
      unlocked: true,
      date: 'Sep 15, 2023',
      rarity: 'common',
    },
    {
      id: 2,
      title: 'Speed Voter',
      description: 'Voted in under 2 minutes',
      icon: Zap,
      color: 'from-vote-gold-500 to-vote-gold-600',
      unlocked: true,
      date: 'Jan 18, 2025',
      rarity: 'rare',
    },
    {
      id: 3,
      title: '10 Votes Milestone',
      description: 'Cast 10 votes',
      icon: Target,
      color: 'from-success-green-500 to-success-green-600',
      unlocked: true,
      date: 'Dec 10, 2024',
      rarity: 'common',
    },
    {
      id: 4,
      title: 'Perfect Month',
      description: 'Voted in every election for a month',
      icon: Calendar,
      color: 'from-democracy-purple-500 to-democracy-purple-600',
      unlocked: true,
      date: 'Nov 30, 2024',
      rarity: 'epic',
    },
    {
      id: 5,
      title: 'Early Bird',
      description: 'Vote within first hour of election',
      icon: Clock,
      color: 'from-trust-blue-500 to-trust-blue-600',
      unlocked: true,
      date: 'Oct 22, 2024',
      rarity: 'rare',
    },
    {
      id: 6,
      title: 'Community Leader',
      description: 'Reach Level 5',
      icon: Crown,
      color: 'from-vote-gold-500 to-vote-gold-600',
      unlocked: true,
      date: 'Jan 12, 2025',
      rarity: 'epic',
    },
    {
      id: 7,
      title: 'Hot Streak',
      description: 'Vote 10 times in a row',
      icon: TrendingUp,
      color: 'from-success-green-500 to-success-green-600',
      unlocked: true,
      date: 'Dec 5, 2024',
      rarity: 'rare',
    },
    {
      id: 8,
      title: '50 Votes Legend',
      description: 'Cast 50 votes',
      icon: Trophy,
      color: 'from-democracy-purple-500 to-democracy-purple-600',
      unlocked: false,
      rarity: 'legendary',
    },
    {
      id: 9,
      title: 'Perfect Year',
      description: 'Vote in every election for a year',
      icon: Star,
      color: 'from-vote-gold-500 to-vote-gold-600',
      unlocked: false,
      rarity: 'legendary',
    },
  ];

  const voteHistory: VoteHistory[] = [
    {
      id: 1,
      electionTitle: 'Student Council President 2025',
      category: 'Student Elections',
      date: 'Jan 18, 2025',
      candidate: 'Sarah Kumar',
      verified: true,
    },
    {
      id: 2,
      electionTitle: 'Best Innovation Award 2024',
      category: 'Event',
      date: 'Jan 15, 2025',
      candidate: 'Tech Innovators Team',
      verified: true,
    },
    {
      id: 3,
      electionTitle: 'Department Budget Allocation',
      category: 'Corporate',
      date: 'Jan 10, 2025',
      candidate: 'Option B - Research Focus',
      verified: true,
    },
    {
      id: 4,
      electionTitle: 'Campus Event Theme Selection',
      category: 'Event',
      date: 'Dec 28, 2024',
      candidate: 'Cultural Fusion',
      verified: true,
    },
    {
      id: 5,
      electionTitle: 'Library Renovation Plan',
      category: 'Community',
      date: 'Dec 15, 2024',
      candidate: 'Modern Study Spaces',
      verified: true,
    },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common':
        return 'border-slate-300 bg-slate-50';
      case 'rare':
        return 'border-trust-blue-300 bg-trust-blue-50';
      case 'epic':
        return 'border-democracy-purple-300 bg-democracy-purple-50';
      case 'legendary':
        return 'border-vote-gold-300 bg-vote-gold-50';
      default:
        return 'border-slate-300 bg-slate-50';
    }
  };

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
                <span className="hidden sm:inline">Back to Dashboard</span>
              </Link>
              <div className="h-6 w-px bg-slate-300 hidden sm:block" />
              <h1 className="text-xl font-bold text-slate-900 hidden sm:block">My Profile</h1>
            </div>

            <Link
              href="/vote"
              className="w-10 h-10 bg-gradient-to-br from-trust-blue-600 to-democracy-purple-600 rounded-lg flex items-center justify-center"
            >
              <Vote className="w-5 h-5 text-white" />
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8"
        >
          {/* Cover Image */}
          <div className="h-32 bg-gradient-to-r from-trust-blue-600 via-democracy-purple-600 to-success-green-600 relative">
            <div className="absolute inset-0 bg-black/10" />
          </div>

          <div className="px-8 pb-8">
            {/* Avatar and Basic Info */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between -mt-16 mb-6">
              <div className="flex items-end gap-4 mb-4 md:mb-0">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-trust-blue-500 to-democracy-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-4xl ring-4 ring-white shadow-lg">
                    {userProfile.avatar}
                  </div>
                  <button className="absolute bottom-2 right-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors">
                    <Camera className="w-4 h-4 text-slate-700" />
                  </button>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-vote-gold-500 text-white text-xs font-bold rounded-full shadow-lg">
                    Level {userProfile.level}
                  </div>
                </div>

                <div className="pb-2">
                  <h2 className="text-2xl font-bold text-slate-900 mb-1">{userProfile.name}</h2>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {userProfile.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Joined {userProfile.joinDate}
                    </div>
                  </div>
                </div>
              </div>

              <button className="flex items-center gap-2 px-4 py-2 bg-trust-blue-600 hover:bg-trust-blue-700 text-white font-semibold rounded-lg transition-colors">
                <Edit2 className="w-4 h-4" />
                Edit Profile
              </button>
            </div>

            {/* Bio */}
            <p className="text-slate-700 mb-6">{userProfile.bio}</p>

            {/* Level Progress */}
            <div className="bg-gradient-to-r from-vote-gold-50 to-vote-gold-100 border border-vote-gold-200 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-vote-gold-600" />
                  <span className="font-semibold text-vote-gold-900">
                    Level {userProfile.level} Progress
                  </span>
                </div>
                <span className="text-sm font-semibold text-vote-gold-700">
                  {userProfile.xp} / {userProfile.nextLevelXp} XP
                </span>
              </div>
              <div className="w-full h-3 bg-vote-gold-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(userProfile.xp / userProfile.nextLevelXp) * 100}%` }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="h-full bg-gradient-to-r from-vote-gold-500 to-vote-gold-600"
                />
              </div>
              <p className="text-xs text-vote-gold-700 mt-2">
                {userProfile.nextLevelXp - userProfile.xp} XP to Level {userProfile.level + 1}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Votes', value: stats.totalVotes, icon: Vote, color: 'from-trust-blue-500 to-trust-blue-600' },
            { label: 'Participation', value: `${stats.participationRate}%`, icon: TrendingUp, color: 'from-success-green-500 to-success-green-600' },
            { label: 'Current Streak', value: stats.currentStreak, icon: Zap, color: 'from-vote-gold-500 to-vote-gold-600', suffix: '🔥' },
            { label: 'Achievements', value: stats.achievements, icon: Trophy, color: 'from-democracy-purple-500 to-democracy-purple-600' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-4 shadow-lg"
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3`}>
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <p className="text-2xl font-bold text-slate-900">
                {typeof stat.value === 'number' ? <CountUp end={stat.value} duration={2} /> : stat.value}
                {stat.suffix && ` ${stat.suffix}`}
              </p>
              <p className="text-xs text-slate-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-t-2xl shadow-lg">
          <div className="border-b border-slate-200">
            <div className="flex overflow-x-auto">
              {[
                { id: 'overview', label: 'Overview', icon: User },
                { id: 'history', label: 'Vote History', icon: Clock },
                { id: 'achievements', label: 'Achievements', icon: Award },
                { id: 'settings', label: 'Settings', icon: Settings },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-6 py-4 font-semibold transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'text-trust-blue-600 border-b-2 border-trust-blue-600'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-8">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Statistics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { label: 'Elections Joined', value: stats.electionsJoined },
                      { label: 'Total Votes Cast', value: stats.totalVotes },
                      { label: 'Participation Rate', value: `${stats.participationRate}%` },
                      { label: 'Current Streak', value: `${stats.currentStreak} days` },
                      { label: 'Longest Streak', value: `${stats.longestStreak} days` },
                      { label: 'Global Rank', value: `#${stats.rank}` },
                    ].map((stat, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                        <span className="text-slate-600">{stat.label}</span>
                        <span className="text-lg font-bold text-slate-900">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    {voteHistory.slice(0, 3).map((vote) => (
                      <div key={vote.id} className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
                        <div className="w-10 h-10 bg-success-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-success-green-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-slate-900 truncate">{vote.electionTitle}</p>
                          <p className="text-sm text-slate-600">{vote.date}</p>
                        </div>
                        {vote.verified && (
                          <Shield className="w-5 h-5 text-success-green-600 flex-shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* History Tab */}
            {activeTab === 'history' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-slate-900">Complete Voting History</h3>
                  <button className="flex items-center gap-2 px-4 py-2 text-sm text-trust-blue-600 hover:bg-trust-blue-50 rounded-lg transition-colors">
                    <Download className="w-4 h-4" />
                    Export
                  </button>
                </div>

                {voteHistory.map((vote, index) => (
                  <motion.div
                    key={vote.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-slate-50 rounded-xl p-6 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 bg-trust-blue-100 text-trust-blue-700 text-xs font-semibold rounded-full">
                            {vote.category}
                          </span>
                          {vote.verified && (
                            <span className="flex items-center gap-1 text-xs text-success-green-600 font-semibold">
                              <Shield className="w-3 h-3" />
                              Verified
                            </span>
                          )}
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 mb-1">{vote.electionTitle}</h4>
                        <p className="text-sm text-slate-600 mb-2">Voted for: {vote.candidate}</p>
                        <p className="text-xs text-slate-500 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {vote.date}
                        </p>
                      </div>
                      <button className="text-trust-blue-600 hover:bg-trust-blue-50 p-2 rounded-lg transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Achievements Tab */}
            {activeTab === 'achievements' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Achievements ({achievements.filter((a) => a.unlocked).length}/{achievements.length})
                  </h3>
                  <p className="text-slate-600">Unlock achievements by participating in elections and engaging with the platform</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className={`relative rounded-xl p-6 border-2 ${getRarityColor(achievement.rarity)} ${
                        achievement.unlocked ? 'opacity-100' : 'opacity-40'
                      } hover:scale-105 transition-all`}
                    >
                      {achievement.unlocked && achievement.rarity === 'legendary' && (
                        <div className="absolute top-2 right-2">
                          <Sparkles className="w-5 h-5 text-vote-gold-500" />
                        </div>
                      )}

                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-4`}>
                        <achievement.icon className="w-7 h-7 text-white" />
                      </div>

                      <h4 className="font-bold text-slate-900 mb-1">{achievement.title}</h4>
                      <p className="text-sm text-slate-600 mb-3">{achievement.description}</p>

                      {achievement.unlocked ? (
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-success-green-600 font-semibold flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            Unlocked
                          </span>
                          <span className="text-xs text-slate-500">{achievement.date}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 text-xs text-slate-500 font-semibold">
                          <span>🔒 Locked</span>
                        </div>
                      )}

                      <div className="absolute top-2 left-2">
                        <span
                          className={`text-xs font-bold uppercase px-2 py-1 rounded ${
                            achievement.rarity === 'common'
                              ? 'bg-slate-200 text-slate-700'
                              : achievement.rarity === 'rare'
                              ? 'bg-trust-blue-200 text-trust-blue-700'
                              : achievement.rarity === 'epic'
                              ? 'bg-democracy-purple-200 text-democracy-purple-700'
                              : 'bg-vote-gold-200 text-vote-gold-700'
                          }`}
                        >
                          {achievement.rarity}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Account Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-slate-600" />
                        <div>
                          <p className="text-sm text-slate-600">Email</p>
                          <p className="font-semibold text-slate-900">
                            {showEmail ? userProfile.email : '••••••••@university.edu'}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => setShowEmail(!showEmail)}
                        className="text-trust-blue-600 hover:bg-trust-blue-50 p-2 rounded-lg transition-colors"
                      >
                        {showEmail ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-slate-600" />
                        <div>
                          <p className="text-sm text-slate-600">Phone</p>
                          <p className="font-semibold text-slate-900">
                            {showPhone ? userProfile.phone : '+91 ••••• •••10'}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => setShowPhone(!showPhone)}
                        className="text-trust-blue-600 hover:bg-trust-blue-50 p-2 rounded-lg transition-colors"
                      >
                        {showPhone ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Notifications</h3>
                  <div className="space-y-3">
                    {[
                      { label: 'Email notifications for new elections', checked: true },
                      { label: 'Push notifications for voting reminders', checked: true },
                      { label: 'Email notifications for election results', checked: true },
                      { label: 'Weekly participation summary', checked: false },
                      { label: 'Achievement unlocked notifications', checked: true },
                    ].map((item, index) => (
                      <label key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg cursor-pointer hover:bg-slate-100 transition-colors">
                        <input type="checkbox" className="w-4 h-4" defaultChecked={item.checked} />
                        <span className="text-slate-700">{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Privacy</h3>
                  <div className="space-y-3">
                    {[
                      { label: 'Show my profile in leaderboards', checked: true },
                      { label: 'Allow others to see my voting streak', checked: true },
                      { label: 'Public achievement showcase', checked: false },
                    ].map((item, index) => (
                      <label key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg cursor-pointer hover:bg-slate-100 transition-colors">
                        <input type="checkbox" className="w-4 h-4" defaultChecked={item.checked} />
                        <span className="text-slate-700">{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <button className="w-full md:w-auto px-6 py-3 bg-trust-blue-600 hover:bg-trust-blue-700 text-white font-semibold rounded-lg transition-colors">
                    Save Changes
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
