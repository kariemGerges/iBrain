import { Calculator } from 'lucide-react';
export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 mt-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                                <Calculator className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold">iBrain</span>
                        </div>
                        <p className="text-gray-400">
                            Making math magical for young learners everywhere.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Product</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Features
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Curriculum
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Pricing
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Support</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Parent Guide
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition-colors"
                                >
                                    Privacy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 iBrain. All rights reserved.</p>
                    <p>Developed by Kariem with ❤️</p>
                </div>
            </div>
        </footer>
    );
}
