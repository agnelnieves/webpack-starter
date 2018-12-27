import style from './index.scss'

import Icon from './logo-white.png';

let myIcon = new Image();
myIcon.src = Icon;

document.querySelector("div").appendChild(myIcon);

let heading = document.querySelector("#test-heading");
const hello = "Hello";

heading.innerHTML = `Changed heasding ${hello}`;