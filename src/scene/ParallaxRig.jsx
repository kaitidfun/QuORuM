import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

// Slowly drifts the whole scene group so nearer/farther layers shift at
// different apparent speeds (parallax) purely from perspective + depth.
function ParallaxRig({ children }) {
  const group = useRef(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (!group.current) return
    group.current.position.x = Math.sin(t * 0.06) * 0.6
    group.current.position.y = Math.sin(t * 0.045) * 0.18
    group.current.rotation.z = Math.sin(t * 0.03) * 0.01
  })

  return <group ref={group}>{children}</group>
}

export default ParallaxRig
