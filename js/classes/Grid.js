class Grid {
    constructor() {
        this.position = {
            x: 0,
            y: 0
        };
        this.velocity = {
            x: 3,
            y: 0
        };
        this.invaders =[];


        const columns = Math.floor(Math.random() * 10 + 5);
        const rows = Math.floor(Math.random() * 10 + 2);
        this.whidth = columns * 30;

        for (let i = 0; i < columns; i++) {
          for (let j = 0; j < rows; j++) {
            this.invaders.push(new Invader({
                position: {
                    x: i * 30,
                    y: j * 30
                     }
                }));
            }
        }      
    }
}
update() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.velocity.y = 0;

if(this.position.x + this.width >= canvas.whidth || this.position.x <= 0) {
    
}
