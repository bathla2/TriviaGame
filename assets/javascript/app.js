var questions = ["Which of the following is a city in Ontario?", "Which of the following universities are in Toronto?", "Which of the following cities are in Alberta?", "Which of the following is not a programming language?"];
var answers = ["Calgary", "Edmonton", "Vancouver", "Toronto", "University of Toronto", "University of Waterloo", "University of Ottawa", "University of Ontario Institute of Technology", "Toronto", "Vancouver", "Calgary", "Waterloo", "Java", "Python", "C++", "Microsoft Powerpoint"]
var correctAnswers = ["Toronto", "University of Toronto", "Calgary", "Microsoft Powerpoint"];
var images = ["assets/images/a1.jpg", "assets/images/a2.jpg", "assets/images/a3.jpg", "assets/images/a4.jpg" ];

var count = 0;
var answer = 0;
var intervalId;
var number = 30;
var optionOne = $("#option1");
var optionTwo = $("#option2");
var optionThree =$("#option3");
var optionFour = $("#option4");
var wrong = 0;
var correct = 0;
var unAnswered = 0;
var timing;
//var timing1;
$("#option1").mouseover(function() { 
    $("#option1").css("background-color", "yellow");
});
$("#option1").mouseout(function() { 
    $("#option1").css("background-color", "white");
});
$("#option2").mouseover(function() { 
    $("#option2").css("background-color", "yellow");
});
$("#option2").mouseout(function() { 
    $("#option2").css("background-color", "white");
});
$("#option3").mouseover(function() { 
    $("#option3").css("background-color", "yellow");
});
$("#option3").mouseout(function() { 
    $("#option3").css("background-color", "white");
});
$("#option4").mouseover(function() { 
    $("#option4").css("background-color", "yellow");
});
$("#option4").mouseout(function() { 
    $("#option4").css("background-color", "white");
});



var showImage;
var count = 0;
document.getElementById("start").onclick = (displayQuestion);
optionOne.click(correctAnswer);
optionTwo.click(correctAnswer);
optionThree.click(correctAnswer);
optionFour.click(correctAnswer);

function displayQuestion()
{
    $("#start").hide();
    number = 30;
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    $("#question").html(questions[count]);
    $("#option1").html(answers[answer]);
    $("#option2").html(answers[answer+1]);
    $("#option3").html(answers[answer+2]);
    $("#option4").html(answers[answer+3]);
    nextQuestion();
}

function decrement() {
    
    number--;

    $("#time").html("<h2>" +"Time remaining in seconds: " + number + "</h2>" );
}

function nextQuestion()
{
    count++;
    answer = answer+4;

    if (count==questions.length+1)
    {
        clearInterval(timing);
        $("#time").html("Please click the start button to play the game again, your scores are following:");
        clearInterval(intervalId);
        $("#question").html("Correct Answers: " + correct);
        $("#question").append("<br> Wrong Answers: " + wrong);
        $("#question").append("<br> Unanswered Questions: " + unAnswered);
        $("#question").append("<br> Total Questions: " + (count-1));
        $("#option1").html("");
        $("#option2").html("");
        $("#option3").html("");
        $("#option4").html("");
          
        count=0;
        answer=0;
        wrong = 0;
        correct = 0;
        unAnswered = 0;
        $("#start").show();
    }
    else
    {
    clearInterval(timing);
    timing = setInterval(timeUp, 30000);
    }
}

function timeUp()
{
    unAnswered++;
    $("#time").html(" Out of time, the correct answer was " + correctAnswers[count-1]);
    clearInterval(intervalId);
    $("#question").html("<img src= 'assets/images/n.jpg' width='400px'/>");
    $("#option1").html("");
    $("#option2").html("")
    $("#option3").html("");
    $("#option4").html("");
    clearInterval(timing);
    timing = setInterval(displayQuestion,5000);
   
}


function correctAnswer()
{
if ($(this).text() === correctAnswers[count-1])
{
    $("#time").html("Congratulations, " + correctAnswers[count-1] + " is correct");
    clearInterval(intervalId);
    $("#question").html("<img src=" + images[count-1] + " width='400px'>");
    $("#option1").html("");
    $("#option2").html("");
    $("#option3").html("");
    $("#option4").html("");
    correct++;
    clearInterval(timing);
    timing = setInterval(displayQuestion,4000);
    
}

else
{
 wrongAnswer();
}



function wrongAnswer()
{
    $("#time").html("Sorry, you picked the wrong answer, the correct answer was: " + correctAnswers[count-1] );
    clearInterval(intervalId);    
    $("#question").html("<img src= 'assets/images/w.jpg' width='400px'/>");
    $("#option1").html("");
    $("#option2").html("")
    $("#option3").html("");
    $("#option4").html("");
    wrong++;
    clearInterval(timing);
    timing = setInterval(displayQuestion,6000);
    





    }
}



