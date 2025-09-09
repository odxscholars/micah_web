// src/pages/Home.tsx
import {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import {HER_NAME, BIRTHDAY} from '../core/constants';
import {getQuizCompleted} from '../core/storage';
import PrimaryButton from '../components/PrimaryButton';
import LockedBadge from '../components/LockedBadge';
import {random_celebrate} from "../utils/confetti";

function isBirthday() {
    const today = new Date();
    return today.toDateString() === BIRTHDAY.toDateString();
}

// Utility: pick a random image from /public
function getRandomImage() {
    const images:string[] = [];
    for (let i = 0; i < 7; i++) {
        images.push("cute" + i + ".jpg");

    }
    console.log(images)
    const index = Math.floor(Math.random() * images.length);
    return images[index];
}

export default function Home() {
    const completed = getQuizCompleted();

    // state for the random image
    const [currentImage, setCurrentImage] = useState<string | null>(getRandomImage());

    const handleShowRandom = () => {
        setCurrentImage(getRandomImage());
    };



    const birthdayToday = isBirthday();
    const locked = !birthdayToday;
    const firedRef = useRef(false);

    useEffect(() => {
        if (!birthdayToday) {
            firedRef.current = false; // reset if you want it to fire again when it flips to true later
            return;
        }
        if (firedRef.current) return;
        firedRef.current = true;
        random_celebrate();
    }, [birthdayToday]);
    return (
        <div className="relative max-w-md mx-auto p-4 space-y-6 text-center">
            {/* Main content (dimmed when locked) */}
            <div className={locked ? 'opacity-70 select-none pointer-events-none' : ''}>
                <h1 className="text-3xl font-bold">Hi, {HER_NAME}</h1>

                {birthdayToday && (
                    <div className="bg-pink-100 text-pink-700 p-2 rounded-xl my-6 text-2xl">
                        Happy Birthday, {HER_NAME} 🎉

                    </div>
                )}

                <div className="grid gap-4">
                    {/* Love Quiz card */}
                    <Link to="/quiz">
                        <div className="bg-white rounded-2xl p-6 shadow">
                            <h2 className="text-xl mb-2">Love Quiz</h2>
                            <PrimaryButton>Start the Love Quiz</PrimaryButton>
                        </div>
                    </Link>

                    {/* Love Jar card */}
                    <div className="bg-white rounded-2xl p-6 shadow">
                        <h2 className="text-xl mb-2 flex items-center justify-center">
                            Love Jar
                        </h2>
                        {completed ? (
                            <Link to="/jar">
                                <PrimaryButton>Open the Love Jar</PrimaryButton>
                            </Link>
                        ) : (
                            <div className="flex flex-col items-center">
                                <PrimaryButton
                                    className="opacity-50 cursor-not-allowed"
                                    onClick={() => alert('Please finish the quiz first!')}
                                >
                                    Locked
                                </PrimaryButton>
                                <LockedBadge />
                            </div>
                        )}
                    </div>

                    {/* Random Image card */}
                    <div className="bg-white rounded-2xl p-6 shadow flex flex-col items-center">
                        <h2 className="text-xl mb-4">Bleh</h2>
                        {currentImage && (
                            <button onClick={handleShowRandom}>
                                <img
                                    src={currentImage}
                                    alt="Random"
                                    className="rounded-lg max-w-full h-auto mb-4"
                                />
                            </button>
                        )}
                    </div>
                </div>
            </div>


            {locked && (
                <div
                    className="absolute inset-0 bg-black/35 backdrop-blur-[20px] flex flex-col items-center justify-center text-white px-6"
                    aria-hidden="true"
                >
                    {/* Simple SVG lock so you don't need an icon lib */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-14 h-14 mb-3"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M17 8h-1V6a4 4 0 10-8 0v2H7a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2v-8a2 2 0 00-2-2zm-7-2a2 2 0 114 0v2h-4V6zm7 12H7v-8h10v8z" />
                    </svg>
                    <p className="text-lg font-semibold">Locked until her birthday</p>
                    <p className="text-sm opacity-90">
                        Opens on {BIRTHDAY.toLocaleDateString()}
                    </p>
                </div>
            )}
        </div>
    );
}
