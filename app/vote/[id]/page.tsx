'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Clock,
  Users,
  Shield,
  CheckCircle2,
  Vote as VoteIcon,
  Info,
  Star,
  ExternalLink,
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const election = {
  id: 1,
  title: 'Student Council President 2025',
  description:
    'The Student Council President serves as the primary liaison between students and administration. This is a critical role that shapes campus life and represents student interests.',
  category: 'Student Elections',
  startDate: 'Jan 15, 2025 10:00 AM',
  endDate: 'Jan 20, 2025 5:00 PM',
  timeLeft: '2 days 14 hours 32 minutes',
  participants: 1247,
  total: 1856,
  percentage: 67,
  organizer: 'Student Affairs Office',
  type: 'Single Winner (First-Past-the-Post)',
  rules: [
    'You can vote only once',
    'Your vote is anonymous and secure',
    'Blockchain-verified for transparency',
    'Results visible after voting closes',
  ],
};

const candidates = [
  {
    id: 1,
    name: 'Sarah Kumar',
    designation: '3rd Year, Computer Science',
    photo: null,
    manifesto:
      'My vision is to create a student-first campus where every voice matters. With 2 years of experience as Class Representative, I understand the challenges students face. I pledge to improve WiFi connectivity, extend library hours, and establish a mental health support system.',
    achievements: [
      'President, Coding Club',
      'Organized TechFest 2024',
      "Dean's List (4 semesters)",
    ],
    currentVotes: 474,
    percentage: 38,
    socialLinks: {
      instagram: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    id: 2,
    name: 'Rahul Verma',
    designation: '4th Year, Mechanical Engineering',
    photo: null,
    manifesto:
      'Fresh ideas for progress! I believe in innovation and transparency. My priority is to digitize student services, create more sports facilities, and ensure affordable campus food through better cafeteria partnerships.',
    achievements: [
      'Captain, Basketball Team',
      'Volunteer Coordinator, NSS',
      'Started Campus Sustainability Initiative',
    ],
    currentVotes: 362,
    percentage: 29,
    socialLinks: {
      instagram: '#',
      twitter: '#',
    },
  },
  {
    id: 3,
    name: 'Priya Sharma',
    designation: '3rd Year, Electronics',
    photo: null,
    manifesto:
      'Empowering every student to achieve their dreams. My focus is on career development workshops, industry connections for internships, and creating a more inclusive campus culture for all students.',
    achievements: [
      'Secretary, Cultural Committee',
      'Organized Women in Tech Summit',
      'Peer Mentor (2 years)',
    ],
    currentVotes: 237,
    percentage: 19,
    socialLinks: {
      linkedin: '#',
    },
  },
  {
    id: 4,
    name: 'Amit Patel',
    designation: '4th Year, Computer Science',
    photo: null,
    manifesto:
      'Building bridges between students and faculty. I want to establish better communication channels, upgrade lab equipment, and create more scholarship opportunities for deserving students.',
    achievements: [
      'Research Assistant, AI Lab',
      'Winner, National Hackathon',
      'Published 2 research papers',
    ],
    currentVotes: 175,
    percentage: 14,
    socialLinks: {
      twitter: '#',
      linkedin: '#',
    },
  },
];

export default function VotingPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [expandedCandidate, setExpandedCandidate] = useState<number | null>(null);

  const handleVoteClick = () => {
    if (selectedCandidate !== null) {
      setShowConfirmation(true);
    }
  };

  const handleConfirmVote = () => {
    // Here you would submit the vote to your backend
    console.log('Vote submitted for candidate:', selectedCandidate);
    router.push(`/vote/${params.id}/success`);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => router.back()} className="flex items-center gap-2 text-slate-600 hover:text-slate-900">
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Back to Elections</span>
            </button>

            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-trust-blue-600 to-democracy-purple-600 rounded-lg flex items-center justify-center">
                <VoteIcon className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold gradient-text hidden sm:inline">ANTHRA VOTING</span>
            </Link>

            <div className="w-20" /> {/* Spacer for alignment */}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8 max-w-6xl">
        {/* Election Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-8 shadow-lg mb-8"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <span className="inline-block px-3 py-1 bg-trust-blue-100 text-trust-blue-700 text-sm font-semibold rounded-full mb-3">
                {election.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{election.title}</h1>
              <p className="text-slate-600 text-lg">{election.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-slate-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Time Remaining</p>
                <p className="font-semibold text-slate-900">{election.timeLeft}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-slate-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Participation</p>
                <p className="font-semibold text-slate-900">
                  {election.participants.toLocaleString()} / {election.total.toLocaleString()} ({election.percentage}%)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-slate-600" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Security</p>
                <p className="font-semibold text-slate-900">Blockchain Verified</p>
              </div>
            </div>
          </div>

          {/* Important Rules */}
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-amber-900 mb-2">Important Rules</h3>
                <ul className="space-y-1 text-sm text-amber-800">
                  {election.rules.map((rule, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-amber-600 rounded-full" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Candidates Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Select Your Candidate</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {candidates.map((candidate, index) => (
              <motion.div
                key={candidate.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedCandidate(candidate.id)}
                className={`bg-white rounded-xl p-6 shadow-lg cursor-pointer transition-all ${
                  selectedCandidate === candidate.id
                    ? 'ring-4 ring-success-green-500 scale-[1.02]'
                    : 'hover:shadow-xl'
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4 flex-1">
                    {/* Photo Placeholder */}
                    <div className="w-20 h-20 bg-gradient-to-br from-trust-blue-200 to-democracy-purple-200 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl font-bold text-trust-blue-700">
                        {candidate.name.charAt(0)}
                      </span>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{candidate.name}</h3>
                      <p className="text-sm text-slate-600 mb-2">{candidate.designation}</p>

                      {/* Current Results */}
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-semibold text-trust-blue-600">
                          {candidate.currentVotes} votes ({candidate.percentage}%)
                        </span>
                        {index === 0 && (
                          <span className="px-2 py-0.5 bg-vote-gold-100 text-vote-gold-700 text-xs font-bold rounded-full">
                            LEADING
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Selection Radio */}
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      selectedCandidate === candidate.id
                        ? 'border-success-green-500 bg-success-green-500'
                        : 'border-slate-300'
                    }`}
                  >
                    {selectedCandidate === candidate.id && (
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    )}
                  </div>
                </div>

                {/* Manifesto */}
                <div className="mb-4">
                  <h4 className="font-semibold text-slate-900 mb-2 text-sm">Campaign Promise</h4>
                  <p className={`text-sm text-slate-600 ${expandedCandidate === candidate.id ? '' : 'line-clamp-3'}`}>
                    {candidate.manifesto}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedCandidate(expandedCandidate === candidate.id ? null : candidate.id);
                    }}
                    className="text-sm text-trust-blue-600 hover:text-trust-blue-700 font-semibold mt-1"
                  >
                    {expandedCandidate === candidate.id ? 'Show less' : 'Read more'}
                  </button>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2 text-sm flex items-center gap-2">
                    <Star className="w-4 h-4 text-vote-gold-500" />
                    Achievements
                  </h4>
                  <ul className="space-y-1">
                    {candidate.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
                        <div className="w-1 h-1 bg-slate-400 rounded-full" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Links */}
                {Object.keys(candidate.socialLinks).length > 0 && (
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <div className="flex gap-2">
                      {Object.entries(candidate.socialLinks).map(([platform, url]) => (
                        <a
                          key={platform}
                          href={url}
                          onClick={(e) => e.stopPropagation()}
                          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-full transition-colors flex items-center gap-1"
                        >
                          {platform.charAt(0).toUpperCase() + platform.slice(1)}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vote Button */}
        <div className="sticky bottom-0 bg-white border-t border-slate-200 p-6 shadow-2xl rounded-t-2xl">
          <div className="max-w-2xl mx-auto flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-slate-600">
                {selectedCandidate ? (
                  <>
                    Selected:{' '}
                    <span className="font-semibold text-slate-900">
                      {candidates.find((c) => c.id === selectedCandidate)?.name}
                    </span>
                  </>
                ) : (
                  'Please select a candidate to continue'
                )}
              </p>
            </div>

            <button
              onClick={handleVoteClick}
              disabled={selectedCandidate === null}
              className={`px-8 py-4 rounded-xl font-bold shadow-lg transition-all flex items-center gap-2 ${
                selectedCandidate
                  ? 'bg-gradient-to-r from-success-green-600 to-success-green-500 text-white hover:shadow-xl hover:scale-105'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <VoteIcon className="w-5 h-5" />
              Cast My Vote
            </button>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showConfirmation && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setShowConfirmation(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-2xl p-8 shadow-2xl z-50"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4">⚠️ Confirm Your Vote</h2>
              <p className="text-slate-600 mb-6">
                Please review your selection carefully. Once submitted, your vote cannot be changed.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6">
                <p className="text-sm text-slate-600 mb-2">Your Selection:</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-trust-blue-200 to-democracy-purple-200 rounded-lg flex items-center justify-center">
                    <span className="text-xl font-bold text-trust-blue-700">
                      {candidates.find((c) => c.id === selectedCandidate)?.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">
                      {candidates.find((c) => c.id === selectedCandidate)?.name}
                    </p>
                    <p className="text-sm text-slate-600">
                      {candidates.find((c) => c.id === selectedCandidate)?.designation}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-6 text-sm">
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" required />
                  <span className="text-slate-700">I confirm this is my final choice</span>
                </label>
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" required />
                  <span className="text-slate-700">I understand my vote is anonymous</span>
                </label>
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" required />
                  <span className="text-slate-700">I agree to election terms</span>
                </label>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="flex-1 px-6 py-3 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors"
                >
                  Go Back
                </button>
                <button
                  onClick={handleConfirmVote}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-success-green-600 to-success-green-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Cast My Vote →
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
