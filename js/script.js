const btns = document.querySelectorAll('.num')
const operators = document.querySelectorAll('.operator')
const screen = document.querySelector('.calc__screen p')
const equal = document.querySelector('.equal')
const resetBtn = document.querySelector('.reset')
const delBtn = document.querySelector('.del')
const darkBtn = document.querySelector('.dark-btn')
const lightBtn = document.querySelector('.light-btn')
const violetBtn = document.querySelector('.violet-btn')
let theme = localStorage.getItem('theme') || 'dark'

btns.forEach(btn => {
	btn.addEventListener('click', e => {
		let val = e.target.innerHTML
		console.log(val)
		screen.innerHTML += val
	})
})

operators.forEach(op => {
	op.addEventListener('click', e => {
		let val = e.target.innerHTML
		console.log(val)
		if (
			screen.innerHTML !== '' &&
			!screen.innerHTML.includes('+') &&
			!screen.innerHTML.includes('-') &&
			!screen.innerHTML.includes('x') &&
			!screen.innerHTML.includes('/')
		) {
			screen.innerHTML += val
		}
	})
})

const count = () => {
	let operation = screen.innerHTML
	let score
	if (operation.includes('+')) {
		operation = operation.split('+')
		score = parseFloat(operation[0]) + parseFloat(operation[1])
	} else if (operation.includes('-')) {
		operation = operation.split('-')
		score = parseFloat(operation[0]) - parseFloat(operation[1])
	} else if (operation.includes('x')) {
		operation = operation.split('x')
		score = parseFloat(operation[0]) * parseFloat(operation[1])
	} else {
		operation = operation.split('/')
		if (operation[1] === '0') score = 'Error'
		else score = parseFloat(operation[0]) / parseFloat(operation[1])
	}
	screen.innerHTML = score
}

const del = () => {
	screen.innerHTML = screen.innerHTML.split('').slice(0, -1).join('')
}

const reset = () => {
	screen.innerHTML = ''
}

if (theme === 'dark') {
	document.body.classList.add('dark')
	lightBtn.style.backgroundColor = 'transparent'
	violetBtn.style.backgroundColor = 'transparent'
	darkBtn.style.backgroundColor = 'hsl(25, 98%, 40%)'
}

if (theme === 'light') {
	document.body.classList.add('light')
	darkBtn.style.backgroundColor = 'transparent'
	violetBtn.style.backgroundColor = 'transparent'
	lightBtn.style.backgroundColor = 'hsl(25, 98%, 40%)'
}

if (theme === 'violet') {
	document.body.classList.add('violet')
	darkBtn.style.backgroundColor = 'transparent'
	lightBtn.style.backgroundColor = 'transparent'
	violetBtn.style.backgroundColor = 'hsl(176, 100%, 44%)'
}

const toDarkMode = () => {
	document.body.classList.remove('light')
	document.body.classList.remove('violet')
	document.body.classList.add('dark')
	lightBtn.style.backgroundColor = 'transparent'
	violetBtn.style.backgroundColor = 'transparent'
	darkBtn.style.backgroundColor = 'hsl(25, 98%, 40%)'
	localStorage.setItem('theme', 'dark')
}

const toLightMode = () => {
	document.body.classList.remove('dark')
	document.body.classList.remove('violet')
	document.body.classList.add('light')
	darkBtn.style.backgroundColor = 'transparent'
	violetBtn.style.backgroundColor = 'transparent'
	lightBtn.style.backgroundColor = 'hsl(25, 98%, 40%)'
	localStorage.setItem('theme', 'light')
}

const toVioletMode = () => {
	document.body.classList.remove('light')
	document.body.classList.remove('dark')
	document.body.classList.add('violet')
	lightBtn.style.backgroundColor = 'transparent'
	darkBtn.style.backgroundColor = 'transparent'
	violetBtn.style.backgroundColor = 'hsl(176, 100%, 44%)'
	localStorage.setItem('theme', 'violet')
}

equal.addEventListener('click', count)
delBtn.addEventListener('click', del)
resetBtn.addEventListener('click', reset)
darkBtn.addEventListener('click', toDarkMode)
lightBtn.addEventListener('click', toLightMode)
violetBtn.addEventListener('click', toVioletMode)
