import { useEffect, useState } from "react";

export const StarBackground = () => {
    const [stars, setStars] = useState([]); 
    const[meteors,setMeteors]=useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
            
        };
        window.addEventListener('resize',handleResize);
        return () => window.removeEventListener('resize',handleResize);
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 5000);
        const newStars = [];
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }
        setStars(newStars); // FIX 2: Set state only once, after the loop
    };

   const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];
    for (let i = 0; i < numberOfMeteors; i++) {
        newMeteors.push({
            id: i,
            size: Math.random() * 2 + 1,
            x: Math.random() * 100,
            y: Math.random() * 20,
            delay: 0, // <--- Change here for instant animation
            animationDuration: Math.random() * 3 + 3,
        });
    }
    setMeteors(newMeteors);
};


    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star animate-pulse-subtle" // Make sure you have a .star class in your CSS!
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%", // FIX 3: Use the correct x coordinate
                        top: star.y + "%",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                    }}
                />
            ))}

            {meteors.map((meteor) => (
    <div
        key={meteor.id}
        className="meteor"
        style={{
            width: meteor.size * 50 + "px",
            height: meteor.size + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animation: `meteor ${meteor.animationDuration}s linear ${meteor.delay}s infinite`,
        }}
    />
))}
        </div>

    );
};
