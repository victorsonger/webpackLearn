// 出于演示目的，例如把这个应用程序中的模块依赖，改为一个全局变量依赖。要实现这些，我们需要使用 ProvidePlugin 插件
// import _ from "lodash";

function component() {
  let element = document.createElement("div");

  // element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.innerHTML = join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());
