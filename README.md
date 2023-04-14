Circles
This project consists of a simple React application to draw circles on a clickable area and allow undo/redo actions on the drawing.

Operation
By clicking on the white area, the user adds a circle to the list of drawn circles. Circles are represented as <div>s with the CSS class .circle.

In addition, the application has two buttons: "Undo" and "Redo". The "Undo" button removes the last drawn circle, while the "Redo" button re-adds the last removed circle.

The application uses React state to store drawn circles and drawing history, allowing the user to undo and redo the drawing.

How to run
To run the application, just clone this repository and start the application with the following commands:

bash
Copy code
git clone https://github.com/seu-username/react-circle-drawing.git
cd react-circle-drawing
npm install
npm start
The application will launch in your default browser at the URL http://localhost:3000.

How to test
To run the application tests, just run the following command:

bash
Copy code
npm test
Unit tests written using the @testing-library/react.

Final considerations
This project was created as a React challenge and aims to demonstrate the use of React state and event handling in a simple application. Feel free to use this code as a basis for your own projects or as study material.
