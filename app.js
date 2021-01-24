const correctAnswers = ['A', 'B', 'B', 'A', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => { // attach event listener to the html form to listen for submit
    e.preventDefault(); // then prevented default action

    let score = 0; // set local variable score for 0 to begin with 
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value]; // user answers from each input field and cycled through these

    // check answers
    userAnswers.forEach((answer, index) => { //and for each answer we have the index
        if(answer === correctAnswers[index]){ // then compared that answer with the correct answers array
            score += 20; // if they are the same we had 20 points // if not the same we dont add anything
        }
    });

    //console.log(score); // out the final score
    // show result on page
    scrollTo(0,0); //this will scroll the page to the top after submission
    result.querySelector('span').textContent = `${score}%`; // targeting the span class in results section in html and updating the text content of the span with out score
    result.classList.remove('d-none'); //getting class list of the result then removing the d-none class

    let output = 0; //set output variable to zero
    const timer = setInterval(() =>{ // created timer equal to a set interval - this callback function is goingto fire every 10 miliseconds
        result.querySelector('span').textContent = `${output}%`; //every 10 miliseconds we get the result and text content of the result and setting it equal to whatever the output is 
        if(output === score){ // if the output is equal to the score it clears the interval and no more animation is needed
            clearInterval(timer);
        } else {
            output++; // if its not then we add 1 to the output so then the output is 1 and we run it again after 10 miliseconds. will keep going over and over until it reaches the score
        }
    }, 10);

});



// window object (global object)

console.log(document.querySelector('form'));