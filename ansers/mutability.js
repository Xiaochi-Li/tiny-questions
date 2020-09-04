/*
 * Answer to question 1: One way of testing a stack’s operations is to identify relationships that
 * should hold between the operations. Given a completely random stack, list all of the relationships
 *  that you can think of between (push, pop, peek, size). We’ll get you started:
 * ● If peek is none(), then stack size should be 0
 * ● if peek is some(anyValue), then stack size should be greater than 0
 * ● after push(x), pop should return some(x)
 *
 * 1. after push(x), peek should return some(x)
 * 2. after push(x), size should +1
 * 3. if pop is none(), peek is none()
 * 4. if pop is none(), size is 0
 * 5. if pop is some(v), size should -1
 * 6. if peek is none(), pop is none()
 * 7. if peek is some(v), pop should be the same some(v)
 * 8. if peek is some(v), size should not change
 * 9. if pop is some(v), peek should bot return the same some(v), it should be none() or some(valueUnderV)
 */

/*--------------------------------------------------------------------------------------------------*/

/*
 * Answer to question 2: Rewrite the stack pseudo code using these new methods.
 * We’ll get you started...
 * */
var s0 = [];
var s1 = push(s0, 10);
var s2 = push(s1, 20);
var s3 = push(s2, 30);
// assume pop() now return an object {newStack:[10, 20], topOnStack: Option.some(30)}
var popResult = pop(s3);
var thirty = popResult.topOnStack;
var s4 = popResult.newStack;

// assume pop() now return an object {newStack:[10, 20], topOnStack: Option.some(20)}
var peekResult1 = peek(s4);
var twentyA = peekResult1.topOnStack;
var s5 = peekResult1.newStack;

var peekResult2 = peek(s5);
var twentyB = peekResult2.topOnStack;
var s6 = peekResult1.newStack;

var s7 = push(s6, 40);
var size = size(s7); // size is 3

/*--------------------------------------------------------------------------------------------------*/

/*
 * Answer to question 3: What is the difference between this implementation and the previous Stack
 * object implementation?
 * Original implementation is object-oriented programming, all functions are based on the Stack object.
 * New implementation is functional programming where data and behaviour are separate. Also, Operations
 * don't change original data anymore.
 * */

/*--------------------------------------------------------------------------------------------------*/

/*
 * Answer to question 4: What are the advantages and disadvantages?
 *
 * Advantage of new implementation:
 * 1. fit better with asynchronous program languages.
 * 2. easier to test.
 * 3. if the program involve a lot of dynamic data or passing data around, the new implementation fits
 * better.
 *
 * Disadvantage of new implementation:
 * 1. It is obvious that a lot of new array are created every time a function is executed. As operation
 * complexity grows, the code will get messier and harder to maintain.
 *
 * Advantage of old approach:
 * not sure
 *
 * Disadvantage of old approach:
 * 1. instance are not as reusable.
 * 2. other functions that is depends on a stack won't be pure functions anymore. Because every
 * a push() or pop() is executed the stack it self changed. This leads to other functions to have
 * different output even take same parameters. Non-pure functions has side effects.
 *
 * */

/*--------------------------------------------------------------------------------------------------*/

/*
 * Answer to question 5. Which one do you think would be easier to test? Why?
 * I think the new approach is much easier to test.
 * 1. all new functions are pure functions that separated from data without side effects. We only need to test if certien
 * input return same output.
 * 2. functions are atomic, No need to create different stack object to cover all cases of all functions.
 * This makes it easier to organise tests as a function-driven way rather than the object-driven way.
 * */
