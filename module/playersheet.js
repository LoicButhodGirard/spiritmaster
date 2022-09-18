export default class FSItemSheet extends PlayerSheet{
    get template(){
        return `systems/mySystem/templates/sheets/${this.item.data.type}sheet.html`;

    }
}
