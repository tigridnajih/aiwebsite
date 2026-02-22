'use client';

import { useEffect, useRef } from 'react';

/**
 * HeroParticles - Stardust system matching the reference image.
 * Features: High density at top, downward slow motion, and center fade-out.
 */
export default function HeroParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        // High density for stardust effect
        const pCount = 350;
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

            constructor(w: number, h: number, isInitial = false) {
                this.x = Math.random() * w;

                // Steeper density bias: cluster heavily at the top
                // If it's the initial load, spread them slightly more in the top half
                if (isInitial) {
                    this.y = Math.pow(Math.random(), 2.5) * (h * 0.85);
                } else {
                    // New particles always start at the very top (negative offset for smooth entry)
                    this.y = -10 - Math.random() * 20;
                }

                // Uniform micro-star size
                this.size = 0.4;

                // Downward slow motion
                this.speedX = (Math.random() - 0.5) * 0.05;
                this.speedY = Math.random() * 0.2 + 0.1; // Slow downward drift

                this.maxOpacity = Math.random() * 0.6 + 0.4;
                this.opacity = 0;
                this.pulseSpeed = 0.01 + Math.random() * 0.02;
                this.pulseTimer = Math.random() * Math.PI * 2;
            }

            update(w: number, h: number) {
                this.x += this.speedX;
                this.y += this.speedY;

                // Subtle pulsing effect for twinkling
                this.pulseTimer += this.pulseSpeed;
                const twinkle = 0.8 + Math.sin(this.pulseTimer) * 0.2;

                // Vertical Fade Logic: 
                // Full opacity at top, fades to 0 as it reaches ~85% of the height
                const centerBoundary = h * 0.85;
                if (this.y < 0) {
                    this.opacity = 0;
                } else if (this.y < centerBoundary) {
                    // Linear fade-out based on distance from top to center
                    const fadeProgress = 1 - (this.y / centerBoundary);
                    this.opacity = this.maxOpacity * fadeProgress * twinkle;
                } else {
                    this.opacity = 0;
                    // Reset to top when it disappears or goes too far
                    this.reset(w, h);
                }
            }

            reset(w: number, h: number) {
                this.x = Math.random() * w;
                this.y = -10 - Math.random() * 20;
                this.maxOpacity = Math.random() * 0.6 + 0.4;
            }

            draw(context: CanvasRenderingContext2D) {
                if (this.opacity <= 0.01) return;

                context.save();

                // Pure white / slight blue-white tint for realism
                context.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;

                // Small glow to match the image's "atmospheric" feel
                context.shadowBlur = 3;
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
                particles.push(new Particle(w, h, true));
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
