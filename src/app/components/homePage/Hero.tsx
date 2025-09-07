import { ArrowRight, Play, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16 text-center">
            <div className="mb-8">
                <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Sparkles className="w-4 h-4" />
                    <span>Trusted by 50,000+ families</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                    Math Made
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                        {' '}
                        Magical
                    </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Transform your child&#39;s relationship with math through
                    interactive games, personalized learning paths, and engaging
                    activities designed for Kindergarten through 5th Grade.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/pages/gradeSelection">
                        <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all flex items-center justify-center space-x-2">
                            <span>Start Learning Now</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </Link>
                    <Link href="pages/about">
                        <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-all flex items-center justify-center space-x-2">
                            <Play className="w-5 h-5" />
                            <span>Learn More</span>
                        </button>
                    </Link>
                </div>
            </div>

            {/* Hero Visual */}
            <div className="relative mt-16">
                <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto border border-gray-100">
                    <div className="grid grid-cols-3 gap-6 mb-6">
                        <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl p-6 text-center">
                            <div className="text-3xl mb-2">🎯</div>
                            <div className="text-gray-700 truncate font-semibold">
                                Daily Goals
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-6 text-center">
                            <div className="text-3xl mb-2">⭐</div>
                            <div className="text-gray-700 truncate font-semibold">
                                Achievements
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-6 text-center">
                            <div className="text-3xl mb-2">📊</div>
                            <div className="text-gray-700 truncate font-semibold ">
                                Progress
                            </div>
                            
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-6 text-white text-center">
                        <h3 className="text-2xl font-bold mb-2">
                            Interactive Learning Dashboard
                        </h3>
                        <p className="opacity-90">
                            Engaging activities that make math fun and
                            accessible
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
