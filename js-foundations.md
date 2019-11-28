# ASSESSMENT 2: FOUNDATIONS OF JAVASCRIPT
## Interview Practice Questions

### Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

Consider the function:

var text = 'outside'
function logIt(){
  console.log(text)
  var text = 'inside'
}
logIt()


1a. Look at this Javascript function and try to predict what the console show.

____


1b. Test the function. Explain why the function returned what it did.

  Your answer: Huh?

  Researched answer: It won't reach outside of it's scope to find the 'outside' variable and since the console log is coming
  before the variable is assigned inside the function its spitting out 'undefined.'


2. What is JSON?

  Your answer: Javascript in a program like HTML or React. All I know is it doesn't auto populate, and I'm not a fan.

  Researched answer: A lightweight format for transferring and storing data. It is usually used when data is sent to a webpage.


3. What does CRUD stand for?

  Your answer: Not a clue.

  Researched answer: Create Read Update Delete, if a model cannot be described by all 4 of these capabilities it should
  have a model of its own.



4. What does are the 5 HTTP verbs?

  Your answer: You lost me...

  Researched answer: Post, Get, Put, Patch, and Delete.


5. What is a higher-order function?

  Your answer: I should know this one.

  Researched answer: A higher order function is a function that takes a function as an argument, or returns a function.


6. STRETCH: What is a closure, what is it good for and how do you recognize one?

  Your answer: ...

  Researched answer: A closure is a persistent scope which holds on to local variables even after the code execution
  has moved out of that block.


7. STRETCH: What is an API?

  Your answer: ?

  Researched answer: is a set of routines, protocols, and tools for building software applications.


### Additional Feedback Questions.

1. Do you have a suggestion for a Check In question?

What is the best topping for a pizza?

2. What was your favorite topic this week?

Creating an app with react was great!

3. What was your "A-ha!" moment this week?

None that I can think of. Really struggling with the material at the moment and I find that even when I know the basic
concepts I am unable to produce them back onto the computer as code. 