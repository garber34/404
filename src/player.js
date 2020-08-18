import {init, Sprite, SpriteSheet} from 'kontra';
init('game');

let image = new Image();
image.src = '../assets/img/rpg_sprite_walk.png';


  let spriteSheet = SpriteSheet({
    image: image,
    frameWidth: 24,
    frameHeight: 32,
    animations: {
      // create a named animation: walk
      walkDown: {
        frames: '0..7',  // frames 0 through 9
        frameRate: 30
      },
      walkUp: {
        frames: '8..15',  // frames 0 through 9
        frameRate: 30
      },
      walkLeft: {
        frames: '16..23',  // frames 0 through 9
        frameRate: 30
      },
      walkRight: {
        frames: '24..31',  // frames 0 through 9
        frameRate: 30
      },
      idle: {
        frames: 0,  // frames 0 through 9
        loop:false
      }
    }
  });

  let player = Sprite({
    x: 0,        // starting x,y position of the sprite
    y: 0,
    animations:spriteSheet.animations
  });

  export default player;