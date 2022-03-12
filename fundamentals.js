//১. কিভাবে let, const দিয়ে ভেরিয়েবল লিখতে হয়,কখন কোনটা ইউজ করে তুমি কি জানো ?

//const can not be reassign
const name = 'Delowar Hossen';
// console.log(name);

//let can be assign multipletime
let age = 20;
// console.log(age);

age = 30;
// console.log(age);


//২.১ কিভাবে কন্ডিশন লিখতে হয়, ছয় রকমের কন্ডিশন (>, <, ===, !==, >=. <=) কোনটা কোন জিনিসের জন্য ইউজ করবে। এছাড়াও && বা ।। দিয়ে কিভাবে একাধিক কন্ডিশন এর মধ্যে দুইটাই ফুলফিল করতে হবে আবার দুইটার যেকোন একটা ফুলফিল করতে হবে, সেটা কিভাবে করবে 
//1
const num1 = 0;
const num2 = 10;

if(num1 > num2){
// console.log('num2 is bigger');
}
else
{
    // console.log('num1 is smaller');
}

//2 no problem

// let season = 'rainy';
// season = 'winter'
// let season1 = 'spring'

// if(season1==='summer'){

// // console.log('season is '+ season1);
// }
// else if(season==='winter'){
//   //  console.log('season is if else ' + season);
// }
// else {
//    // console.log('season is not '+ season);
// }
//3  no problem

let season = 'rainy';
season = 'winter'
let season1 = 'spring'

if(season1==='spring' && season==='rainy'){

// console.log('season is '+ season1);
}
else {
    // console.log('season is not '+ season);
}





