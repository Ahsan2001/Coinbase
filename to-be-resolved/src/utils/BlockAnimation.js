import React from 'react'
import AnimatedText from 'react-animated-text-content'

const BlockAnimation = ({text,type}) => {
  return (
      <AnimatedText
          type="words" // animate words or chars
          animation={{
              x: '200px',
              y: '-20px',
              scale: 1.1,
              ease: 'ease-in-out',
          }}
          animationType={type}
          interval={0.06}
          duration={0.8}
          className="animated-paragraph"
          threshold={0.1}
      >
          {text}
      </AnimatedText>
  )
}

export default BlockAnimation