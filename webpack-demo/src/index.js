import _ from "lodash";
import printMe from "./print.js";
import './style.css';

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

// document.body.appendChild(component());
let element = component(); // 存储element， 以在print.js修改时重新是
document.body.appendChild(element);

console.log("module.hot.accept", module.hot.accept);
if (module.hot) {
  module.hot.accept("./print.js", function() {
    console.log("正在接收更新了的printMe模块");
    // printMe();
    document.body.removeChild(element);
    element = component(); // 重新渲染“component”， 以便更新 click 事件处理函数
    document.body.appendChild(element);
  });
}
