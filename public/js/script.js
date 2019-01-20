console.log("hello");



function upperLimitButtonClick ()
{
    console.time('0001');

    var upperLimitText = document.getElementById('upperLimitText');
    
    var upperLimit = upperLimitText.value;
    var sumAnswer = 0;
    
    for (var i = 0; i < upperLimit; i++) 
    {
        if (i % 3 == 0) {
            sumAnswer += i;
        }
        
        else if (i % 5 == 0) {
            sumAnswer += i;
        }
    }
    console.log(sumAnswer);
    
    var answerText = document.getElementById('answerText');
    answerText.textContent = "Answer: " + sumAnswer;
    console.timeEnd('0001');
}
