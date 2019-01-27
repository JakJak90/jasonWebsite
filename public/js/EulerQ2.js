function upperLimitButtonClick() {
    console.time('0001');

    var upperLimitText = document.getElementById('upperLimitText');

    var currentNumber = 1;
    var lastNumber = 1;
    var secondLastNumber = 0;
    var evenNumberSum = 0;
    var upperLimit = upperLimitText.value;

    while ((secondLastNumber + lastNumber) <= upperLimit) {
        // Console.WriteLine(count);
        currentNumber = lastNumber + secondLastNumber;
        if (currentNumber % 2 == 0) {
            evenNumberSum += currentNumber;
            secondLastNumber = lastNumber;
            lastNumber = currentNumber;
        }

        else {

            secondLastNumber = lastNumber;
            lastNumber = currentNumber;
        }

        // Console.WriteLine("Current number = {0} \nlast number = {1} \nsecond last number = {2} \neven sum = {3}", currentNumber, lastNumber, secondLastNumber, evenNumberSum);
        // Console.WriteLine("***************************************************");  
    }

    var answerText = document.getElementById('answerText');
    answerText.textContent = "Answer: " + evenNumberSum;
    console.timeEnd('0001');
}
