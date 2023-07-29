const { readFile, writeFile } = require('fs');

console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      './content/result-async.txt',
      `Here is the result :${second}, ${first} `,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
        console.log('done with this task');
      }
    );
  });
});
console.log('starting next task');

//with this asynchronous approach we can start a task with the reading and writing where the task takes some time, the next console.log
//task still starts before you are now done with the task inside the read and write function
