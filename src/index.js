import _ from 'lodash'
import './style.css'

const component = () => {
  const elm = document.createElement('div')
  const ary = ['hello', 'webpack!', 'mod']
  elm.innerHTML = _.join(ary, ' ')
  return elm
} 
document.body.appendChild(component())
document.body.classList.add('haikei')
