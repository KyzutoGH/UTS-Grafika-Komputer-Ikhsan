function setup() {
  createCanvas(640, 480);
}

function draw() {
  background("#87CEEB");
  
  // Matahari
  fill("#FFD700");
  noStroke();
  circle(330, 210, 200);
  
  // Gunung Satu
  fill("#6F4117");
  noStroke();
  gunung(0, 300, 150, 100, 400, 300);
  
  // Gunung Dua
  fill("#391D00");
  noStroke();
  gunung(300, 300, 500, 100, 800, 300);
  
  // Tanah
  fill("#9B7653");
  noStroke();
  rect(0, 300, width, 640);
  
  // Jalan Raya
  fill("#606F72");
  gunung(300, 300, 0, 640, 500, 640);
  
  //Burung Merpati
  textSize(25);
  text("🕊️",100,100);
  text("🕊️",130,80);
  text("🕊️",160,110);
  text("🕊️",180,70);
  text("🕊️",200,120);
  text("🕊️",220,80);
}

function gunung(x1, y1, x2, y2, x3, y3) {
  triangle(x1, y1, x2, y2, x3, y3);
}