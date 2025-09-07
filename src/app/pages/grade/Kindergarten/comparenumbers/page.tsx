'use client';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

interface Question {
    number1: number;
    number2: number;
    correctAnswer: 'greater' | 'less' | 'equal';
}

export default function CompareNumbers() {
    const [currentQuestion, setCurrentQuestion] = useState<Question | null>(
        null
    );
    const [score, setScore] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [feedback, setFeedback] = useState<string | null>(null);
    const [showConfetti, setShowConfetti] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);

    const generateQuestion = (): Question => {
        const number1 = Math.floor(Math.random() * 20) + 1;
        const number2 = Math.floor(Math.random() * 20) + 1;

        let correctAnswer: 'greater' | 'less' | 'equal';
        if (number1 > number2) correctAnswer = 'greater';
        else if (number1 < number2) correctAnswer = 'less';
        else correctAnswer = 'equal';

        return { number1, number2, correctAnswer };
    };

    const startGame = () => {
        setGameStarted(true);
        setCurrentQuestion(generateQuestion());
        setScore(0);
        setTotalQuestions(0);
        setFeedback(null);
    };

    const handleAnswer = (answer: 'greater' | 'less' | 'equal') => {
        if (!currentQuestion) return;

        const isCorrect = answer === currentQuestion.correctAnswer;
        setTotalQuestions((prev) => prev + 1);

        if (isCorrect) {
            setScore((prev) => prev + 1);
            setFeedback('🎉 Great job! You got it right!');
            setShowConfetti(true);

            // Save progress
            const currentStars = parseInt(
                localStorage.getItem('kindergarten-math-stars') || '0'
            );
            localStorage.setItem(
                'kindergarten-math-stars',
                (currentStars + 1).toString()
            );
        } else {
            setFeedback(
                `Almost! ${currentQuestion.number1} is ${
                    currentQuestion.correctAnswer === 'greater'
                        ? 'greater than'
                        : currentQuestion.correctAnswer === 'less'
                        ? 'less than'
                        : 'equal to'
                } ${currentQuestion.number2}`
            );
        }

        setTimeout(() => {
            setCurrentQuestion(generateQuestion());
            setFeedback(null);
            setShowConfetti(false);
        }, 2000);
    };

    const renderDots = (number: number) => {
        return (
            <div className="flex flex-wrap justify-center gap-2 max-w-xs">
                {Array.from({ length: number }, (_, i) => (
                    <div key={i} className="w-4 h-4 bg-blue-500 rounded-full" />
                ))}
            </div>
        );
    };

    if (!gameStarted) {
        return (
            <div className="activity-card text-center max-w-2xl mx-auto mt-12 pt-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    🔢 Compare Numbers!
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    Look at the numbers and dots, then choose which number is
                    bigger, smaller, or if they&#39;re the same!
                </p>
                <button onClick={startGame} className="px-8 py-4 text-gray-700 font-bold rounded-xl hover:bg-white hover:shadow-md transition-all">
                    🚀 Let&#39;s Start Playing!
                </button>
            </div>
        );
    }

    if (!currentQuestion) return null;

    return (
        <div className="activity-card max-w-4xl mx-auto">
            {showConfetti && (
                <div className="fixed inset-0 pointer-events-none z-50">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl animate-bounce">🎉</div>
                    </div>
                </div>
            )}

            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    Compare the Numbers
                </h1>
                <div className="text-lg text-gray-600">
                    Score: {score}/{totalQuestions} ⭐
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* First Number */}
                <div className="text-center">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-3xl p-8 mb-4">
                        <div className="text-6xl font-bold mb-4">
                            {currentQuestion.number1}
                        </div>
                        {renderDots(currentQuestion.number1)}
                    </div>
                </div>

                {/* Comparison Buttons */}
                <div className="flex flex-col space-y-4">
                    <button
                        onClick={() => handleAnswer('greater')}
                        className="bg-gradient-to-r from-red-400 to-pink-500 text-white font-bold py-6 px-8 rounded-full text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 active:scale-95"
                    >
                        <ChevronLeftIcon className="w-8 h-8 mx-auto mb-2" />
                        First is BIGGER
                    </button>

                    <button
                        onClick={() => handleAnswer('equal')}
                        className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold py-6 px-8 rounded-full text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 active:scale-95"
                    >
                        = They&#39;re the SAME =
                    </button>

                    <button
                        onClick={() => handleAnswer('less')}
                        className="bg-gradient-to-r from-purple-400 to-indigo-500 text-white font-bold py-6 px-8 rounded-full text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 active:scale-95"
                    >
                        <ChevronRightIcon className="w-8 h-8 mx-auto mb-2" />
                        Second is BIGGER
                    </button>
                </div>

                {/* Second Number */}
                <div className="text-center">
                    <div className="bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-3xl p-8 mb-4">
                        <div className="text-6xl font-bold mb-4">
                            {currentQuestion.number2}
                        </div>
                        {renderDots(currentQuestion.number2)}
                    </div>
                </div>
            </div>

            {feedback && (
                <div
                    className={`mt-8 text-center p-6 rounded-3xl text-xl font-bold ${
                        feedback.includes('Great job')
                            ? 'bg-green-100 text-green-800 success-animation'
                            : 'bg-yellow-100 text-yellow-800'
                    }`}
                >
                    {feedback}
                </div>
            )}
        </div>
    );
}
