// 通过修改原型实现：node.function()
window.xxdom = {} // 命名空间

Node.prototype.getSiblings = function () {// 获取li的siblings 封装
  var allChildren = this.parentNode.children
  //console.log(allChildren)
  var array = { length: 0 }
  for (let i = 0; i < allChildren.length; i++) {
    //console.log(allChildren[i])
    if (allChildren[i] !== this) {
      array[array.length] = allChildren[i] // 如果用array[i]，序号则对不上
      array.length += 1
    }
  }
  //console.log(array)
  return array
}
Node.prototype.addClass = function (classes) { // 给li添加class 封装  
  //console.log(classes)
  for (let key in classes) {
    var value = classes[key]
    /*  if (value) {
          node.classList.add(key)
        } else {
          node.classList.remove(key)
        } */
    var methodName = value ? 'add' : 'remove'
    this.classList[methodName](key)
  }
}

item4.getSiblings() // 隐式指定this
item4.addClass({ red: true })
