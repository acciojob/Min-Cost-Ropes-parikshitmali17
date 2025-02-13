function mincost(arr)
{ 
	let narr=arr.sort()
	sum=0;
	for(ket i=0; i<narr.length; i++){
		sum= narr[i]+narr[i+1] +sum
	}
	return sum
	
//write your code here
// return the min cost
  
}

module.exports=mincost;
