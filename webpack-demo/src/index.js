import _ from "lodash";
import printMe from "./print.js";

function component() {
  var element = document.createElement("div");
  var btn = document.createElement("button");
  console.log("btn", btn);
  btn.name = "imabtn";
  console.log("namedbtn", btn);

  element.innerHTML = _.join(["Hello", "webpack", " "]);

  btn.innerHTML = "点击以console";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

console.log("navigator", navigator);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(registration => {
        console.log("SW 已注册：", registration);
      })
      .catch(registrationError => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
document.body.appendChild(component());
