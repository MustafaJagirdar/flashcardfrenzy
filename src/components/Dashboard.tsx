// src/components/Dashboard.tsx
'use client';

import { supabase } from '../lib/supabaseClient';

const Dashboard = ({ user }: { user: any }) => {
  const handleCreateGame = async () => {
    try {
      const { data, error } = await supabase
        .from('matches')
        .insert([{ creator_id: user.id }])
        .select();

      if (error) throw error;

      alert(`Game created with ID: ${data[0].id}`);
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="p-8 bg-white rounded shadow-md w-full max-w-sm text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user.email}!</h1>
      <p className="text-gray-600 mb-6">Let's start a new game.</p>
      <button
        onClick={handleCreateGame}
        className="w-full py-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Create New Game
      </button>
      <button
        onClick={handleLogout}
        className="w-full py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
