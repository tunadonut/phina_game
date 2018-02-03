phina.globalize();

var size = 32;
var WIDTH = size * 10;
var HEIGHT = size * 15;

var ASSETS = {
  image: {
    'hiyoko': 'https://rawgit.com/tunadonut/game-kinoko/master/hiyoko.png',
    'bomb': 'effect0.png',
  },
  spritesheet: {
    'hiyoko_ss': {
      'frame': {
        'width': 32,
        'height': 32,
        'cols': 6,
        'rows': 3,
      },
      'animations': {
        'walk': {
          'frames': [0, 2],
          'next': 'walk',
          'frequency': 7,
        }
      }
    },
    'bomb_ss': {
      'frame': {
        'width': 16,
        'height': 16,
        'cols': 5,
        'rows': 1,
      },
      'animations': {
        'baan': {
          'frames': [0, 1, 2, 3, 4],
          'frequency': 10,
        }
      }
    }
  }
};
phina.define('MainScene', {
  superClass: 'DisplayScene',

  init: function(){
    this.superInit({
      width: WIDTH,
      height: HEIGHT,
    });
    this.player = Sprite('hiyoko').addChildTo(this);
    this.player.setPosition(WIDTH / 2, size);
    var anim = FrameAnimation('hiyoko_ss').attachTo(this.player);
    anim.gotoAndPlay('walk');
  },
});

phina.main(function(){
  var app = GameApp({
    startLabel: 'main',
    fps: 30,
    assets: ASSETS,
    width: WIDTH,
    height: HEIGHT,
  });
  app.run();
});
