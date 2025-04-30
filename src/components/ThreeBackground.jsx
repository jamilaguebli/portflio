import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { CustomShader } from './CustomShader';

const ThreeBackground = () => {
    const mountRef = useRef(null);
    const requestRef = useRef();
    const materialRef = useRef();

    useEffect(() => {
        // Initialisation de la scène
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 10;
        
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0); // Fond transparent
        mountRef.current.appendChild(renderer.domElement);

        // Création du fond avec le shader personnalisé
        const geometry = new THREE.PlaneGeometry(50, 50);
        const material = new CustomShader();
        materialRef.current = material; // On garde une référence pour l'animation
        const background = new THREE.Mesh(geometry, material);
        scene.add(background);

        // Gestion du redimensionnement
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // Animation
        let time = 0;
        const animate = () => {
            requestRef.current = requestAnimationFrame(animate);
            
            // Animation du shader
            time += 0.01;
            if (materialRef.current) {
                materialRef.current.time = time;
            }
            
            renderer.render(scene, camera);
        };
        animate();

        // Nettoyage
        return () => {
            cancelAnimationFrame(requestRef.current);
            window.removeEventListener('resize', handleResize);
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default ThreeBackground;