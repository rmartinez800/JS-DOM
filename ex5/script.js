// Add a box to "boxContainer" everytime you click the button
// HINT: Look up createElement(), appendChild()
// HINT HINT: You can add the "box" class to elements like so: https://www.w3schools.com/howto/howto_js_add_class.asp
var button = document.getElementById('myButton')
var boxEl = document.getElementById('boxContainer')

function clickOnBtn () {
  // quick and dirty DOM manipulation using strings 
  // boxEl.innerHTML += '<div class="box" </div>
  let newBoxEl = document.createElement('div')
  newBoxEl.className = 'box'
  boxEl.appendChild(newBoxEl)
}

button.addEventListener('click', clickOnBtn)
