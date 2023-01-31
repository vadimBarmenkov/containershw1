export class Team {
    constructor() {
        this.members = new Set();

    }

    add(character){
        if(this.members.has(character)){
            throw new Error('уже в вашей команде');
        }else {this.members.add(character)}


    }

    addAll(...characters){
        for (let character of characters){
            this.members.add(character)
        }
    }

    toArray(){
        let result = new Array();
        for (let character of this.members){
            result.push(character);
        }
        
        return result;
    }
    
}