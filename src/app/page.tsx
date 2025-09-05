import React from "react";
import {
  Star,
  Play,
  Users,
  Award,
  ArrowRight,
  BookOpen,
  Calculator,
  Sparkles,
} from "lucide-react";
import Header from "@/app/components/Header";
import Hero from "@/app/components/homePage/Hero";

export default function HomePage() {
  const gradeCards = [
    {
      grade: "Kindergarten",
      color: "from-pink-400 to-rose-500",
      icon: "🌟",
      skills: "Counting & Numbers",
    },
    {
      grade: "1st Grade",
      color: "from-orange-400 to-amber-500",
      icon: "🎯",
      skills: "Addition & Subtraction",
    },
    {
      grade: "2nd Grade",
      color: "from-emerald-400 to-green-500",
      icon: "🎨",
      skills: "Place Value & Time",
    },
    {
      grade: "3rd Grade",
      color: "from-blue-400 to-indigo-500",
      icon: "🚀",
      skills: "Multiplication & Division",
    },
    {
      grade: "4th Grade",
      color: "from-purple-400 to-violet-500",
      icon: "🎪",
      skills: "Fractions & Decimals",
    },
    {
      grade: "5th Grade",
      color: "from-cyan-400 to-blue-500",
      icon: "🏆",
      skills: "Geometry & Algebra Prep",
    },
  ];

  const features = [
    {
      icon: <Play className="w-6 h-6" />,
      title: "Interactive Games",
      desc: "Learning through fun, engaging activities",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Progress Tracking",
      desc: "Watch your child grow and celebrate wins",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Parent Dashboard",
      desc: "Stay involved in your child's learning journey",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Grade Levels Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Choose Your Grade Level
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each grade is carefully designed with age-appropriate content and
            progressive skill building
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gradeCards.map((grade, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group-hover:scale-105">
                <div
                  className={`h-32 bg-gradient-to-r ${grade.color} flex items-center justify-center`}
                >
                  <span className="text-4xl">{grade.icon}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {grade.grade}
                  </h3>
                  <p className="text-gray-600 mb-4">{grade.skills}</p>
                  <div className="flex items-center text-purple-600 font-semibold">
                    <span>Explore Activities</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Families Love MathQuest
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Designed with both kids and parents in mind for the ultimate
              learning experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                  {feature.icon}
                </div>
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

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-12 border border-gray-100">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Ready to Start the Adventure?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of families who've discovered the joy of learning
            math together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all">
              Get Started Free
            </button>
            <button className="px-8 py-4 text-gray-700 font-bold rounded-xl hover:bg-white hover:shadow-md transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">MathQuest</span>
              </div>
              <p className="text-gray-400">
                Making math magical for young learners everywhere.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Curriculum
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Parent Guide
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 MathQuest. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
