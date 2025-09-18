'use client';

import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) throw error;
      setMessage('Check your email for the login link!');
    } catch (error: any) {
      setMessage(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Sign in with email</h1>
        <p className="text-gray-600 mb-6">
          Enter your email to receive a magic link for sign-in.
        </p>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            disabled={loading}
            className="p-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send magic link'}
          </button>
        </form>
        {message && (
          <p className="mt-4 text-center text-sm text-green-500">{message}</p>
        )}
      </div>
    </div>
  );
};

export default Auth;