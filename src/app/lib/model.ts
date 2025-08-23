// lib/loadModel.ts
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Scene } from "three";

export async function loadGLTFModel(
  scene: Scene,
  path: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _options = {}
): Promise<THREE.Group> {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.load(
      path,
      (gltf) => {
        const obj = gltf.scene;
        obj.name = "model";
        scene.add(obj);
        resolve(obj);
      },
      undefined,
      (error) => reject(error)
    );
  });
}
