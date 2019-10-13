/*  
Imagine a venture capitalist who considers a risky investment in a start-up company. 
A major source of uncertainty about her investment is the success of the company. 
She is aware of the fact that only around 20% of all start-up companies succeed. 
She can reduce this uncertainty somewhat by asking expert opinion. 
Her expert, however, is not perfect in his forecasts. 
Of all start-up companies that eventually succeed,
he judges about 40% to be good prospects, 40% to be moderate prospects, and 20% to be poor prospects. 
Of all start-up companies that eventually fail, he judges about 10% to be good prospects, 
30% to be moderate prospects, and 60% to be poor prospects.
How can our investor use the information from the expert? 
What is the chance for success if the expert judges the prospects for success to be good? 
What if he judges them to be poor?
*/
var model = function() {
    var good_startup = flip(0.2);
    var expert_good = (good_startup && flip(0.4)) || (!good_startup && flip(0.1));
    var expert_moderate = (good_startup && flip(0.4)) || (!good_startup && flip(0.3));
    var expert_poor = (good_startup && flip(0.2)) || (!good_startup && flip(0.6));
    condition(expert_poor);
    return good_startup;
  }
  print(Infer(model));