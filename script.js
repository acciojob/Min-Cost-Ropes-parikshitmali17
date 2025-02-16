// function mincost(arr)
// { 
// 	let narr=arr.sort()
// 	sum=0;
// 	for(ket i=0; i<narr.length; i++){
// 		sum= narr[i]+narr[i+1] +sum
// 	}
// 	return sum
	
// //write your code here
// // return the min cost
  
// }

// module.exports=mincost;


function mincost(arr)

{

//write your code here

arr.sort((a,b)=>a-b)

let cost = 0

//console.log(arr)

while(arr.length>1){

    let first = arr.shift()

    let second = arr.shift()

    cost+=first+second

    arr.push(first+second)

    arr.sort((a,b)=>a-b)

  //  console.log(arr)

}

return cost
}

module.exports=mincost;