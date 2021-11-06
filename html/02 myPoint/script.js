const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let x = Math.random()* width;
let y = Math.random()* height;




    let point = new Point(x,0, 30, "yellow");
    point.draw();
    animate();
    

function animate()
{
    requestAnimationFrame(animate);
    context.clearRect(0, 0, width, height);
    point.x += 0;
    point.y += Math.floor(Math.random() * 11);
    point.draw();
}
