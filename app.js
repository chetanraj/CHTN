const electron = require('electron');

const path = require('path');

const shell = electron.shell;

const app = electron.app;

const Tray = electron.Tray;
const Menu = electron.Menu;
const MenuItem = electron.MenuItem;

let tray;
let me = {
	name: 'Chetan Raj'
};

const menu = new Menu();

function createTrayMenu() {
	menu.append(new MenuItem({
		label: me.name,
		click() {
			shell.openExternal('http://chetanraj.in');
		}
	}));

	menu.append(new MenuItem({
		type: 'separator'
	}));

	menu.append(new MenuItem({
		label: 'GitHub',
		click() {
			shell.openExternal('http://github.com/chetanraj');
		}
	}));

	menu.append(new MenuItem({
		label: 'Medium',
		click() {
			shell.openExternal('https://medium.com/@chtn');
		}
	}));

	menu.append(new MenuItem({
		label: 'Instagram',
		click() {
			shell.openExternal('https://www.instagram.com/thecjstream/');
		}
	}));

	menu.append(new MenuItem({
		label: 'Blog',
		click() {
			shell.openExternal('http://chetanraj.in/jsessentials/');
		}
	}));

	menu.append(new MenuItem({
		type: 'separator'
	}));

	menu.append(new MenuItem({
		label: 'Quit',
		click: app.quit
	}));

	tray.setContextMenu(menu);
}

app.on('ready', () => {
	const name = 'icon-c';
	tray = new Tray(path.join(__dirname, `${name}.png`));

	createTrayMenu();
});
