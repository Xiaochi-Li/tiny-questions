/*
 Answers to question 1. Using these methods for Option, rewrite getGrandparentName(node) and getGrandparent(node) to return Options.
 it is not stated in the text how does Option type get created, some assumption is made:
 1. Option can created by `const newOption = new Option();`
 2. If no parameter is passed in, or the parameter is null or undefiled. Option.none() is used to create a none
 3. Otherwise, Option.some() is excused to create a some.
 */

/**
 * Return a grandparent node, which might still be alive, of a given node.
 * @param node
 * @return {Option}
 */
function getGrandParent(node) {
  const parent = new Option(node.parentNode);
  let grandParent;
  if (!parent.isSome()) {
    grandParent = new Option();
  } else {
    grandParent = new Option(parent.parentNode);
  }
  return grandParent;
}

/**
 * return Some contains grandparent node's name of a given node.
 * return None if the given node has no parent or grandparent.
 * @param Node node
 * @return {Option}
 */
function getGrandparentName(node) {
  const parent = new Option(node.parentNode);
  let grandParentName;
  try {
    const parentNode = parent.getOrDie();
    grandParentName = new Option(parentNode.parentNode.nodeName);
  } catch (error) {
    console.log("no parent or grandparent", error.message);
    grandParentName = new Option();
  }
  return grandParentName;
}

/*--------------------------------------------------------------------------------------------------*/

/**
 * Answers to question 2. Using these two functions, remove any usage of isSome and getOrDie, and
 * rewrite getGrandparentName and getGrandparent to use map and/or bind.
 * getGrandparent(node) doesn't use isSome or getOrDie, so only rewrite getGrandparentName(node)
 *
 * return a some that holds the grandparent node's name of a given node.
 * return none otherwise.
 * @param Node node
 * @return {Option} if the given node has a grand parent, return a some that holds the its name.
 * return a none otherwise.
 */
function getGrandparentNameVersionTwo(node) {
  const parent = new Option(node.parentNode);
  return parent.bind((parentNode) => {
    return getParentNodeName(parentNode);
  });
}

/**
 * A helper function to get the name of a given node's parent node.
 * return Option contains parent name, return none if the given node has no parent
 * @param node
 * @return {Option}
 */
function getParentNodeName(node) {
  const parent = new Option(node.parentNode);
  return parent.map((parentNode) => parentNode.nodeName);
}

/**
 * return an Option contains a grandparent node of a given node
 * @param node
 * @return {Option}
 * */
function getGrandparentVersionTwo(node) {
  const parent = new Option(node.parentNode);
  return parent.map((parentNode) => parentNode.parentNode);
}

/*--------------------------------------------------------------------------------------------------*/

/*
 Answers to question 3. Now, also rewrite getGreatGrandparent and using map and/or bind
 */
/**
 * a function returns a some that holds the great grandparent node of a given node.
 * return none if the given node has neither parent, grandparent, nor great great grandparent.
 * @param node
 * @return {Option} the grandparent node
 * */
function getGreatGrandparent(node) {
  const grandparent = getGrandparentNameVersionTwo(node);
  return grandparent.map((grandparentNode) => grandparentNode.parentNode);
}

/*--------------------------------------------------------------------------------------------------*/

/*
 Answers to question 4. What do you think of the developer’s Option approach. What are its strengths? What are its weaknesses?
 */

/*
 * I think it is smart to have Option type introduced to javascript, we don't need to worry about
 * errors like "*** is undefined" anymore. That is saying, no more checking if a value is undefined anymore.
 * That will make the code much cleaner.
 * Introducing .map and .bind further reduce code to check if an Option is a none.
 *
 * I can't think of any weakness as this concept is new to me. The only thing I didn't like is just it encourage
 * devs to use .map(()={...}) inside a bind(() =>{}). I am not a big fan of ested arrow function expression.
 * It is ugly, hard to read and hard to debug.
 */

/*--------------------------------------------------------------------------------------------------*/

/*Answers 5. Write a function getParentOrSelf(node) which uses fold and takes a node and returns a
 * parent of that node if one exists, otherwise the node itself.sures to 5. Write a function getParentOrSelf(node) which uses fold and takes a node and returns a parent of that node if one exists, otherwise the node itself.
 */
function getParentOrSelf(node) {
  const parent = new Option(node.parentNode);
  return parent.fold(
    function () {
      return Object.some(node);
    },
    function (parentNode) {
      return Object.some(parentNode);
    }
  );
}

/* To me, the different between using .fold() and .isSome() is very subtle.
 * Major difference is fold takes the idea of "having to check if the Option is none or not" away,
 * which makes it a bit more declarative.
 * Devs can focus on "what should happen" rather than figure out "How to make something happen"
 * Using fold will introduce less careless bugs in complex logic.
 * */
