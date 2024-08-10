import React, { ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import cn from "../utils/cn"

interface Props {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  className?: string
}

const Modal: React.FC<Props> = ({ isOpen, onClose, children, className }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-15"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className={cn("rounded-xl bg-white p-8 shadow-lg", className)}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
