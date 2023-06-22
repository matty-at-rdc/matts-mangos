import React from 'react'

const preparationStyles = [
  'Diced',
  'Mixed',
  'Sugar Tossed',
  'Grilled',
  'Baked',
  'Roasted',
  'Fried',
  'Deep Fried',
  'Crispy',
  'Sauteed',
  'Blanched',
  'Marinated',
  'Smoked',
  'Broiled',
  'Poached',
  'Dutch Oven Baked',
  'Butter Dipped',
  'Super Yummy'
]

const flavors = [
  'Vanilla',
  'Chocolate',
  'Strawberry',
  'Mint',
  'Cookie Dough',
  'Coffee',
  'Rocky Road',
  'Butter Pecan',
  'Salted Caramel',
  'Pistachio',
  'Coconut',
  'Caramel',
  'Raspberry',
  'Mango Chutney',
  'Peach',
  'Blueberry',
  'Blackberry',
  'Cherry',
  'Lemon',
  'Orange',
  'Grape',
  'Watermelon',
  'Pineapple',
  'Apple',
  'Banana',
  'Cinnamon',
  'Hazelnut',
  'Almond',
  'Toffee',
  'Honey',
  'Maple',
  'Mocha',
  'Peanut Butter',
  'Oreo',
  'Red Velvet',
  'Cake Batter',
  'Cotton Candy',
  'Bubble Gum',
  'Stracciatella',
  'Matcha',
  'Peanut Brittle',
  "S'mores",
  'Butterscotch',
  'Ginger',
  'Lavender',
  'Earl Grey',
  'Rose',
  'Cardamom',
  'Peppermint',
  'Tiramisu',
  'Molasses',
  'Licorice'
]

const getRandomFromList = (list) => {
  const randomIndex = Math.floor(Math.random() * list.length)
  return list[randomIndex]
}

const getRandomMango = () => {
  const preparationStyle = getRandomFromList(preparationStyles)
  const flavor = getRandomFromList(flavors)
  return `${preparationStyle} ${flavor} Mango`
}

const getSomeMangos = (n) => {
  const mangos = []
  for (let i = 0; i <= n; i++) {
    mangos.push(getRandomMango())
  }
  return mangos
}

export default () => (
  <div>
    <h1>Menu</h1>
    <div className='grid'>
      {getSomeMangos(10).map((mango, i) => {
        return <article key={`${mango}-${i}`}>{mango}</article>
      })}
    </div>
  </div>
)
