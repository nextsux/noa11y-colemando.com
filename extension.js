const Panel = imports.ui.panel;
const Main = imports.ui.main;

function enable() {
  if (Main.panel.statusArea['a11y']) {
    Main.panel.statusArea['a11y'].actor.hide();
  } 
}

function disable() {
  if (Main.panel.statusArea['a11y']) {
    Main.panel.statusArea['a11y'].actor.show();
  } 
}

function init() {
}
