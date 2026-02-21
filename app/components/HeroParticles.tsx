'use client';

import { useEffect, useRef } from 'react';

/**
 * HeroParticles - High-performance canvas-based particle system.
 * Features: Uniform size, pure white color, glow effect, and slow drift.
 */
export default function HeroParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        // Adjusted density
        const pCount = 200;
        const particles: Particle[] = [];

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            opacity: number;
            maxOpacity: number;
            pulseSpeed: number;
            pulseTimer: number;

            constructor(w: number, h: number) {
                this.x = Math.random() * w;
                // Keep the density bias towards the top but slightly more spread out
                this.y = Math.pow(Math.random(), 1.8) * h;

                // Uniform size for all particles
                this.size = 1.2;

                // Slow consistent drift
                this.speedX = (Math.random() - 0.5) * 0.2;
                this.speedY = (Math.random() - 0.5) * 0.2;

                this.maxOpacity = Math.random() * 0.7 + 0.3;
                this.opacity = this.maxOpacity;
                this.pulseSpeed = 0.01 + Math.random() * 0.02;
                this.pulseTimer = Math.random() * Math.PI * 2;
            }

            update(w: number, h: number) {
                this.x += this.speedX;
                this.y += this.speedY;

                // Subtle pulsing effect for the glow feel
                this.pulseTimer += this.pulseSpeed;
                this.opacity = this.maxOpacity * (0.7 + Math.sin(this.pulseTimer) * 0.3);

                // Wrap around logic with a small margin
                if (this.x > w + 10) this.x = -10;
                else if (this.x < -10) this.x = w + 10;

                if (this.y > h + 10) this.y = -10;
                else if (this.y < -10) this.y = h + 10;
            }

            draw(context: CanvasRenderingContext2D) {
                context.save();

                // Pure white color with opacity
                context.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;

                // Glow effect
                context.shadowBlur = 8;
                context.shadowColor = 'white';

                context.beginPath();
                context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                context.fill();

                context.restore();
            }
        }

        const handleResize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.scale(dpr, dpr);

            init(window.innerWidth, window.innerHeight);
        };

        const init = (w: number, h: number) => {
            particles.length = 0;
            for (let i = 0; i < pCount; i++) {
                particles.push(new Particle(w, h));
            }
        };

        const animate = () => {
            // Clear the canvas properly
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const w = window.innerWidth;
            const h = window.innerHeight;

            for (let i = 0; i < particles.length; i++) {
                particles[i].update(w, h);
                particles[i].draw(ctx);
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none"
            style={{
                zIndex: 15,
                mixBlendMode: 'screen'
            }}
        />
    );
}
