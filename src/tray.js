var tray = new nw.Tray({ icon: 'icon.png' })
var menu = new nw.Menu()
var item = new nw.MenuItem({
  label: '退出',
  click: function () {
    tray.remove()
    tray = null
    nw.App.quit()
  }
})

menu.append(item)
tray.menu = menu
