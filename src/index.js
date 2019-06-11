import _ from 'lodash'
// import { NAME, NiJou } from './utilities'
// import * as utilities from './utilities'
// import { NAME as NAME2} from './utilities'
import Lion from './utilities'

console.log(Lion.say())

const component = () => {
  const elm = document.createElement('div')
  const ary = ['hello', 'webpack!', 'mod']
  elm.innerHTML = _.join(ary, ' ')
  return elm
} 
document.body.appendChild(component())

