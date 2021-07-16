const {
  readdir,
  readFile,
  writeFile
} = require("fs");
const {
  join
} = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str =>
  str
  .split("")
  .reverse()
  .join("");

let promise = readdir()
let promise2 = promise.then(
  function(inbox) {
    return ("error:File error") // If readFile was successful, let's readAnotherFile
  },
    function(join) {
    return ("error:File error") // If readFile was successful, let's readAnotherFile
  },


  function(reversetext) {
    console.error(err) // If readFile was unsuccessful, let's log it but still readAnotherFile
    return readAnotherFile()
  }
)
promise2.then(console.log, console.error) // The result of readAnotherFile
