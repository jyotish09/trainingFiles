const url = 'https://randomuser.me/api/?results=10';
fetch(url).then((resp) => resp.json()).then(function(data) {
  console.log(data.results);
})
.catch(function(error) {
console.log(error);
});
