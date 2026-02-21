'use client';

import { useEffect, useRef } from 'react';

/**
 * HeroParticles - Multi-layer Parallax Particle System
 * Designed for depth, calm motion, and a premium atmospheric feel.
 */
export default function HeroParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;

        // Particle configuration
        const layers = {
            distant: { count: 120, size: [0.8, 1.5], opacity: [0.15, 0.3], speed: 0.02, parallax: 0.03 },
            mid: { count: 40, size: [1.5, 2.5], opacity: [0.3, 0.5], speed: 0.05, parallax: 0.08, glow: 5 },
            foreground: { count: 4, size: [6, 10], opacity: [0.2, 0.4], speed: 0.03, parallax: 0.15, glow: 15 }
        };

        class Particle {
            x: number;
            y: number;
            baseX: number;
            baseY: number;
            size: number;
            opacity: number;
            baseOpacity: number;
            layer: 'distant' | 'mid' | 'foreground';
            speedX: number;
            speedY: number;
            parallaxFactor: number;
            glow: number;
            pulseTimer: number;
            pulseSpeed: number;

            constructor(w: number, h: number, layer: 'distant' | 'mid' | 'foreground') {
                const config = layers[layer];
                this.layer = layer;
                this.baseX = Math.random() * w;
                this.baseY = Math.random() * h;
                this.x = this.baseX;
                this.y = this.baseY;

                this.size = Math.random() * (config.size[1] - config.size[0]) + config.size[0];
                this.baseOpacity = Math.random() * (config.opacity[1] - config.opacity[0]) + config.opacity[0];
                this.opacity = this.baseOpacity;

                this.speedX = (Math.random() - 0.5) * config.speed;
                this.speedY = (Math.random() - 0.5) * config.speed;
                this.parallaxFactor = config.parallax;
                this.glow = config.glow || 0;

                this.pulseTimer = Math.random() * Math.PI * 2;
                this.pulseSpeed = 0.005 + Math.random() * 0.01;
            }

            update(w: number, h: number, mouseX: number, mouseY: number) {
                // Natural drift
                this.baseX += this.speedX;
                this.baseY += this.speedY;

                // Wrap around world coordinates
                if (this.baseX < 0) this.baseX = w;
                if (this.baseX > w) this.baseX = 0;
                if (this.baseY < 0) this.baseY = h;
                if (this.baseY > h) this.baseY = 0;

                // Apply parallax based on mouse
                const targetX = this.baseX + (mouseX * this.parallaxFactor * 80);
                const targetY = this.baseY + (mouseY * this.parallaxFactor * 80);

                // Smooth follow for parallax
                this.x += (targetX - this.x) * 0.05;
                this.y += (targetY - this.y) * 0.05;

                // Subtle flickering for distant stars only
                if (this.layer === 'distant') {
                    this.pulseTimer += this.pulseSpeed;
                    this.opacity = this.baseOpacity * (0.98 + Math.sin(this.pulseTimer) * 0.02);
                }
            }

            draw(context: CanvasRenderingContext2D) {
                context.save();
                context.beginPath();
                context.arc(this.x, this.y, this.size, 0, Math.PI * 2);

                if (this.glow > 0) {
                    context.shadowBlur = this.glow;
                    context.shadowColor = 'white';
                }

                context.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                context.fill();
                context.restore();
            }
        }

        const particles: Particle[] = [];

        const handleResize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.scale(dpr, dpr);

            init();
        };

        const init = () => {
            particles.length = 0;
            const w = window.innerWidth;
            const h = window.innerHeight;

            for (let i = 0; i < layers.distant.count; i++) particles.push(new Particle(w, h, 'distant'));
            for (let i = 0; i < layers.mid.count; i++) particles.push(new Particle(w, h, 'mid'));
            for (let i = 0; i < layers.foreground.count; i++) particles.push(new Particle(w, h, 'foreground'));
        };

        const onMouseMove = (e: MouseEvent) => {
            // Normalized coordinates (-1 to 1)
            mouseRef.current.targetX = (e.clientX / window.innerWidth) * 2 - 1;
            mouseRef.current.targetY = (e.clientY / window.innerHeight) * 2 - 1;
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const w = window.innerWidth;
            const h = window.innerHeight;

            // Interpolate mouse movement
            mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
            mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

            particles.forEach(p => {
                p.update(w, h, mouseRef.current.x, mouseRef.current.y);
                p.draw(ctx);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', onMouseMove);

        handleResize();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', onMouseMove);
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
