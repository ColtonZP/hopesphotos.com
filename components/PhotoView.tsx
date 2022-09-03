import React from 'react'
import Image from 'next/image'

export const PhotoView = ({ imageUrl, setPhotoViewUrl }) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      className="position-fixed w-100 h-100 bg-black bg-opacity-90 top-0 start-0 z-1 d-flex align-items-center justify-content-center"
      onClick={() => setPhotoViewUrl('')}>
      <div className="w-90 h-90 position-relative">
        <Image src={imageUrl} alt="mail" layout="fill" objectFit="contain" />
      </div>
    </div>
  )
}
