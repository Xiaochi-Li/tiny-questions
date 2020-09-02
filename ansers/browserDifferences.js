
// function is used for all answers because arrow functions is not supported on older browser without babel
/**
 * Answer to question 1: Write a function getGrandparentName(node) that, given a node, returns the node name of the grandparent of that node. Must work on all browsers
 * A function returns the name of the grandparent node of a given node.
 * @param node
 * @return {string}
 */
function getGrandparentName(node) {
  /**
   * return empty string here for two reasons:
   * 1. if the function is used for displaying on user interface. It will just display empty string. This can further save devs couple lines of code checking if grandparent name exists
   * 2. this function can also be used to check weither a node has grandparentName, as during coercion toBoolean("") will return false, but return true for any none-empty strings.
   */
  if (!node.parentNode) return "";
  if (!node.parentNode.parentNode) return "";
  return node.parentNode.parentNode.nodeName;
}
