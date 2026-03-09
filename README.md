# Object Height Measurement Web App

## Project Description
This project is a web-based application that measures the height of an object using a mobile device camera and device orientation sensors. The application calculates the height of an object using trigonometric formulas based on the angle of the device and the distance from the object.

The system uses the back camera of the mobile device to aim at the top of the object and then calculates the estimated height using the entered distance and the measured angle.

## Technologies Used
- HTML
- CSS
- JavaScript
- Device Orientation API
- Camera API

## Project Structure
height-ai-project
│
├── index.html  
├── style.css  
├── script.js  
└── README.md  

## How the System Works
1. The application opens the back camera of the mobile device.
2. The user stands at a known distance from the object.
3. The user enters the distance in meters in the input field.
4. The user points the camera at the top of the object.
5. The device orientation sensor measures the angle of the phone.
6. When the user clicks Measure Height, the system calculates the height using the formula:

Height = Distance × tan(angle)

7. The estimated height of the object is displayed on the screen.

## Features
- Uses the mobile device back camera
- Real-time angle detection
- Manual distance input
- Instant height calculation
- Simple and responsive interface

## How to Run the Project Locally
1. Download or clone the project folder.
2. Open the project folder.
3. Double-click index.html to open it in a browser.
4. Allow camera and sensor permissions.
5. Enter the distance and measure the object height.

## Deploying the Project Using GitHub Pages
1. Create a repository on GitHub.
2. Upload the following files:
   - index.html
   - style.css
   - script.js
   - README.md
3. Go to Repository Settings.
4. Click Pages.
5. Under Source select:
   - Branch: main
   - Folder: /root
6. Click Save.

Your project will be available at:

https://your-username.github.io/repository-name

## Limitations
- The accuracy depends on the distance entered by the user.
- The device must support orientation sensors.
- Works best on mobile devices.

## Future Improvements
- AI-based object detection
- Automatic distance measurement
- AR-based height calculation
- Improved accuracy using depth sensors

## Author
Revathi Tadigadapa
