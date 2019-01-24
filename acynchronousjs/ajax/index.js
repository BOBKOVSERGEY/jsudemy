fetch('https://crossorigin.me/https://www.metaweather.com/api/location/2487956/')
.then(result => {
  console.log(result);
})
.catch(error => console.log(error));