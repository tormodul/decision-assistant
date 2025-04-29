// src/pages/ScenarioDetailPage.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom'; // Import useParams and Link

function ScenarioDetailPage() {
  // useParams() returns an object with key/value pairs of URL parameters
  // { id: 'alpha' } for example, if the URL is /scenario/alpha
  const { id } = useParams<{ id: string }>(); // Get the 'id' parameter from the URL

  // In a real app, you would use this 'id' to fetch the specific
  // scenario data from an API or state management store.
  // For now, we just display the ID.

  // Example: Fetch data based on id using useEffect (pseudo-code)
  /*
  const [scenarioData, setScenarioData] = useState(null);
  useEffect(() => {
    fetch(`/api/scenarios/${id}`)
      .then(res => res.json())
      .then(data => setScenarioData(data))
      .catch(error => console.error("Failed to fetch scenario:", error));
  }, [id]); // Re-run effect if id changes

  if (!scenarioData) {
    return <div>Loading scenario...</div>;
  }
  */

  return (
    <div className="max-w-4xl mx-auto p-8">
      <header className="mb-6 pb-4 border-b">
        {/* Add a link to go back to the list */}
        <Link to="/scenarios" className="text-blue-600 hover:underline mb-4 block">
          &larr; Back to Scenarios
        </Link>
        <h1 className="text-3xl font-bold text-gray-800">
          Scenario Detail
        </h1>
        <p className="text-lg text-gray-600">
          Displaying details for Scenario ID: <span className="font-semibold text-indigo-600">{id}</span>
        </p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Scenario Content</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          {/* Placeholder for actual scenario content based on fetched data */}
          <p>Details for scenario '{id}' would be loaded and displayed here.</p>
          <p>For example, you might show:</p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Full description</li>
            <li>Objectives</li>
            <li>Assigned units</li>
            <li>Timeline</li>
            <li>Decision points</li>
          </ul>
          {/* Example using fetched data (if implemented) */}
          {/* <h1>{scenarioData.title}</h1> */}
          {/* <p>{scenarioData.description}</p> */}
        </div>
      </section>
    </div>
  );
}

export default ScenarioDetailPage;