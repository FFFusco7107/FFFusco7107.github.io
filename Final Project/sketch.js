// Geometry Dash Capstone
// Lucas F.
// Dec 2 2025

let player;
let playerState;
let platform;
let level = [];
let levelSpeed = 9;
let mySound;
let gameStart = false;
let s = 45;
let portalBuffer = -1
let pixelFont;
let gameWon = false;
let levelEndX;

// back button
let backX = 20;
let backY = 20;
let backW = 90;
let backH = 40;

async function loadMusic(){
  mySound = await loadSound('assets/1-01. Stereo Madness.mp3');
}

function preload(){
  pixelFont = loadFont("assets/PressStart2P-Regular.ttf");
}

function setup() { 
  createCanvas(windowWidth,windowHeight);
  // frameRate(10);
  loadMusic();
  player = new Cube(width*0.2,height*0.7, 45);
  playerState = 0; // 0-cube   1-ship
  initLevel();

  
}

function restartSong(){
  mySound.stop();
  mySound.play();
}

function initLevel(){
  level=[];
  let g = height*0.7; // ground height
  let s = 45; // block size
  // level.push(new box(600,height*0.7 - 45, 800));

  // good
  level.push(new spike(1060,g,0,0));
  level.push(new spike( s*38,g, s/2,0));
  level.push(new spike( s*39,g, 0,0));
  level.push(new spike( s*55,g, 0,0));
  level.push(new spike( s*56,g, 0,0));

  // goo0
  level.push(new box(s*57,g - s, s,s));
  level.push(new box(s*61,g - s, s,s));
  level.push(new box(s*61,g - s*2, s,s));
  level.push(new box(s*65,g - s, s,s));
  level.push(new box(s*65,g - s*2, s,s));
  level.push(new box(s*65,g - s*3, s,s));

  //good
  level.push(new spike( s*94,g, 0,0));
  background(172,2,201);
  level.push(new box(s*100,g - s, s*8,s));
  level.push(new spike( s*108,g, s/2,0));
  level.push(new spike( s*109,g, s/2,0));
  level.push(new spike( s*110,g, s/2,0));

  // good
  level.push(new box(s*111,g - s, s*10,s));
  level.push(new spike(s*115 + (4/9),g - s, 0,0));
  level.push(new spike( s*121,g, s/2,0));
  level.push(new spike( s*122,g, s/2,0));
  level.push(new spike( s*123,g, s/2,0));

  // good
  level.push(new box(s*124,g - s*2, s*10,s*10));
  level.push(new spike(s*129,g - s*2, 0,0));
  level.push(new box(s*137,g - s*3, s,s/2));
  level.push(new box(s*141,g - s*4, s,s/2));
  level.push(new box(s*145,g - s*5, s,s/2));
  level.push(new box(s*149,g - s*6, s,s/2));
  level.push(new box(s*153,g - s*7, s,s/2));

  // good
  level.push(new box(s*157,g - s*6, s,s));
  level.push(new box(s*158,g - s*6, s,s));
  level.push(new box(s*159,g - s*6, s*20,s*20));
  level.push(new spike(s*164,g - s*6, 0,0));
  level.push(new spike(s*165,g - s*6, 0,0));
  level.push(new spike(s*166,g - s*6, 0,0));
  level.push(new spike(s*167,g - s*6, 0,0));

  // good
  level.push(new box(s*165,g - s*8, s,s/2));
  level.push(new box(s*166,g - s*8, s,s/2));
  level.push(new spike(s*172,g - s*6, 0,0));
  level.push(new spike(s*173,g - s*6, 0,0));
  level.push(new spike(s*174,g - s*6, 0,0));
  level.push(new spike(s*175,g - s*6, 0,0));

  // good
  level.push(new box(s*173,g - s*8, s,s/2));
  level.push(new box(s*174,g - s*8, s,s/2));
  level.push(new box(s*179,g - s*5, s*10,s*10));
  level.push(new spike(s*182,g - s*7, 0,0));
  level.push(new spike(s*183,g - s*7, 0,0));
  level.push(new spike(s*184,g - s*7, 0,0));
  level.push(new spike(s*185,g - s*7, 0,0));

  // good
  level.push(new box(s*189,g - s*6, s*5,s*10));
  level.push(new spike(s*193,g - s*6, 0,0));
  level.push(new box(s*194,g - s*5, s*6,s*10));
  level.push(new spike(s*194,g - s*5, 0,0));
  level.push(new box(s*200,g - s*5, s*4,s));
  level.push(new box(s*206,g - s*5, s*4,s/2));

  // good
  level.push(new spike(s*209,g - s*5, 0,0));
  level.push(new box(s*211,g - s*4, s*7,s/2));
  level.push(new spike(s*217,g - s*4, 0,0));
  level.push(new box(s*219,g - s*3, s*5,s/2));
  level.push(new box(s*226,g - s*4, s,s/2));
  level.push(new box(s*230,g - s*5, s,s/2));
  level.push(new box(s*234,g - s*6, s,s/2));

  // good
  level.push(new box(s*238,g - s*7, s,s/2));
  level.push(new box(s*242,g - s*8, s,s/2));
  level.push(new box(s*246,g - s*9, s,s/2));
  level.push(new box(s*250,g - s*10, s,s/2));
  level.push(new spike(s*250,g - s*10, 0,0));

  //good
  level.push(new box(s*249,g - s*4, s*7,s));
  level.push(new box(s*256,g - s*4, s*30,s*10));
  level.push(new box(s*256,g - s*18, s*5,s*11));
  level.push(new box(s*261,g - s*17, s*7,s*11));
  level.push(new box(s*268,g - s*17, s*7,s*11));
  level.push(new box(s*275,g - s*18, s*11,s*11));

  level.push(new box(s*275,g - s*18, s*11,s*11));
  level.push(new box(s*319,g - s*11, s,s*3));
  level.push(new portal(s*286,g - s*6.7)); // s*286 s*6.7
  // test portals
  // level.push(new portal(s*10,g - s*3));
  // level.push(new portal(s*20,g - s*3));
  level.push(new box(s*334,g - s*11, s,s));
  level.push(new box(s*334,g - s, s,s));

  level.push(new spike(s*335,g - s*10, 0,1));
  level.push(new spike(s*336,g - s*10, 0,1));
  level.push(new spike(s*337,g - s*10, 0,1));
  level.push(new spike(s*338,g - s*10, 0,1));
  level.push(new spike(s*339,g - s*10, 0,1));
  level.push(new spike(s*340,g - s*10, 0,1));
  level.push(new spike(s*341,g - s*10, 0,1));
  level.push(new spike(s*342,g - s*10, 0,1));
  level.push(new spike(s*343,g - s*10, 0,1));
  level.push(new spike(s*344,g - s*10, 0,1));
  level.push(new spike(s*345,g - s*10, 0,1));
  level.push(new spike(s*346,g - s*10, 0,1));
  level.push(new spike(s*347,g - s*10, 0,1));
  level.push(new spike(s*348,g - s*10, 0,1));

  level.push(new spike(s*335,g, 0,0));
  level.push(new spike(s*336,g, 0,0));
  level.push(new spike(s*337,g, 0,0));
  level.push(new spike(s*338,g, 0,0));
  level.push(new spike(s*339,g, 0,0));
  level.push(new spike(s*340,g, 0,0));
  level.push(new spike(s*341,g, 0,0));
  level.push(new spike(s*342,g, 0,0));
  level.push(new spike(s*343,g, 0,0));
  level.push(new spike(s*344,g, 0,0));
  level.push(new spike(s*345,g, 0,0));
  level.push(new spike(s*346,g, 0,0));
  level.push(new spike(s*347,g, 0,0));
  level.push(new spike(s*348,g, 0,0));

  level.push(new box(s*349,g - s*11, s,s));
  level.push(new box(s*349,g - s, s,s));
  level.push(new box(s*362,g - s*2, s,s*2));
  level.push(new spike(s*363,g, 0,0));
  level.push(new box(s*374,g - s*11, s,s*3));
  level.push(new spike(s*375,g - s*10, 0,1));
  level.push(new spike(s*376,g - s*10, 0,1));
  level.push(new spike(s*377,g - s*10, 0,1));
  level.push(new spike(s*378,g - s*10, 0,1));
  level.push(new box(s*383,g - s, s,s));
  level.push(new spike(s*384,g, 0,0));
  level.push(new spike(s*385,g, 0,0));
  level.push(new spike(s*386,g, 0,0));
  level.push(new spike(s*387,g, 0,0));
  level.push(new spike(s*388,g, 0,0));
  level.push(new box(s*389,g - s*2, s,s*2));
  level.push(new spike(s*390,g, 0,0));
  level.push(new spike(s*391,g, 0,0));
  level.push(new spike(s*392,g, 0,0));
  level.push(new spike(s*393,g, 0,0));
  level.push(new spike(s*394,g, 0,0));
  level.push(new box(s*395,g - s*3, s,s*3));
  level.push(new spike(s*401,g - s*10, 0,1));
  level.push(new spike(s*402,g - s*10, 0,1));
  level.push(new spike(s*403,g - s*10, 0,1));
  level.push(new spike(s*404,g - s*10, 0,1));
  level.push(new spike(s*405,g - s*10, 0,1));
  level.push(new spike(s*406,g - s*10, 0,1));
  level.push(new box(s*407,g - s*11, s,s*4));
  level.push(new spike(s*408,g - s*10, 0,1));
  level.push(new spike(s*409,g - s*10, 0,1));
  level.push(new spike(s*410,g - s*10, 0,1));
  level.push(new spike(s*411,g - s*10, 0,1));
  level.push(new spike(s*412,g - s*10, 0,1));
  level.push(new spike(s*413,g - s*10, 0,1));
  level.push(new spike(s*414,g - s*10, 0,1));
  level.push(new spike(s*415,g - s*10, 0,1));
  level.push(new spike(s*416,g - s*10, 0,1));
  level.push(new spike(s*417,g - s*10, 0,1));
  level.push(new spike(s*418,g - s*10, 0,1));
  level.push(new spike(s*419,g - s*10, 0,1));
  level.push(new spike(s*420,g - s*10, 0,1));
  // level.push(new box(s*421,g - s*11, s*5,s*3));
  // level.push(new box(s*426,g - s*11, s*4,s*3));
  // level.push(new box(s*430,g - s*11, s*5,s*3));
  level.push(new box(s*421,g - s*3, s*14,s*3));
  level.push(new box(s*435,g - s*11, s,s*5));
  level.push(new portal(s*435,g - s*5.7));
  level.push(new box(s*435,g - s*2, s*15,s*2));
  level.push(new spike(s*451,g, 0,0));
  level.push(new spike(s*452,g, 0,0));
  level.push(new spike(s*453,g, 0,0));

  level.push(new box(s*454,g - s*3, s,s*3));
  level.push(new spike(s*455,g, 0,0));
  level.push(new spike(s*456,g, 0,0));
  level.push(new spike(s*457,g, 0,0));
  level.push(new box(s*457,g - s*4, s,s*4));
  level.push(new spike(s*459,g, 0,0));
  level.push(new spike(s*460,g, 0,0));
  level.push(new spike(s*461,g, 0,0));
  level.push(new box(s*462,g - s*5, s,s*5));
  level.push(new spike(s*463,g, 0,0));
  level.push(new spike(s*464,g, 0,0));
  level.push(new spike(s*465,g, 0,0));
  level.push(new box(s*466,g - s*6, s,s*6));
  level.push(new box(s*467,g - s*2, s*7,s*2));
  level.push(new spike(s*475,g, 0,0));
  level.push(new spike(s*476,g, 0,0));
  level.push(new spike(s*477,g, 0,0));
  level.push(new box(s*478,g - s*3, s,s*3));

  level.push(new spike(s*479,g, 0,0));
  level.push(new spike(s*480,g, 0,0));
  level.push(new spike(s*481,g, 0,0));
  level.push(new box(s*482,g - s*4, s,s*4));

  level.push(new spike(s*483,g, 0,0));
  level.push(new spike(s*484,g, 0,0));
  level.push(new spike(s*485,g, 0,0));
  level.push(new box(s*486,g - s*5, s,s*5));

  level.push(new spike(s*487,g, 0,0));
  level.push(new spike(s*488,g, 0,0));
  level.push(new spike(s*489,g, 0,0));
  level.push(new box(s*490,g - s*6, s,s*6));

  level.push(new spike(s*491,g, 0,0));
  level.push(new spike(s*492,g, 0,0));
  level.push(new spike(s*493,g, 0,0));
  level.push(new box(s*494,g - s*7, s,s*7));

  level.push(new spike(s*495,g, 0,0));
  level.push(new spike(s*496,g, 0,0));
  level.push(new spike(s*497,g, 0,0));
  level.push(new box(s*498,g - s*8, s,s*8));

  level.push(new spike(s*499,g, 0,0));
  level.push(new spike(s*500,g, 0,0));
  level.push(new spike(s*501,g, 0,0));
  level.push(new box(s*502,g - s*9, s,s*9));

  level.push(new box(s*505,g - s*8, s,s/2));
  level.push(new box(s*506,g - s*8, s,s/2));
  level.push(new box(s*508,g - s*7, s,s/2));
  level.push(new box(s*508,g - s*7, s,s/2));
  level.push(new box(s*510,g - s*6, s,s/2));
  level.push(new box(s*511,g - s*6, s,s/2));
  level.push(new box(s*512,g - s*6, s,s/2));
  level.push(new box(s*516,g - s*5, s,s/2));
  level.push(new box(s*517,g - s*5, s,s/2));
  
  level.push(new box(s*519,g - s*4, s*3,s*4));
  level.push(new spike(s*520,g, 0,0));
  level.push(new spike(s*521,g, 0,0));
  level.push(new spike(s*522,g, 0,0));
  level.push(new box(s*523,g - s*3, s*3,s*3));
  level.push(new box(s*526,g - s*3, s,s/2));
  level.push(new box(s*527,g - s*3, s,s/2));
  level.push(new box(s*529,g - s*2, s,s/2));
  level.push(new box(s*531,g - s, s,s/2));

  level.push(new spike(s*526,g, 0,0));
  level.push(new spike(s*527,g, 0,0));
  level.push(new spike(s*528,g, 0,0));
  level.push(new spike(s*529,g, 0,0));

  level.push(new spike(s*538,g, 0,0));
  level.push(new spike(s*539,g, 0,0));
   level.push(new box(s*540,g - s, s,s));

  level.push(new spike(s*541,g, s/2,0));
  level.push(new spike(s*542,g, s/2,0));
  level.push(new spike(s*543,g, s/2,0));
  level.push(new spike(s*544,g, s/2,0));
  level.push(new spike(s*545,g, s/2,0));

  level.push(new box(s*543,g - s*2, s,s/2));
  level.push(new box(s*544,g - s*2, s,s/2));

  level.push(new box(s*546,g - s, s*3,s));

  level.push(new spike(s*549,g, s/2,0));
  level.push(new spike(s*550,g, s/2,0));
  level.push(new spike(s*551,g, s/2,0));
  level.push(new spike(s*552,g, s/2,0));
  level.push(new spike(s*553,g, s/2,0));
  level.push(new spike(s*554,g, s/2,0));
  level.push(new spike(s*555,g, s/2,0));
  level.push(new spike(s*556,g, s/2,0));
  level.push(new spike(s*557,g, s/2,0));

  level.push(new box(s*551,g - s*2, s,s/2));
  level.push(new box(s*552,g - s*2, s,s/2));
  level.push(new box(s*555,g - s*3, s,s/2));
  level.push(new box(s*556,g - s*3, s,s/2));
  level.push(new box(s*558,g - s, s*3,s));
  level.push(new spike(s*561,g, 0,0));
  level.push(new spike(s*562,g, 0,0));

  level.push(new box(s*569,g - s*6, s*2,s));
  level.push(new spike(s*569,g, 0,0));
  level.push(new spike(s*570,g, 0,0));
  level.push(new spike(s*569,g - s*4, 0,1));
  level.push(new spike(s*570,g - s*4, 0,1));

  // triple spike
  level.push(new box(s*577,g - s*6, s*3,s));
  level.push(new spike(s*577,g, 0,0));
  level.push(new spike(s*578,g, 0,0));
  level.push(new spike(s*579,g, 0,0));
  level.push(new spike(s*577,g - s*4, 0,1));
  level.push(new spike(s*578,g - s*4, 0,1));
  level.push(new spike(s*579,g - s*4, 0,1));

  level.push(new box(s*585,g - s*6, s,s));
  level.push(new spike(s*585,g, 0,0));
  level.push(new spike(s*585,g - s*4, 0,1));

  level.push(new box(s*592,g - s*6, s,s));
  level.push(new spike(s*592,g, 0,0));
  level.push(new spike(s*592,g - s*4, 0,1));

  level.push(new spike(s*600,g, 0,0));
  level.push(new spike(s*601,g, 0,0));
  level.push(new box(s*602,g - s, s,s));
  level.push(new box(s*606,g - s*2, s,s*2));
  level.push(new box(s*610,g - s*3, s,s*3));
  level.push(new box(s*614,g - s*4, s,s*4));
  level.push(new box(s*617,g - s*3, s,s/2));
  level.push(new box(s*619,g - s*2, s,s/2));
  level.push(new box(s*621,g - s*1, s,s/2));

  level.push(new spike(s*627,g, 0,0));
  level.push(new spike(s*628,g, 0,0));
  level.push(new spike(s*634,g - s*2, 0,1));
  level.push(new spike(s*635,g - s*2, 0,1));
  level.push(new spike(s*636,g - s*2, 0,1));
  level.push(new spike(s*637,g - s*2, 0,1));
  level.push(new box(s*634,g - s*4, s,s));
  level.push(new box(s*635,g - s*4, s,s));
  level.push(new box(s*636,g - s*4, s,s));
  level.push(new box(s*637,g - s*4, s,s));

  level.push(new spike(s*642,g, 0,0));
  level.push(new box(s*643,g - s, s,s));

  level.push(new box(s*653,g - s, s*4,s/2));
  level.push(new box(s*659,g - s*2, s,s/2));
  level.push(new box(s*663,g - s*3, s,s/2));
  level.push(new box(s*667,g - s*4, s,s/2));
  level.push(new box(s*671,g - s*5, s*4,s/2));

  level.push(new box(s*676,g - s*4, s,s));
  level.push(new box(s*678,g - s*3, s,s));
  level.push(new box(s*680,g - s*2, s,s));
  level.push(new box(s*682,g - s, s,s));
  level.push(new box(s*683,g - s, s,s));

  level.push(new box(s*676,g - s*7, s,s));
  level.push(new box(s*678,g - s*6, s,s));
  level.push(new box(s*680,g - s*5, s,s));
  level.push(new box(s*682,g - s*4, s,s));

  level.push(new box(s*686,g - s*2, s*2,s/2));
  level.push(new box(s*689,g - s*2, s*3,s/2));
  level.push(new spike(s*689,g - s*2, 0,0));

  level.push(new box(s*694,g - s*3, s*4,s/2));
  level.push(new box(s*699,g - s*2, s,s/2));
  level.push(new box(s*701,g - s, s*3,s/2));
  level.push(new spike(s*704,g, 0,0));
  level.push(new spike(s*705,g, 0,0));

  // triple spike
  level.push(new box(s*714,g - s*6, s*3,s));
  level.push(new spike(s*714,g, 0,0));
  level.push(new spike(s*715,g, 0,0));
  level.push(new spike(s*716,g, 0,0));
  level.push(new spike(s*714,g - s*4, 0,1));
  level.push(new spike(s*715,g - s*4, 0,1));
  level.push(new spike(s*716,g - s*4, 0,1));

  level.push(new box(s*728,g - s, s,s));
  level.push(new box(s*729,g - s, s*2,s/2));
  level.push(new box(s*734,g - s, s,s/2));
  level.push(new box(s*738,g - s, s*2,s/2));
  level.push(new box(s*740,g - s, s,s));
  level.push(new box(s*741,g - s*2, s,s*2));
  level.push(new box(s*742,g - s*2, s*2,s/2));
  level.push(new box(s*746,g - s*3, s*2,s/2));
  level.push(new box(s*749,g - s*2, s,s/2));
  level.push(new box(s*751,g - s, s*3,s/2));
  level.push(new box(s*756,g - s*2, s*2,s/2));

  level.push(new spike(s*759,g - s*2, 0,0));
  level.push(new box(s*759,g - s*2, s,s/2));
  level.push(new box(s*761,g - s*2, s*4,s/2));
  level.push(new spike(s*766,g - s*2, 0,0));
  level.push(new box(s*766,g - s*2, s,s/2));

  level.push(new box(s*768,g - s*2, s*2,s/2));
  level.push(new box(s*772,g - s*3, s*3,s/2));
  level.push(new spike(s*774,g - s*3, 0,0));
  level.push(new box(s*776,g - s*2, s*3,s/2));

  level.push(new box(s*780,g - s*3, s,s*3));
  level.push(new box(s*780,g - s*10, s,s*3));
  level.push(new portal(s*780,g - s*5.7));

  // last ship part
  level.push(new box(s*791,g - s, s,s));
  level.push(new box(s*792,g - s*2, s,s));
  level.push(new box(s*793,g - s*3, s*6,s));
  level.push(new box(s*799,g - s*2, s,s));
  level.push(new box(s*800,g - s, s,s));

  level.push(new box(s*791,g - s*11, s,s));
  level.push(new box(s*792,g - s*10, s,s));
  level.push(new box(s*793,g - s*9, s*6,s));
  level.push(new box(s*799,g - s*10, s,s));
  level.push(new box(s*800,g - s*11, s,s));

  level.push(new box(s*808,g - s, s,s));
  level.push(new box(s*809,g - s*2, s,s));
  level.push(new box(s*810,g - s*3, s*6,s));
  level.push(new box(s*816,g - s*2, s,s));
  level.push(new box(s*817,g - s, s,s));

  level.push(new box(s*808,g - s*11, s,s));
  level.push(new box(s*809,g - s*10, s,s));
  level.push(new box(s*810,g - s*9, s*6,s));
  level.push(new box(s*816,g - s*10, s,s));
  level.push(new box(s*817,g - s*11, s,s));

  level.push(new box(s*825,g - s*4, s*3,s*4));
  level.push(new box(s*841,g - s*11, s*3,s*4));

  level.push(new box(s*850,g - s*3, s*12,s*3));

  levelEndX = level[level.length - 1].x;
}



