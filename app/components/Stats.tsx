'use client';

import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

function CountUp({ value, suffix = "", decimals = 0 }: { value: number; suffix?: string; decimals?: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });

    const springValue = useSpring(0, {
        stiffness: 40,
        damping: 20,
        restDelta: 0.001
    });

    const displayValue = useTransform(springValue, (latest) =>
        Math.floor(latest).toLocaleString()
    );

    useEffect(() => {
        if (isInView) {
            springValue.set(value);
        } else {
            springValue.set(0);
        }
    }, [isInView, value, springValue]);

    return (
        <span ref={ref}>
            <motion.span>{displayValue}</motion.span>
            {suffix}
        </span>
    );
}

export default function Stats() {
    return (
        <section className="py-20 bg-black text-white">
            <div className="container-custom">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
                    <div className="px-4">
                        <h3 className="text-5xl md:text-6xl font-extrabold mb-2 tracking-tighter">
                            <CountUp value={50} suffix="+" />
                        </h3>
                        <p className="text-white/80 font-medium">Clients Served</p>
                    </div>
                    <div className="px-4">
                        <h3 className="text-5xl md:text-6xl font-extrabold mb-2 tracking-tighter">
                            <CountUp value={10} suffix="k+" />
                        </h3>
                        <p className="text-white/80 font-medium">Hours Saved</p>
                    </div>
                    <div className="px-4">
                        <h3 className="text-5xl md:text-6xl font-extrabold mb-2 tracking-tighter">
                            <CountUp value={300} suffix="%" />
                        </h3>
                        <p className="text-white/80 font-medium">ROI Average</p>
                    </div>
                    <div className="px-4">
                        <h3 className="text-5xl md:text-6xl font-extrabold mb-2 tracking-tighter">
                            <CountUp value={24} suffix="/7" />
                        </h3>
                        <p className="text-white/80 font-medium">Support Coverage</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
