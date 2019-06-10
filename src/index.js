import _ from 'lodash'

const component = () => {
  const elm = document.createElement('div')
  const ary = ['hello', 'webpack!', 'mod']
  elm.innerHTML = _.join(ary, ' ')
  return elm
} 
document.body.appendChild(component())

