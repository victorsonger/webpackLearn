import _ from "lodash";

function component() {
  var element = document.createElement("div");
  var button = document.createElement("button");
  var br = document.createElement("br");

  button.innerHTML = "按我看console!!";
  element.innerHTML = _.join(["HELLO", "WEBPACK"], " ");
  element.appendChild(br);
  element.appendChild(button);

  button.onclick = e =>
    // 注意当调用 ES6 模块的 import() 方法（引入模块）时，必须指向模块的 .default 值，因为它才是 promise 被处理后返回的实际的 module 对象。 (webpack 4)
    import(/* webpackChunkName: "print" */ "./print").then(module => {
      console.log('m引入的module', module);
      var print = module.default;

      print();
    });

  return element;
}

document.body.appendChild(component());
