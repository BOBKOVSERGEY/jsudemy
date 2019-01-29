fetch('data.json')
.then(result => {
  console.log(result);
  // возвращаем json
  return result.json();
})
.then(data => {
  console.log(data);
  const events = data.events;

  for (let i = 0; i < events.length; i++) {
    console.log(`Место проведения ${events[i].location} дата ${events[i].date}`);
  }

})
.catch(error => console.log(error));