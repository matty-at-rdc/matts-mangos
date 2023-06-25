import React from 'react'
import "./Menu.css"

const colors = {
  purple: "rgb(166, 93, 117)",
  blue: "rgb(108 163 229)",
  green: "rgb(126 229 108)",
  red: "rgb(226 98 98)",
  yellow: "rgb(255 231 127)",
}

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

const getRandomColor = () => {
  const keys = Object.keys(colors)
  const color = getRandomFromList(keys)
  const chosenColor = colors[color]
  return chosenColor
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

const clickHandler = (mango) => {
  alert(`Hey this is a fake app and you can't really purchase the "${mango}" silly!`)
}

export default () => (
  <div className='menu'>
    <h1>Menu</h1>
    <div className='grid'>
      {getSomeMangos(15).map((mango, i) => {
        return <div className='card' key={`${mango}-${i}`}>
          <div className='graphic' style={{backgroundColor: getRandomColor()}}>😋 ➕ 🥭</div>
          <div className='content'>
            <h2 className='title' onClick={() => {clickHandler(mango)}} >{mango}</h2>
            <p>This is absolutely the most wonderful <span>{mango}</span> ever made!</p>
          </div>
        </div>
      })}
    </div>
  </div>
)
