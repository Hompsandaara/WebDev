//Zadanie 1

const arr = [23, 67, 100];

var count = 0;

arr.forEach(function(value, index) {
    count += +value;
});

console.log(count);


/////////////////////////////////////////////////



//Zadanie 2

const arr2 = [23, 67, 100, -19, 90, -12, 160];

let numbersAboveZero = arr2.filter(function(num){
    return num>0
})

console.log(numbersAboveZero);

/////////////////////////////////////////////////


//Zadanie 3

const arr3 = ['TwilightSparkle', 'RainbowDash', 'AppleJack', 'Rarity', 'Pinkie Pie', 'Fluttershy'];
const s = 'AppleJack';

let getPoniess = arr3.find(function(num){
    return num == s;
})

console.log(getPoniess);

/////////////////////////////////////////////////


//Zadanie 4

const arr4 = ["0xaea0", "0x8f80", "0xf3ad", "0x17ec"];
const bk = "0x9e0a";

function sTxIncluded(arr, b){
    return arr.includes(b);
} 

console.log(sTxIncluded(arr4, bk));

/////////////////////////////////////////////////


//Zadanie 5

const arr5 = ["Moscow", "Coding", "School"];
let a = [] 

arr5.forEach(function(num){
    a.push(num.length)
})

console.log(a);

/////////////////////////////////////////////////


//Zadanie 6

const arr6 = ["Moscow", "never", "sleep"];
let aa = [] 
str = arr6.join(" ");
aa.push(str)
aa.push(str.length)

console.log(aa);

/////////////////////////////////////////////////


//Zadanie 8

const arr8 = {
    title: "Code Geass", 
    episodes: 25
}

function getEpisodes(title = "title", ep = "episode") {
    return `Аниме ${title} включает ${ep} серий`
}

console.log(getEpisodes(arr8.title, arr8.episodes));

/////////////////////////////////////////////////


//Zadanie 9

function triple(t) {
    return t * 3
}

console.log(triple(2));

/////////////////////////////////////////////////


//Zadanie 10

const arr10 = [5.4, 8.1, 6.3, 4.9]

function getAvgGlucose(arr) {
    sum = 0
    count = 0
    arr.forEach(numb => {
       sum = sum + numb 
       count++
    })

    return sum/count
}

console.log(getAvgGlucose(arr10));

/////////////////////////////////////////////////