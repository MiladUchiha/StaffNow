'use client'
import { motion, AnimatePresence } from 'framer-motion'

export const DivWrapper = ({ children, delay }) => {
    return (
        <AnimatePresence>
        <motion.div
        initial={{ opacity: 0, }}
        animate={{ opacity: 0.6, }}
        transition={{ duration: 1, delay: delay}}
        >
        {children}
        </motion.div>
        </AnimatePresence>
    )
}
export const TextWrapper = ({ children, delay }) => {
    return (
        <AnimatePresence>
        <motion.span
        initial={{ opacity: 0, }}
        animate={{ opacity: 1, }}
        transition={{ duration: 0.6, delay: delay}}
        >
        {children}
        </motion.span>
        </AnimatePresence>
    )
}
