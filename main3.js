window.jQuery = function (nodeOrSelector) {
  let nodes = {}
  if (typeof nodeOrSelector === 'string') {
    let temp = document.querySelectorAll(nodeOrSelector)
    for (let i = 0; i < temp.length; i++) {
      nodes[i] = temp[i]
    }
    nodes.length = temp.length

  } else if (nodeOrSelector instanceof Node) {
    nodes = { 0: nodeOrSelector, length: 1 } // 确保返回结果的一致性；
  }

  nodes.addClass = function (classes) {
    classes.forEach((value) => {
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].classList.add(value)
      }
    })
  }

  /*   nodes.getText = function () {
      let texts = []
      for (let i = 0; i < nodes.length; i++) {
        texts.push(nodes[i].textContent)
      }
      return texts
    }
  
    nodes.setText = function (text) {
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].textContent = text
      }
    } */

  nodes.text = function (text) {
    if (text === undefined) {
      let texts = []
      for (let i = 0; i < nodes.length; i++) {
        texts.push(nodes[i].textContent)
      }
      return texts
    } else {
      let texts = []
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].textContent = text
      }
    }
  }
  return nodes
}

var x = jQuery('ul > li')
x.addClass(['red'])
console.log(x)

console.log(x.text('x'))
