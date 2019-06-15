import _ from 'lodash'
import './style.css'
import logo from './logo.png'

const component = () => {
  const elm = document.createElement('div')
  const ary = ['hello', 'webpack!', 'mod']
  elm.innerHTML = _.join(ary, ' ')
  return elm
} 
document.body.appendChild(component())
document.body.classList.add('haikei')

const image = new Image()
image.src = logo
document.body.appendChild(image)
