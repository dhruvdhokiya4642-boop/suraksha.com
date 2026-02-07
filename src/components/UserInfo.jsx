import { useState } from 'react';
import { auth } from '../firebase';
import { Copy, Check, User } from 'lucide-react';

export default function UserInfo() {
  const [copied, setCopied] = useState(false);
  const user = auth.currentUser;

  if (!user) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg">
        <p className="text-gray-400">Please sign in to view your user information</p>
      </div>
    );
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg border border-trust-teal/30">
      <div className="flex items-center gap-3 mb-6">
        <User className="w-8 h-8 text-trust-teal" />
        <h2 className="text-2xl font-bold text-trust-teal">Your Account Information</h2>
      </div>

      <div className="space-y-4">
        <div className="bg-black/40 p-4 rounded-lg">
          <label className="text-sm text-gray-400 block mb-1">Firebase Auth UID</label>
          <div className="flex items-center gap-2">
            <code className="flex-1 text-trust-teal font-mono text-sm break-all">
              {user.uid}
            </code>
            <button
              onClick={() => copyToClipboard(user.uid)}
              className="p-2 bg-trust-teal/10 hover:bg-trust-teal/20 rounded transition"
              title="Copy UID"
            >
              {copied ? (
                <Check size={18} className="text-green-400" />
              ) : (
                <Copy size={18} className="text-trust-teal" />
              )}
            </button>
          </div>
        </div>

        <div className="bg-black/40 p-4 rounded-lg">
          <label className="text-sm text-gray-400 block mb-1">Email</label>
          <p className="text-white">{user.email}</p>
        </div>

        <div className="bg-black/40 p-4 rounded-lg">
          <label className="text-sm text-gray-400 block mb-1">Display Name</label>
          <p className="text-white">{user.displayName || 'Not set'}</p>
        </div>

        <div className="bg-black/40 p-4 rounded-lg">
          <label className="text-sm text-gray-400 block mb-1">Email Verified</label>
          <p className="text-white">{user.emailVerified ? 'Yes ✓' : 'No'}</p>
        </div>

        <div className="bg-black/40 p-4 rounded-lg">
          <label className="text-sm text-gray-400 block mb-1">Account Created</label>
          <p className="text-white">
            {user.metadata.creationTime ? new Date(user.metadata.creationTime).toLocaleString() : 'Unknown'}
          </p>
        </div>

        <div className="bg-black/40 p-4 rounded-lg">
          <label className="text-sm text-gray-400 block mb-1">Last Sign In</label>
          <p className="text-white">
            {user.metadata.lastSignInTime ? new Date(user.metadata.lastSignInTime).toLocaleString() : 'Unknown'}
          </p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-trust-teal/10 border border-trust-teal/30 rounded-lg">
        <p className="text-sm text-gray-300">
          <strong className="text-trust-teal">Note:</strong> Your UID is used to store your trusted contacts 
          and SOS alerts in Firestore. Keep it safe!
        </p>
      </div>
    </div>
  );
}
