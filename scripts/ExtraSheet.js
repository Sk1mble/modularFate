export class ExtraSheet extends ItemSheet {
    getData() {
        const data = super.getData();
        data.type = this.item.type.toLowerCase();
        data.dataTemplate = () => `systems/ModularFate/templates/ExtraSheet.html`;

        console.log(data.actor);
        if (data.data.box_values == undefined){
            //data.actor.updateEmbeddedEntity()
        }
        console.log(this.object.actor);
        //console.log(data.data.box_values.length);

        return data;
    }

    get template (){
        return 'systems/ModularFate/templates/ExtraSheet.html';
    }
    activateListeners(html){
    }

    async _on_boxes_change(html, event){
        console.log(event.target.value)
        let num = parseInt(event.target.innerHTML);
        console.log(num);
    }
    static get defaultOptions() {
        const options = super.defaultOptions;
        options.classes = options.classes.concat(['fate', 'item']);
        options.width = 500;
        options.height = "auto";
        options.resizable = true;
        options.submitOnChange = true;
        options.title=`Extra: ${this.name}`
        return options;
    }
}