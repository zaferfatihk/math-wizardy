import React, { useState, useEffect } from 'react';

const Puzzle5 = () => {
    const emojis = ['🍎', '🍌', '🍇', '🍓', '🍒'];
    const targetEmoji = '🍇'; // Grapes
    const [numTargetEmojis, setNumTargetEmojis] = useState<number>(0);
    const [points, setPoints] = useState<number>(0);
    const [answered, setAnswered] = useState<boolean>(false);
    const [emojiArray, setEmojiArray] = useState<string[]>([]);

    useEffect(() => {
        const totalEmojis = 10;
        const initialEmojiArray = Array.from({ length: totalEmojis }, (_, i) => emojis[Math.floor(Math.random() * emojis.length)]);
        const targetCount = initialEmojiArray.filter(emoji => emoji === targetEmoji).length;
        setNumTargetEmojis(targetCount);
        setEmojiArray(initialEmojiArray);
    }, []);

    const handleButtonClick = (number: number) => {
        if (!answered) {
            if (number === numTargetEmojis) {
                setPoints(points + 10);
                setAnswered(true);
                showAlert("Correct!", "You counted the grapes correctly!", "bg-green-500");
            } else {
                setPoints(Math.max(points - 1, 0));
                showAlert("Incorrect!", "Try again!", "bg-red-500");
            }
        }
    };

    const showAlert = (title: string, message: string, bgColor: string) => {
        const alertBox = document.createElement("div");
        alertBox.className = `fixed top-0 left-0 w-full p-4 ${bgColor} text-white text-center z-50`;
        alertBox.innerHTML = `
            <strong class="block text-xl mb-1">${title}</strong>
            <span class="block mb-1" style="color: black">${message}</span>
            <span class="block text-3xl" style="color: black">${bgColor === "bg-green-500" ? "🏆" : "🦆"}</span> <!-- Cup Winner emoji for success, Duck emoji for failure -->
        `;
        document.body.appendChild(alertBox);
        setTimeout(() => {
            alertBox.remove();
        }, 3000);
    };

    return (
        <div className="puzzle-container p-4 flex flex-col items-start justify-start min-h-screen">
            <h1 className="text-2xl font-bold mb-4 text-center text-purple-700">Count the Grapes!</h1>
            <div className="emoji-container flex flex-wrap justify-center mb-4">
                {emojiArray.map((emoji, index) => (
                    <span key={index} className="emoji text-4xl mx-1" role="img" aria-label="emoji">{emoji}</span>
                ))}
            </div>
            <div className="button-container flex justify-center space-x-4 mb-4">
                {[numTargetEmojis - 1, numTargetEmojis, numTargetEmojis + 1].map((number) => (
                    <button
                        key={number}
                        className="count-button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                        onClick={() => handleButtonClick(number)}
                    >
                        {number}
                    </button>
                ))}
            </div>
            {answered && (
                <div className="points-container flex justify-center items-center mt-4">
                    <p className="text-lg font-semibold bg-gray-200 px-4 py-2 rounded shadow-md">
                        Points: <span className="text-blue-500">{points}</span>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Puzzle5;