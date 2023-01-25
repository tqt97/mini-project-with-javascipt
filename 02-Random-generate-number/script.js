// Define variable
const count = document.querySelector('.count')
const render = document.querySelector('.render')

/*
Make generate number function
*/
const generateNumber = () => {
   // random() make a number between 0 and 1
   const randomNumber = Math.floor(Math.random() * 10 + 1) // make a number random between 0 and 10

   count.innerHTML = randomNumber
}

// Add event
render.addEventListener('click', generateNumber)

/*
Init generateNumber when start
*/
// generateNumber()
