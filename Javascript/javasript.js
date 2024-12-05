// Problem 1

let a = 5;
let b = 6;
let c = 8;

console.log(a + b + c);

// Problem 2

let s = 8;
let h = 9;

console.log(s + h);

// Problem 3

let g = 5;

console.log(g * g * g);

// Problem 4

let j = 2;

console.log(4 * j * j - 3 * j + 5);

// Problem 5 x-n utgiig let ogno

let x = 1;

console.log(3 * x - 5);

// Problem 6 suuliin 6-n toog gargah gj bga

let r = 476;

console.log(r % 10);

// Problem 7 (goliin 2-n toog gargah gj bga)

let k = 423;

let aravtiinoron = (k % 100) / 10;
console.log(aravtiinoron);

// Problem 8

let l = 200;
console.log(l / 60);

// Problem 9

let o = 44;

console.log(o / 24);

// Problem 10

let m = 16;
let n = 18;

console.log(m - n);

// Problem 11

let q = 100;
console.log(6 * q);

// Problem 12 (3 toonii hamgiin ih)

let too1 = 56;
let too2 = 89;
let too3 = 15;

if (too1 > too2) {
  if (too1 > too3) {
    console.log(too1, "ih too");
  } else {
    console.log(too3, "ih");
  }
} else {
  if (too2 > too3) console.log(too2, "ih too");
  else {
    console.log(too3, "ih");
  }
}

//  Problem 13 (4 toonii 5-s ih toonuudiin urjver)

let w = 3;
let p = 6;
let y = 2;
let u = 8;

let urjver;

if (w < 5) w = 1;
if (p < 5) p = 1;
if (y < 5) y = 1;
if (u < 5) u = 1;

console.log(w * p * y * u);

// Problem 14 (4 toonii hamgiin baga olno)

let d = 66;
let t = 48;
let nm = 15;
let hh = 43;

if (d < t) {
  if (d < t);
  if (d < nm);
  if (d < hh);
  if (t < d);
  if (t < nm);
  if (t < hh);
  if (nm < d);
  if (nm < t);
  if (nm < hh);
}
console.log(nm, "baga too");

// Problem 15 (80-s ih toonii niilber olno)

let ll = 85;
let sd = 75;
let uu = 96;
let rt = 69;

if (ll > 80) ll = 0;
if (sd > 80) sd = 0;
if (uu > 80) uu = 0;
if (rt > 80) rt = 0;

console.log(ll + sd + uu + rt);

// Problem 16 (tentsuu toog olno)

let gg = 8;
let yu = 5;
let io = 6;
let ts = 8;

let ans = 0;

if (gg == 8) {
  ans = ans + 1;
}

if (yu == 8) {
  ans = ans + 1;
}

if (io == 8) {
  ans = ans + 1;
}

if (ts == 8) {
  ans = ans + 1;
}

console.log(ans);

// Problem 17 (sondgoi toonuudiin urjver)

let kk = 5;
let we = 2;
let op = 3;

let answer = 1;

if (kk % 2 == 1) answer = answer * kk;
if (we % 2 == 1) answer = answer * we;
if (op % 2 == 1) answer = answer * op;

console.log("answer = ", answer);

// Problem 18 (11-t huvaagddaggui toonii niilber)

let as = 8;
let ui = 11;
let ty = 22;
let jk = 5;

let jo = 0;

if (as % 11 !== 0) jo += as;
if (ui % 11 !== 0) jo += ui;
if (ty % 11 !== 0) jo += ty;
if (jk % 11 !== 0) jo += jk;

console.log(jo);

// Problem 19 (1-s n toonii niilberiig ol)

// Problem 20 (100-g davtalt ashiglan toon udaa nem)

let hj = [100, 100, 100, 100, 100, 100];

let nemehtoo = 100;
let hedenudaa = 6;
let niilber = 0;

for (let i = 0; i < hedenudaa; i++) {
  niilber = niilber + nemehtoo;
}
console.log(niilber);

// Problem 21 (3-s ih bol tentssen busad tohioldold unasan gj uzne)

