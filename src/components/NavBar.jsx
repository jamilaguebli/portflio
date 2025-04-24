import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { FiMenu, FiX, FiPlay, FiPause } from 'react-icons/fi';
import NavbarItem from './NavbarItem';

const NavBar = () => {
    const [isToggled, setToggle] = useState(false);
    const [isPlaying, setPlaying] = useState(false);
    const audioRef = useRef(null);

    // Initialisation et nettoyage de l'audio
    useEffect(() => {
        audioRef.current = new Audio('/music.mp3');
        audioRef.current.volume = 0.3; // Volume réduit pour meilleure UX

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    // Gestion lecture/pause
    useEffect(() => {
        if (!audioRef.current) return;

        const handlePlay = async () => {
            try {
                await audioRef.current.play();
            } catch (err) {
                console.error("Erreur de lecture audio:", err);
                setPlaying(false);
            }
        };

        isPlaying ? handlePlay() : audioRef.current.pause();
    }, [isPlaying]);

    // Animation du menu
    const navContainer = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25
            }
        },
        hidden: {
            opacity: 0,
            x: -300,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25
            }
        }
    };

    return (
        <header className="pt-10 px-8 fixed w-full z-50">
            <div className="flex justify-between w-full">
                {/* Bouton Menu */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="relative flex justify-center items-center w-12 h-12 rounded-full cursor-pointer z-[1000] border-none bg-[#99e7ff]    transition-colors"
                    onClick={() => setToggle(!isToggled)}
                    aria-label={isToggled ? 'Fermer le menu' : 'Ouvrir le menu'}
                >
                    {isToggled ? (
                        <FiX className="text-white text-2xl" />
                    ) : (
                        <FiMenu className="text-white text-2xl" />
                    )}
                </motion.button>

                {/* Bouton Musique */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="relative flex justify-center items-center w-12 h-12 rounded-full cursor-pointer z-[1000] border-none bg-[#99e7ff]  transition-colors"
                    onClick={() => setPlaying(!isPlaying)}
                    aria-label={isPlaying ? 'Arrêter la musique' : 'Jouer la musique'}
                >
                    {isPlaying ? (
                        <FiPause className="text-white text-2xl" />
                    ) : (
                        <FiPlay className="text-white text-2xl" />
                    )}
                </motion.button>
            </div>

            {/* Menu animé */}
            <AnimatePresence>
                {isToggled && (
                    <motion.div
                        className="absolute top-24 left-8 z-[999] w-[280px] h-[75vh] rounded-2xl bg-[#99e7ff]   backdrop-blur-lg shadow-xl p-4"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={navContainer}
                    >
                        <NavbarItem 
                            isToggled={isToggled} 
                            closeMenu={() => setToggle(false)}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default NavBar;