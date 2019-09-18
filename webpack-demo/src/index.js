import _ from "lodash";
import "./style.css";
import Icon from "./icon.jpg";
import Data from "./data.xml";

function component() {
  var element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack", " "]);
  element.classList.add("hello");

  var myIcon = new Image();
  console.log("myIcon", myIcon);
  myIcon.src = Icon;
  myIcon.classList.add("what");

  element.appendChild(myIcon);

  console.log("myIcon2", myIcon);

  console.log('Data', Data);
  
  return element;
}

document.body.appendChild(component());
