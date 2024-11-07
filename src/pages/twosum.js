import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import './twosum.css';
import LeftImage from './logoo.png';

const TwoSum = () => {
  const [code, setCode] = useState(`function twoSum(nums, target) {
    // Your implementation here
}`);
  const [output, setOutput] = useState('');
  const [executionStatus, setExecutionStatus] = useState('');
  const [status, setStatus] = useState('');

  // Test cases for validation
  const testCases = [
    { input: [2, 7, 11, 15], target: 9, expected: [0, 1] },
    { input: [3, 2, 4], target: 6, expected: [1, 2] },
    { input: [3, 3], target: 6, expected: [0, 1] },
  ];

  // Handle code submission
  const runCode = () => {
    setExecutionStatus('Running...');
    setStatus(''); // Clear status for each run

    try {
      // Validate that the user code contains a function named twoSum
      if (!/function\s+twoSum\s*\(/.test(code)) {
        throw new Error("You must define a function named 'twoSum'.");
      }

      // Create a function using the user's code
      const func = new Function('nums', 'target', code + '\nreturn twoSum(nums, target);');

      const results = testCases.map(({ input, target, expected }) => {
        if (typeof func !== 'function') {
          throw new Error('The user-defined function is not valid.');
        }

        const result = func(input, target);

        // Ensure the result is defined
        if (result === undefined) {
          return { result, expected, isCorrect: false, input, target };
        }

        return {
          result,
          expected,
          isCorrect: JSON.stringify(result) === JSON.stringify(expected),
          input,
          target
        };
      });

      const allCorrect = results.every((r) => r.isCorrect);

      // Determine the final output
      if (allCorrect) {
        setOutput(results.map(r => JSON.stringify(r.result)).join(', ')); // Join results if all correct
        setStatus('All test cases passed!');
      } else {
        // Check for the first incorrect result
        const incorrectResult = results.find(r => !r.isCorrect);
        setOutput(`Failed: Expected ${JSON.stringify(incorrectResult.expected)}, but got ${JSON.stringify(incorrectResult.result)}`);
        setStatus('Some test cases failed.');
      }

      setExecutionStatus('Success');
    } catch (error) {
      setOutput(`Error: ${error.message}`);
      setExecutionStatus('Failed');
      setStatus('Compilation Error');
    }
  };

  // Clear the output
  const clearOutput = () => {
    setOutput('');
    setExecutionStatus('');
    setStatus('');
  };

  return (
    <div className="container">
      {/* Left Pane */}
      <div className="left-pane-1">
        <div className="image-heading-container">
          <Link to="/home">
            <img src={LeftImage} alt="Top Left" className="top-left-image" />
          </Link>
          <h1>Two Sum</h1>
        </div>
        <div className="description">
          <p>
            Given an array of integers <strong>nums</strong> and an integer <strong>target</strong>, 
            return the indices of two numbers such that they add up to target.
          </p>
          <p>
            You may assume that each input would have exactly one solution, 
            and you may not use the same element twice.
          </p>
        </div>

        {/* Examples */}
        <div className="example">
          <h4>Example 1:</h4>
          <p>Input: nums = [2,7,11,15], target = 9</p>
          <p>Output: [0,1]</p>
        </div>
        <div className="example">
          <h4>Example 2:</h4>
          <p>Input: nums = [3,2,4], target = 6</p>
          <p>Output: [1,2]</p>
        </div>
        <div className="example">
          <h4>Example 3:</h4>
          <p>Input: nums = [3,3], target = 6</p>
          <p>Output: [0,1]</p>
        </div>

        {/* Constraints */}
        <ul className="constraints">
          <li>
            <input type="checkbox" className="checkbox" />
            <span>2 ≤ nums.length ≤ 10</span>
          </li>
          < li>
            <input type="checkbox" className="checkbox" />
            <span>-10 ≤ nums[i] ≤ 10</span>
          </li>
          <li>
            <input type="checkbox" className="checkbox" />
            <span>-10 ≤ target ≤ 10</span>
          </li>
        </ul>
      </div>

      {/* Right Pane - Monaco Editor */}
      <div className="right-pane-1">
        <Editor
          height="400px"
          theme="vs-dark"
          defaultLanguage="javascript"
          value={code}
          onChange={(value) => setCode(value || '')}
          options={{
            fontSize: 16,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
          }}
        />
        <div className="button-container">
          <button className="run-button" onClick={runCode}>Run</button>
          <button className="clear-button" onClick={clearOutput}>Clear</button>
        </div>
        <div className="output-container">
          <h4>Output:</h4>
          <pre className="output">{output}</pre>
        </div>

        {/* Status Tab */}
        <div className={`status-tab ${executionStatus === 'Success' ? 'success' : 'failure'}`}>
          <p>Execution Status: {executionStatus}</p>
          {status && <p>Result Status: {status}</p>}
        </div>
      </div>
    </div>
  );
};

export default TwoSum;