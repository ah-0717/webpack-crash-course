const component = () => {
  const elm = document.createElement('div')
  const ary = ['hello', 'webpack']
  elm.innerHTML = _.join(ary, ' ')
  return elm
} 
document.body.appendChild(component())

