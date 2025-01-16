import React, { useState } from 'react';

const Puzzle7 = () => {
    const animals = [
        { id: 1, name: '🐶', count: 0 },
        { id: 2, name: '🐱', count: 0 },
        { id: 3, name: '🐰', count: 0 },
    ];

    const [animalCounts, setAnimalCounts] = useState(animals);

    const handleClick = (id) => {
        const newCounts = animalCounts.map((animal) => {
            if (animal.id === id) {
                return { ...animal, count: animal.count + 1 };
            }
            return animal;
        });
        setAnimalCounts(newCounts);
    };

    return (
        <div>
            <h1>Count the Animals!</h1>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                {animalCounts.map((animal) => (
                    <div key={animal.id} style={{ textAlign: 'center' }}>
                        <h2 onClick={() => handleClick(animal.id)} style={{ cursor: 'pointer' }}>
                            {animal.name}
                        </h2>
                        <p>Count:{animal.count}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Puzzle7;