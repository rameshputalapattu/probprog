var model = function() {
    var dice = categorical({vs:[4,6,8,10,12,20]})
    var dice_values = categorical({vs:mapN(function(x){
      return x+1;
    },
    dice)});
    
    var experimentalData = [2,7,6,1,5];
    condition(dice_values===2);
    var dice_1 = dice;
     var dice_values_1 = categorical({vs:mapN(function(x){
      return x+1;
    },
    dice_1)});
    condition(dice_values_1===7)
    var dice_2 = dice_1;
    var dice_values_2 = categorical({vs:mapN(function(x){
      return x+1;
    }, dice_2)});
    condition(dice_values_2===6);
    var dice_3 = dice_2;
    var dice_values_3 = categorical({vs:mapN(function(x){
      return x+1;
    },dice_3)})
    condition(dice_values_3===1);
    var dice_4 = dice_3
    var dice_values_4 = categorical({vs:mapN(function(x){
      return x+1;
    }, dice_4)});
    condition(dice_values_4===5);
    
    return dice_4;
                        
                           
  }
Infer(model)

var model_d = function(d,dice) {
  
    var dice_values = categorical({vs:mapN(function(x){
      return x+1;
    },
    dice)});
    var obs = function(d) {
      observe(Infer({model:function() {
           return dice_values
         }
        }),d);
    };
   obs(d);
   return dice;
  }
  
  var model = function() {
    var dice = categorical({vs:[4,6,8,10,12,20]});
    var dice = model_d(2,dice);
    var dice = model_d(7,dice) ;
    var dice = model_d(6,dice) ;
    var dice = model_d(1,dice) ;
    var dice = model_d(5,dice) ;
    return dice
  }
  Infer(model)