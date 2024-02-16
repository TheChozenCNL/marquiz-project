import React from 'react'
import s from './style.module.scss'

interface Props {
  src: string
  alt: string
  text: string
}

const ImageWithText: React.FC<Props> = ({ src, alt, text }) => {
  return (
    <div className={s.imageWrapper}>
      <img src={src} alt={alt} className={s.image} />
      <div className={s.imageText}>{text}</div>
    </div>
  )
}

export default ImageWithText
