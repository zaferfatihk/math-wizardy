import React, { useState } from 'react';

const Puzzle4 = () => {
    const numStars = 7; // Always display 7 stars
    const [points, setPoints] = useState<number>(0);
    const [answered, setAnswered] = useState<boolean>(false);

    const handleButtonClick = (number: number) => {
        if (!answered) {
            if (number === numStars) {
                setPoints(points + 10);
                setAnswered(true);
                showAlert("Correct!", "You counted the stars correctly!", "bg-green-500");
            } else {
                setPoints(points - 1);
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
            <h1 className="text-2xl font-bold mb-4 text-center text-purple-700">Count the Stars!</h1>
            <div className="star-container flex justify-center mb-4">
                {Array.from({ length: numStars }, (_, i) => (
                    <span
                        key={i}
                        className={`star-emoji text-4xl mx-1 ${i % 2 === 0 ? 'text-yellow-500' : 'text-blue-500'}`}
                        role="img"
                        aria-label="star"
                    >
                        ⭐
                    </span>
                ))}
            </div>
            <div className="button-container flex justify-center space-x-4 mb-4">
                {[numStars - 1, numStars, numStars + 1].map((number) => (
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

export default Puzzle4;