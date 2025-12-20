import React, { useEffect, useRef } from "react";

export default function TechMeshBackground() {
  const canvasRef = useRef(null);
  const parentRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = parentRef.current;
    const c = canvas.getContext("2d");

    let w = (canvas.width = parent.offsetWidth);
    let h = (canvas.height = parent.offsetHeight);

    const particles = [];
    const particleCount = 80;
    const maxLineDistance = 160;

    class Particle {
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.size = Math.random() * 2.2 + 0.8;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;
      }
      draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        c.fillStyle = "rgba(125, 211, 252, 0.7)";
        c.fill();
      }
    }

    // create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      c.clearRect(0, 0, w, h);

      // soft radial glow
      const gradient = c.createRadialGradient(
        w / 2,
        h / 1.8,
        200,
        w / 2,
        h / 1.8,
        900
      );
      gradient.addColorStop(0, "rgba(59,130,246,0.15)");
      gradient.addColorStop(1, "rgba(15,23,42,0)");
      c.fillStyle = gradient;
      c.fillRect(0, 0, w, h);

      // draw particles
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      // connecting lines
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxLineDistance) {
            c.beginPath();
            c.strokeStyle = `rgba(96,165,250, ${1 - dist / maxLineDistance})`;
            c.lineWidth = 0.6;
            c.moveTo(particles[i].x, particles[i].y);
            c.lineTo(particles[j].x, particles[j].y);
            c.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      w = canvas.width = parent.offsetWidth;
      h = canvas.height = parent.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={parentRef}
      className="absolute inset-0 -z-10 w-full h-screen md:h-screen overflow-hidden"
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
