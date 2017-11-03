var xValue = document.getElementById('xValue');
var yValue = document.getElementById('yValue');
var myQuestion = document.getElementById('mySelect');
var form = document.getElementById('myCalculator');
var resultField = document.getElementById('resultField');

form.addEventListener('submit', function(event){
    if(!xValue.value || !yValue.value){
        alert("enter a valid value bro.")
    }else{
        var x = parseFloat(xValue.value);
        var y = parseFloat(yValue.value);
        var result;
        if(myQuestion[myQuestion.selectedIndex].value === "whatIsYpOfX"){
            result = x * (y/100);
        }else if(myQuestion[myQuestion.selectedIndex].value === "XisYpOfWhat"){
            result = (x*100)/y;
        }else if(myQuestion[myQuestion.selectedIndex].value === "whatPofXisY"){
            result = (y*100)/x;
        }else if(myQuestion[myQuestion.selectedIndex].value === "XpOfWhatIsY"){
            result = (y*100)/x;
        }else if(myQuestion[myQuestion.selectedIndex].value === "YpOfXIsWhat"){
            result = (y/100)*x;
        }
        
        
        resultField.innerText = "Answer is: " + result;
        event.preventDefault();
    }
});
