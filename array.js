const arr=[2,3,4,5,4,3,2]
const newarr=arr
newarr.push(6)
newarr.unshift(10)
console.log(arr);


const myar=[9,8,7,6,5,4,3,2,1]
const filtered=myar.filter(function(num){
    return num>5;
})
console.log(filtered);

const mapped=myar.map((num)=>(num*10-27))
console.log(mapped);
console.log(myar);