let jish1 = 2;
let jish2 = 3;
let jish3 = 4;
let jish4 = 5;

if (jish1 > 3) {
  console.log("tentssen");
} else {
  console.log("unasan");
}

if (jish2 > 3) {
  console.log("tentssen");
} else {
  console.log("unasan");
}

if (jish3 > 3) {
  console.log("tentssen");
} else {
  console.log("unasan");
}

if (jish4 > 3) {
  console.log("tentssen");
} else {
  console.log("unasan");
}

// Problem 22 (toog text bolgoh)

let too = 4;

if (too == 2) {
  console.log("Muu");
}

if (too == 3) {
  console.log("Dund");
}

if (too == 4) {
  console.log("Sain");
}

if (too == 5) {
  console.log("Onts");
}

//  Problem 23 (Dun)

let dun = 93;

if (dun > 90 && dun < 95) {
  console.log("-A");
} else if (dun > 85 && dun < 90) {
  console.log("+B");
}

// Problem 24 (7 honog angliar)

let udur = 5;

if (udur == 1) {
  console.log("Monday");
}

if (udur == 2) {
  console.log("Tuesday");
}

if (udur == 3) {
  console.log("Wednesday");
}

if (udur == 4) {
  console.log("Thursday");
}

if (udur == 5) {
  console.log("Friday");
}

if (udur == 6) {
  console.log("Saturday");
}

if (udur == 7) {
  console.log("Sunday");
}

// Problem 25 (uliral)

let uliral = 1;

if (uliral == 1) {
  console.log("Spring");
}

if (uliral == 2) {
  console.log("Summer");
}

if (uliral == 3) {
  console.log("Autumn");
}

if (uliral == 4) {
  console.log("Winter");
}

// Problem 26 (gurvaljin baiguulj boloh eseh)

let a1 = 3;
let b1 = 4;
let c1 = 5;

if (a1 + b1 > c1 && a1 + c1 > b1 && b1 + c1 > a1) {
  console.log("Yes");
} else console.log("No");

// Problem 27 (toonii hurd)

let ak = 3;
let hurd = 1;
let hurdurjver = 10;

if (ak > 0 && ak <= 10) {
  for (let i = 1; i <= hurdurjver; i++) {
    console.log("${ak} * ${i} = ${ak*i}");
  }
}

// Problem 28 (toonii zereg)

let kl = 5;
let zereg = 5;

if (kl > 0 && zereg > 0) {
  for (let i = 1; i <= zereg; i++) {
    console.log("${kl} * ${i} = ${kl**i}");
  }
}

// Problem 29 (ilerhiilel A= B*C-D )

let B = 2;
let C = 3;
let D = 4;

console.log(B * C - D);

// Problem 30 (2 toonii ih)

let ip = 14;
let yt = 16;

if (ip > yt) {
  console.log("Их тоо" + ip);
} else console.log("Бага тоо" + yt);
if (ip < yt) {
  console.log("Их тоо" + yt);
} else console.log("Бага тоо" + ip);

// Problem 31 (tegsh toonuudiin niilber)

let sc = 10;
let hb = 3;
let wq = 5;

let gh = 0;

if (sc % 2 == 0) gh = gh + sc;

if (hb % 2 == 0) gh = gh + hb;

if (wq % 2 == 0) gh = gh + wq;

console.log(gh);

// Problem 32 (ogogdson toond neg too davtagdsn too)

let bn = 23453;

// bn % 10 => suuliin tsifr
// bn / 10 => suuliin tsifriig arilgana

// /tsifr too hadgalnaa/ 
let count = new Array(10).fill(0); 

while (bn > 0) {
 let digit= (bn % 10);
 count[digit]++; 
 bn= Math.floor(bn /= 10);
}

for (let i = 0; i < 10; i++) {
  if (count[i] > 0) {
    console.log('${i} : ${count[i]} удаа');
  }
}

// Problem 33 (shagai buult magadlal)

let kj= Морь;
let ws= Тэмээ;
let sj= Хонь;
let vb= Ямаа;

if(kj>ws) {
}