function draw() {
  background(0,150,255); 
  if (gameStart){
  // platform.display();
  player.display(); 
  player.move();
  drawProgressBar();
  for(let o of level){ 
    o.display();
    o.slide();  
  }  
  // spacebar -> jump
  if(keyIsDown(32)){
    player.jump();
    console.log("pressed");
  }  
  // ground 
  fill(0);
  rect(0, height*0.7, width, height);

  portalBuffer--;

  let lastObj = level[level.length - 1];
  if(lastObj.x + lastObj.s < 0 && !gameWon){
    winlevel();
  }
  drawBackButton();
    
  }

  else{
    if(gameWon){
      background(0);
      textAlign(CENTER);
      textSize(60);
      fill("yellow");
      text("LEVEL COMPLETE!", width/2, height/2);
      textSize(28);
      fill("white");
      text("Nice job!", width/2, height/2 + 60);
      textSize(24);
      text("Press SPACE to play again", width/2, height/2 + 120);
      drawBackButton();
      return;
    }
    background(0,100,255, 200);

    //reset text 
    textAlign(CENTER,CORNER);
    textFont(pixelFont);
    strokeWeight(1);
    stroke(0);
    fill(255);
    
    // Main title
    textSize(60);
    stroke(255);
    strokeWeight(10);
    noFill();
    text("GEOMETRY DASH!", width/2, height/2 - 100);
    noFill();
    stroke(0);
    strokeWeight(6);
    text("GEOMETRY DASH!", width/2, height/2 - 100);
    noStroke();
    fill("lime");
    text("GEOMETRY DASH!", width/2, height/2 - 100);

    // space to start
    textSize(40);
    noFill();
    stroke(0);
    strokeWeight(6);
    text("space to start", width/2, height/2);
    noStroke();
    fill("lime");
    text("space to start", width/2, height/2);

    // space Key
    rectMode(CENTER);
    fill(0);
    rect(width/2, height/2 + 40, 300, 50);
    fill(30);
    noStroke();
    rect(width/2 + 3, height/2 + 40, 250, 30)
    fill(255);
    textSize(20);
    text("SPACE", width/2 + 3, height/2 + 50)
    stroke(1);
    rectMode(CORNER);
    
  }
  
}

