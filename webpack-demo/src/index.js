async function getComponent() {
  var element = document.createElement("div");

  // 在注释中我们提供了 webpackChunkName。这样会将拆分出来的 bundle 命名为 lodash.bundle.js，而不是 [id].bundle.js
  // 在webpack4中通过import()导入后，你需要通过result.default来获取结果  例如
  //  module.exports = 42;

  // webpack 3打印的结果
  // 42
  // webpack 4打印的结果
  // { default: 42 }
  const { default: _ } = await import(
    /* webpackChunkName: "lodash" */ "lodash"
  );

  element.innerHTML = _.join(["HELLO", "WEBPACK"], " ");
  return element;
}

getComponent().then(component => {
  document.body.appendChild(component);
});
