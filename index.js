var {app, BrowserWindow} = require('electron')



function createWindow () {
  
	mainWindow = new BrowserWindow({width: 800, height: 600})
	mainWindow.loadFile('index.html')

	mainWindow.on('closed', () => mainWindow = null)
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
	app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
	createWindow()
  }
})


