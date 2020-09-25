const codes = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  // your code here
  var index = 0
  document.body.addEventListener('keydown', onKeyDownHandler);
  function onKeyDownHandler(e){
    const key = e.keyCode
    if (key === codes[index]) {
      index++;
      if (index === codes.length) {
        alert('Hurray')
        index = 0;
      }
    } else {
      index = 0
    }
  }
}

init()
