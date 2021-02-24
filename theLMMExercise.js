let warmHugs = "Hi, I'm Olaf and I like warm hugs.";
console.log(warmHugs.toUpperCase());

console.log(warmHugs.replace("like", "love"));

let beenImpaled = "Oh, look at that. I've been impaled.";
console.log(beenImpaled.slice(18));

let dotDotDot = "...";
let skullBones = `I don't have a skull${dotDotDot}or bones.`;
console.log(skullBones);

console.log(Math.PI);

let randomNumber = Math.random();
randomNumber *= 3;
randomNumber = Math.floor(randomNumber);
randomNumber++;
console.log(randomNumber);

let letItGo = " Let it go!";
console.log(letItGo.trim(letItGo.repeat(letItGo.toUpperCase())));

let reindeers = "Reindeers are better than people"
reindeers = reindeers.replaceAll(" ", "_");
console.log(reindeers);

console.log(Math.sqrt(2));

let newRandomNumber = Math.random();
newRandomNumber *=16
newRandomNumber = newRandomNumber + 7;
newRandomNumber =Math.floor(newRandomNumber);
console.log(newRandomNumber);