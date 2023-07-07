import React from 'react';

function FaceDetection({ faceCount, expression }) {
    return (
        <div className='top-section'>
            <span>{`Face Detected: ${faceCount}`}</span>
            <div className='expression'>
                <span>{`Expression: ${expression || '-'}`}</span>
            </div>
        </div>
    );
}

export default FaceDetection;
