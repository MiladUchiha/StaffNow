'use client'
import AOS from "aos";
import React from 'react'
import { useEffect } from 'react'
const Animation = ({children}) => {
    useEffect(() => {
        AOS.init({
          duration: 1200,
          once: true,
        });
      }, []);
  return (
    <div>{children}</div>
  )
}

export default Animation