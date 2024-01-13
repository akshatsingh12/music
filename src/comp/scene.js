import { MotionConfig, motion,boxGeometry } from "framer-motion"
import { MotionCanvas, motion as motion3d } from "framer-motion-3d"

export function Scene() {
  return (
    <MotionConfig transition={{ type: "spring" }}>
      <motion.div animate={{ scale: 2 }}>
        <MotionCanvas>
          <motion3d.boxGeometry animate={{ x: 1 }} />
        </MotionCanvas>
      </motion.div>
    </MotionConfig>
  )
}