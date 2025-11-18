'use client';

import { motion } from 'framer-motion';
import {
  Search,
  Filter,
  Plus,
  Eye,
  Edit,
  Trash2,
  MoreVertical,
  Clock,
  CheckCircle2,
  XCircle,
  Activity,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';

const elections = [
  {
    id: 1,
    title: 'Student Council President 2025',
    category: 'Student Elections',
    status: 'active',
    participants: 1247,
    total: 1856,
    percentage: 67,
    startDate: 'Jan 15, 2025',
    endDate: 'Jan 20, 2025',
    timeLeft: '2d 14h',
  },
  {
    id: 2,
    title: 'Department Budget Allocation',
    category: 'Corporate',
    status: 'active',
    participants: 784,
    total: 1856,
    percentage: 42,
    startDate: 'Jan 16, 2025',
    endDate: 'Jan 22, 2025',
    timeLeft: '5d 3h',
  },
  {
    id: 3,
    title: 'Class Representative Election',
    category: 'Student Elections',
    status: 'active',
    participants: 289,
    total: 1034,
    percentage: 28,
    startDate: 'Jan 17, 2025',
    endDate: 'Jan 19, 2025',
    timeLeft: '1d 8h',
  },
  {
    id: 4,
    title: 'Sports Captain 2025',
    category: 'Student Elections',
    status: 'completed',
    participants: 1543,
    total: 1543,
    percentage: 100,
    startDate: 'Jan 10, 2025',
    endDate: 'Jan 15, 2025',
    timeLeft: 'Ended',
  },
  {
    id: 5,
    title: 'Club President Selection',
    category: 'Community',
    status: 'draft',
    participants: 0,
    total: 450,
    percentage: 0,
    startDate: 'Jan 25, 2025',
    endDate: 'Jan 30, 2025',
    timeLeft: 'Not started',
  },
];

export default function ElectionsList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      active: {
        icon: Activity,
        text: 'Active',
        class: 'bg-success-green-100 text-success-green-700',
      },
      completed: {
        icon: CheckCircle2,
        text: 'Completed',
        class: 'bg-slate-100 text-slate-700',
      },
      draft: {
        icon: Clock,
        text: 'Draft',
        class: 'bg-amber-100 text-amber-700',
      },
      cancelled: {
        icon: XCircle,
        text: 'Cancelled',
        class: 'bg-red-100 text-red-700',
      },
    };

    const config = statusConfig[status as keyof typeof statusConfig];
    const Icon = config.icon;

    return (
      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${config.class}`}>
        <Icon className="w-3 h-3" />
        {config.text}
      </span>
    );
  };

  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Elections</h1>
          <p className="text-slate-600">Manage all your elections in one place</p>
        </div>

        <Link
          href="/admin/elections/create"
          className="flex items-center gap-2 bg-gradient-to-r from-success-green-600 to-success-green-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
        >
          <Plus className="w-5 h-5" />
          Create Election
        </Link>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total', value: '149', color: 'bg-trust-blue-100 text-trust-blue-600' },
          { label: 'Active', value: '7', color: 'bg-success-green-100 text-success-green-600' },
          { label: 'Completed', value: '142', color: 'bg-slate-100 text-slate-600' },
          { label: 'Drafts', value: '3', color: 'bg-amber-100 text-amber-600' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-4 shadow-lg"
          >
            <p className="text-sm text-slate-600 mb-1">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl p-4 shadow-lg mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search elections..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-trust-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filters */}
          <div className="flex gap-2">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-trust-blue-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
              <option value="draft">Draft</option>
            </select>

            <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
              <Filter className="w-4 h-4" />
              More Filters
            </button>
          </div>
        </div>
      </div>

      {/* Elections Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">Election</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">Status</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">Participation</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">Timeline</th>
                <th className="text-right px-6 py-4 text-sm font-semibold text-slate-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {elections.map((election, index) => (
                <motion.tr
                  key={election.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-slate-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-semibold text-slate-900">{election.title}</p>
                      <p className="text-sm text-slate-600">{election.category}</p>
                    </div>
                  </td>

                  <td className="px-6 py-4">{getStatusBadge(election.status)}</td>

                  <td className="px-6 py-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-semibold text-slate-900">
                          {election.participants.toLocaleString()} / {election.total.toLocaleString()}
                        </span>
                        <span className="text-xs text-slate-600">({election.percentage}%)</span>
                      </div>
                      <div className="w-32 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-trust-blue-500 to-trust-blue-600"
                          style={{ width: `${election.percentage}%` }}
                        />
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm text-slate-900">{election.startDate} - {election.endDate}</p>
                      <p className="text-xs text-slate-600 flex items-center gap-1 mt-1">
                        <Clock className="w-3 h-3" />
                        {election.timeLeft}
                      </p>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/elections/${election.id}`}
                        className="p-2 text-trust-blue-600 hover:bg-trust-blue-50 rounded-lg transition-colors"
                        title="View"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                      <button
                        className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="border-t border-slate-200 px-6 py-4 flex items-center justify-between">
          <p className="text-sm text-slate-600">Showing 1 to 5 of 149 elections</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors text-sm">
              Previous
            </button>
            <button className="px-4 py-2 bg-trust-blue-600 text-white rounded-lg hover:bg-trust-blue-700 transition-colors text-sm">
              1
            </button>
            <button className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors text-sm">
              2
            </button>
            <button className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors text-sm">
              3
            </button>
            <button className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors text-sm">
              Next
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
