# Face Recognition App

A web application that performs face recognition using the webcam and displays the detected faces along with their expressions. This application is built with React and utilizes the face-api.js library for face detection and expression recognition.

## Features

- Real-time face detection using the webcam
- Display of detected faces and facial landmarks
- Recognition of facial expressions
- Responsive and user-friendly interface

## Screenshots

![face-detection](https://github.com/kalisnetwork/face-recognition-app/assets/106701723/5b910911-f0c6-4431-ad78-f5984cdc0043)

## Getting Started

### Prerequisites

- Node.js (v14 or above)

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/kalisnetwork/face-recognition-app.git
   ```

2. Navigate to the project directory:

   ```shell
   cd face-recognition-app
   ```

3. Install the dependencies:

   yarn install or npm install

   ```shell
   yarn install
   ```

4. Start the development server:

   yarn start or npm start

   ```shell
   yarn start
   ```

5. Open the app in your browser:

   ```arduino
   http://localhost:3000
   ```

Usage:

1. On the login page, click on the camera icon to access the webcam.

2. The application will detect faces in the webcam stream and display the number of detected faces at the top.

3. The detected faces will be highlighted with bounding boxes and facial landmarks.

4. The expressions of the detected faces will be displayed below the video.

Technologies Used:

1. React
2. face-api.js
3. HTML5 Canvas
4. CSS
