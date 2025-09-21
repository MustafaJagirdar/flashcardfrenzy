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
    </div>
  );
};

export default Dashboard;
