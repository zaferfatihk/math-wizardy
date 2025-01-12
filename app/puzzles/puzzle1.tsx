import React, { useState } from 'react';

const Puzzle1 = () => {
    const [count, setCount] = useState(0);
    const [points, setPoints] = useState(0);
    const [answered, setAnswered] = useState(false);

    const handleClick = () => {
        setCount(count + 1);
    };

    const handleSuccess = () => {
        if (count === 5) { // Assuming 5 apples to count
            setPoints(points + 1);
            setCount(0); // Reset count after success
        }
    };

    function handleButtonClick(number: number): void {
        if (!answered) {
            if (number === 5) {
                setPoints(points + 10);
                setAnswered(true);
                showAlert("Count the Apples!", "Right answer!", "bg-green-500");
            } else {
                showAlert("Count the Apples!", "Wrong answer!", "bg-red-500");
            }
        }
    }

    function showAlert(title: string, message: string, bgColor: string): void {
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
    }

    return (
        <div className="puzzle-container p-4">
            <h1 className="text-2xl font-bold mb-4">Count the Apples!</h1>
            <div className="apple-container flex justify-center mb-4">
            {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className="apple-emoji text-4xl mx-1" role="img" aria-label="apple">🍎</span>
            ))}
            </div>
            <div className="button-container flex justify-center space-x-4 mb-4">
            {[4, 5, 6].map((number) => (
                <button
                key={number}
                className="count-button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                onClick={() => handleButtonClick(number)}
                >
                {number}
                </button>
            ))}
            </div>
            <div className="points-container flex justify-center items-center mt-4">
                <p className="text-lg font-semibold bg-gray-200 px-4 py-2 rounded shadow-md">
                    Points: <span className="text-blue-500">{points}</span>
                </p>
            </div>
        </div>
    );
};

export default Puzzle1;