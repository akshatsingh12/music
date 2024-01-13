import { motion } from "framer-motion"
// import { Scene } from "../comp/scene"
import './sty.css'
// const fullscreen = { position: "fixed", inset: 0 }


export default function App( ) {
  
  return (
    <div className="my-container">
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
    </div>
  )
}