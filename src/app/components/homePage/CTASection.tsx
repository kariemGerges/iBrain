import Link from "next/link";

export default function CTA() { 
    return (
        <section className="max-w-7xl mx-auto px-6 py-16 text-center">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-12 border border-gray-100">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    Ready to Start the Adventure?
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Join thousands of families who&#39;ve discovered the joy of
                    learning math together
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/pages/gradeSelection">
                    <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all">
                        Get Started Free
                        </button>
                    </Link>
                    <Link href="pages/about">
                    <button className="px-8 py-4 text-gray-700 font-bold rounded-xl hover:bg-white hover:shadow-md transition-all">
                        Learn More
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};