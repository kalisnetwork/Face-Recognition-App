import React, { useRef, useEffect, useState } from 'react';
import * as faceapi from 'face-api.js';

function Camera({ onFaceDetection }) {
    const videoHeight = 480;
    const videoWidth = 640;
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [initializing, setInitializing] = useState(false);

    const startVideo = () => {
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then((stream) => {
                videoRef.current.srcObject = stream;
            })
            .catch((error) => console.error('Error accessing camera:', error));
    };

    const handleVideoOnPlay = () => {
        setInterval(async () => {
            canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(videoRef.current);
            const displaySize = {
                width: videoWidth,
                height: videoHeight,
            };
            faceapi.matchDimensions(canvasRef.current, displaySize);
            const detections = await faceapi
                .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
                .withFaceLandmarks()
                .withFaceExpressions();

            onFaceDetection(detections); // Pass the detections to the parent component

            const resizedDetections = faceapi.resizeResults(detections, displaySize);
            const context = canvasRef.current.getContext('2d');
            context.clearRect(0, 0, videoWidth, videoHeight);
            faceapi.draw.drawDetections(context, resizedDetections);
            faceapi.draw.drawFaceLandmarks(context, resizedDetections);
            faceapi.draw.drawFaceExpressions(context, resizedDetections);
        }, 100);
    };

    useEffect(() => {
        const loadModels = async () => {
            const MODEL_URL = process.env.PUBLIC_URL + '/models';
            setInitializing(true);
            await Promise.all([
                faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
                faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
                faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
                faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
            ]);
            setInitializing(false);
        };
        loadModels();
        startVideo();
    }, []);

    return (
        <>
            {initializing ? (
                <span>Initializing...</span>
            ) : (
                <div className='video'>
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        height={videoHeight}
                        width={videoWidth}
                        onPlay={handleVideoOnPlay}
                    />
                    <canvas className='canvas' ref={canvasRef} />
                </div>
            )}
        </>
    );
}

export default Camera;
