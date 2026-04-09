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
                <div className="bg-blue-50/70 rounded-[48px] px-8 py-10 md:px-16 md:py-12">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 text-center items-center">
                        <div className="px-4">
                            <h3 className="text-[clamp(1.75rem,5vw,2.75rem)] font-bold mb-2 text-blue-600 tracking-tighter">
                                <CountUp value={50} suffix="+" />
                            </h3>
                            <p className="text-slate-500 font-bold uppercase tracking-widest text-[9px] md:text-[10px]">Clients Served</p>
                        </div>
                        <div className="px-4">
                            <h3 className="text-[clamp(1.75rem,5vw,2.75rem)] font-bold mb-2 text-blue-600 tracking-tighter">
                                <CountUp value={10} suffix="k+" />
                            </h3>
                            <p className="text-slate-500 font-bold uppercase tracking-widest text-[9px] md:text-[10px]">Hours Saved</p>
                        </div>
                        <div className="px-4">
                            <h3 className="text-[clamp(1.75rem,5vw,2.75rem)] font-bold mb-2 text-blue-600 tracking-tighter">
                                <CountUp value={300} suffix="%" />
                            </h3>
                            <p className="text-slate-500 font-bold uppercase tracking-widest text-[9px] md:text-[10px]">ROI Average</p>
                        </div>
                        <div className="px-4">
                            <h3 className="text-[clamp(1.75rem,5vw,2.75rem)] font-bold mb-2 text-blue-600 tracking-tighter">
                                <CountUp value={24} suffix="/7" />
                            </h3>
                            <p className="text-slate-500 font-bold uppercase tracking-widest text-[9px] md:text-[10px]">Support Coverage</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
