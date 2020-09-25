const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
function init() {
  let index = 0;

document.body.addEventListener("keydown", (thingPressed) => {
  const key = thingPressed.key
  console.log(key)

  if (codes[index] == key) {
    ++index
  }

  else {
    idx = 0
  }

  console.log(index)
  if (index == 10) {
    alert("Hurray!");
    index = 0
  }
}); 
}
