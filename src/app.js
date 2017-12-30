//This document takes JSX and translates it to JS into the /scripts/app.js file
const pageHead = <h1>Space!</h1>;

const appRoot = document.getElementById("app");

ReactDOM.render(pageHead, appRoot);

//What is displayed to the page
const pageContentSpace =(
    <div>
        <h1>
            What is space?
        </h1>
        <div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra nisl dolor. Maecenas lacus metus, maximus sed risus sed, hendrerit aliquam elit. Pellentesque eget est et justo cursus bibendum. Mauris pharetra non nulla eget dapibus. Quisque est enim, dictum in quam quis, convallis suscipit sem. Morbi vitae diam vitae justo eleifend lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.    
            </p>
            <img src="images/galaxy.jpg"/>
            <p>
            Sed vitae risus lorem. In gravida fringilla leo, eu cursus nibh aliquet sed. Nullam fringilla id lacus pulvinar auctor. Maecenas pharetra mattis lectus. Pellentesque nec turpis quis urna mollis varius. Quisque id mauris sem. Sed malesuada lacinia ornare. Nunc eu ullamcorper neque, ac scelerisque justo. Proin volutpat tellus auctor dolor posuere bibendum eget in quam. Morbi leo lacus, hendrerit efficitur orci rhoncus, condimentum tincidunt libero. Mauris egestas tellus metus, ut molestie ipsum consectetur nec. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur tincidunt nulla id posuere dignissim. Donec vel metus turpis. Nulla tincidunt mattis imperdiet.
            </p>
        </div>
    </div>
);
const appContentSpace = document.getElementById("content-space");
ReactDOM.render(pageContentSpace, appContentSpace);
/* Why only 1 page?
I was unable to render different pages

No ReactRouter
I was not able to make ReactRouter work, i have never used it before
and i was not able to find out how it worked

*/ 
//Button Functions
function funcButtonOne(){
    document.location.replace("index.html");
};

function funcButtonTwo(){
    document.location.replace("sun.html");
};

function funcButtonThree(){
    document.location.replace("moon.html");
};



