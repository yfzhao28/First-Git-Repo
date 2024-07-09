const span = document.getElementById('exclamation-marks');
let i = 0;
setInterval(function() {
    span.innerHTML = Array((i % 4) + 1).join('!');    
    
    i++;
}, 250);