function keyPressed(){
  if(gameWon){
    gameWon = false;
    initLevel();
    player = new Cube(width*0.2,height*0.7,45);
    mySound.play();
    gameStart = true;
    return;
  }
  if(!gameStart){
    gameStart = true;
    mySound.play();
  }
}

function drawProgressBar(){
  let lastObj = level[level.length - 1];
  let traveled = levelEndX - lastObj.x;
  let total = levelEndX - (-lastObj.s);

  let percent = constrain((traveled / total) * 100, 0, 100);

  // draw bar
  noStroke();
  fill(0, 0, 0, 150);
  rect(width*0.25, 20, width*0.5, 20, 10);

  fill(0,255,0);
  rect(width*0.25, 20, (width*0.5) * (percent/100), 20, 10);

  // draw percent
  fill(255);
  textSize(14);
  textAlign(CENTER, CENTER);
  text(int(percent) + "%", width/2, 30);
}

function winlevel(){
  gameWon = true;
  gameStart = false;
  mySound.stop();
}

function mousePressed(){
  // only when button is visible
  if(gameStart || gameWon){
    if(mouseX > backX && mouseX < backX + backW &&
       mouseY > backY && mouseY < backY + backH){

      // Stop music
      mySound.stop();

      // Reset flags
      gameStart = false;
      gameWon = false;

      // Reset level + player
      initLevel();
      player = new Cube(width*0.2,height*0.7,45);
      portalBuffer = -1;
    }
  }
}

