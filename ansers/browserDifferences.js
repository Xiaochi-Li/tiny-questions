// mainly using functions declaration for all answers is because I'm not sure how these functions will be called.
// declared functions are hoisted thus its little bit safer.
// node
/**
 * Answer to question 1: Write a function getGrandparentName(node) that, given a node, returns
 * the node name of the grandparent of that node. Must work on all browsers
 *
 * A function returns the name of the grandparent node of a given node.
 * @param {Node} node
 * @return {string}
 */
function getGrandparentName(node) {
  const parent = node.parentNode;
  /**
   * return empty string here for two reasons:
   * 1. if the function is used for displaying on user interface. It will just display empty
   * string. This can further save devs couple lines of code checking if grandparent name exists
   * 2. this function can also be used to check if a node has grandparentName, as during
   * coercion toBoolean("") will return false, but return true for any none-empty strings.
   */
  if (!parent) return "";
  if (!parent.parentNode) return "";
  return parent.parentNode.nodeName;
}

/*--------------------------------------------------------------------------------------------------*/

/**
 * Answer to question 2: Write a function getGrandparent(node) that, given a node, returns
 * the grandparent of that node. Must work on all browsers.
 *
 * A function that returns the grandparent node of a given node. If the given node doesn't have a
 * parentNode or grandparent node, the function will return null for Browser X and Y, undefined for
 * browser Z
 * @param node
 * @return {Node | null | undefined} grandparent node.
 */
function getGrandparent(node) {
  const parent = node.parentNode;
  // checking if a node has parent node, otherwise the next line will cause error
  // return node.parentNode will make sure this function returns null for Browser X and Y, but undefined for Browser Z, for consistency
  if (!parent) return parent;
  return parent.parentNode;
}

/*--------------------------------------------------------------------------------------------------*/

/**
 * Answer to question 3: Give a new definition of getGrandparentName that uses your definition of getGrandparent from (2)
 *
 * return
 * @param node
 * @return {string}
 */
function getGrandparentNameVersionTwo(node) {
  const grandparent = getGrandparent(node);
  if (!grandparent) return "";
  // Assume if a node exist, it will always have a valid alphabetic string name.
  return grandparent.nodeName;
}

/*--------------------------------------------------------------------------------------------------*/

/**
 * Answer to question 4: Write a function getGreatGrandparent(node) that given a node, returns the node that is the great
 * grandparent of node (e.g. getGreatGrandparent(eclair) === apple). Must work on all browsers
 *
 * A function that returns the great-grandparent node of a given node. If the given node doesn't have a
 * parent node, grandparent node or great-grandparent node, the function will return null for Browser X and Y, undefined for
 * browser Z
 * @param node
 * @return {Node| null | undefined}
 */
function getGreatGrandparent(node) {
  const grandparent = getGrandparent(node);
  // this will work on Browser X Y and Z. because null and undefined both coerce to false.
  if (!grandparent) return grandparent;
  return grandparent.parentNode;
}

/*--------------------------------------------------------------------------------------------------*/

/**
 * Answer to question 5:
 * What are your thoughts about your implementations above?
 * If you knew you had to write all of these functions at the start, would you have changed your approach?
 * If so, why?
 * How well does your approach scale to going even further up the tree?
 *
 * 1. I feel most of my implementations are OK. I reused getGrandparent() in the 4th function, getGreatGrandparent,
 * Doing so will save me from implementing the logic checking if a node has a parent. However this creates a layer
 * of dependency. Unit test is needed to ensure no changes on getGrandparent() would break getGreatGrandparent()
 * 2. If I knew I have to write all of these functions at the start I would't change my approach.
 * 3. The above approach is not ideal as the further up the tree, functions are needed for each generation of grand parent.
 * It is better to solve this problem recursively. See implementation below.
 */

/**
 * 1. get the ancestor node of a given node further up the tree of a given generation.
 * 2. If the given node only have 2 generation up the tree but 4 is given at calling,
 * the function will return null for Browser X and Y, undefined for browser Z.
 * 3. return null if 0 is given as generation param
 * @param node {Node}
 * @param  generation {number} should be greater than 0, integer
 * @return { Node | null | undefined }
 */
function getAncestor(node, generation) {
  const parent = node.parentNode;
  if (generation < 1) return null;
  if (generation == 1) {
    return parent;
  } else {
    // this will work on Browser X Y and Z. because null and undefined both coerce to false.
    if (!parent) return parent;
    return getAncestor(parent, generation - 1);
  }
}
