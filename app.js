console.log("Hello Back to School!!!");

const viz = document.getElementById("tableauViz");
let workbook;
let vizActiveSheet;
let dashboard;
let listSheets;

function logWorkbookInfo() {
  //Grab the workbook name
  workbook = viz.workbook;
  console.log(`The Workbook Name is ${workbook.name}`);
  // Get the array of dadhboards
  let sheets = workbook.publishedSheetsInfo;
  console.log(sheets);
  sheets.forEach((dog) => {
    index = dog.index;
    console.log(`the sheet with index {index} is ${dog.name}`);
  });
  // find the active sheet
  vizActiveSheet = workbook.activeSheet;
  console.log(`the active sheet is ${vizActiveSheet.name}`);
  // List all the sheets within this active sheet
  listSheets = vizActiveSheet.worksheets;
  listSheets.forEach((cat) => {
    index = cat.index;
    console.log(`The worksheet with the index ${index} is ${cat.name}`);
  });
}

viz.addEventListener("firstinteractive", logWorkbookInfo);

// defining our buttons
const onwButton = document.getElementById("onw");
const clearButton = document.getElementById("clear");
const undoButton = document.getElementById("undo");

// logic for button functions
function onwFunc() {
  listSheets.forEach((pig) => {
    pig.applyFilterAsync("State", ["Washington", "Oregon"], "replace");
  });
}

function clearFunc() {
  listSheets.forEach((cow) => {
    cow.clearFilterAsync("State");
  });
}

function undoFunc() {
  viz.undoAsync();
}
// event listeners to run logic

onwButton.addEventListener("click", onwFunc);
clearButton.addEventListener("click", clearFunc);
undoButton.addEventListener("click", undoFunc);
