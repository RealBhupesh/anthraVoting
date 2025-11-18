'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  Calendar,
  Users as UsersIcon,
  Users2,
  Settings,
  ArrowLeft,
  ArrowRight,
  Check,
  Upload,
  Plus,
  X,
  Trash2,
} from 'lucide-react';
import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { useRouter } from 'next/navigation';

const steps = [
  { id: 1, name: 'Basic Information', icon: FileText },
  { id: 2, name: 'Schedule', icon: Calendar },
  { id: 3, name: 'Candidates', icon: Users2 },
  { id: 4, name: 'Voters', icon: UsersIcon },
  { id: 5, name: 'Settings', icon: Settings },
];

export default function CreateElection() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'student',
    type: 'single',
    visibility: 'private',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    timezone: 'IST',
    candidates: [{ name: '', designation: '', manifesto: '', photo: null }],
    voters: [],
    sendReminders: {
      beforeStart: true,
      onStart: true,
      beforeEnd: true,
      oneHour: true,
    },
    security: {
      blockchain: true,
      twoFactor: true,
      fraudDetection: true,
    },
  });

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const addCandidate = () => {
    setFormData({
      ...formData,
      candidates: [...formData.candidates, { name: '', designation: '', manifesto: '', photo: null }],
    });
  };

  const removeCandidate = (index: number) => {
    setFormData({
      ...formData,
      candidates: formData.candidates.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = () => {
    console.log('Creating election:', formData);
    // Here you would submit to your API
    router.push('/admin/elections');
  };

  return (
    <AdminLayout>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Create New Election</h1>
          <p className="text-slate-600">Step {currentStep} of 5</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                      currentStep === step.id
                        ? 'bg-gradient-to-r from-trust-blue-600 to-trust-blue-500 text-white shadow-lg scale-110'
                        : currentStep > step.id
                        ? 'bg-success-green-500 text-white'
                        : 'bg-slate-200 text-slate-400'
                    }`}
                  >
                    {currentStep > step.id ? (
                      <Check className="w-6 h-6" />
                    ) : (
                      <step.icon className="w-6 h-6" />
                    )}
                  </div>
                  <p className={`mt-2 text-xs font-medium ${
                    currentStep === step.id ? 'text-trust-blue-600' : 'text-slate-500'
                  } hidden sm:block`}>
                    {step.name}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-1 mx-2 ${
                    currentStep > step.id ? 'bg-success-green-500' : 'bg-slate-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-xl p-8 shadow-lg min-h-[500px]">
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-6">📝 Basic Information</h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Election Title *
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="Student Council President 2025"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-trust-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Description
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      rows={4}
                      placeholder="Describe the purpose and details of this election..."
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-trust-blue-500 focus:border-transparent"
                    />
                    <p className="text-xs text-slate-500 mt-1">0/500 characters</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Category *
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-trust-blue-500 focus:border-transparent"
                      >
                        <option value="student">Student Elections</option>
                        <option value="corporate">Corporate</option>
                        <option value="community">Community</option>
                        <option value="event">Event</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Election Type *
                      </label>
                      <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-trust-blue-500 focus:border-transparent"
                      >
                        <option value="single">Single Winner (First-Past-the-Post)</option>
                        <option value="multiple">Multiple Winners</option>
                        <option value="ranked">Ranked Choice Voting</option>
                        <option value="approval">Approval Voting</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      Visibility
                    </label>
                    <div className="space-y-2">
                      {[
                        { value: 'public', label: 'Public', desc: 'Anyone can view' },
                        { value: 'private', label: 'Private', desc: 'Invited voters only' },
                        { value: 'unlisted', label: 'Unlisted', desc: 'Link access only' },
                      ].map((option) => (
                        <label
                          key={option.value}
                          className="flex items-start gap-3 p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50"
                        >
                          <input
                            type="radio"
                            name="visibility"
                            value={option.value}
                            checked={formData.visibility === option.value}
                            onChange={(e) => setFormData({ ...formData, visibility: e.target.value })}
                            className="mt-1"
                          />
                          <div>
                            <p className="font-medium text-slate-900">{option.label}</p>
                            <p className="text-sm text-slate-600">{option.desc}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-6">📅 Schedule & Timeline</h2>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Start Date *
                      </label>
                      <input
                        type="date"
                        value={formData.startDate}
                        onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-trust-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Start Time *
                      </label>
                      <input
                        type="time"
                        value={formData.startTime}
                        onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-trust-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        End Date *
                      </label>
                      <input
                        type="date"
                        value={formData.endDate}
                        onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-trust-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        End Time *
                      </label>
                      <input
                        type="time"
                        value={formData.endTime}
                        onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-trust-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Timezone
                    </label>
                    <select
                      value={formData.timezone}
                      onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-trust-blue-500 focus:border-transparent"
                    >
                      <option value="IST">IST (Indian Standard Time)</option>
                      <option value="UTC">UTC</option>
                      <option value="EST">EST</option>
                      <option value="PST">PST</option>
                    </select>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                    <p className="font-semibold text-slate-700 mb-2">Duration: 5 days 7 hours</p>
                    <p className="text-sm text-amber-600">⚠️ Recommended: 3-7 days for best participation</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      Send reminder emails:
                    </label>
                    <div className="space-y-2">
                      {Object.entries({
                        beforeStart: '24 hours before voting starts',
                        onStart: 'When voting opens',
                        beforeEnd: '24 hours before closing',
                        oneHour: '1 hour before closing',
                      }).map(([key, label]) => (
                        <label key={key} className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.sendReminders[key as keyof typeof formData.sendReminders]}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                sendReminders: {
                                  ...formData.sendReminders,
                                  [key]: e.target.checked,
                                },
                              })
                            }
                            className="w-4 h-4 text-trust-blue-600 rounded"
                          />
                          <span className="text-slate-700">{label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-slate-900">👥 Add Candidates</h2>
                  <button
                    onClick={addCandidate}
                    className="flex items-center gap-2 bg-trust-blue-600 text-white px-4 py-2 rounded-lg hover:bg-trust-blue-700 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    Add Candidate
                  </button>
                </div>

                <div className="space-y-6">
                  {formData.candidates.map((candidate, index) => (
                    <div
                      key={index}
                      className="border border-slate-200 rounded-lg p-6 relative"
                    >
                      {index > 0 && (
                        <button
                          onClick={() => removeCandidate(index)}
                          className="absolute top-4 right-4 p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                          <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Photo
                          </label>
                          <div className="flex items-center gap-4">
                            <div className="w-24 h-24 bg-slate-100 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-300">
                              <Upload className="w-8 h-8 text-slate-400" />
                            </div>
                            <div>
                              <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors">
                                Upload Photo
                              </button>
                              <p className="text-xs text-slate-500 mt-1">Recommended: 200x200px</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            placeholder="Sarah Kumar"
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-trust-blue-500 focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Designation/Info
                          </label>
                          <input
                            type="text"
                            placeholder="3rd Year, CSE"
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-trust-blue-500 focus:border-transparent"
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Manifesto/Description
                          </label>
                          <textarea
                            rows={3}
                            placeholder="I aim to improve campus facilities and student welfare..."
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-trust-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-6">👥 Voter Management</h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      Who can vote?
                    </label>
                    <div className="space-y-2">
                      {[
                        { value: 'link', label: 'Anyone with the link' },
                        { value: 'invited', label: 'Only invited voters' },
                        { value: 'domain', label: 'Anyone from domain (@university.edu)' },
                      ].map((option) => (
                        <label
                          key={option.value}
                          className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50"
                        >
                          <input type="radio" name="voterType" className="w-4 h-4" />
                          <span className="text-slate-700">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      Add Voters
                    </label>
                    <div className="flex gap-4">
                      <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-trust-blue-600 text-trust-blue-600 rounded-lg hover:bg-trust-blue-50 transition-colors">
                        <Plus className="w-5 h-5" />
                        Add Individual
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-trust-blue-600 text-trust-blue-600 rounded-lg hover:bg-trust-blue-50 transition-colors">
                        <Upload className="w-5 h-5" />
                        Import CSV
                      </button>
                    </div>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                    <p className="font-semibold text-slate-900 mb-2">CSV Template</p>
                    <code className="text-sm text-slate-600 block mb-2">
                      email,name,student_id,department
                    </code>
                    <button className="text-sm text-trust-blue-600 hover:text-trust-blue-700 font-semibold">
                      📥 Download Template
                    </button>
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900 mb-3">Current Voter List: 0 voters</p>
                    <div className="border border-slate-200 rounded-lg p-8 text-center text-slate-500">
                      No voters added yet. Upload a CSV or add voters individually.
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      Voter Verification
                    </label>
                    <div className="space-y-2">
                      {['Email verification required', 'SMS OTP (if phone provided)', 'Unique voter token'].map(
                        (option) => (
                          <label key={option} className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-trust-blue-600 rounded" defaultChecked />
                            <span className="text-slate-700">{option}</span>
                          </label>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-6">⚙️ Advanced Settings</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">🔐 Security</h3>
                    <div className="space-y-2">
                      {Object.entries({
                        blockchain: 'Enable blockchain verification',
                        twoFactor: 'Two-factor authentication required',
                        fraudDetection: 'IP-based fraud detection',
                      }).map(([key, label]) => (
                        <label key={key} className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.security[key as keyof typeof formData.security]}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                security: {
                                  ...formData.security,
                                  [key]: e.target.checked,
                                },
                              })
                            }
                            className="w-4 h-4 text-trust-blue-600 rounded"
                          />
                          <span className="text-slate-700">{label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">📊 Results</h3>
                    <div className="space-y-2">
                      {[
                        'Show live results to voters',
                        'Show candidate rankings',
                        'Show participation statistics',
                      ].map((option) => (
                        <label key={option} className="flex items-center gap-3 cursor-pointer">
                          <input type="checkbox" className="w-4 h-4 text-trust-blue-600 rounded" defaultChecked />
                          <span className="text-slate-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">📧 Notifications</h3>
                    <div className="space-y-2">
                      {[
                        'Election launch',
                        'Vote confirmation',
                        'Results announcement',
                        'Reminders (before closing)',
                      ].map((option) => (
                        <label key={option} className="flex items-center gap-3 cursor-pointer">
                          <input type="checkbox" className="w-4 h-4 text-trust-blue-600 rounded" defaultChecked />
                          <span className="text-slate-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-success-green-50 to-trust-blue-50 border border-success-green-200 rounded-lg p-6">
                    <h4 className="font-semibold text-slate-900 mb-2">✅ Ready to Launch!</h4>
                    <p className="text-sm text-slate-600 mb-4">
                      Your election is configured and ready to go. Review all settings and click "Launch Election"
                      to make it live.
                    </p>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
                        Save as Draft
                      </button>
                      <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors">
                        Preview
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center gap-2 px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          {currentStep < 5 ? (
            <button
              onClick={nextStep}
              className="flex items-center gap-2 bg-gradient-to-r from-trust-blue-600 to-trust-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Next: {steps[currentStep].name}
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="flex items-center gap-2 bg-gradient-to-r from-success-green-600 to-success-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Check className="w-4 h-4" />
              🚀 Launch Election
            </button>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
