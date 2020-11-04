export default function sketch(p) {
  const shapes = [
    [
      { x: 262, y: 271, z: 0 },
      { x: 194, y: 173, z: 0 },
      { x: 170, y: 48, z: 0 },
      { x: 272, y: 103, z: 0 },
      { x: 332, y: 133, z: 0 },
      { x: 379, y: 160, z: 0 },
      { x: 322, y: 300, z: 0 },
      { x: 261, y: 153, z: 0 },
    ],

    [
      { x: 289, y: 47, z: 0 },
      { x: 318, y: 58, z: 0 },
      { x: 328, y: 138, z: 0 },
      { x: 362, y: 232, z: 0 },
      { x: 423, y: 309, z: 0 },
      { x: 329, y: 391, z: 0 },
      { x: 133, y: 322, z: 0 },
      { x: 178, y: 115, z: 0 },
      { x: 246, y: 229, z: 0 },
    ],
    [
      { x: 272, y: 357, z: 0 },
      { x: 349, y: 253, z: 0 },
      { x: 322, y: 160, z: 0 },
      { x: 298, y: 101, z: 0 },
      { x: 194, y: 157, z: 0 },
      { x: 178, y: 221, z: 0 },
      { x: 210, y: 335, z: 0 },
    ],
    [
      { x: 288, y: 54, z: 0 },
      { x: 239, y: 49, z: 0 },
      { x: 168, y: 132, z: 0 },
      { x: 165, y: 170, z: 0 },
      { x: 262, y: 249, z: 0 },
      { x: 346, y: 244, z: 0 },
      { x: 345, y: 132, z: 0 },
      { x: 270, y: 147, z: 0 },
      { x: 260, y: 151, z: 0 },
    ],
    [
      { x: 448, y: 128, z: 0 },
      { x: 373, y: 176, z: 0 },
      { x: 297, y: 233, z: 0 },
      { x: 216, y: 311, z: 0 },
      { x: 174, y: 197, z: 0 },
      { x: 238, y: 47, z: 0 },
      { x: 339, y: 24, z: 0 },
      { x: 452, y: 86, z: 0 },
      { x: 302, y: 131, z: 0 },
    ],
    [
      { x: 192, y: 127, z: 0 },
      { x: 157, y: 194, z: 0 },
      { x: 193, y: 289, z: 0 },
      { x: 245, y: 307, z: 0 },
      { x: 363, y: 281, z: 0 },
      { x: 402, y: 247, z: 0 },
      { x: 392, y: 168, z: 0 },
      { x: 346, y: 145, z: 0 },
      { x: 269, y: 93, z: 0 },
      { x: 252, y: 68, z: 0 },
    ],
    [
      { x: 200, y: 165, z: 0 },
      { x: 202, y: 197, z: 0 },
      { x: 266, y: 272, z: 0 },
      { x: 278, y: 309, z: 0 },
      { x: 352, y: 244, z: 0 },
      { x: 344, y: 207, z: 0 },
      { x: 290, y: 126, z: 0 },
      { x: 286, y: 90, z: 0 },
      { x: 266, y: 193, z: 0 },
    ],
    [
      { x: 134, y: 234, z: 0 },
      { x: 156, y: 278, z: 0 },
      { x: 293, y: 336, z: 0 },
      { x: 351, y: 325, z: 0 },
      { x: 426, y: 186, z: 0 },
      { x: 418, y: 128, z: 0 },
      { x: 304, y: 70, z: 0 },
      { x: 253, y: 46, z: 0 },
      { x: 156, y: 76, z: 0 },
      { x: 139, y: 112, z: 0 },
    ],
  ];

  var points = [];
  var ultimo;

  var points2 = [];
  var ultimo2;

  var points3 = [];
  var ultimo3;

  var points4 = [];
  var ultimo4;

  function moveTo(x, y, obj) {
    let destination = p.createVector(x, y);
    destination.sub(obj.pos);
    let angle = p.atan2(destination.y, destination.x);
    obj.vel = p.createVector(p.cos(angle), p.sin(angle));
  }

  p.setup = () => {
    let a = p.createCanvas(1200, 650);
    a.parent("canvasWraper");
    p.angleMode(p.DEGREES);

    let shape1 = shapes[1];
    let shape2 = shapes[7];
    let shape3 = shapes[3];
    let shape4 = shapes[4];

    for (let i = 0; i < shape1.length - 1; i++) {
      points.push(new Point(shape1[i].x - 100, shape1[i].y - 50, shape1[shape1.length - 1].x - 100, shape1[shape1.length - 1].y - 50, 1, 1));
    }
    ultimo = shape1[shape1.length - 1];

    for (let i = 0; i < shape2.length - 1; i++) {
      points2.push(new Point(shape2[i].x + 180, shape2[i].y, shape2[shape2.length - 1].x + 180, shape2[shape2.length - 1].y + 180, 1, 1));
    }
    ultimo2 = shape2[shape2.length - 1];

    for (let i = 0; i < shape3.length - 1; i++) {
      points3.push(new Point(shape3[i].x - 100, shape3[i].y + 300, shape3[shape3.length - 1].x - 100, shape3[shape3.length - 1].y + 300, -0.1, 0.2));
    }
    ultimo3 = shape3[shape3.length - 1];

    for (let i = 0; i < shape4.length - 1; i++) {
      points4.push(new Point(shape4[i].x + 180, shape4[i].y + 400, shape4[shape4.length - 1].x + 180, shape4[shape4.length - 1].y + 400, -0.7, -0.3));
    }
    ultimo4 = shape4[shape4.length - 1];
  };

  p.draw = () => {
    p.background(255, 249, 215);

    p.fill(255, 249, 215);
    p.noStroke();
    p.beginShape();
    for (let i = 0; i < points.length; i++) {
      points[i].show();
      points[i].update();
      moveTo(ultimo.x, ultimo.y, points[i]);
    }
    p.endShape(p.CLOSE);

    p.fill(228, 157, 127);
    p.noStroke();
    p.beginShape();
    for (let i = 0; i < points2.length; i++) {
      points2[i].show();
      points2[i].update();
      moveTo(ultimo2.x, ultimo2.y, points2[i]);
    }
    p.endShape(p.CLOSE);

    p.fill(121, 76, 45);
    p.noStroke();
    p.beginShape();
    for (let i = 0; i < points3.length; i++) {
      points3[i].show();
      points3[i].update();
      moveTo(ultimo3.x, ultimo3.y, points3[i]);
    }
    p.endShape(p.CLOSE);

    p.fill(236, 167, 102);
    p.noStroke();
    p.beginShape();
    for (let i = 0; i < points4.length; i++) {
      points4[i].show();
      points4[i].update();
      moveTo(ultimo4.x, ultimo4.y, points4[i]);
    }
    p.endShape(p.CLOSE);
  };

  class Point {
    constructor(x, y, centerX, centerY, desX, desY) {
      this.center = p.createVector(centerX, centerY);
      this.opos = p.createVector(x, y);
      this.pos = p.createVector(x, y);
      this.vel = p.createVector();
      this.stopPos = p.createVector();
      this.min = 10;
      this.max = 30;
      this.randConstrain1 = p.random(this.min, this.max);
      this.randConstrain2 = p.random(this.min, this.max);
      this.randConstrain3 = p.random(this.min, this.max);
      this.randConstrain4 = p.random(this.min, this.max);
      this.dir = false;

      this.desX = desX;
      this.desY = desY;
      this.dirdesX = false;
      this.dirdesY = false;
    }

    show() {
      p.curveVertex(this.pos.x, this.pos.y);
    }

    update() {
      if (this.dir) {
        this.vel.mult(-1);
      }
      this.vel.mult(0.2);
      this.pos.add(this.vel);

      //se mover

      if (this.dirdesX) {
        this.pos.x -= this.desX;
        this.opos.x -= this.desX;
        this.center.x -= this.desX;
      } else {
        this.pos.x += this.desX;
        this.opos.x += this.desX;
        this.center.x += this.desX;
      }
      if (this.dirdesY) {
        this.pos.y -= this.desY;
        this.opos.y -= this.desY;
        this.center.y -= this.desY;
      } else {
        this.pos.y += this.desY;
        this.opos.y += this.desY;
        this.center.y += this.desY;
      }

      //adicionar outro constrain para laterais
      this.constrainCentro();
      this.constrain();
    }

    constrainCentro() {
      if (this.center.x < 0 || this.center.x > p.width) {
        this.dirdesX = !this.dirdesX;
      }
      if (this.center.y < 0 || this.center.y > p.height) {
        this.dirdesY = !this.dirdesY;
      }
    }

    constrain() {
      if (this.pos.x < this.opos.x - this.randConstrain1 || this.pos.x > this.opos.x + this.randConstrain2) {
        this.dir = !this.dir;
      }
      if (this.pos.y < this.opos.y - this.randConstrain3 || this.pos.y > this.opos.y + this.randConstrain4) {
        this.dir = !this.dir;
      }
    }
  }
}
