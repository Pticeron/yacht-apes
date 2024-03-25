



const FAQItem = ({
    active,
    id,
    title,
    description,
    image,
  }) => {
    return (
      <div >
        <div >
          <p >
            [ {id} ]
          </p>
          <h3 >
            {title}
          </h3>
        </div>
  
        {active && (
          <picture>
            <source
              type="image/png"
              media="(min-width: 768px)"
              srcSet={`${image?.[0]} 1x, ${image?.[1]} 2x`}
            />
  
            <img
              src={`${image?.[0]}`}
              alt={title}
              width={216}
              height={292}
              loading="lazy"
            />
          </picture>
        )}
  
        {active && <p ></p>}
      </div>
    );
  };
  
  export default FAQItem;