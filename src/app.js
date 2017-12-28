const template = <h1>Space</h1>;


//const buttonOne = <button onClick={buttonClick()} id="sun">SOLEN</button>;

function funcButtonOne(){
    document.location.replace("index.html");
};

function funcButtonTwo(){
    document.location.replace("sun.html");
};

function funcButtonThree(){
    document.location.replace("moon.html");
};


const appRoot = document.getElementById("app");
const appB1 = document.getElementById("headerButtonOne");

ReactDOM.render(template, appRoot);

