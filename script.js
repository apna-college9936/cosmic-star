const canvas = document.getElementById('canvas');
const $ = canvas.getContext('2d');

let w, h, mid_x, mid_y;
let t = 0; 
let s = 0; 
let r = []; 

function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    mid_x = w / 2;
    mid_y = h / 2;
    
   
    $.fillStyle = '#000000';
    $.fillRect(0, 0, w, h);
}

window.addEventListener('resize', resize);
resize();


function draw() {
   
    $.globalAlpha = 0.05; 
    $.fillStyle = '#000000';
    $.fillRect(0, 0, w, h);

   
    $.globalAlpha = 1.0; 
    
  
    $.strokeStyle = "hsla(" + (t % 360) + ", 100%, 50%, 1)";
    $.beginPath();
 
    r[0] = Math.sin(s) * 250 + 120;
    r[1] = Math.cos(s) * 125 + 60;

    
    for (let i = 0; i <= 16; i++) {
        const rad = 22.5 * i * (Math.PI / 180) + s;
        
      
        const x = Math.sin(rad) * r[i % 2] + mid_x;
        const y = Math.cos(rad) * r[i % 2] + mid_y;

        if (i === 0) {
            $.moveTo(x, y);
        }
        $.lineWidth = 1.8;
        $.lineTo(x, y);
    }

    $.closePath();
    $.stroke();

    
    s += 0.015; 
    t += 1;

  
    requestAnimationFrame(draw);
}


draw();