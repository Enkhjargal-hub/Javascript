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

// Problem 7 goliin 2-n toog gargah gj bga

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

let jo=1;

if (as % 11 !== 0) jo=jo+as;
if (ui % 11 !== 0) jo=jo+as;
if (ty % 11 !== 0) jo=jo+as;
if (jk % 11 !== 0) jo=jo+as;

console.log(sa);
