const ROOFTOPS = [
  { x: -7.2, w: 1.6, h: 1.4, roofH: 0.9 },
  { x: -5.3, w: 1.1, h: 1.0, roofH: 0.7 },
  { x: -3.6, w: 2.1, h: 1.9, roofH: 1.2 },
  { x: -1.1, w: 1.4, h: 1.2, roofH: 0.8 },
  { x: 0.8, w: 2.6, h: 2.3, roofH: 1.4 },
  { x: 3.3, w: 1.2, h: 1.0, roofH: 0.7 },
  { x: 4.9, w: 1.7, h: 1.5, roofH: 1.0 },
  { x: 6.8, w: 1.1, h: 0.95, roofH: 0.65 },
]

const SILHOUETTE_COLOR = '#0c0d11'
const GROUND_Y = -3.1
const DEPTH_Z = -9

function Cabin({ x, w, h, roofH }) {
  return (
    <group position={[x, GROUND_Y, DEPTH_Z]}>
      <mesh position={[0, h / 2, 0]}>
        <boxGeometry args={[w, h, w]} />
        <meshBasicMaterial color={SILHOUETTE_COLOR} />
      </mesh>
      <mesh position={[0, h + roofH / 2, 0]} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[w * 0.75, roofH, 4]} />
        <meshBasicMaterial color={SILHOUETTE_COLOR} />
      </mesh>
    </group>
  )
}

function CampSilhouette() {
  return (
    <>
      {ROOFTOPS.map((r) => (
        <Cabin key={r.x} {...r} />
      ))}
      {/* solid ground filling everything below the rooftop line down past
          the bottom of the viewport, at any aspect ratio or parallax drift */}
      <mesh position={[0, GROUND_Y - 20, -6]}>
        <boxGeometry args={[44, 40, 20]} />
        <meshBasicMaterial color={SILHOUETTE_COLOR} />
      </mesh>
    </>
  )
}

export default CampSilhouette
export { GROUND_Y, DEPTH_Z, SILHOUETTE_COLOR }