function drawBackButton(){
  // draw a back button that changes color when 
  // mouse is over button
  if(mouseX > backX && mouseX < backX + backW &&
     mouseY > backY && mouseY < backY + backH){
    fill(80);
  } else {
    fill(50);
  }

  stroke(255);
  strokeWeight(2);
  rect(backX, backY, backW, backH, 5);

  noStroke();
  fill(255);
  textSize(16);
  textAlign(CENTER,CENTER);
  textFont(pixelFont);
  text("BACK", backX + backW/2, backY + backH/2);

}

class Cube{
  // cube that jumps when pressing spacebar
  constructor(x,y,s){
    this.s = s;
    this.pos = createVector(x,y);
    this.g = createVector(0,1.2);
    this.vel = createVector(0,0);

    this.rotation = 0;
    this.rotationSpeed = 0; 
    this.onGround = true;
  }
  display(){
    push();
    translate(this.pos.x + this.s/2, this.pos.y - this.s /2);
    rotate(radians(this.rotation));
    stroke(0);
    strokeWeight(2);
    fill(255,200,50);
    square(-this.s /2, -this.s /2, this.s);
    fill(0,255,255);
    square(-this.s/2 + 9,this.s/2 - this.s +  9, this.s - 38);
    square(-this.s/2 + 28,this.s/2 - this.s + 9, this.s - 38); 
    rectMode(CENTER);
    rect(-this.s/2 + 22,this.s/2 - this.s + 30,this.s/2 + 5, this.s - 40);
    pop();
    
  }
  move(){
      this.vel.add(this.g);
      this.vel.limit(100);
      this.pos.add(this.vel);
    

      // If on ground
      if(this.pos.y >= height*0.7){
        this.pos.y = height*0.7; 
        this.vel.y = 0;
      

        if(!this.onGround){
          print("ground collision")
          this.onGround = true;

          // snaps the cube to nearest right angle (90,180,270,360...)
          this.rotation = round(this.rotation/90) * 90;
          this.rotationSpeed = 0;
        }
      }
      // If in air -> rotate
      else {
        this.onGround = false;
        this.rotation += this.rotationSpeed;
      } 
      // stroke("red");
      // line(0,this.pos.y,width,this.pos.y);
      // collisions
      if(portalBuffer < 0){

      
      for(let o of level){
         let hit = collideRectRect(this.pos.x,this.pos.y- this.s,this.s, this.s, o.x, o.y, o.s, o.s2);
         //  text(player.onGround + " " + player.vel.y +" " + player.pos.y +" " + o.y , width/2, height*0.2);
        //  stroke("green");
        //  line(0,o.y,width,o.y);
        if(hit){
          if(o instanceof box){
            print("box col");
            if (this.pos.y - o.y < this.s){
              this.vel.y = 0;
              if(!this.onGround){
                this.onGround = true;
                this.rotation = round(this.rotation/90) * 90;
                this.rotationSpeed = 0;
              }
              this.pos.y = o.y; 
            }
            else if(o instanceof box){
              initLevel();
              this.rotation = 0;
              restartSong();
            }
          }
          else if(o instanceof spike){ 
            restartSong();
            print("spike col");
            //to reset the level
            //just reset or re-create each var and item
            initLevel();
            // sets cube right side up
            this.rotation = 0;

            
          }
          else{
            print("portal");
            if(portalBuffer < 0){
              player = new Ship(player.pos.x, player.pos.y, player.s);
              portalBuffer = 10;
            }

                
        }
      }
    }
  } 
}
  jump(){
    // can only jump when on ground
    if(this.onGround){
      // this.pos.y -= 1 
      this.vel.y = -15;
      this.rotationSpeed = 7.85; // rotates 7.9 degrees every frame
      this.onGround = false;
    }  
  } 
}

