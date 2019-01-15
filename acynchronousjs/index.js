const second = () => {
  //console.log('Second');
  setTimeout(() => {
    console.log('Async');
  }, 2000)
}

const first = () => {
  console.log('hey there');
  second();
  console.log('The end');
}

first();