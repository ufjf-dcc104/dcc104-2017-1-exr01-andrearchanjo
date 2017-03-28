function Sprite(){
  this.x = 192.5;
  this.y = 0;
  this.vx = 0;
  this.vy = 0;
  this.ax = 0;
  this.ay = 0;
  this.color = "blue";
};

Sprite.prototype.desenharQuadrado = function (ctx) {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, 15, 15);
  ctx.strokeStyle = "black";
  ctx.strokeRect(this.x, this.y, 15, 15);
};

Sprite.prototype.mover = function (dt) {
  this.vx = this.vx + this.ax*dt;
  this.vy = this.vy + (this.ay+60)*dt;
  this.x = this.x + this.vx*dt;
  this.y = this.y + this.vy*dt;
};

Sprite.prototype.desenharRetangulo = function (ctx) {
  ctx.fillStyle = "gray";
  ctx.fillRect(this.x, this.y, 400, 100);
  ctx.fillStyle = "red";
  ctx.fillRect(0, 425, 400, 2);
};

Sprite.prototype.colisaoLargura = function (ctx) {
  if(this.x < 0){
    this.x = 0;
    this.vx = 0;
    this.ax =0;
  }

  if(this.x > 385){
    this.x = 385;
    this.vx = 0;
    this.ax =0;
  }
};

Sprite.prototype.colisaoAltura = function (ctx) {
  if(this.y < 0){
    this.y = 0;
    this.vy = 0;
    this.ay = 0;
    this.vx = 0;
    this.ax = 0;

  }
};

Sprite.prototype.pouso = function (ctx) {
  if(naveAzul.y >= 410){
    this.y = 410;
    this.ax = 0;
    this.vx = 0;
    this.ay = 0; 
    if(naveAzul.vy <= 55){
      ctx.fillText("Sucesso!", 180, 250);
    }
    else {
      ctx.fillText("Você falhou!", 180, 250);
    }
  }
};


