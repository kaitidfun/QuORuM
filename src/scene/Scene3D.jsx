import { Canvas } from '@react-three/fiber'
import ParallaxRig from './ParallaxRig'
import Snowfall from './Snowfall'
import CampSilhouette from './CampSilhouette'

function Fog() {
  return <fogExp2 attach="fog" args={['#151a22', 0.055]} />
}

function Scene3D() {
  return (
    <div className="scene3d">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: false }}
        camera={{ position: [0, 0.4, 6], fov: 45 }}
      >
        <color attach="background" args={['#141821']} />
        <Fog />
        <ParallaxRig>
          <Snowfall />
          <CampSilhouette />
        </ParallaxRig>
      </Canvas>
    </div>
  )
}

export default Scene3D
