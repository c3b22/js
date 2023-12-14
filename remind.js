// function sumOfDifferences(arr){
//     function compareNumber(a,b){
//         return b-a
//     }
//     function sum(arr){
//         arr.sort(compareNumber)
//         console.log(arr)
//         let c =0
//         for(let i = 1;i<arr.length;i++){
//             console.log(c)
//             c = c + (arr[i-1] - arr[i])
//         }
//         return c
    
//     }
    
//     const a = [2, 1, 10]
//     console.log(sum(a))
    
//     arr.sort(compareNumber)
//     console.log(arr)
//     let c =0
//     for(let i = 1;i<arr.length;i++){
//         console.log(c)
//         c = c + (arr[i-1] - arr[i])
//     }
//     return c

// }

// const a = [2, 1, 10]
// console.log(sum(a))

// function filter_list(l) {
//         return l.filter((a) => a.toLowerCase === a.toUpperCase)
//     }
  
// console.log(  filter_list([1,2,'a','b']))

// const t = [1, 2, 3]
// function findOutlier(integers){
//     let counteven = 0
//     let countodd = 0
//     for(let i = 0;i<integers.length;i++){
//         if (integers[i]%2 === 0){
//             counteven++
//         }
//         if (integers[i]%2 === 1){
//             countodd++
//         }
//     }
//     if (counteven > countodd){
//         return integers.find((a) => a%2 === 1 || a%2 === -1)
//     }
//     if (countodd > counteven){
//        return integers.find((a) => a%2 === 0 || a%2 === -0)
//     }
// }

// console.log(findOutlier(t))

// function validatePIN (pin) {
//     if (pin.length === 4 || pin.length === 6){
//         let countnum = 0
//         let count = 0
//         for(let i =0; i< pin.length;i++){
//             if (pin[i].toUpperCase() !== pin[i].toLowerCase()){
//                 return false
//             }
//             if (pin[i] === "1"|| pin[i] === "2"||pin[i] === "3"|| pin[i] === "4"|| pin[i] === "5"|| pin[i] === "6"|| pin[i] === "7"|| pin[i] === "8"|| pin[i] === "9"|| pin[i] === "0"){
//                 countnum++
//             }
//             count++
//         }
//         if (count>countnum || count < countnum){
//             return false
//         }
//         if (count === countnum){
//             return true
//         }
//     }
//     else {
//         return false
//     }
//   }
//   const a = "1234...."
//   console.log(validatePIN(a))


// function spinWords(string){
//     let count = 0
//     let counts = []
//     for (let i =0;i< string.length;i++){
//         if (string[i] !== " ")    {
//             count++
//             counts.push(string[i])
//             // console.log(count)
//             if (count >= 5){
//                 for (let c = 0;c < counts.length;c++){
//                 let temp = counts[c]
//                 counts[c] = counts[counts.length-1 - c]
//                 counts[counts.length-1 - c] = temp
//                 console.log(temp)
//                 }
//             }
//         }
//         if (string[i] === " ")    {
//             count = 0
//             counts =[]
//         }
//         console.log(counts)
//     }
//   }

// const fw = "Hey fellow warriors"
// console.log(spinWords(fw))

// function calaulateBMI(weight,height){
//     let BMI = weight/(height^2)
//     return BMI
// }
// function getBMIMeaning(weight,height){
//     let a = calaulateBMI(weight,height)
//     if (a < 18.5){
//         return "Underweight"
//     }
//     if (a > 25.0){
//         return "Overweight"
//     }
//     else {
//         return "Normal weight"
//     }
// }
// console.log(getBMIMeaning(65,1.8))

// function getMaxLengthString(arrayOfString){
//     let count = [arrayOfString[0]]
//     let b = arrayOfString.length+1
//     for(let i = 1;i<arrayOfString.length;i++){
//         console.log(count)
//         if (arrayOfString[i].length > count[0].length){
//             count = [arrayOfString[i]]
//         }
//          if (arrayOfString[i].length === count[0].length){
             
//             }
//         // count = [arrayOfString[i],count.pop()]
        
//         }
//     return count  
//     }

// console.log(getMaxLengthString(["555555555","555555555","55w555555",'hi',"hey","y","pppppp"]))

// function fillstartWord(startword,word){
//     let arr = [startword,word]
//     if (word === null || word === undefined){
//         return undefined
//     }
//     if(word.startsWith(startword)){
//         return word;
//     }
//     return startword+word
// }

// console.log(fillstartWord("Jsw","world"))

// function fillStartWord(startWord,word) {
//     if (word === null || word === undefined) {
//         return undefined    

//     } else if (word.startsWith(startWord)) {
//         return word;
//     }
//     return startWord + word
// }
// console.log(fillStartWord("b","beginner"))

// function concatArray(arr1,arr2){
//     if (arr1 === undefined || arr1 === null){
//         if (arr2 === undefined || arr2 === null){
//             return undefined
//         }
//     }
//     let arr = []
//     if (arr1 !== null &&arr1 !== undefined){
//         for(let i =0;i<arr1.length;i++){
//         arr.push(arr1[i])
//         }
//     }
//     if (arr2 !== null &&arr2 !== undefined){
//     for (let o =0;o<arr2.length;o++){
//         arr.push(arr2[o])
//     }
//     }
//     return arr
// }
// console.log(concatArray(["e"],undefined))

// function minMedMax(a,b,c){
//     function compare(a,b){
//         return a-b
//     }
//     let arr = []
//     arr.push(a)
//     arr.push(b)
//     arr.push(c)
//     arr.sort(compare)
//     let min = arr[0]
//     let max = arr[2]
//     let med = (arr[0]+arr[1]+arr[2])/3
//     return {min:min,med:med,max:max}
// }
// console.log(minMedMax(5,2,7))

function minMedMax(a,b,c){
    let min 
    let max 
    let med = (a+b+c)/3
    if (a>b && b>c ){
        max = a
        min = c
    }
    if (a>c && c>b){
        max = a
        min = b
    }
    if (b>a && a>c){
        max = b
        min = c 
    }
    if (b>c && c>a){
        max = b
        min = c
    }
    if  (c>b&& b>a){
        max = c
        min = a
    }
    if (c >a&&a>b){
        max = c
        min = b
    }
    return {min:min,med:med,max:max}
}
console.log(minMedMax(5,2,7))
