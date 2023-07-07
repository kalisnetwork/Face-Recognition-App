import React, { useState } from 'react';
import './App.css';
import Camera from './components/Camera/Camera';
import FaceDetection from './components/FaceDetection/FaceDetection';
import Login from './components/Login/Login';

function App() {
  const [showVideo, setShowVideo] = useState(false);
  const [faceCount, setFaceCount] = useState(0);
  const [expression, setExpression] = useState(null);

  const handleCameraClick = () => {
    setShowVideo(true);
  };

  const handleFaceDetection = (detections) => {
    setFaceCount(detections.length);

    if (detections.length > 0) {
      const detectedExpression = Object.keys(detections[0].expressions).reduce(
        (a, b) => (detections[0].expressions[a] > detections[0].expressions[b] ? a : b)
      );
      setExpression(detectedExpression);
    } else {
      setExpression(null);
    }
  };

  return (
    <div className='App'>
      {!showVideo && <Login onCameraClick={handleCameraClick} />}
      {showVideo && (
        <>
          <FaceDetection faceCount={faceCount} expression={expression} />
          <Camera onFaceDetection={handleFaceDetection} />
        </>
      )}
    </div>
  );
}

export default App;
