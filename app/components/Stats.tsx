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
        <section className="relative py-20 bg-white">
            <div className="container-custom">
                <div className="bg-blue-50/70 rounded-[48px] px-8 py-16 md:px-16 md:py-20">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 text-center items-center">
                        <div className="px-4">
                            <h3 className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold mb-3 text-blue-600 tracking-tighter">
                                <CountUp value={50} suffix="+" />
                            </h3>
                            <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] md:text-xs">Clients Served</p>
                        </div>
                        <div className="px-4">
                            <h3 className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold mb-3 text-blue-600 tracking-tighter">
                                <CountUp value={10} suffix="k+" />
                            </h3>
                            <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] md:text-xs">Hours Saved</p>
                        </div>
                        <div className="px-4">
                            <h3 className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold mb-3 text-blue-600 tracking-tighter">
                                <CountUp value={300} suffix="%" />
                            </h3>
                            <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] md:text-xs">ROI Average</p>
                        </div>
                        <div className="px-4">
                            <h3 className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold mb-3 text-blue-600 tracking-tighter">
                                <CountUp value={24} suffix="/7" />
                            </h3>
                            <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] md:text-xs">Support Coverage</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
