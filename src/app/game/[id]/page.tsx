'use client';

import { useParams } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

const GameRoom = () => {
  const params = useParams();
  const gameId = params.id;

  const handleJoinGame = async () => {
    // This will be updated later to add the user to the game
    alert(`Attempting to join game: ${gameId}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="p-8 bg-white rounded shadow-md w-full max-w-sm text-center">
        <h1 className="text-3xl font-bold mb-4">Game Room</h1>
        <p className="text-gray-600 mb-6">Game ID: {gameId}</p>
        <button
          onClick={handleJoinGame}
          className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Join This Game
        </button>
      </div>
    </div>
  );
};

export default GameRoom;