class Ship{
  constructor(x,y,s){
    this.s = s;
    this.pos = createVector(x,y); 
    this.g = createVector(0,1.2);
    this.vel = createVector(0,0);
    this.angle = 0;
  }
  display(){
    // cube in ship
    strokeWeight(1.5);
    push();
    translate(this.pos.x + this.s/2, this.pos.y - this.s /2);
    rotate(radians(this.angle));
    stroke(0);
    fill(255,200,50);
    square(-this.s /2 + 22, -this.s /2 - 3, this.s - 20);
    fill(0,255,255);
    square(-this.s/2 + 27,this.s/2 - this.s + 2, this.s - 40);
    square(-this.s/2 + 38,this.s/2 - this.s + 2, this.s - 40); 
    rectMode(CENTER);
    rect(-this.s/2 + 34,this.s/2 - this.s + 13,this.s/2 - 5, this.s - 42);
    pop();

    //ship
    push();
    translate(this.pos.x + this.s/2, this.pos.y - this.s/2);
    rotate(radians(this.angle));

    stroke(0);
    fill(255,200,50);
    triangle(-12, -5, -12, 25, 15, 10);
    rect(0, 0, 30, 20);
    triangle(30, 0, 30, 20, 45, 10);

    fill(0,255,255);
    rect(-6, -5, 40, 5);
    rect(-6, -15, 5, 10);
    pop();

    // roof
    fill(0);
    rect(0, height*0.7 - (s*21), width, s*10)

  }
  move(){

    
    // gravity for going down
    this.vel.y += 0.9;

    // hold space -> fly up
    if(keyIsDown(32)){
      this.vel.y -= 1.8;
    }

    //Limit vertical speed
    this.vel.y = constrain(this.vel.y, -12, 12);
    //Move ship
    this.pos.y += this.vel.y;
    this.angle = map(this.vel.y, -12, 12, -30, 30);

    // If hit roof
    if(this.pos.y < height*0.7 - (s*11) + 45){
      initLevel();
      this.rotation = 0;
      restartSong();
      player = new Cube(player.pos.x,player.pos.y, player.s);
      player.vel = createVector(0,0);
      portalBuffer = 20;
      player.pos.x = width*0.2;
      player.pos.y = height*0.7;
      player.rotation = 0;
      player.rotationSpeed = 0;
      player.onGround = true;
    }

    // If on ground
      if(this.pos.y >= height*0.7){
        this.pos.y = height*0.7; 
        this.vel.y = 0;
      

        if(!this.onGround){
          print("ground collision")
          this.onGround = true;

          // snaps the cube to nearest right angle (90,180,270,360...)
          this.rotation = round(this.rotation/90) * 90;
          this.rotationSpeed = 0;
        }
      }
    if(portalBuffer < 0){
      for(let o of level){
        let hit = collideRectRect(this.pos.x,this.pos.y-this.s,this.s, this.s, o.x, o.y, o.s, o.s2);
        if(hit){
          if(o instanceof box){
            if (this.pos.y - o.y < this.s){
                this.vel.y = 0;
                if(!this.onGround){
                  this.onGround = true;
                  this.rotation = round(this.rotation/90) * 90;
                  this.rotationSpeed = 0;
                }
                this.pos.y = o.y; 
              }
              else if(o instanceof box){
                print("box col");
                restartSong();
                initLevel();
                player = new Cube(player.pos.x,player.pos.y, player.s);
                player.vel = createVector(0,0);
                portalBuffer = 20;
                player.pos.x = width*0.2;
                player.pos.y = height*0.7;
                player.rotation = 0;
                player.rotationSpeed = 0;
                player.onGround = true;
                }
          }
          else if(o instanceof spike){
            print("spike col");
            restartSong();
            initLevel();
            player = new Cube(width*0.2,height*0.7, player.s);
            player.vel = createVector(0,0);
            portalBuffer = 20;
            player.pos.x = width*0.2;
            player.pos.y = height*0.7;
            player.rotation = 0;
            player.rotationSpeed = 0;
            player.onGround = true;
            
          }
          else{ // portal hit
            print("portal");
            if(portalBuffer < 0){
              player = new Cube(this.pos.x, this.pos.y, this.s);

              // reset cube motion
              player.vel = createVector(0, 0);
              player.rotation = 0;
              player.rotationSpeed = 0;

              // IMPORTANT: lift cube slightly ABOVE surfaces
              player.pos.y -= 5;

              // do not mark onGround yet — let collision resolve it
              player.onGround = false;
              portalBuffer = 10;
            }
            
          }
      }
    }
  }
}
  jump(){ // fly up

  }
}

