import React from 'react';
import './HeaderImage.scss'

interface IImageProps {
  src: string;
  alt: string;
}

const HeaderImage: React.FC<IImageProps> = ({ src, alt }) => {
  return (
    <div className="PaymentForm__header">
      <img src={src} alt={alt} className='PaymentForm__header-image'/>
    </div>
  )
};

export default HeaderImage;