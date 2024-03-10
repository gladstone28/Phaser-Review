const gameState = {};

function preload() {
  this.load.image(
    "codey",
    "https://content.codecademy.com/courses/learn-phaser/codey.png"
  );
}

function create() {
  gameState.codey = this.add.sprite(30, 50, "codey");
  gameState.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  if (gameState.cursors.down.isDown) {
    gameState.codey.y += 1;
  }
}

const config = {
  width: 400,
  height: 600,
  backgroundColor: 0xdda0dd,
  scene: {
    preload,
    create,
    update,
  },
};

const game = new Phaser.Game(config);
