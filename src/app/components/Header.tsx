import { Calculator } from "lucide-react";

export default function Header() {

    return (
        <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
            <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-800">MathQuest</span>
            </div>
            <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
                <a href="#" className="hover:text-purple-600 transition-colors">
                    Home
                </a>
                <a href="#" className="hover:text-purple-600 transition-colors">
                    Grades
                </a>
                <a href="#" className="hover:text-purple-600 transition-colors">
                    Parents
                </a>
                <a href="#" className="hover:text-purple-600 transition-colors">
                    About
                </a>
            </div>
            <div className="flex space-x-3">
                <button className="px-4 py-2 text-purple-600 font-semibold hover:bg-purple-50 rounded-lg transition-colors">
                    Sign In
                </button>
                <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all">
                    Start Free
                </button>
            </div>
        </nav>
    );
}