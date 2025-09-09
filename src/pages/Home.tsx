// src/pages/Home.tsx
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {HER_NAME, BIRTHDAY} from '../core/constants';
import {getQuizCompleted} from '../core/storage';
import PrimaryButton from '../components/PrimaryButton';
import LockedBadge from '../components/LockedBadge';

function isBirthday() {
    const today = new Date();
    return today.toDateString() === BIRTHDAY.toDateString();
}

// Utility: pick a random image from /public
function getRandomImage() {
    const images = ['hehe.jpg', 'cute1.jpg', 'cute2.jpg'];
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

    return (
        <div className="max-w-md mx-auto p-4 space-y-6 text-center">
            <h1 className="text-3xl font-bold">Hi, {HER_NAME}</h1>

            {isBirthday() && (
                <div className="bg-pink-100 text-pink-700 p-2 rounded-xl">
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
                            <PrimaryButton className="opacity-50 cursor-not-allowed"
                                           onClick={() => alert('Please finish the quiz first!')}>Locked</PrimaryButton>
                            <LockedBadge/>
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
                            /></button>
                    )}
                    {/*<button*/}
                    {/*    onClick={handleShowRandom}*/}
                    {/*    className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600"*/}
                    {/*>*/}
                    {/*    Show Random Image*/}
                    {/*</button>*/}
                </div>
            </div>
        </div>
    );
}
