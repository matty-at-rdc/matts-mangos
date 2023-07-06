import React from 'react'

import "./About.css"

import img from '../images/map.png';


export default () => (
  <div className='about'>
    <h1>About</h1>
    <div className='content'>
      <div>
        <p>
          Welcome to Matt's Mangos, your ultimate destination for delicious mangos with a twist! We pride ourselves on
          offering a wide variety of mangos sourced from the finest orchards around the world. At our store, you'll find
          an assortment of mangos that are hand-picked and carefully inspected to ensure the highest quality.
        </p>
        <p>
          What sets us apart is our unique range of flavored toppings that you can pair with your favorite mango. Whether
          you prefer a classic combination like chocolate or something more adventurous like chili lime, we have the
          perfect toppings to enhance the natural sweetness of the mango and create an explosion of flavors in every bite.
        </p>
        <p>
          We understand the importance of providing our customers with a memorable experience, and that's why we strive
          to deliver exceptional service. Our knowledgeable staff is always ready to assist you in selecting the perfect
          mangos and toppings to satisfy your cravings. Whether you're a mango enthusiast or simply looking for a delightful
          treat, come visit Matt's Mangos and indulge in a mango experience like no other.
        </p>
      </div>
      <div className='location-info'>
        <div className='text'>
          <h2>Location Info</h2>
          <p>As you can imagine, being a fake restaurant finding us can be rather difficult. This will become even more evident when I fail to provide a real address here.</p>
          <p><span className='location-key'>Address:</span> 2234 Marvelous Mango Mansions, New Dallas, GH, 87653</p>
          <p><span className='location-key'>Phone:</span> +1 (112) 876-5309</p>
          <p><span className='location-key'>Email:</span> info@matts-mangos.xyz</p>
          <p>If that information didn't make it hard enough check out this picture of a non-existent city with no marker for our location whatsoever!</p>
        </div>

        <div className='map'><img className='map' src={img}/></div>
      </div>

    </div>

  </div>

)
