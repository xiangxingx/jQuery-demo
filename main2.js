// 新添加一个node2节点，赋予它新的属性；封装出一个函数；
window.jQuery = function (nodeOrSelector) { // 直接生成一个对象，则不能传参；
  let node
  if (typeof nodeOrSelector === 'string') {
    node = document.querySelector(nodeOrSelector)
    //console.log(node)
  } else (
    node = nodeOrSelector
  )
  return {
    getSiblings: function () {
      var allChildren = node.parentNode.children
      var array = { length: 0 }
      for (let i = 0; i < allChildren.length; i++) {
        if (allChildren[i] !== node) {
          array[array.length] = allChildren[i]
          array.length += 1
        }
      }
      return array
    },
    addClass: function (classes) {
      // console.log(node)
      classes.forEach((value) => node.classList.add(value)) // 闭包，node是外部变量；
    }
  }
}


var x = jQuery('ul > li:nth-child(2)')
x.getSiblings() // x.getSiblings得到了getSiblings的value，加上()，函数则被调用;
x.addClass(['red'])
// 这就是jQuery的原理！