//1

let

    food = [
        { name: " ORANGE", price: 500, isFruit: true },
        { name: "burger", price: 100, isFruit: false },
        { name: "watermelon", price: 210, isFruit: false },
        { name: "toast", price: 350, isFruit: false },
        { name: "apple ", price: 140, isFruit: true },
        { name: " bAn ana", price: 380, isFruit: true }
    ];


function getFruits(arr) {
    let newArr = [];
    arr.forEach(item => {
        if (item.price > 200 && item.isFruit === true) {
            newArr.push(item.name.toLowerCase().trim());
        };
    })

    return newArr;
}

let result = getFruits(food);
console.log(result);


let fruitFilter = food.filter(item => {
    if (item.price > 200 && item.isFruit === true) {
        return item.name.toLowerCase().trim();
    }
}
)

console.log(fruitFilter);


function getFruitsMap(arr) {
    return arr.map(item => {
        if (item.price > 200 && item.isFruit === true) {
            return (item.name.toLowerCase().trim());
        };
    })
};

let resultMap = getFruitsMap(food);
console.log(resultMap);

//let fruitMapPart = food.map(item => {
    //if (item.price > 200 && item.isFruit === true) {
        //return item.name.toLowerCase().trim();
    //}
//}
//)

//console.log(fruitMapPart);

let fruitsReduce = food.reduce((acc, item) => {
     if (item.price > 200 && item.isFruit === true) {
        acc.push(item.name.toLowerCase().trim());
    }
    return acc;
 }, []);

 console.log(fruitsReduce);


 //2

 let salary = [1000, 500, 1200, 230];

    salary.sort((a, b) => a - b);

 console.log(salary);
 console.log(salary.reverse());

//3

let serials = [
    "How i met your mom", 
    "Friends", 
    "Big bang theory",
];


 console.log(serials.join( ', ' ));

 //4

 let numbers = [5, 1, 15, 44];

let sumNumbers = numbers.reduce((acc, item) => {
     return acc + item;
 }, 0);

 console.log(sumNumbers);

 let sum = 0;

let nums = [5, 1, 15, 44]; 
function numbersSum(nums) { 
    let sum = 0; 
    for(let i = 0; i < nums.length; i++)
    { sum += nums[i]; 
    } 
    console.log(sum); 
} 

numbersSum(nums);



 

