const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
  let index = 0
  document.body.addEventListener('keydown', function(e) {
    const key = e.keyCode
    if (key === code[index]) {
      index++;
      if (index === code.length) {
        alert('You win!')
        index = 0;
      }
    } else {
      index = 0
    }
  })
}
