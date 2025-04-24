import React from 'react';
import { motion } from 'framer-motion';

const NavbarItem = () => {
    const items = [
        { name: 'About', id: 'about' },
        { name: 'Education', id: 'education' },
        { name: 'Experience', id: 'experience' },
        { name: 'Projects', id: 'projects' },
        { name: 'Skills', id: 'skills' },
        { name: 'Contact', id: 'contact' },
    ];

    const navList = {
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.07,
            }
        },
        hidden: {
            opacity: 0,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            }
        }
    };

    const navItem = {
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 15
            }
        },
        hidden: {
            y: 50,
            opacity: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 15
            }
        }
    };

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <motion.ul
            className="pt-[80px] px-[70px] pb-[200px] space-y-8"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={navList}
        >
            {items.map((item) => (
                <motion.li 
                    className="group relative"
                    variants={navItem}
                    key={item.id}
                    onClick={() => handleScroll(item.id)}
                >
                    <div className="
                        text-2xl font-bold text-white 
                        cursor-pointer transition-all duration-300
                        hover:text-blue-300 hover:pl-4
                        before:content-[''] before:absolute 
                        before:left-0 before:top-1/2 before:-translate-y-1/2
                        before:w-2 before:h-2 before:bg-blue-400 
                        before:rounded-full before:opacity-0
                        before:transition-all before:duration-300
                        group-hover:before:opacity-100 group-hover:before:left-2
                    ">
                        <span className="
                            relative inline-block
                            after:content-[''] after:absolute 
                            after:bottom-0 after:left-0 after:w-0 
                            after:h-[2px] after:bg-blue-400
                            after:transition-all after:duration-300
                            group-hover:after:w-full
                        ">
                            {item.name}
                        </span>
                    </div>
                </motion.li>
            ))}
        </motion.ul>
    );
};

export default NavbarItem;