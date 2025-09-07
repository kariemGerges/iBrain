export default function AboutPage() {
    return (
        <section className="max-w-5xl mx-auto px-6 py-16">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold text-purple-700 mb-4">
                    About iBrian
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    iBrian is a playful and powerful web app designed to help
                    kids master math through interactive challenges, colorful
                    visuals, and bite-sized learning.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <article className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        🎯 Our Mission
                    </h2>
                    <p className="text-gray-600">
                        We believe math should be fun, not frustrating. iBrian
                        helps kids build confidence by practicing core skills
                        like addition, subtraction, multiplication, and
                        more—through games and challenges that feel like play.
                    </p>
                </article>

                <article className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        🧠 How It Works
                    </h2>
                    <p className="text-gray-600">
                        Kids choose their grade level and dive into
                        age-appropriate math facts. Each challenge is designed
                        to reinforce learning while keeping engagement high with
                        colorful feedback and progress tracking.
                    </p>
                </article>

                <article className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        🚀 Why iBrian?
                    </h2>
                    <p className="text-gray-600">
                        Whether it&#39;s a multiplication sprint or an addition
                        adventure, iBrian turns practice into progress. It&#39;s
                        built for kids, loved by parents, and trusted by
                        educators.
                    </p>
                </article>

                <article className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        🌟 Built with Care
                    </h2>
                    <p className="text-gray-600">
                        Created by passionate developers and educators, iBrian
                        combines modern tech with timeless teaching principles.
                        We&#39;re constantly improving to make math mastery
                        accessible for every child.
                    </p>
                </article>
            </div>
        </section>
    );
}
