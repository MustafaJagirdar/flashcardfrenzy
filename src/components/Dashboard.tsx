<<<<<<< HEAD
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
=======
import React from 'react';

interface DashboardProps {
  user: {
    email: string;
    name?: string;
  };
  flashcards: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
}

const Dashboard: React.FC<DashboardProps> = ({ user, flashcards }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">Welcome, {user.name || user.email}!</h2>
          <p className="text-gray-600">Email: {user.email}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Your Flashcards</h2>
          {flashcards.length > 0 ? (
            <ul className="space-y-4">
              {flashcards.map((card) => (
                <li key={card.id} className="border border-gray-200 p-4 rounded-md">
                  <h3 className="font-medium">{card.question}</h3>
                  <p className="text-gray-600 mt-2">{card.answer}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No flashcards yet. Start creating some!</p>
          )}
        </div>
      </div>
>>>>>>> blackboxai/fix-auth-dashboard-components
    </div>
  );
};

export default Dashboard;
