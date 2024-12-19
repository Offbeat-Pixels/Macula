// Globe.js
import React, { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import * as TWEEN from "es6-tween";
import markerRenderer from "./markerRenderer";

function Globe({ globeTexture, markers }) {
  const globeRef = useRef();
  const texture = useMemo(
    () => new THREE.TextureLoader().load(globeTexture),
    [globeTexture]
  );

  useEffect(() => {
    if (globeRef.current) globeRef.current.rotation.y = Math.PI * 0.5;
  }, []);

  useFrame(() => {
    TWEEN.update();
    if (globeRef.current) globeRef.current.rotation.y += 0.001;
  });

  return (
    <>
      <mesh ref={globeRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial map={texture} />
        {markers.map((marker) => {
          const { coordinates, value } = marker;
          const [lat, lon] = coordinates;

          // Convert lat/lon to 3D coordinates
          const phi = (90 - lat) * (Math.PI / 180);
          const theta = (lon + 180) * (Math.PI / 180);
          const x = -1 * Math.sin(phi) * Math.cos(theta);
          const y = Math.cos(phi);
          const z = Math.sin(phi) * Math.sin(theta);

          const position = [x, y, z];

          const markerObject = markerRenderer({
            ...marker,
            coordinates: position,
          });

          return (
            <group key={marker.id} position={position}>
              {markerObject}
            </group>
          );
        })}
      </mesh>
    </>
  );
}

export default Globe;
