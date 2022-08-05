// Connect DOM Elements
const btn = document.getElementById('genBtn');

const result = document.querySelector('.ip-result');

// Create a random IP address
function makeRandomIp() {
  return Array(4)
    .fill(0)
    .map((item, idx) => Math.floor(Math.random() * 255) + (idx === 0 ? 1 : 0))
    .join('.');
}

//  Show the IP as text in a DOM
const showRandomIp = (element) => (element.textContent = makeRandomIp());

// Display random IP on click
btn.addEventListener('click', () => showRandomIp(result));

// Display random IP on page load
window.addEventListener('DOMContentLoaded', () => showRandomIp(result));
