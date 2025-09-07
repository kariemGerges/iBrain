import Link from 'next/link';
import {
    BookOpenIcon,
    CalculatorIcon,
    SquareStack,
    RulerIcon,
    ChartBarIcon,
} from 'lucide-react';

const domains = [
    {
        name: 'Number Sense',
        description: 'Count, identify, and compare numbers',
        icon: BookOpenIcon,
        href: '/pages/grade/Kindergarten',
        color: 'bg-gradient-to-r from-green-400 to-blue-500',
        activities: ['Count to 100', 'Number Recognition', 'Compare Numbers'],
        active: true,
    },
    {
        name: 'Computation',
        description: 'Addition, subtraction, and patterns',
        icon: CalculatorIcon,
        href: '/computation',
        color: 'bg-gradient-to-r from-purple-400 to-pink-500',
        activities: ['Add & Subtract', 'Make 10', 'Pattern Games'],
        active: true,
    },
    {
        name: 'Geometry',
        description: 'Explore shapes and spatial thinking',
        icon: SquareStack,
        href: '/geometry',
        color: 'bg-gradient-to-r from-orange-400 to-red-500',
        activities: ['Shape Sorting', '2D vs 3D', 'Shape Hunt'],
        active: false,
    },
    {
        name: 'Measurement',
        description: 'Size, weight, and time concepts',
        icon: RulerIcon,
        href: '/measurement',
        color: 'bg-gradient-to-r from-teal-400 to-cyan-500',
        activities: ['Size Compare', 'Weight Balance', 'Time of Day'],
        active: true,
    },
    {
        name: 'Data Analysis',
        description: 'Sort, classify, and analyze',
        icon: ChartBarIcon,
        href: '/data-analysis',
        color: 'bg-gradient-to-r from-indigo-400 to-purple-500',
        activities: ['Sort Objects', 'Find Different', 'Make Groups'],
        active: true,
    },
];

export default function HomePage() {
    return (
        <div className="max-w-6xl mx-auto mt-4">
            <div className="text-center mb-12">
                <h1 className="text-5xl text-center font-bold text-gray-800 mb-4">
                    🎉 Math Adventure! 🎉
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    Let&apos;s explore math together with fun games and
                    activities!
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {domains.map((domain) => (
                    <div
                        key={domain.name}
                        className={
                            `activity-card hover:scale-105 transform transition-all duration-300 
                            ${domain.color} rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl` +
                            (domain.active
                                ? ''
                                : ' opacity-50 pointer-events-none')
                        }
                    >
                        <div className="text-center p-6">
                            <domain.icon className="w-16 h-16 text-white mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">
                                {domain.name}
                            </h3>
                            <p className="text-white/90 mb-4">
                                {domain.description}
                            </p>

                            <div className="space-y-2">
                                {domain.activities.map((activity, index) => (
                                    <Link
                                        key={domain.name}
                                        href={
                                            domain.href +
                                            `/${activity
                                                .replace(/\s+/g, '')
                                                .toLowerCase()}`
                                        }
                                    >
                                        <div
                                            key={index}
                                            className="bg-white/20 shadow-2xl
                                                rounded-full py-2 px-4 m-2 text-sm text-white"
                                        >
                                            {activity}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