class portal{
  constructor(x,y){
    this.x = x; this.y = y;
    this.s = 6; this.s2 = 115;
  }
  display(){
    noStroke();
    fill("pink");
    rect(this.x, this.y,this.s,this.s2);
    stroke(1);
    
  }
  slide(){
    this.x -= levelSpeed;
  }
}

class box{
  constructor(x,y,s,h){
    this.x = x; this.y = y; this.s = s; this.h = h;
  this.s2 = h;
  } 

  display(){
    push();
    strokeWeight(2);
    stroke(255);
    fill(0);
    rect(this.x,this.y,this.s,this.h);
    pop();


  }

  slide(){

    this.x -= levelSpeed;
  }
}

class spike{
  constructor(x,y,s,r){
    this.x = x; this.y = y; this.s = s;
    this.s2 = s; this. rotation = r;
  }

  display(){
    push();
    strokeWeight(2);
    stroke(255);
    fill(0);
    if(this.rotation === 0){
      triangle(this.x,this.y, this.x + 45, this.y, this.x + 22.5, this.y - 45 + this.s);
    }
    else{
      triangle(this.x,this.y - 45, this.x + 45, this.y - 45, this.x + 22.5, this.y + this.s);
    }
    pop();
  }

  slide(){

    this.x -= levelSpeed;
  }
}