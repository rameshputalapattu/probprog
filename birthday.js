var birthday = mem(function(i) {
  return categorical({vs:mapN(function(x) {
    return x+1;
  },365)});
})

var N = 23;
var pair_share = function(i,j) {
  if (i > N) {
    return false;
  }
  
 if (j > N ) {
       return pair_share(i+1,i+2);
  } 
   
  if (birthday(i) == birthday(j)) {
      return true;
  } 
     
  return  pair_share(i,j+1);
    
 
  }
  
Infer({method:"MCMC",samples:10000},function() {
  return pair_share(1,2);
});
