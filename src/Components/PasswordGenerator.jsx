// src/PasswordGenerator.js
import React, { useState } from 'react';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characters = lowercaseChars;
    if (includeUppercase) characters += uppercaseChars;
    if (includeNumbers) characters += numberChars;
    if (includeSymbols) characters += symbolChars;

    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setPassword(result);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 p-4">
      <div className="bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-lg max-w-md w-full transition-transform transform hover:scale-105">
        <h1 className="text-2xl md:text-3xl font-extrabold text-center mb-6 text-gray-800">Password Generator</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 text-base md:text-lg mb-2">Password Length:</label>
            <input
              type="number"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
              min="4"
              max="20"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-base md:text-lg mb-2">Include Uppercase:</label>
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
              className="form-checkbox text-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-base md:text-lg mb-2">Include Numbers:</label>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              className="form-checkbox text-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-base md:text-lg mb-2">Include Symbols:</label>
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              className="form-checkbox text-blue-500"
            />
          </div>
          <button
            onClick={generatePassword}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-150"
          >
            Generate Password
          </button>
          {password && (
            <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-700">Generated Password:</h2>
              <p className="text-gray-900 font-mono mt-2 break-all">{password}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
