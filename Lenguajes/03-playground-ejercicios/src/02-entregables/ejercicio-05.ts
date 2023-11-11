//SLOT MACHINE
class SlothMachine {
    coins:number;
    slot1:boolean;
    slot2:boolean;
    slot3:boolean;
    constructor(){
        this.coins = 0;
        this.slot1=false;
        this.slot2=false;
        this.slot3=false;
    }
    play(){
        this.coins++;
        this.slot1 = Boolean(Math.round(Math.random()));
        this.slot2 = Boolean(Math.round(Math.random()));
        this.slot3 = Boolean(Math.round(Math.random()));
        if(this.slot1 && this.slot2 && this.slot3){
            console.log(`Congratulations!!!. You won ${this.coins} coins!!`)
        }
        else{
            console.log("Good luck next time!!");
        }
    }
}

const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();

