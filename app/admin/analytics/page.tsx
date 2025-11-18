'use client';

import { motion } from 'framer-motion';
import {
  TrendingUp,
  Users,
  Vote,
  BarChart3,
  PieChart as PieChartIcon,
  Activity,
  Calendar,
  MapPin,
  Clock,
  ArrowUp,
  ArrowDown,
  Download,
  RefreshCw,
  Filter,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import AdminLayout from '@/components/admin/AdminLayout';

export default function AnalyticsDashboard() {
  const [timeRange, setTimeRange] = useState<'24h' | '7d' | '30d' | '1y'>('7d');
  const [liveData, setLiveData] = useState(false);

  // Simulate live data updates
  useEffect(() => {
    if (liveData) {
      const interval = setInterval(() => {
        // Trigger re-render with updated data
        setTimeRange((prev) => prev);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [liveData]);

  // Sample data for voting trends
  const votingTrendsData = [
    { time: '00:00', votes: 45, participation: 12 },
    { time: '04:00', votes: 23, participation: 8 },
    { time: '08:00', votes: 167, participation: 34 },
    { time: '12:00', votes: 289, participation: 58 },
    { time: '16:00', votes: 312, participation: 67 },
    { time: '20:00', votes: 245, participation: 52 },
    { time: '23:59', votes: 189, participation: 41 },
  ];

  // Category distribution data
  const categoryData = [
    { name: 'Student Elections', value: 45, votes: 12543 },
    { name: 'Corporate', value: 30, votes: 8324 },
    { name: 'Community', value: 15, votes: 4156 },
    { name: 'Event', value: 10, votes: 2778 },
  ];

  const COLORS = ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B'];

  // Participation by day
  const participationData = [
    { day: 'Mon', rate: 68, votes: 234 },
    { day: 'Tue', rate: 72, votes: 287 },
    { day: 'Wed', rate: 65, votes: 198 },
    { day: 'Thu', rate: 78, votes: 312 },
    { day: 'Fri', rate: 82, votes: 345 },
    { day: 'Sat', rate: 58, votes: 167 },
    { day: 'Sun', rate: 54, votes: 145 },
  ];

  // Demographics data
  const demographicsData = [
    { age: '18-24', voters: 1245 },
    { age: '25-34', voters: 892 },
    { age: '35-44', voters: 678 },
    { age: '45-54', voters: 456 },
    { age: '55+', voters: 234 },
  ];

  // Top elections data
  const topElections = [
    {
      id: 1,
      title: 'Student Council President 2025',
      votes: 1247,
      turnout: 67.1,
      trend: 'up',
      change: 8.2,
    },
    {
      id: 2,
      title: 'Best Innovation Award 2024',
      votes: 2543,
      turnout: 79.4,
      trend: 'up',
      change: 12.5,
    },
    {
      id: 3,
      title: 'Department Budget Allocation',
      votes: 784,
      turnout: 42.3,
      trend: 'down',
      change: -3.1,
    },
    {
      id: 4,
      title: 'Community Center Name Selection',
      votes: 456,
      turnout: 51.2,
      trend: 'up',
      change: 5.7,
    },
  ];

  // Key metrics
  const metrics = [
    {
      label: 'Total Votes (7d)',
      value: 5275,
      change: 15.3,
      trend: 'up',
      icon: Vote,
      color: 'from-trust-blue-500 to-trust-blue-600',
    },
    {
      label: 'Active Voters',
      value: 3421,
      change: 8.7,
      trend: 'up',
      icon: Users,
      color: 'from-success-green-500 to-success-green-600',
    },
    {
      label: 'Avg Turnout',
      value: '67.2%',
      change: 4.2,
      trend: 'up',
      icon: TrendingUp,
      color: 'from-democracy-purple-500 to-democracy-purple-600',
    },
    {
      label: 'Active Elections',
      value: 7,
      change: -12.5,
      trend: 'down',
      icon: Activity,
      color: 'from-vote-gold-500 to-vote-gold-600',
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Analytics Dashboard</h1>
            <p className="text-slate-600">Real-time insights and performance metrics</p>
          </div>

          <div className="flex items-center gap-3">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value as any)}
              className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-trust-blue-500 focus:border-transparent"
            >
              <option value="24h">Last 24 hours</option>
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="1y">Last year</option>
            </select>

            <button
              onClick={() => setLiveData(!liveData)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                liveData
                  ? 'bg-success-green-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Activity className={`w-4 h-4 ${liveData ? 'animate-pulse' : ''}`} />
              <span className="hidden sm:inline">Live</span>
            </button>

            <button className="flex items-center gap-2 px-4 py-2 bg-trust-blue-600 hover:bg-trust-blue-700 text-white font-semibold rounded-lg transition-colors">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Export</span>
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${metric.color} flex items-center justify-center`}>
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
                <div className={`flex items-center gap-1 text-sm font-semibold ${
                  metric.trend === 'up' ? 'text-success-green-600' : 'text-red-600'
                }`}>
                  {metric.trend === 'up' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                  {metric.change}%
                </div>
              </div>
              <p className="text-2xl font-bold text-slate-900 mb-1">
                {typeof metric.value === 'number' ? <CountUp end={metric.value} duration={2} separator="," /> : metric.value}
              </p>
              <p className="text-sm text-slate-600">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Voting Trends */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Voting Trends</h3>
                <p className="text-sm text-slate-600">Votes over time</p>
              </div>
              <BarChart3 className="w-5 h-5 text-trust-blue-600" />
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={votingTrendsData}>
                <defs>
                  <linearGradient id="colorVotes" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="time" stroke="#64748B" fontSize={12} />
                <YAxis stroke="#64748B" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#FFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '8px',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="votes"
                  stroke="#3B82F6"
                  strokeWidth={2}
                  fill="url(#colorVotes)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Category Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Category Distribution</h3>
                <p className="text-sm text-slate-600">Votes by category</p>
              </div>
              <PieChartIcon className="w-5 h-5 text-democracy-purple-600" />
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${((percent || 0) * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#FFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '8px',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Participation Rate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Participation Rate</h3>
                <p className="text-sm text-slate-600">Daily turnout percentage</p>
              </div>
              <TrendingUp className="w-5 h-5 text-success-green-600" />
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={participationData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="day" stroke="#64748B" fontSize={12} />
                <YAxis stroke="#64748B" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#FFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="rate" fill="#10B981" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Demographics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Demographics</h3>
                <p className="text-sm text-slate-600">Voters by age group</p>
              </div>
              <Users className="w-5 h-5 text-vote-gold-600" />
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={demographicsData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis type="number" stroke="#64748B" fontSize={12} />
                <YAxis dataKey="age" type="category" stroke="#64748B" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#FFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="voters" fill="#F59E0B" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Top Elections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl p-6 shadow-lg"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Top Performing Elections</h3>
              <p className="text-sm text-slate-600">Highest engagement in the selected period</p>
            </div>
            <button className="text-trust-blue-600 hover:bg-trust-blue-50 px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors">
              View All
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Election</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-slate-600">Total Votes</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-slate-600">Turnout</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-slate-600">Change</th>
                </tr>
              </thead>
              <tbody>
                {topElections.map((election, index) => (
                  <tr key={election.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-trust-blue-500 to-democracy-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <span className="font-medium text-slate-900">{election.title}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right font-semibold text-slate-900">
                      {election.votes.toLocaleString()}
                    </td>
                    <td className="py-4 px-4 text-right font-semibold text-slate-900">{election.turnout}%</td>
                    <td className="py-4 px-4 text-right">
                      <div className={`inline-flex items-center gap-1 text-sm font-semibold ${
                        election.trend === 'up' ? 'text-success-green-600' : 'text-red-600'
                      }`}>
                        {election.trend === 'up' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                        {Math.abs(election.change)}%
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-br from-trust-blue-50 to-trust-blue-100 border border-trust-blue-200 rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-trust-blue-600 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-trust-blue-700 font-semibold">Peak Voting Time</p>
                <p className="text-2xl font-bold text-trust-blue-900">2:00 PM - 4:00 PM</p>
              </div>
            </div>
            <p className="text-sm text-trust-blue-700">Most active period for voter engagement</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-br from-success-green-50 to-success-green-100 border border-success-green-200 rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-success-green-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-success-green-700 font-semibold">Top Location</p>
                <p className="text-2xl font-bold text-success-green-900">Mumbai</p>
              </div>
            </div>
            <p className="text-sm text-success-green-700">Highest participation from this region</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-gradient-to-br from-democracy-purple-50 to-democracy-purple-100 border border-democracy-purple-200 rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-democracy-purple-600 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-democracy-purple-700 font-semibold">Best Day</p>
                <p className="text-2xl font-bold text-democracy-purple-900">Friday</p>
              </div>
            </div>
            <p className="text-sm text-democracy-purple-700">82% average participation rate</p>
          </motion.div>
        </div>
      </div>
    </AdminLayout>
  );
}
