import {cube} from './math';

// 看一下在什么环境
if (process.env.NODE_ENV !== 'production') {
  console.log('看起来我们在开发环境');
}

function component() {
  var element = document.createElement('pre');

  element.innerHTML = [
    'Hello webpack',
    '5 cubes is equal to' + cube(5)
  ].join('\n\n');

  return element;
}

document.body.appendChild(component());
