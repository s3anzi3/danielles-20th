
import "../styles/MainContent.css";


import React, { useState } from "react";

// Import images from the Images folder
import oneImage from "../Images/one.png";
import twoImage from "../Images/two.jpg";
import threeImage from "../Images/three.jpg";
import fourImage from "../Images/four.jpg";
import fiveImage from "../Images/five.jpg";
import sixImage from "../Images/six.jpg";
import sevenImage from "../Images/seven.jpg";
import eightImage from "../Images/eight.jpg";
import nineImage from "../Images/nine.jpg";
import tenImage from "../Images/ten.jpg";

const MainContent = () => {
    const [modalImage, setModalImage] = useState(null); // State to track the clicked image
    const [modalText, setModalText] = useState(""); // State for modal text description

    // Define the images array with paths and descriptions
    const images = [
        { src: oneImage, description: "I love being on facetime with you. Even if we are talking, not talking, the presence of you on the phone is enough to make my day when we are not physically able to talk to each other (There weren't too many facetime photos to choose from (I am absolutely lying) (my fault))s" },
        { src: twoImage, description: "I like when you are in the spirit, nutcracker" },
        { src: threeImage, description: "I like being goofy with you (You're really strong btw ngl I thought you took martial arts classes and that's why you are almsot able to beat my ass sometimes ina  wrestiling match" },
        { src: fourImage, description: "We still need to finish the lego set. I want to build that with you, and more !" },
        { src: fiveImage, description: "I enjoy eating with you. Macdonalds! I will bring you for Sushi this break as well, I did not forget that. I owe you, I owe you that and so much more" },
        { src: sixImage, description: "I like that you are in touch with my interests (or try to me). I know sometimes I can be really annoying about what I like, sometiimes I even explain too much. However, I really appreciate that you listen and care, I hope we can enjoy each other's interests moving forward." },
        { src: sevenImage, description: "I enjoy every nap we take together, even if I twitch a snore while I sleep, I am at my comfiest and coziest in your arms. I could spend forever cuddlign with you " },
        { src: eightImage, description: "Prom was really fun with you. Loved your dress, where did you get it? To more partying, with or without me. At Stony or god knows where, enjoy it all Danielle " },
        { src: nineImage, description: "I like to see how you have grown. Depsite how stupid this image is, it shows alot. You have come a long way to where you are now who I believe is your true self. You even have more balls htan me sometimes. Not mini me exactly, but your full self now, you even embrace exploring dumb shit ike yeat shiesty nerf gun persona! " },
        { src: tenImage, description: "You are so beautiful. At times when you try new styles even i catch butterflies, get a little speechless, choke on my own words. Don't let anyone make you think otherwise. You are perfect the way you are, in every sapect for that matter, you are perfect." },
    ];

    const openModal = (src, description) => {
        setModalImage(src);
        setModalText(description);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    return (
        <div className="main-content">
            {/* Snowflake Background */}
            <div className="snowflakes" aria-hidden="true">
                {Array.from({ length: 100 }).map((_, i) => {
                    const style = {
                        "--random-x": Math.random() * 100,
                        "--random-y": Math.random() * 100,
                        "--random-size": 1 + Math.random(),
                        "--random-delay": Math.random() * 5,
                    };
                    return <div key={i} className="snowflake" style={style}>❄</div>;
                })}
            </div>

            {/* Clickable Images */}
            {images.map((image, index) => (
                <a
                    key={index}
                    href="#"
                    className="image-frame"
                    onClick={(e) => {
                        e.preventDefault();
                        openModal(image.src, image.description);
                    }}
                    title={`Image ${index + 1}`}
                >
                    <img src={image.src} alt={`Image ${index + 1}`} />
                </a>
            ))}

            {/* Clickable Text Box */}
            <div
                className="text-box clickable"
                onClick={() => openModal(null, 'Happy 20th Danielle "Gnome" Judith Rafailov !!!')}
            >
                <h1>Happy 20th Danielle "Gnome" Judith Rafailov !!!</h1>
            </div>

            {/* Modal */}
            {modalImage && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
                    >
                        <img src={modalImage} alt="Modal" className="modal-image" />
                        <div className="modal-textbox">
                            <p>{modalText}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MainContent;
