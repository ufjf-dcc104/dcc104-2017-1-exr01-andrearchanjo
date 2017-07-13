function Sprite(){
  this.x = 192.5;
  this.y = 0;
  this.vx = 0;
  this.vy = 0;
  this.ax = 0;
  this.ay = 0;
  this.g =  Math.floor(Math.random() * (80 - 40) + 40);
  this.color = "blue";
  this.landing = false;
  this.message = "";
};

Sprite.prototype.desenharQuadrado = function (ctx) {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, 15, 15);
  ctx.strokeStyle = "black";
  ctx.strokeRect(this.x, this.y, 15, 15);
};

Sprite.prototype.mover = function (dt) {
  this.vx = this.vx + this.ax*dt;
  this.vy = this.vy + (this.ay+this.g)*dt;
  this.x = this.x + this.vx*dt;
  this.y = this.y + this.vy*dt;
};

Sprite.prototype.desenharRetangulo = function (ctx) {
  ctx.fillStyle = "gray";
  ctx.fillRect(this.x, this.y, 400, 100);
  ctx.fillStyle = "red";
  ctx.fillRect(125, 425, 150, 2);
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
  //verifico se está pousado
  if(!this.landing){
    //verifico se chegou na altura da linha de pouso(vermelha)
    if(naveAzul.y >= 410){
      this.y = 0;
      this.ax = 0;
      this.vx = 0;
      this.ay = 0;
      this.landing = true;
      //verifico es está entre a linha vermelha
      if(naveAzul.x >= 110 && naveAzul.x <= 275){
        // verifico a velocidade
        if(naveAzul.vy <= 55){
          this.x = 192.5;
          this.vy = 0;
          this.message = "Sucesso!";
          ctx.fillText(this.message, 180, 250);
          //falhou na velocidade
        } else {
            this.x = 192.5;
            this.vy = 0;
            naveAzul.message = "Falhou!";
            ctx.fillText(this.message, 180, 250);
        }
        //falhou na largura da linha de pouso 
      } else {
        this.x = 192.5;
        this.vy = 0;
        naveAzul.message = "Falhou!";
        ctx.fillText(this.message, 180, 250);
      }
    }
    //está pousado  
  } else{
    this.x = 192.5;
    this.y = 0;
    this.ax = 0;
    this.vx = 0;
    this.vy = 0;
    this.ay = 0;
    ctx.fillText(this.message, 180, 250);
  }

};


