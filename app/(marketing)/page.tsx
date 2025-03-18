/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import Image from 'next/image';
import localFont from 'next/font/local';
import { Poppins } from 'next/font/google';
import { Medal, CheckCircle, Zap, Users, Calendar, Shield } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const headingFont = localFont({
    src: '../../public/fonts/font.woff2',
});

const textFont = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const features = [
    {
        icon: <Zap className="h-6 w-6" />,
        title: 'Lightning Fast',
        description:
            'Experience seamless task management with our optimized platform',
    },
    {
        icon: <Users className="h-6 w-6" />,
        title: 'Team Collaboration',
        description:
            'Work together efficiently with real-time updates and sharing',
    },
    {
        icon: <Calendar className="h-6 w-6" />,
        title: 'Smart Scheduling',
        description: 'Automated timeline management and deadline tracking',
    },
    {
        icon: <Shield className="h-6 w-6" />,
        title: 'Enterprise Security',
        description: 'Bank-grade security for your sensitive project data',
    },
];

const MarketingPage = () => {
    return (
        <div className="min-h-screen">
            <div className="bg-gradient-to-b from-slate-50 to-slate-100 px-4 pb-20">
                <div className="mx-auto max-w-7xl pt-20">
                    <div
                        className={cn(
                            'flex flex-col items-center space-y-8',
                            headingFont.className,
                        )}
                    >
                        <div className="flex items-center space-x-2 rounded-full bg-violet-100 px-6 py-3 text-violet-700">
                            <Medal className="h-5 w-5" />
                            <span className="text-sm font-medium">
                                Leading Task Management Platform
                            </span>
                        </div>

                        <div className="max-w-3xl space-y-4 text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
                                Transform Your
                                <span className="block bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
                                    Team Collaboration
                                </span>
                            </h1>

                            <p
                                className={cn(
                                    'text-lg text-gray-500',
                                    textFont.className,
                                )}
                            >
                                Streamline workflows, boost productivity, and
                                achieve more together. Experience the future of
                                project management with Taskflow.
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-fuchsia-600 to-pink-600"
                                asChild
                            >
                                <Link href="/sign-up">Start for free</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="#features">Learn more</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <section id="features" className="bg-white py-20">
                <div className="mx-auto max-w-7xl px-4">
                    <h2
                        className={cn(
                            'mb-12 text-center text-3xl font-bold',
                            headingFont.className,
                        )}
                    >
                        Everything you need to manage tasks efficiently
                    </h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="rounded-xl bg-slate-50 p-6 transition hover:shadow-md"
                            >
                                <div className="mb-4 text-violet-600">
                                    {feature.icon}
                                </div>
                                <h3 className="mb-2 font-semibold">
                                    {feature.title}
                                </h3>
                                <p
                                    className={cn(
                                        'text-sm text-gray-500',
                                        textFont.className,
                                    )}
                                >
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-slate-50 py-20">
                <div className="mx-auto max-w-7xl px-4">
                    <h2
                        className={cn(
                            'mb-12 text-center text-3xl font-bold',
                            headingFont.className,
                        )}
                    >
                        Trusted by thousands of teams worldwide
                    </h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        {[1, 2, 3].map((_, index) => (
                            <div
                                key={index}
                                className="rounded-xl bg-white p-6 shadow-sm"
                            >
                                <div className="mb-4 flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full bg-slate-200" />
                                    <div>
                                        <h4 className="font-semibold">
                                            John Doe
                                        </h4>
                                    </div>
                                </div>
                                <p
                                    className={cn(
                                        'text-gray-600',
                                        textFont.className,
                                    )}
                                >
                                    "TaskFlow has transformed how our team
                                    collaborates. The efficiency gains are
                                    remarkable."
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-violet-600 to-fuchsia-600 py-20">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <h2
                        className={cn(
                            'mb-6 text-3xl font-bold text-white',
                            headingFont.className,
                        )}
                    >
                        Ready to transform your team's productivity?
                    </h2>
                    <p
                        className={cn(
                            'mb-8 text-lg text-white/80',
                            textFont.className,
                        )}
                    >
                        Join thousands of teams already using TaskFlow to
                        achieve more.
                    </p>
                    <Button
                        size="lg"
                        className="bg-white text-violet-600 hover:bg-white/90"
                        asChild
                    >
                        <Link href="/sign-up">Get started today</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default MarketingPage;
