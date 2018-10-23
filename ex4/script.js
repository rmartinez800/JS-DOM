// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"
var button = document.getElementById('myButton')

button.addEventListener('click', function () {
  let changeBg = document.getElementsByClassName('box')
  var i
  for (i = 0; i < changeBg.length; i++) { changeBg[i].style.backgroundColor = 'blue' }
}
)
