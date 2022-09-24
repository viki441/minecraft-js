const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
context.fillStyle = '#29aa1f';

const playerImage = new Image();
const blockImage = new Image();
playerImage.src = 'pictures/minecraft-skin.jpg';
blockImage.src = 'pictures/block.png';

// TODO: Add game settings later

const gameSettings = {
    playerStep: 56
}

//position of person
const player = {
    x: canvas.clientWidth/2,
    y: canvas.clientHeight/2 
}
let blocks = [];
//draw

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37){
      player.x = player.x - gameSettings.playerStep;
    }
    else if(event.keyCode == 38){
      player.y = player.y - gameSettings.playerStep;
    }
    else if(event.keyCode == 39){
      player.x = player.x + gameSettings.playerStep;
    }
    else if(event.keyCode == 40){
      player.y = player.y + gameSettings.playerStep;
    }
    else if(event.keyCode == 32){
       const newBlock = {
          x: player.x - 56,
          y: player.y + 56
        }
        blocks.push(newBlock);
    } 
  });
  
function draw() {
    context.fillRect(0, 0,
      canvas.clientWidth,
      canvas.clientHeight);

      if(player.x <= 650 && player.x >=10 && player.y >= 10 && player.y <=550){
        blocks.forEach(b => {
          context.drawImage(blockImage, b.x, b.y);
        });
        context.drawImage(playerImage, player.x, player.y);
    }else{
      document.getElementById('demo').innerHTML = 'go back in the area!'
    }

    requestAnimationFrame(draw);
    
  }
  draw();
  