// @ts-expect-error - PlayCanvas ESM scripts don't have type declarations
import { CameraControls } from "playcanvas/scripts/esm/camera-controls.mjs";
import { Entity } from "@playcanvas/react";
import { useEnvAtlas, useSplat, useMaterial } from "@playcanvas/react/hooks";
import { Camera, Environment, Script, GSplat, Render, Light } from "@playcanvas/react/components";

function Statue() {
  const { asset: statue } = useSplat('/Cthulhu Statue.sog');
  if (!statue) return null;

  return (
    <Entity name='statue' rotation={[180, -90, 0]} position={[0, -0.75, 0]} scale={[2, 2, 2]}>
      <GSplat asset={statue} castShadows={true} />
    </Entity>
  );
}

function Scene() {

  // Load the environment map
  const { asset: envMap } = useEnvAtlas('/environment-map.png');
  const sphereMat = useMaterial({ diffuse: '#c0a0a0' });
  const groundMat = useMaterial({ diffuse: '#666666' })

  if (!envMap) return null;

  return (
    <>
      <Environment envAtlas={envMap} showSkybox={false} skyboxIntensity={0.25} />

      <Entity name='directional-light' position={[10, 10, 10]} rotation={[30, -30, 30]}>
        <Light
          type={'directional'}
          castShadows={true}
          shadowDistance={30}
          shadowBias={0.2}
          normalOffsetBias={0.05}
          shadowResolution={1024}
        />
      </Entity>

      <Entity name='camera' position={[0, 1, 4]}>
        <Camera clearColor='#171717' />
        <Script script={CameraControls} />
      </Entity>

      <Entity name='sphere' position={[2, -0.25, 0]}>
        <Render type="sphere" material={sphereMat} castShadows={true} />
      </Entity>

      <Entity name='ground' scale={[1000, 1000, 1000]} position={[0, -0.75, 0]}>
        <Render type="plane" material={groundMat} castShadows={false} receiveShadows={true} />
      </Entity>

      <Statue />

    </>
  )
}

export default Scene;
