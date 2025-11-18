'use client';

import { motion } from 'framer-motion';
import {
  Smartphone,
  QrCode,
  Shield,
  Key,
  CheckCircle2,
  Copy,
  Download,
  ArrowLeft,
  ArrowRight,
  Vote,
  AlertCircle,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TwoFactorSetupPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [backupCodes, setBackupCodes] = useState([
    'A1B2-C3D4-E5F6',
    'G7H8-I9J0-K1L2',
    'M3N4-O5P6-Q7R8',
    'S9T0-U1V2-W3X4',
    'Y5Z6-A7B8-C9D0',
    'E1F2-G3H4-I5J6',
  ]);
  const [savedBackupCodes, setSavedBackupCodes] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const router = useRouter();

  // Mock secret key for QR code
  const secretKey = 'JBSWY3DPEHPK3PXP';
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=otpauth://totp/AnthaVoting:user@example.com?secret=${secretKey}&issuer=AnthaVoting`;

  const handleCodeChange = (index: number, value: string) => {
    if (value.length > 1) return;

    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleVerify = () => {
    setIsVerifying(true);
    const code = verificationCode.join('');

    // Simulate verification
    setTimeout(() => {
      setIsVerifying(false);
      if (code.length === 6) {
        setStep(3);
      }
    }, 1500);
  };

  const handleCopyKey = () => {
    navigator.clipboard.writeText(secretKey);
    alert('Secret key copied to clipboard!');
  };

  const handleDownloadBackupCodes = () => {
    const content = backupCodes.join('\n');
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'anthra-voting-backup-codes.txt';
    a.click();
    setSavedBackupCodes(true);
  };

  const handleComplete = () => {
    router.push('/vote');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-trust-blue-900 to-democracy-purple-900 flex items-center justify-center p-6 relative overflow-hidden">
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl relative z-10"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-trust-blue-600 to-democracy-purple-600 rounded-xl flex items-center justify-center">
            <Vote className="w-7 h-7 text-white" />
          </div>
          <span className="text-2xl font-bold text-white">ANTHRA VOTING</span>
        </Link>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="p-8 border-b border-slate-200 bg-gradient-to-r from-trust-blue-50 to-democracy-purple-50">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-trust-blue-600 to-democracy-purple-600 rounded-xl flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Enable Two-Factor Authentication</h1>
                <p className="text-slate-600">Add an extra layer of security to your account</p>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center flex-1">
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full font-semibold text-sm transition-all ${
                      s <= step
                        ? 'bg-trust-blue-600 text-white'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {s < step ? <CheckCircle2 className="w-5 h-5" /> : s}
                  </div>
                  {s < 3 && (
                    <div className={`flex-1 h-1 mx-2 rounded ${s < step ? 'bg-trust-blue-600' : 'bg-slate-200'}`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Step 1: Scan QR Code */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Step 1: Install Authenticator App</h3>
                  <p className="text-slate-600 mb-4">
                    Download and install an authenticator app on your mobile device if you haven't already.
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {['Google Authenticator', 'Microsoft Authenticator', 'Authy'].map((app) => (
                      <div key={app} className="p-3 border border-slate-200 rounded-lg text-center">
                        <Smartphone className="w-8 h-8 mx-auto mb-2 text-trust-blue-600" />
                        <p className="text-xs text-slate-700">{app}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Step 2: Scan QR Code</h3>
                  <p className="text-slate-600 mb-6">
                    Open your authenticator app and scan this QR code to add your account.
                  </p>

                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    {/* QR Code */}
                    <div className="flex-shrink-0">
                      <div className="w-48 h-48 bg-white border-4 border-slate-200 rounded-xl p-4 flex items-center justify-center">
                        <QrCode className="w-full h-full text-slate-300" />
                        {/* In production, use actual QR code library */}
                      </div>
                    </div>

                    {/* Manual Entry */}
                    <div className="flex-1">
                      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-slate-700">Can't scan?</span>
                          <Key className="w-4 h-4 text-slate-600" />
                        </div>
                        <p className="text-xs text-slate-600 mb-3">Enter this secret key manually:</p>
                        <div className="flex items-center gap-2 p-3 bg-white border border-slate-200 rounded-lg">
                          <code className="flex-1 text-sm font-mono text-slate-900">{secretKey}</code>
                          <button
                            onClick={handleCopyKey}
                            className="text-trust-blue-600 hover:text-trust-blue-700 transition-colors"
                          >
                            <Copy className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-trust-blue-600 to-trust-blue-500 hover:from-trust-blue-700 hover:to-trust-blue-600 text-white font-semibold rounded-lg shadow-lg transition-all"
                >
                  Continue
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            )}

            {/* Step 2: Verify Code */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Step 3: Verify Setup</h3>
                  <p className="text-slate-600 mb-6">
                    Enter the 6-digit verification code from your authenticator app to complete setup.
                  </p>

                  {/* Code Input */}
                  <div className="flex gap-3 justify-center mb-6">
                    {verificationCode.map((digit, index) => (
                      <input
                        key={index}
                        id={`code-${index}`}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleCodeChange(index, e.target.value)}
                        className="w-14 h-14 text-center text-2xl font-bold border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-trust-blue-500 focus:border-transparent transition-all"
                      />
                    ))}
                  </div>

                  {/* Info Alert */}
                  <div className="flex items-start gap-3 p-4 bg-trust-blue-50 border border-trust-blue-200 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-trust-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-trust-blue-900">
                      <p className="font-semibold mb-1">Important!</p>
                      <p>Make sure to save your backup codes in the next step. They can be used to access your account if you lose your device.</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setStep(1)}
                    className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold rounded-lg transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Back
                  </button>
                  <button
                    onClick={handleVerify}
                    disabled={verificationCode.join('').length !== 6 || isVerifying}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-success-green-600 to-success-green-500 hover:from-success-green-700 hover:to-success-green-600 text-white font-semibold rounded-lg shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isVerifying ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Verifying...
                      </>
                    ) : (
                      <>
                        Verify & Continue
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Backup Codes */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-success-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-success-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">2FA Enabled Successfully!</h3>
                  <p className="text-slate-600">Save your backup codes to ensure account access</p>
                </div>

                {/* Backup Codes */}
                <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Key className="w-5 h-5 text-slate-600" />
                      <h4 className="font-bold text-slate-900">Backup Recovery Codes</h4>
                    </div>
                    <button
                      onClick={handleDownloadBackupCodes}
                      className="flex items-center gap-2 px-3 py-1.5 bg-trust-blue-600 hover:bg-trust-blue-700 text-white text-sm font-semibold rounded-lg transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {backupCodes.map((code, index) => (
                      <div
                        key={index}
                        className="p-3 bg-white border border-slate-200 rounded-lg"
                      >
                        <code className="text-sm font-mono text-slate-900">{code}</code>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-vote-gold-50 border border-vote-gold-200 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-vote-gold-600 mt-0.5 flex-shrink-0" />
                    <div className="text-xs text-vote-gold-900">
                      <p className="font-semibold mb-1">Keep these codes safe!</p>
                      <p>Each code can only be used once. Store them in a secure location.</p>
                    </div>
                  </div>
                </div>

                {/* Confirmation Checkbox */}
                <label className="flex items-start gap-3 cursor-pointer p-4 border-2 border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                  <input
                    type="checkbox"
                    checked={savedBackupCodes}
                    onChange={(e) => setSavedBackupCodes(e.target.checked)}
                    className="w-5 h-5 mt-0.5 text-trust-blue-600 border-slate-300 rounded focus:ring-trust-blue-500"
                  />
                  <span className="text-sm text-slate-700">
                    I have saved my backup codes in a secure location and understand I will need them if I lose access to my authenticator app.
                  </span>
                </label>

                <button
                  onClick={handleComplete}
                  disabled={!savedBackupCodes}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-success-green-600 to-success-green-500 hover:from-success-green-700 hover:to-success-green-600 text-white font-semibold rounded-lg shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Complete Setup
                  <CheckCircle2 className="w-5 h-5" />
                </button>
              </motion.div>
            )}
          </div>
        </div>

        {/* Skip Option */}
        {step < 3 && (
          <div className="mt-6 text-center">
            <Link href="/vote" className="text-sm text-white/80 hover:text-white transition-colors">
              Skip for now (Not recommended)
            </Link>
          </div>
        )}
      </motion.div>
    </div>
  );
}
