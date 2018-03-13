const url = 'https://randomuser.me/api/?results=10';
fetch(url).then((resp) => resp.json()).then(function(data) {
  // console.log(data.results);
  callback(data);
})
.catch(function(error) {
console.log(error);
});

function callback(data){
    if(!data){
        console.log("NO data");
    }else{
        console.log("callback fn() data : ")
        console.log(data)
    }

}

callback()
