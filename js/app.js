// app.js
document.addEventListener('DOMContentLoaded', () => {
    // Create and style body
    document.body.style.margin = '0';
    document.body.style.overflow = 'hidden';
    document.body.style.backgroundColor = '#000';
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    document.body.style.height = '100vh';

    // Create text element
    const textDiv = document.createElement('div');
    textDiv.id = 'text';
    textDiv.innerHTML = 'King of <br>Procrastination';
    Object.assign(textDiv.style, {
        fontSize: '8rem',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        position: 'relative',
        zIndex: '2',
        textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
        textAlign: 'center'
    });
    document.body.appendChild(textDiv);

    // Create canvas element
    const canvas = document.createElement('canvas');
    canvas.id = 'canvas';
    Object.assign(canvas.style, {
        position: 'absolute',
        top: '0',
        left: '0',
        zIndex: '1'
    });
    document.body.appendChild(canvas);

    // Canvas animation code
    const ctx = canvas.getContext('2d');
    
    class Star {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2;
            this.velocity = Math.random() * 0.5 + 0.1;
            this.alpha = Math.random();
            this.angle = Math.random() * Math.PI * 2;
        }

        update() {
            this.angle += this.velocity * 0.01;
            this.x += Math.cos(this.angle) * this.velocity;
            this.y += Math.sin(this.angle) * this.velocity;
            this.alpha = Math.abs(Math.sin(this.angle)) * 0.5 + 0.5;

            if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                this.reset();
            }
        }

        draw() {
            ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    const stars = Array(200).fill().map(() => new Star());

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function animate() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        stars.forEach(star => {
            star.update();
            star.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();
});