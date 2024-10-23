import React from 'react';
import './twosum.css';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import LeftImage from './logoo.png';

const TwoSum = () => {
  return (
    <div className="container">
      {/* Left Pane */}
      <div className="left-pane">
        {/* Wrapper for the image and heading */}
        <div className="image-heading-container">
          {/* Make the logo clickable with Link */}
          <Link to="/">
            <img src={LeftImage} alt="Top Left" className="top-left-image" />
          </Link>
          <h1>Two Sum</h1>
        </div>
        
        <div className="description">
          <p>Given an array of integers nums and an integer target, return the indices of two numbers such that they add up to target.</p>
          <p>You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.</p>
        </div>
        
        {/* Example 1 */}
        <div className="example">
          <h4>Example 1:</h4>
          <p>Input: nums = [2,7,11,15], target = 9</p>
          <p>Output: [0,1]</p>
          <p>Explanation: Because nums[0] + nums[1] == 9, we return [0,1].</p>
        </div>

        {/* Example 2 */}
        <div className="example">
          <h4>Example 2:</h4>
          <p>Input: nums = [3,2,4], target = 6</p>
          <p>Output: [1,2]</p>
          <p>Explanation: Because nums[1] + nums[2] == 6, we return [1,2].</p>
        </div>

        {/* Example 3 */}
        <div className="example">
          <h4>Example 3:</h4>
          <p>Input: nums = [3,3], target = 6</p>
          <p>Output: [0,1]</p>
        </div>

        {/* Constraints */}
        <ul className="constraints">
          <li><input type="checkbox" className="checkbox" />2 ≤ nums.length ≤ 10</li>
          <li><input type="checkbox" className="checkbox" />-10 ≤ nums[i] ≤ 10</li>
          <li><input type="checkbox" className="checkbox" />-10 ≤ target ≤ 10</li>
        </ul>
      </div>

      {/* Right Pane */}
      <div className="right-pane">
        {/* Content for the right half can go here */}
        <p>Placeholder for additional content.</p>
      </div>
    </div>
  );
}

export default TwoSum;
