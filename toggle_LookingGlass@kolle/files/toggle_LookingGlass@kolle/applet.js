const Lang = imports.lang;
const Applet = imports.ui.applet;
const GLib = imports.gi.GLib;
const Gettext = imports.gettext.domain('cinnamon-applets');
const _ = Gettext.gettext;
const Main = imports.ui.main;

function MyApplet(orientation) {
    this._init(orientation);
}

MyApplet.prototype = {
    __proto__: Applet.IconApplet.prototype,

    _init: function(orientation) {
        Applet.IconApplet.prototype._init.call(this, orientation);

        try {
            this.set_applet_icon_name("logviewer");
            this.set_applet_tooltip(_("Click here to toggle LookingGlass"));
        }
        catch (e) {
            global.logError(e);
        }
     },

    on_applet_clicked: function(event) {   
     
	Main.createLookingGlass().toggle();
    }
};

function main(metadata, orientation) {
    let myApplet = new MyApplet(orientation);
    return myApplet;
}
