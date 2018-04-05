/* imspired & code borrowed from: https://codepen.io/Cyclokitty/pen/PbqoeZ */

window.onload = function () {
    
    document.addEventListener("deviceready", init, false);
    //init();
};

function init(event){coffee.displayMessage()} {
   var coffee = {
  // array
  messages: [
    'Nope. Not worth it.', 
    'Yes! This should happen!', 
    'Are you sure you want to do that?', 
    '100% chance of coffee.',  
    'No one says no to coffee!',
    'A morning without coffee is like sleep.',
    'So... much... caffeine...',
    'You can and you should.',
    'Decaffeinated coffee is the devils blend',
    'Chocolate, men, coffee.',
    'Coffee smells like freshly ground heaven.',
    'Coffee time!',
    'Coffeine isnt a drug, its vitamin:)',
    'I orchestrate my mornings to the tune of coffee.',
    'A yawn in a silent scream for coffee.',
    'Coffee is a hug in a mug.',
    'Behind every successful woman is a substantial amount of coffee.',
    'Coffee and contemplation.'
],
  //method called by the onclick in the img tag 
  displayMessage: function() {
    var display = document.querySelector("img");
    display.addEventListener("click", function(event) {coffee.displayMessage()
    var num = Math.floor(Math.random() * (coffee.messages.length));
    console.log(coffee.messages[num]);
    var displayMessage = document.getElementById("coffeeMessage");
    displayMessage.innerHTML = coffee.messages[num];
    });
  }
    
};
    }