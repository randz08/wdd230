var date = new Date()
var n = date.getDay();
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();


if (n == 0) {
    n = "Sunday";
} else if (n == 1) {
    n = "Monday";
} else if (n == 2) {
    n = "Tuesday";
} else if (n == 3) {
    n = "Wednesday";
} else if (n == 4) {
    n = "Thursday";
} else if (n == 5) {
    n = "Friday";
} else {
    n = "Saturday";
}

if (month == 0) {
    month = "January";
} else if (month == 1) {
    month = "February";
} else if (month == 2) {
    month = "March";
} else if (month == 3) {
    month = "April";
} else if (month == 4) {
    month = "May";
} else if (month == 5) {
    month = "June";
} else if (month == 6) {
    month = "July";
} else if (month == 7) {
    month = "August";
} else if (month == 8) {
    month = "September";
} else if (month == 9) {
    month = "October";
} else if (month == 10) {
    month = "November";
} else {
    month = "December"
}
console.log(n);

date = n + ", " + month + " " + day + ", " + year;
document.querySelector('#date').textContent = date;

var year = new Date().getFullYear();
document.querySelector('#year').textContent = year;

if (n == "Friday") {
    document.querySelector("#message-top").style.display = "block";
}

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => { mainnav.classList.toggle('responsive') }, false);

window.onresize = () => { if (window.innerWidth > 760) mainnav.classList.remove('responsive') };