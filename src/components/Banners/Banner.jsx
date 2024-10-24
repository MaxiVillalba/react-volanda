const Banner = ({ imageSrc, altText }) => {
    return (
      <div className="banner">
        <img src={imageSrc} className="img-fluid" alt={altText} />
      </div>
    )
  }
  
  export default Banner;
  