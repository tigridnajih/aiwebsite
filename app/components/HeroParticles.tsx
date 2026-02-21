'use client';

import { useEffect, useRef } from 'react';

/**
 * HeroParticles - High-performance canvas-based particle system.
 * Designed to be dense at the top and fade out towards the middle.
 */
export default function HeroParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        // High density for the hero section
        const pCount = 300;
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
                // Density bias: more particles in the top 30-40% of the screen
                // Math.pow(Math.random(), 2.0) clusters particles heavily at y=0
                this.y = Math.pow(Math.random(), 2.2) * h;

                this.size = Math.random() * 1.5 + 0.3;
                // Very slow drift
                this.speedX = (Math.random() - 0.5) * 0.12;
                this.speedY = (Math.random() - 0.5) * 0.12;

                this.maxOpacity = Math.random() * 0.5 + 0.1;
                this.opacity = this.maxOpacity;
                this.pulseSpeed = 0.005 + Math.random() * 0.01;
                this.pulseTimer = Math.random() * Math.PI * 2;
            }

            update(w: number, h: number) {
                this.x += this.speedX;
                this.y += this.speedY;

                // Subtle pulsing effect
                this.pulseTimer += this.pulseSpeed;
                this.opacity = this.maxOpacity * (0.6 + Math.sin(this.pulseTimer) * 0.4);

                // Wrap around Logic
                if (this.x > w) this.x = 0;
                else if (this.x < 0) this.x = w;

                if (this.y > h) this.y = 0;
                else if (this.y < 0) this.y = h;
            }

            draw(context: CanvasRenderingContext2D) {
                context.beginPath();
                context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                context.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                context.fill();
            }
        }

        const handleResize = () => {
            // Set canvas size accounting for DPR for sharp dots
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
