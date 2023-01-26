import React, {useState, useEffect} from 'react';

const Styles = ({styles}) => {

  styles = styles || [{
    url: 'https://i.ibb.co/fk6j21y/b4fc2a8a-8367-4be9-b009-71eaa48f882c-d41d8cd98f00b204e9800998ecf8427e-1.png',
    price: 120,
    name: 'Merlin'}];

  const [currentStyle, setStyle] = useState(styles[0]);

  return (
    <>
      <h4>${currentStyle.price}</h4>
      <h2>STYLE > {currentStyle.name}</h2>
      <ul>
        {
          styles.map((style) => {
            return (
              <div>
                <img class='style_thumbnail' src={style.url} width='50px' height='50px' />
              </div>
            )
          })
        }
      </ul>
    </>
  )

}

export default Styles;