// Animated Counter

let counters = document.querySelectorAll(".card h2");

counters.forEach(counter => {

let target = parseInt(counter.innerText);

let count = 0;

let interval = setInterval(() => {

count++;

counter.innerText = count + "+";

if(count >= target)
{
clearInterval(interval);
}

},50);

});