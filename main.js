import './style.scss'
const totalHours = document.querySelector('.person-info__hours')
let matematyka = document.querySelector('.matematyka')
let programowanie = document.querySelector('.programowanie')
let sport = document.querySelector('.sport')
let angielski = document.querySelector('.angielski')

function getCookie(name) {
	const value = `; ${document.cookie}`
	const parts = value.split(`; ${name}=`)
	if (parts.length === 2) return parts.pop().split(';').shift()
}

if (!getCookie('status')) {
	document.cookie = 'status=true; expires=Fri, 31 Dec 9999 23:59:59 GMT'
	document.cookie = 'matematyka=0; expires=Fri, 31 Dec 9999 23:59:59 GMT'
	document.cookie = 'programowanie=0; expires=Fri, 31 Dec 9999 23:59:59 GMT'
	document.cookie = 'sport=0; expires=Fri, 31 Dec 9999 23:59:59 GMT'
	document.cookie = 'angielski=0; expires=Fri, 31 Dec 9999 23:59:59 GMT'
} else {
	matematyka.textContent = getCookie('matematyka')
	programowanie.textContent = getCookie('programowanie')
	sport.textContent = getCookie('sport')
	angielski.textContent = getCookie('angielski')
}

function plus(category) {
	if (category === 'matematyka') {
		matematyka.textContent++
		document.cookie = `matematyka=${matematyka.textContent}; expires=Fri, 31 Dec 9999 23:59:59 GMT`
	} else if (category === 'programowanie') {
		programowanie.textContent++
		document.cookie = `programowanie=${programowanie.textContent}; expires=Fri, 31 Dec 9999 23:59:59 GMT`
	} else if (category === 'sport') {
		sport.textContent++
		document.cookie = `sport=${sport.textContent}; expires=Fri, 31 Dec 9999 23:59:59 GMT`
	} else if (category === 'angielski') {
		angielski.textContent++
		document.cookie = `angielski=${angielski.textContent}; expires=Fri, 31 Dec 9999 23:59:59 GMT`
	}
	total()
}

function minus(category) {
	if (category === 'matematyka') {
		if (parseInt(matematyka.textContent) > 0) {
			matematyka.textContent--
			document.cookie = `matematyka=${matematyka.textContent}; expires=Fri, 31 Dec 9999 23:59:59 GMT`
		}
	} else if (category === 'programowanie') {
		if (parseInt(programowanie.textContent) > 0) {
			programowanie.textContent--
			document.cookie = `programowanie=${programowanie.textContent}; expires=Fri, 31 Dec 9999 23:59:59 GMT`
		}
	} else if (category === 'sport') {
		if (parseInt(sport.textContent) > 0) {
			sport.textContent--
			document.cookie = `sport=${sport.textContent}; expires=Fri, 31 Dec 9999 23:59:59 GMT`
		}
	} else if (category === 'angielski') {
		if (parseInt(angielski.textContent) > 0) {
			angielski.textContent--
			document.cookie = `angielski=${angielski.textContent}; expires=Fri, 31 Dec 9999 23:59:59 GMT`
		}
	}
	total()
}

function total() {
	totalHours.textContent =
		parseInt(matematyka.textContent) +
		parseInt(programowanie.textContent) +
		parseInt(sport.textContent) +
		parseInt(angielski.textContent)
}

function load() {
	matematyka.textContent = getCookie('matematyka')
	programowanie.textContent = getCookie('programowanie')
	sport.textContent = getCookie('sport')
	angielski.textContent = getCookie('angielski')
	total()
}

window.plus = plus
window.minus = minus
window.load = load
