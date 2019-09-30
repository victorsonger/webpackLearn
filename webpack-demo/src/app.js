
import("babel-polyfill");

import("./global.js").then(module => {
  console.log("module", module);
  module.default.parse();
});
function component() {
  let element = document.createElement("div");

  // element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.innerHTML = join(["Hello", "webpack"], " ");

  // 我们在写代码时，默认我们处于`window`上下文。而事实上，
  // 当模块运行在 CommonJS 上下文中，这将会变成一个问题，也就是说此时的 this 指向的是 module.exports。
  // 在这种情况下，你可以通过使用 imports-loader 覆盖 this 指向
  return element;
}

document.body.appendChild(component());

// 由于我们在最开始
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(json => {
    console.log(
      "We retrieved some data! AND we're confident it will work on a variety of browser distributions."
    );
    console.log(json);
  })
  .catch(error =>
    console.error("Something went wrong when fetching this data: ", error)
  );
