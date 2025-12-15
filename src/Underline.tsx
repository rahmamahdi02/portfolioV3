import React from 'react'

type BaseProps = { children?: React.ReactNode };
const Underline = ({children}:BaseProps) => {
  return (
    <span className='underline underline-offset-4 dark:decoration-amber-200'>{children}</span>
  )
}

export default Underline