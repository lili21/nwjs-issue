var win = nw.Window.get()
var menu = new nw.Menu()

// menu.append(new nw.MenuItem({
//   label: '',
//   click: function () {
//     history.back()
//   }
// }))
menu.append(new nw.MenuItem({
  label: 'Reload',
  click: function () {
    win.reload()
  }
}))

var copyitem = new nw.MenuItem({
  label: '复制',
  click: function () {
    try {
      document.execCommand('copy')
    } catch (e) {
      console.error(e)
    }
  }
})

var pasteitem = new nw.MenuItem({
  label: '粘贴',
  click: function () {
    try {
      document.execCommand('paste')
    } catch (e) {
      console.error(e)
    }
  }
})

menu.has = function (_item) {
  return this.items
    .filter(item => item.label === _item.label)
    .length !== 0
}

document.body.addEventListener('contextmenu', function (ev) {
  ev.preventDefault()
  var select = document.getSelection().toString()
  if (select) {
    !menu.has(copyitem) && menu.append(copyitem)
  } else {
    menu.has(copyitem) && menu.remove(copyitem)
  }

  if (editable(ev.target)) {
    !menu.has(pasteitem) && menu.append(pasteitem)
  } else {
    menu.has(pasteitem) && menu.remove(pasteitem)
  }

  if (window === window.parent) {
    menu.popup(ev.x, ev.y)
  } else {
    var iframe = window.parent.document.querySelector('iframe')
    var x = ev.x + iframe.offsetLeft
    var y = ev.y + iframe.offsetTop
    menu.popup(x, y)
  }
  return false
}, false)

function editable (ele) {
  return ele instanceof HTMLInputElement ||
    ele instanceof HTMLTextAreaElement ||
    ele.isContentEditable
}
