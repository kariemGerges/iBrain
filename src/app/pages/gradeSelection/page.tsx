import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
export default function GradeSelection() {
    const gradeCards = [
        {
            grade: 'Kindergarten',
            color: 'from-pink-400 to-rose-500',
            icon: '🌟',
            skills: 'Counting & Numbers',
            active: true,
        },
        {
            grade: '1st Grade',
            color: 'from-orange-400 to-amber-500',
            icon: '🎯',
            skills: 'Addition & Subtraction',
            active: false,
        },
        {
            grade: '2nd Grade',
            color: 'from-emerald-400 to-green-500',
            icon: '🎨',
            skills: 'Place Value & Time',
            active: false,
        },
        {
            grade: '3rd Grade',
            color: 'from-blue-400 to-indigo-500',
            icon: '🚀',
            skills: 'Multiplication & Division',
            active: false,
        },
        {
            grade: '4th Grade',
            color: 'from-purple-400 to-violet-500',
            icon: '🎪',
            skills: 'Fractions & Decimals',
            active: true,
        },
        {
            grade: '5th Grade',
            color: 'from-cyan-400 to-blue-500',
            icon: '🏆',
            skills: 'Geometry & Algebra Prep',
            active: false,
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            <header className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    Choose Your Grade Level
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Each grade is carefully designed with age-appropriate
                    content and progressive skill building
                </p>
            </header>

            <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gradeCards.map((grade, index) => (
                    <Link
                        href={`/pages/grade/${grade.grade.replace(/\s/g, '')}`}
                        key={index}
                        className="group cursor-pointer"
                    >
                        <article
                            key={index}
                            className={
                                `group cursor-pointer` +
                                (grade.active
                                    ? ''
                                    : ' opacity-50 pointer-events-none')
                            }
                        >
                            <div
                                className={`${
                                    grade.active ? 'bg-white' : `bg-gray-300`
                                } rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group-hover:scale-105`}
                            >
                                <figure
                                    className={`h-32 bg-gradient-to-r ${grade.color} flex items-center justify-center`}
                                >
                                    <span className="text-4xl">
                                        {grade.icon}
                                    </span>
                                </figure>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                                        {grade.grade}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {grade.skills}
                                    </p>
                                    <nav className="flex items-center text-purple-600 font-semibold">
                                        <span>Explore Activities</span>
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </nav>
                                </div>
                            </div>
                        </article>
                    </Link>
                ))}
            </main>
        </section>
    );
}
