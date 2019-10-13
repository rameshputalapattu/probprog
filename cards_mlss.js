var model = function() {
    var card = categorical({vs:[1,2,3]});
    var cards_sides = {1:["B","W"],2:["W","W"],3:["B","B"]};
   
    var sides_shown_index = categorical({vs:[0,1]});
    var side_shown = cards_sides[card][sides_shown_index];
    
    condition(side_shown==="B")
    var otherIndex = sides_shown_index===0?1:0;
    var otherSide = cards_sides[card][otherIndex]
    return otherSide
   
  }
  
  Infer(model)