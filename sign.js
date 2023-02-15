

<canvas id="signature"></canvas>



const canvas = document.getElementById('signature');
const ctx = canvas.getContext('2d');
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener('touchstart', (e) => {
  isDrawing = true;
  lastX = e.touches[0].clientX;
  lastY = e.touches[0].clientY;
});

canvas.addEventListener('touchmove', (e) => {
  if (isDrawing) {
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.touches[0].clientX, e.touches[0].clientY);
    ctx.stroke();
    lastX = e.touches[0].clientX;
    lastY = e.touches[0].clientY;
  }
});

canvas.addEventListener('touchend', () => {
  isDrawing = false;
});



------------------------------------------------------------------------------------------

const canvas = document.getElementById('signature');
const ctx = canvas.getContext('2d');
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener('touchstart', (e) => {
  isDrawing = true;
  lastX = e.touches[0].clientX;
  lastY = e.touches[0].clientY;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.save();
});

canvas.addEventListener('touchmove', (e) => {
  if (isDrawing) {
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    ctx.lineTo(currentX, currentY);
    ctx.stroke();
    lastX = currentX;
    lastY = currentY;
  }
});

canvas.addEventListener('touchend', () => {
  isDrawing = false;
});

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function undoCanvas() {
  ctx.restore();
}








