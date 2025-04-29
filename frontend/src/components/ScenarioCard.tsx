// src/components/ScenarioCard.tsx
import React from 'react';

// Add 'id' to the props interface
export interface ScenarioCardProps {
  id: string; // <-- Add this line
  title: string;
  country: string;
  roleTitle: string;
  tags: string[];
  roles: string[];
  created: string;
  onClick: () => void; // onClick doesn't need the id here, parent handles it
}

// Destructure 'id' from props, although it's not directly used in the JSX here
const ScenarioCard: React.FC<ScenarioCardProps> = ({
  id, // <-- Destructure id
  title,
  country,
  roleTitle,
  tags,
  roles,
  created,
  onClick,
}) => {
  const countryColor = {
    Norway: 'red',
    UK: 'blue',
    Sweden: 'yellow',
    NATO: 'indigo',
  }[country] || 'gray';

  return (
    <div
      // The component doesn't need the ID internally for rendering,
      // but the parent uses the ID when setting up the onClick handler.
      className="bg-white shadow-md rounded-xl p-4 cursor-pointer hover:shadow-lg transition"
      onClick={onClick} // This onClick is already prepared by the parent to use the correct ID
    >
       {/* ... rest of the card JSX remains the same ... */}
       <div className="flex justify-between items-start mb-1">
        <h3 className="font-semibold text-lg mr-2">{title}</h3>
        <span
          className={`text-xs font-medium text-${countryColor}-700 bg-${countryColor}-100 rounded-full px-3 py-1 whitespace-nowrap`}
         >
          {country}
        </span>
      </div>
      <p className="text-sm text-gray-600 mb-2">{roleTitle}</p>
      <div className="mt-2 flex flex-wrap gap-2 mb-3">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium`}
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="text-sm text-gray-600 mt-3 mb-2">
        <span className="font-semibold">Roles:</span> {roles.join(', ')}
      </p>
      <p className="text-xs text-gray-400 mt-2">Created: {created}</p>
    </div>
  );
};

export default ScenarioCard;