// components/VoxelLoader.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { loadGLTFModel } from "../lib/model";
import { motion } from "framer-motion";

const VoxelLoader = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const sceneRef = useRef(new THREE.Scene());
  const frameId = useRef(0);
  const pivotRef = useRef<THREE.Group>(new THREE.Group());

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.9, 1000);
    const scene = sceneRef.current;

    // Hemisphere light (sky + ground)
    const hemiLight = new THREE.HemisphereLight(0xb1e1ff, 0x444422, 2.5);
    hemiLight.position.set(0, 10, 0);
    scene.add(hemiLight);

    // Directional light (sunlight)
    // const dirLight = new THREE.DirectionalLight(0xffffff, 5);
    // dirLight.position.set(10, 20, 15);
    // dirLight.castShadow = true;
    // dirLight.shadow.mapSize.width = 1024;
    // dirLight.shadow.mapSize.height = 1024;
    // dirLight.shadow.camera.near = 0.5;
    // dirLight.shadow.camera.far = 50;
    // scene.add(dirLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;

    // Add the pivot group to the scene (will rotate this group)
    scene.add(pivotRef.current);

    loadGLTFModel(scene, "/ironEgg.glb")
      .then((model) => {
        // Calculate center of model
        const box = new THREE.Box3().setFromObject(model);
        const center = new THREE.Vector3();
        const size = new THREE.Vector3();
        box.getCenter(center);
        box.getSize(size);

        // Offset model so it’s centered inside the pivot
        model.position.sub(center);

        // Add model to pivot group
        pivotRef.current.add(model);

        // Position camera above and back from center
        const maxDim = Math.max(size.x, size.y, size.z);
        const distance = maxDim * 1.25;
        camera.position.set(0, distance * 0.5, distance);
        camera.lookAt(0, 0, 0);

        controls.target.set(0, 0, 0);
        controls.update();

        setLoading(false);

        const animate = () => {
          pivotRef.current.rotation.y += 0.005; // Spin around center
          controls.update();
          renderer.render(scene, camera);
          frameId.current = requestAnimationFrame(animate);
        };

        animate();
      })
      .catch((err) => console.error("Error loading model:", err));

    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId.current);
      renderer.dispose();
      controls.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-full h-[33rem] max-w-4xl mx-auto relative bg-white/5 fill-white/30 drop-shadow-lg drop-shadow-white/50 shadow-xl hover:cursor-grab "
    >
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center text-white rounded-2xl">
          VRoooomm...
        </div>
      )}
    </motion.div>
  );
};

export default VoxelLoader;
