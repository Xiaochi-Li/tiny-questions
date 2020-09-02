// function is used for all answers because arrow functions is not supported on older browser
// without babel
/**
 * Answer to question 1: Write a function getGrandparentName(node) that, given a node, returns
 * the node name of the grandparent of that node. Must work on all browsers
 * -------------------------------------------------------------------------------------------------
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

/**
 * Answer to question 2: Write a function getGrandparent(node) that, given a node, returns
 * the grandparent of that node. Must work on all browsers.
 * -------------------------------------------------------------------------------------------------
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

/**
 * Give a new definition of getGrandparentName that uses your definition of getGrandparent from (2)
 * -------------------------------------------------------------------------------------------------
 * return
 * @param node
 * @return {string}
 */
function getGrandparentNameVersionTwo(node) {
  const grandparent = getGrandparent(node);
  // this will work on Browser X Y and Z. because null and undefined both coerce to false.
  if (!grandparent) return "";
  // Assume if a node exist, it will always have a valid alphabetic string name.
  return grandparent.nodeName;
}

/**
 * Write a function getGreatGrandparent(node) that given a node, returns the node that is the great
 * grandparent of node (e.g. getGreatGrandparent(eclair) === apple). Must work on all browsers
 * -------------------------------------------------------------------------------------------------
 * A function that returns the great-grandparent node of a given node. If the given node doesn't have a
 * parent node, grandparent node or great-grandparent node, the function will return null for Browser X and Y, undefined for
 * browser Z
 * @param node
 * @return {Node| null | undefined}
 */
function getGreatGrandparent(node) {
  const grandparent = getGrandparent(node);
  if (!grandparent) return grandparent;
  return grandparent.parentNode;
}
