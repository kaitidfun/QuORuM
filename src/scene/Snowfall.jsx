import { Sparkles } from '@react-three/drei'

// Two layers at different depths so the parallax rig makes them drift
// at visibly different speeds, like near vs. far snow.
function Snowfall() {
  return (
    <>
      <Sparkles
        count={90}
        scale={[14, 9, 4]}
        position={[0, 1, 3]}
        size={3.5}
        speed={0.25}
        opacity={0.85}
        color="#f4f7fb"
        noise={1.2}
      />
      <Sparkles
        count={140}
        scale={[18, 10, 6]}
        position={[0, 0, -3]}
        size={1.8}
        speed={0.15}
        opacity={0.45}
        color="#cfe3ee"
        noise={1}
      />
    </>
  )
}

export default Snowfall
