// Define variable
const buttons = document.querySelector('.buttons')
const count = document.querySelector('.count')
const reset = document.querySelector('button.reset')
const add = document.querySelector('.add')
const sub = document.querySelector('.subtract')


// Solution 1 - add event for each target
// add.addEventListener('click', ()=>{
//    count.innerHTML++
// })

// sub.addEventListener('click',()=>{
//    count.innerHTML--
// })

// reset.addEventListener('click',()=>{
//    count.innerHTML = 0
// })

// Solution 2 - parent div => buttons class
buttons.addEventListener('click', (e) => {
   if (e.target.classList.contains('add')) {
      count.innerHTML++
      setColor()
   }
   if (e.target.classList.contains('subtract')) {
      count.innerHTML--
      setColor()
   }
   if (e.target.classList.contains('reset')) {
      count.innerHTML = 0
      setColor()
   }
})

/*
Make arrow function setColor to change text color
function setColor() {} - regular function
*/
const setColor = () => {
   let value = count.innerHTML
   // Solution 1 - if else
   // if (value > 0) {
   //    count.style.color = `green`
   // } else if (value < 0) {
   //    count.style.color = `red`
   // } else {
   //    count.style.color = `white`
   // }

   // Solution 2 - use ?;
   value > 0
      ? count.style.color = `green`
      : value < 0
         ? count.style.color = `red`
         : count.style.color = `white`;


};