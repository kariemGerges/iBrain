import { Play, Users, Award } from 'lucide-react';

export default function Feature() {
    const features = [
        {
            icon: <Play className="w-6 h-6" />,
            title: 'Interactive Games',
            desc: 'Learning through fun, engaging activities',
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: 'Progress Tracking',
            desc: 'Watch your child grow and celebrate wins',
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: 'Parent Dashboard',
            desc: "Stay involved in your child's learning journey",
        },
    ];
    return (
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Why Families Love iBrain
                    </h2>
                    <p className="text-xl text-purple-100 max-w-2xl mx-auto">
                        Designed with both kids and parents in mind for the
                        ultimate learning experience
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center ">
                            {/* <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                                {feature.icon}
                            </div> */}
                            <h3 className="text-xl font-bold text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-purple-100 leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
