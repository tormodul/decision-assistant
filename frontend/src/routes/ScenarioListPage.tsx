// src/routes/ScenarioListPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScenarioCard from '../components/ScenarioCard';

const scenarios = [
  { id: "alpha", title: "Field Operation Alpha - Extended Reconnaissance Manoeuvres", country: "Norway", roleTitle: "Squad Leader", tags: ["Army", "Cyber", "Recon", "Intelligence"], roles: ["Squad Leader", "Comms Specialist", "Intel Officer", "Medic", "Rifleman"], created: "2025-04-24" },
  { id: "logistics", title: "Supply Chain Logistics Optimisation", country: "UK", roleTitle: "Operations Manager", tags: ["Logistics", "Army", "Air Force", "Supply Chain", "Planning"], roles: ["Ops Manager", "Logistics Officer", "Transport Coord.", "Warehouse Sup."], created: "2025-04-22" },
  { id: "coastal", title: "Coastal Defence Readiness", country: "Sweden", roleTitle: "Naval Commander", tags: ["Navy", "Coastal Defence", "Exercise"], roles: ["Commander", "Watch Officer", "Radar Operator", "Sonar Tech"], created: "2025-04-20" },
  { id: "joint-air", title: "Joint Air Superiority Exercise", country: "NATO", roleTitle: "Air Operations Director", tags: ["Air Force", "NATO", "Joint Ops", "Exercise"], roles: ["Director", "Fighter Pilot Lead", "AWACS Controller", "Intel Analyst"], created: "2025-04-15" },
];

function ScenarioListPage() {
  const navigate = useNavigate();

  const handleCardClick = (scenarioId: string) => {
    navigate(`/scenario/${scenarioId}`);
  };

  const handleCreateNewScenario = () => {
    alert("'+ Create New Scenario' button pressed! (Functionality to be implemented)");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8"> {/* Apply the layout styling here */}
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">Decision Maker Assistant</h1>
          <p className="text-gray-600">Tactical scenario planning and decision support system</p>
        </header>

        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-700">Scenarios</h2>
            <button
              className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition shadow hover:shadow-md text-sm font-medium"
              onClick={handleCreateNewScenario}
            >
              + Create New Scenario
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scenarios.map((scenario) => (
              <ScenarioCard
                key={scenario.id}
                id={scenario.id}
                title={scenario.title}
                country={scenario.country}
                roleTitle={scenario.roleTitle}
                tags={scenario.tags}
                roles={scenario.roles}
                created={scenario.created}
                onClick={() => handleCardClick(scenario.id)}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ScenarioListPage;