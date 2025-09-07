'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Star, Trophy, Heart, RotateCcw, Play } from 'lucide-react';

const MathPracticeApp = () => {
    const [gameState, setGameState] = useState('menu'); // menu, playing, result
    const [operation, setOperation] = useState(''); // 'add', 'sub', 'mul', 'div'
    const [difficulty, setDifficulty] = useState(1); // 1: easy, 2: medium, 3: hard
    const [currentProblem, setCurrentProblem] = useState<MathProblem | null>(null);
    const [userAnswer, setUserAnswer] = useState('');
    const [timeLeft, setTimeLeft] = useState(15);
    const [attempts, setAttempts] = useState(0);
    const [score, setScore] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [showAnimation, setShowAnimation] = useState('');
    const [lives, setLives] = useState(3); // Number of lives

    const operations = [
        { name: 'Addition', symbol: '+', key: 'add' },
        { name: 'Subtraction', symbol: '−', key: 'sub' },
        { name: 'Multiplication', symbol: '×', key: 'mul' },
        { name: 'Division', symbol: '÷', key: 'div' },
    ];

    const difficultyLevels = [
        { level: 1, name: 'Easy', color: 'bg-green-500' },
        { level: 2, name: 'Medium', color: 'bg-yellow-500' },
        { level: 3, name: 'Hard', color: 'bg-red-500' },
    ];

    const generateProblem = useCallback(() => {
        let num1, num2, answer;

        const ranges: Record<number, { min: number; max: number }> = {
            1: { min: 1, max: 10 },
            2: { min: 5, max: 25 },
            3: { min: 10, max: 50 },
        };

        const range = ranges[difficulty];

        switch (operation) {
            case 'add':
                num1 = Math.floor(Math.random() * range.max) + range.min;
                num2 = Math.floor(Math.random() * range.max) + range.min;
                answer = num1 + num2;
                break;
            case 'sub':
                num1 = Math.floor(Math.random() * range.max) + range.min;
                num2 =
                    Math.floor(Math.random() * Math.min(num1, range.max)) + 1;
                answer = num1 - num2;
                break;
            case 'mul':
                const mulRange =
                    difficulty === 1 ? 5 : difficulty === 2 ? 12 : 15;
                num1 = Math.floor(Math.random() * mulRange) + 1;
                num2 = Math.floor(Math.random() * mulRange) + 1;
                answer = num1 * num2;
                break;
            case 'div':
                answer =
                    Math.floor(
                        Math.random() *
                            (difficulty === 1 ? 10 : difficulty === 2 ? 15 : 20)
                    ) + 1;
                num2 =
                    Math.floor(
                        Math.random() *
                            (difficulty === 1 ? 5 : difficulty === 2 ? 8 : 12)
                    ) + 1;
                num1 = answer * num2;
                break;
            default:
                return null;
        }

        return { num1, num2, answer };
    }, [operation, difficulty]);

    interface MathProblem {
        num1: number;
        num2: number;
        answer: number;
    }

    type OperationKey = 'add' | 'sub' | 'mul' | 'div';

    interface StartGameFn {
        (op: OperationKey): void;
    }

    const startGame: StartGameFn = (op) => {
        setOperation(op);
        setGameState('playing');
        setScore(0);
        setTotalQuestions(0);
        setLives(3);
        const problem: MathProblem | null = generateProblem();
        setCurrentProblem(problem);
        setTimeLeft(15);
        setAttempts(0);
        setUserAnswer('');
        setFeedback('');
        setShowAnimation('');
    };

    const checkAnswer = () => {
        if (!userAnswer || !currentProblem) return;

        const userNum = parseInt(userAnswer);
        const correct = userNum === currentProblem.answer;

        if (correct) {
            setScore(score + 1);
            setFeedback('🎉 Correct! Great job!');
            setShowAnimation('animate-bounce text-green-500');
            setTimeout(nextQuestion, 2000);
        } else {
            setAttempts(attempts + 1);
            if (attempts >= 2) {
                setLives(lives - 1);
                setFeedback(
                    `❌ The correct answer is ${currentProblem.answer}`
                );
                setShowAnimation('animate-pulse text-red-500');
                setTimeout(nextQuestion, 3000);
            } else {
                setFeedback(`❌ Try again! ${2 - attempts} chances left`);
                setShowAnimation('animate-shake text-orange-500');
            }
        }

        if (!correct && attempts < 2) {
            setUserAnswer('');
        }
    };

    const nextQuestion = () => {
        if (lives <= 0) {
            setGameState('result');
            return;
        }

        setTotalQuestions(totalQuestions + 1);
        const problem = generateProblem();
        setCurrentProblem(problem);
        setTimeLeft(15);
        setAttempts(0);
        setUserAnswer('');
        setFeedback('');
        setShowAnimation('');
    };

    const resetGame = () => {
        setGameState('menu');
        setOperation('');
        setDifficulty(1);
        setCurrentProblem(null);
        setUserAnswer('');
        setTimeLeft(15);
        setAttempts(0);
        setScore(0);
        setTotalQuestions(0);
        setFeedback('');
        setShowAnimation('');
        setLives(3);
    };

    // Timer effect
    useEffect(() => {
        if (gameState === 'playing' && timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else if (timeLeft === 0 && gameState === 'playing') {
            setAttempts(attempts + 1);
            if (attempts >= 2) {
                setLives(lives - 1);
                setFeedback(
                    `⏰ Time's up! The answer was ${currentProblem?.answer}`
                );
                setShowAnimation('animate-pulse text-red-500');
                setTimeout(nextQuestion, 3000);
            } else {
                setFeedback(`⏰ Time's up! ${2 - attempts} chances left`);
                setShowAnimation('animate-pulse text-orange-500');
                setTimeLeft(15);
            }
        }
    }, [timeLeft, gameState, attempts, currentProblem, lives]);

    // Generate new problem when operation or difficulty changes
    useEffect(() => {
        if (operation && gameState === 'playing') {
            const problem = generateProblem();
            setCurrentProblem(problem);
        }
    }, [operation, difficulty, generateProblem, gameState]);

    if (gameState === 'menu') {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">
                            🧮 Math Adventure
                        </h1>
                        <p className="text-lg text-gray-600">
                            Choose your math challenge!
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
                            Select Difficulty
                        </h2>
                        <div className="flex justify-center gap-4 mb-6">
                            {difficultyLevels.map((level) => (
                                <button
                                    key={level.level}
                                    onClick={() => setDifficulty(level.level)}
                                    className={`px-6 py-3 rounded-xl font-semibold text-white transition-transform hover:scale-105 ${
                                        difficulty === level.level
                                            ? level.color
                                            : 'bg-gray-400'
                                    }`}
                                >
                                    {level.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {operations.map((op) => (
                            <button
                                key={op.key}
                                onClick={() => startGame(op.key as OperationKey)}
                                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-6 px-4 rounded-2xl transition-all hover:scale-105 transform hover:shadow-lg"
                            >
                                <div className="text-3xl mb-2">{op.symbol}</div>
                                <div className="text-lg">{op.name}</div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    if (gameState === 'result') {
        return (
            <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center">
                    <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Game Over!
                    </h2>
                    <div className="text-6xl font-bold text-blue-600 mb-2">
                        {score}
                    </div>
                    <p className="text-xl text-gray-600 mb-6">
                        out of {totalQuestions} questions
                    </p>

                    <div className="flex justify-center gap-4">
                        <button
                            onClick={resetGame}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center gap-2"
                        >
                            <RotateCcw className="w-5 h-5" />
                            Play Again
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    if (gameState === 'playing') {
        const operationSymbol =
            operations.find((op) => op.key === operation)?.symbol || '';

        return (
            <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-lg w-full">
                    {/* Header with stats */}
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-2">
                            <Star className="w-6 h-6 text-yellow-500" />
                            <span className="font-bold text-xl text-gray-800">
                                {score}
                            </span>
                        </div>

                        <div className="flex items-center gap-1">
                            {Array.from({ length: 3 }, (_, i) => (
                                <Heart
                                    key={i}
                                    className={`w-6 h-6 ${
                                        i < lives
                                            ? 'text-red-500 fill-current'
                                            : 'text-gray-300'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Timer */}
                    <div className="text-center mb-6">
                        <div
                            className={`text-4xl font-bold ${
                                timeLeft <= 5
                                    ? 'text-red-500 animate-pulse'
                                    : 'text-blue-600'
                            }`}
                        >
                            ⏰ {timeLeft}s
                        </div>
                    </div>

                    {/* Problem */}
                    {currentProblem && (
                        <div className="text-center mb-8">
                            <div className="text-5xl font-bold text-gray-800 mb-6 leading-relaxed">
                                {currentProblem.num1} {operationSymbol}{' '}
                                {currentProblem.num2} = ?
                            </div>

                            <input
                                type="number"
                                value={userAnswer}
                                onChange={(e) => setUserAnswer(e.target.value)}
                                onKeyPress={(e) =>
                                    e.key === 'Enter' && checkAnswer()
                                }
                                className="text-3xl font-bold text-center border-4 border-blue-300 rounded-2xl px-4 py-3 w-48 focus:outline-none focus:border-blue-500"
                                placeholder="?"
                                autoFocus
                            />

                            <div className="mt-6">
                                <button
                                    onClick={checkAnswer}
                                    disabled={!userAnswer}
                                    className="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white font-bold py-3 px-8 rounded-xl transition-colors flex items-center gap-2 mx-auto"
                                >
                                    <Play className="w-5 h-5" />
                                    Submit
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Feedback */}
                    {feedback && (
                        <div
                            className={`text-center text-xl font-bold mb-4 ${showAnimation}`}
                        >
                            {feedback}
                        </div>
                    )}

                    {/* Attempts indicator */}
                    <div className="flex justify-center gap-2 mb-4">
                        {Array.from({ length: 3 }, (_, i) => (
                            <div
                                key={i}
                                className={`w-4 h-4 rounded-full ${
                                    i < attempts ? 'bg-red-400' : 'bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={resetGame}
                        className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-xl transition-colors"
                    >
                        Back to Menu
                    </button>
                </div>
            </div>
        );
    }

    return null;
};

export default MathPracticeApp;
