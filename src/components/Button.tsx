import React from 'react'

interface ButtonProps {
  children: React.ReactNode,
  className?: string
}

const Button:React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <div>
      <button className={className}>{children}</button>
    </div>
  )
}

export default Button