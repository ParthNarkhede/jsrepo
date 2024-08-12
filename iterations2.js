function incre(num){
    console.log(num+1);
    ;
}

const arr=[1,2,3,4,5,6,7,8,9]

for(const numb in arr){
    console.log(arr[numb]);
    
}

// arr.forEach((iem)=>{
//     console.log(iem+4);
    
// })

// for (const numb in arr) {
//     console.log(arr[numb]);

// }

arr.forEach((item, arrr, index)=>{
    console.log(item,index,arrr);
})