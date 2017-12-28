"use strict";

var template = React.createElement(
    "h1",
    null,
    "Space"
);

//const buttonOne = <button onClick={buttonClick()} id="sun">SOLEN</button>;

function funcButtonOne() {
    document.location.replace("index.html");
};

function funcButtonTwo() {
    document.location.replace("sun.html");
};

function funcButtonThree() {
    document.location.replace("moon.html");
};

var appRoot = document.getElementById("app");
var appB1 = document.getElementById("headerButtonOne");

ReactDOM.render(template, appRoot);
