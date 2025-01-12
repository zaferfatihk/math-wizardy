import React, { useState, useEffect } from 'react';

const Puzzle2 = () => {
  const [draggedShape, setDraggedShape] = useState<string | null>(null);
  const [shuffledShapes, setShuffledShapes] = useState<string[]>([]);
  const [matchedShapes, setMatchedShapes] = useState<{ [key: string]: string }>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [userPoints, setUserPoints] = useState<number>(0);

  const shapes = ['Circle', 'Square', 'Triangle'];
  const shapeEmojis = {
    Circle: '🔵',
    Square: '🟥',
    Triangle: '🔺',
  };

  useEffect(() => {
    setShuffledShapes(shuffleArray(shapes));
  }, []);

  useEffect(() => {
    if (Object.keys(matchedShapes).length === shapes.length) {
      setIsCompleted(true);
      showAlert('Congratulations!', 'You matched all the shapes!', 'bg-green-500');
      setUserPoints((prev) => prev + 10);
    }
  }, [matchedShapes]);

  const shuffleArray = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleDragStart = (shape: string) => {
    setDraggedShape(shape);
  };

  const handleDrop = (shape: string) => {
    if (draggedShape === shape) {
      setMatchedShapes((prev) => ({ ...prev, [shape]: shapeEmojis[shape] }));
      showAlert('Correct!', `You matched the ${shape}.`, 'bg-green-500');
    } else {
      showAlert('Try again!', `That's not the correct match.`, 'bg-red-500');
      setUserPoints((prev) => prev - 1);
    }
    setDraggedShape(null);
  };

  const showAlert = (title: string, message: string, bgColor: string) => {
    const alertBox = document.createElement('div');
    alertBox.className = `fixed top-0 left-0 w-full p-4 ${bgColor} text-white text-center z-50`;
    alertBox.innerHTML = `
    <strong class="block text-xl mb-1">${title}</strong>
    <span class="block mb-1" style="color: black">${message}</span>
    <span class="block text-3xl" style="color: black">${bgColor === "bg-green-500" ? "🏆" : "🦆"}</span> <!-- Cup Winner emoji for success, Duck emoji for failure -->`;
    document.body.appendChild(alertBox);
    setTimeout(() => {
      alertBox.remove();
    }, 3000);
  };

  return (
    <div className="puzzle-container p-4">
      <h1 className="text-2xl font-bold mb-4 text-center text-purple-700">Match the Shapes</h1>
      <p className="text-center text-lg text-gray-700 mb-8">Drag and drop the shapes to match them.</p>
      <div className="flex justify-around mt-8">
        {shapes.map((shape) => (
          !matchedShapes[shape] && (
            <div
              key={shape}
              className="border-2 border-gray-300 p-8 rounded-lg text-center text-4xl"
              draggable
              onDragStart={() => handleDragStart(shape)}
            >
              <p>{shapeEmojis[shape]}</p>
            </div>
          )
        ))}
      </div>
      <div className="flex justify-around mt-8">
        {shuffledShapes.map((shape) => (
          <div
            key={shape}
            className="border-2 border-dashed border-gray-300 p-8 rounded-lg text-center w-32 h-32 flex items-center justify-center"
            onDrop={() => handleDrop(shape)}
            onDragOver={(e) => e.preventDefault()}
          >
            <p className="text-4xl">{matchedShapes[shape] ? matchedShapes[shape] : `Drop ${shape} Here`}</p>
          </div>
        ))}
      </div>
      {isCompleted && (
        <div className="points-container flex justify-center items-center mt-4">
          <p className="text-lg font-semibold bg-gray-200 px-4 py-2 rounded shadow-md">
            Points: <span className="text-blue-500">{userPoints}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Puzzle2;