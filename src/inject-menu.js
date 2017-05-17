var win = nw.Window.get()
var menu = new nw.Menu()

menu.append(new nw.MenuItem({
  label: 'Reload',
  click: function () {
    win.reload()
  }
}))

document.body.addEventListener('contextmenu', function (ev) {
  ev.preventDefault()

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
