import * as THREE from "three";
class GameMaster extends THREE.Object3D{
    constructor(){
        super()

        this.checkpointcount = -1;
        this.CPMax = 0;

    }

    /**
     * show death screen
     */
    deathScreen(){
        const win = document.createElement("div")
        win.innerText = "YOU LOSE";     
        win.style.position = "absolute";
        win.style.top= "0px";
        win.style.width= "100%";
        win.style.height= "100%";
        win.style.textAlign= "center";
        win.style.zIndex= "100";
        win.style.display="block";
        win.style.color= "white";
        win.style.fontSize= "100px";
        win.style.backgroundColor= "black";
        document.getElementById("deathScreen").appendChild(win) 
    }

    /**
     * show win screen
     */
    winScreen(){
        const win = document.createElement("div")
        win.innerText = "YOU WIN";     
        win.style.position = "absolute";
        win.style.top= "0px";
        win.style.width= "100%";
        win.style.height= "100%";
        win.style.textAlign= "center";
        win.style.zIndex= "100";
        win.style.display="block";
        win.style.color= "white";
        win.style.fontSize= "100px";
        win.style.backgroundColor= "black";
        document.getElementById("winScreen").appendChild(win) 
    }

    /**
     * update number of checkpoints reached
     */
    updateCPCount(){
        this.checkpointcount++;

        var count = document.getElementById("count");
        count.innerText = this.checkpointcount.toString().concat("/",this.CPMax.toString())
        if(this.checkpointcount == this.CPMax) this.winScreen()
    }
}

export default GameMaster