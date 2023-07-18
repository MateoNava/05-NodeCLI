const commands = require("./commands");


process.stdout.write('prompt > ');
process.stdin.on('data', function (data) {
  let cmd = data.toString().trim();
  let arrData = cmd.split(" ");
  cmd = arrData.shift();
  if(Object.keys(commands).includes(cmd)){
    commands[cmd](arrData.join(" "));
  }
  process.stdout.write('\nprompt > ');
});


// const startTime = new Date();

// setTimeout(function () {
//   const endTime = new Date();
//   console.log('Time elapsed: ', endTime - startTime, 'ms');
// }, 500);

// while (new Date() - startTime < 1000) {};