import React, { useState } from 'react';

const Puzzle3 = () => {
    const [num1, setNum1] = useState<number>(Math.floor(Math.random() * 10));
    const [num2, setNum2] = useState<number>(Math.floor(Math.random() * 10));
    const [answer, setAnswer] = useState<string>('');
    const [points, setPoints] = useState<number>(0);
    const [answered, setAnswered] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(e.target.value);
    };

    const handleSubmit = () => {
        if (!answered) {
            const correctAnswer = num1 + num2;
            if (parseInt(answer) === correctAnswer) {
                setPoints(points + 10);
                setAnswered(true);
                showAlert("Correct!", "You solved the problem!", "bg-green-500");
            } else {
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
            <h1 className="text-2xl font-bold mb-4 text-center text-purple-700">Solve the Addition!</h1>
            <p className="text-center text-lg text-gray-700 mb-8">
                <span className="text-3xl font-bold">{num1}</span> + <span className="text-3xl font-bold">{num2}</span> = ?
            </p>
            <div className="flex justify-center mb-4">
                <input
                    type="text"
                    value={answer}
                    onChange={handleInputChange}
                    className="border-2 border-gray-300 p-2 rounded-lg text-center text-lg w-24"
                />
                <button
                    onClick={handleSubmit}
                    className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                >
                    Submit
                </button>
            </div>
            <div className="points-container flex justify-center items-center mt-4">
                <p className="text-lg font-semibold bg-gray-200 px-4 py-2 rounded shadow-md">
                    Points: <span className="text-blue-500">{points}</span>
                </p>
            </div>
        </div>
    );
};

export default Puzzle3;