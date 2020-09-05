/*
 * Answer to question 1. Why is that? What would happen if we used var?
 * 1. Because let is Block scoped. lex x = 2 is only accessible with in the if block. And within the
 * if-block it has propority over the global scoped lex x = 1;
 * The second console.log() is 1. Because it only has access to the x in the global scope which has value 1.
 * 2. Both console.log(x) will show 2 in the console.
 * This is because var are only scope to functions blocks but not to other blocks.
 * To declare another var x inside a if-block is nothing different to declare var x again in the
 * global scope. At compile time, js engine will create only one variable x.
 * Once compile time finished, js engine will firstly assign value 1 to x.
 * then with in the if block assign value 2 to x. console.log 2.
 * outside the if-block will still console.log 2. because var value is already changed to 2.
 * */

/*--------------------------------------------------------------------------------------------------*/

/*
 * Answer to question 2: How would you rewrite this to use event delegation? You can add any
 * attributes to the cells that you wish to achieve the task.
 * */

var makeTable = function (rows, columns) {
  let table = document.createElement("table");
  let tbody = document.createElement("tbody");
  tbody.addEventListener("click", (event) => {
    const { className, id } = event.target;
    if (className === "tableCell") {
      console.log(id);
    }
  });
  for (let r = 0; r < rows; r++) {
    let tr = document.createElement("tr");
    for (let c = 0; c < columns; c++) {
      let td = document.createElement("td");
      td.setAttribute("class", "tableCell");
      td.setAttribute("id", r + "x" + c);
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  return table;
};

/*--------------------------------------------------------------------------------------------------*/

/*
 * Answer to question 3: What are the advantages of event delegation? What are the disadvantages?
 *
 * advantages:
 * 1. I guess there will be a performance benefit. Only one event listener is created rather than n^2 of them.
 * 2. In real world application, tables are mostly dynamic. Rows, cols and cells changes based on user interaction.
 * Event delegation save the trouble remove event listener to destroyed element and add them on new once.
 *
 * Disadvantages:
 * I couldn't think of any disadvantages so I searched online.
 * According to Mr.Google:
 * 1. There’s a risk your event management code could become a performance bottleneck, so keep it as
 * lean as possible.
 * 2. Not all events bubble. The blur, focus, load and unload events don’t bubble like other events.
 * The blur and focus events can actually be accessed using the capturing phase (in browsers other
 * than IE) instead of the bubbling phase but that’s a story for another day.
 * 3. be careful using event delegation on events like mousemove.
 * It has serious risk of creating a performance bottleneck because the mousemove event is
 * triggered so often.
 * */
