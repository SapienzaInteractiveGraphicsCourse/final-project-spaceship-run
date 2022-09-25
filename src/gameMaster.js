import * as THREE from "three";
class GameMaster extends THREE.Object3D{
    constructor(game){
        super()
        this.game = game
        this.checkpointcount = -1;
        this.CPMax = 0;
        //this.window.startGame = startGame
        this.stopGame = true
 

    }
    // Function to toggle between screens
     toggleScreen(id,toggle){
        let element = document.getElementById(id)
        let display = (toggle) ? 'block' : 'none'
        // canvas of the renderer
        if (element == null)
        {
            this.game.renderer.domElement.style.display = display
        }
        else element.style.display = display
    }

    gameScreen(difficulty){
        this.toggleScreen('deathScreen', false)
        this.toggleScreen('initialScreen', false)
        this.toggleScreen('winScreen', false)
        this.toggleScreen('canvas', true)
        this.game.init(difficulty, this)
        this.game.animate(0);
    }


    loseScreen(){
        this.toggleScreen('initialScreen', false)
        this.toggleScreen('canvas', false)
        this.toggleScreen('deathScreen', true)
        clearInterval(this.game.animate)
        this.stopGame=false
    }

    /**
     * show win screen
     */
    winScreen(){
        this.toggleScreen('initialScreen', false)
        this.toggleScreen('canvas', false)
        this.toggleScreen('deathScreen', false)
        this.toggleScreen('winScreen', true)
        clearInterval(this.game.animate)
        this.stopGame = false
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
