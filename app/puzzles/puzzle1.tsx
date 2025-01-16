import React, { useState, useEffect } from 'react';

const Puzzle1 = () => {
    const [clickedFlowers, setClickedFlowers] = useState<number[]>([]);
    const [isCompleted, setIsCompleted] = useState<boolean>(false);

    useEffect(() => {
        playSound('intropuzzle1');
    }, []);

    const handleFlowerClick = (number: number) => {
        if (!clickedFlowers.includes(number)) {
            setClickedFlowers([...clickedFlowers, number]);
            playSound(number);
            if (clickedFlowers.length + 1 === 5) {
                setIsCompleted(true);
                showAlert("Great job!", "You counted to 5!", "bg-green-500");
                setTimeout(() => {
                    playSound('accomplishpuzzle1');
                }, 1200);
                setTimeout(() => {
                    playSound('cheer', 2000);
                }, 4000);
            }
        }
    };

    const playSound = (number: number | string, duration?: number) => {
        const audio = new Audio(`/sounds/${number}.mp3`);
        audio.play();
        if (duration) {
            setTimeout(() => {
                audio.pause();
                audio.currentTime = 0;
            }, duration);
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
        <div className="puzzle-container p-4 flex flex-col items-center justify-start absolute" style={{ top: '20%', left: '20%' }}>
            <h1 className="text-2xl font-bold mb-4 text-center text-purple-700">Count the Flowers!</h1>
            <p className="text-center text-lg text-gray-700 mb-8">Click on each flower, starting from 1!</p>
            <div className="garden flex justify-around mb-8">
                {Array.from({ length: 5 }, (_, i) => (
                    <div
                        key={i + 1}
                        className={`flower text-4xl mx-2 ${clickedFlowers.includes(i + 1) ? 'text-green-500' : 'text-gray-500'}`}
                        onClick={() => handleFlowerClick(i + 1)}
                    >
                        🌸 {i + 1}
                    </div>
                ))}
            </div>
            {isCompleted && (
                <div className="reward-container flex justify-center items-center mt-4">
                    <p className="text-lg font-semibold bg-gray-200 px-4 py-2 rounded shadow-md">
                        <span className="text-blue-500">⭐ Great job! You earned a star! ⭐</span>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Puzzle1;