function mincost(arr)
{ 
	let narr=arr.sort()
	sum=0;
	forEach((ele,i)=>{
		sum=narr[i]+narr[i+1] +sum
		i=i+2;
	}
		   return sum)
	
//write your code here
// return the min cost
  
}

module.exports=mincost;
