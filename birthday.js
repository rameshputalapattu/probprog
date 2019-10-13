var arr_days = [];
var add_days = function(i) {
  if (i > 365) {
    return;
  }
  arr_days.push(i);
  add_days(i+1);
 }
add_days(1);

var birthday = mem(function(i) {
  return categorical({vs:arr_days});
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
  
Infer({method:"MCMC",samples:100000},function() {
  return pair_share(1,2);
});
