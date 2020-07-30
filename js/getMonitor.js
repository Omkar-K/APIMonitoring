var ajaxTime= new Date().getTime();
$.ajax({
  url: "https://jsonplaceholder.typicode.com/posts",
  headers: {
    "id" : "4"
  }
}).done(function(data) {
  $('#monitor_data').append(JSON.stringify(data))
  var totalTime = new Date().getTime()-ajaxTime;
  console.log(totalTime);
});
console.log(data);
