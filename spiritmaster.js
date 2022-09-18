import FSItemSheet from "./module/sheets/playersheet.js";
Hooks.once("init", function(){
    console.log("test | Initializing spiritmaster");

    Items.unregisterSheet("core", playersheet);
    Items.registerSheet("mySystem", playersheet, {makeDefault: true});
});
