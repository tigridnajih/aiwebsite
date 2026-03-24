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
        <section className="relative py-24 bg-white border-y border-slate-100">
            <div className="container-custom">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center items-center">
                    <div className="px-4">
                        <h3 className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold mb-2 text-accent tracking-tighter">
                            <CountUp value={50} suffix="+" />
                        </h3>
                        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Clients Served</p>
                    </div>
                    <div className="px-4">
                        <h3 className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold mb-2 text-accent tracking-tighter">
                            <CountUp value={10} suffix="k+" />
                        </h3>
                        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Hours Saved</p>
                    </div>
                    <div className="px-4">
                        <h3 className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold mb-2 text-accent tracking-tighter">
                            <CountUp value={300} suffix="%" />
                        </h3>
                        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">ROI Average</p>
                    </div>
                    <div className="px-4">
                        <h3 className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold mb-2 text-accent tracking-tighter">
                            <CountUp value={24} suffix="/7" />
                        </h3>
                        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Support Coverage</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
