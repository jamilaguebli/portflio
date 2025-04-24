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

        // Chargement des pétales
        const textureLoader = new THREE.TextureLoader();
        const petalTexture = textureLoader.load('/petal.png');
        const petalCount = 100;
        const petals = [];

        const petalGeometry = new THREE.PlaneGeometry(0.4, 0.4);
        const petalMaterial = new THREE.MeshBasicMaterial({
            map: petalTexture,
            transparent: true,
            side: THREE.DoubleSide
        });

        // Création des pétales
        for (let i = 0; i < petalCount; i++) {
            const petal = new THREE.Mesh(petalGeometry, petalMaterial);
            petal.position.set(
                (Math.random() - 0.5) * 20,
                Math.random() * 10,
                (Math.random() - 0.5) * 10
            );
            petal.rotation.z = Math.random() * Math.PI * 2;
            petal.fallSpeed = 0.02 + Math.random() * 0.05;
            petal.swaySpeed = 0.005 + Math.random() * 0.01;
            petal.rotationSpeed = 0.005 + Math.random() * 0.02;
            petal.offset = Math.random() * Math.PI * 2;
            scene.add(petal);
            petals.push(petal);
        }

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
            
            // Animation des pétales
            petals.forEach(petal => {
                petal.position.y -= petal.fallSpeed;
                petal.position.x += Math.sin(time + petal.offset) * petal.swaySpeed;
                petal.rotation.z += petal.rotationSpeed;
                
                // Réinitialiser la position si le pétale tombe trop bas
                if (petal.position.y < -10) {
                    petal.position.y = 10;
                    petal.position.x = (Math.random() - 0.5) * 20;
                }
            });
            
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