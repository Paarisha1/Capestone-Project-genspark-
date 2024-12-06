import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Exercise = {
  id: number;
  name: string;
  description: string;
  category: string; // Add category field
};

const Exercises = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch("http://localhost:3001/exercises");
        if (!response.ok) {
          throw new Error("Failed to fetch exercises");
        }
        const data = await response.json();
        setExercises(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-xl font-bold text-gray-700">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-xl font-bold text-red-500">Error: {error}</p>
      </div>
    );
  }

  const groupedExercises = exercises.reduce((groups, exercise) => {
    const { category } = exercise;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(exercise);
    return groups;
  }, {} as Record<string, Exercise[]>);

  return (
    <div className="relative min-h-screen bg-gray-50 p-10">
      <h1 className="mb-6 text-center text-4xl font-bold text-gray-800">
        Exercises
      </h1>
      {Object.entries(groupedExercises).map(([category, exercises]) => (
        <div key={category} className="mb-10">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">{category}</h2>
          <div className="lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {exercises.map((exercise) => (
              <div
                key={exercise.id}
                className="rounded-lg bg-white p-6 shadow hover:shadow-lg"
              >
                <h3 className="mb-2 text-xl font-bold text-gray-700">
                  {exercise.name}
                </h3>
                <p className="text-gray-500">{exercise.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      {/* Back to Payment Button */}
      <button
        onClick={() => navigate("/")}
        className="rounded bg-red-500 px-6 py-2 text-white hover:bg-red-600"
      >
        Return
      </button>
    </div>
  );
};

export default Exercises;
