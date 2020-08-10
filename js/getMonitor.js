var ajaxTime= new Date().getTime();
var url = sessionStorage.getItem("url");
var monitorTime = sessionStorage.getItem("monitorTime");
var interval = sessionStorage.getItem("interval");

console.log(url);
$('#monitorTime').append(JSON.stringify("Your test will run for "+ monitorTime +" hour(s)"))


var finishTime = new Date();
finishTime.setHours(monitorTime);
console.log(new Date()<=finishTime);
var count = 0;
var ms = interval * 60000;
//while(new Date() >= finishTime) {
  ajaxTime= new Date().getTime();
  console.log(new Date() >= finishTime);
  //var callAPI = setInterval(APIFetch(), ms);
  APIFetch();
//}
function APIFetch() {
  $.ajax({
    url: url,
    headers: {
    }
  }).done(function(data, response) {
    deepFetch(data);
    console.log(response)

    var totalTime = new Date().getTime()-ajaxTime;
    console.log(totalTime);
    console.log(data);
  });

  // for(var i=0;i<interval*60000;i++)
  // {
  //   console.log("time");
  // }
  // if(count>2)
  //   clearInterval(callAPI)
  //
  // count = count + 1;
  // console.log(count,"itereation");
}
function hasProperty(obj){
  if (typeof obj === 'object' && typeof obj != null ) {

        for (var k in obj) {
            if (obj.hasOwnProperty(k)) {
                return true;
            }
        }
    }
    return false;
};
function deepFetch(data){
  var stringData = {};
  var i = 0;
  if(typeof data === 'object'  && typeof obj != null ) {
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        if(hasProperty(data[key])){
          //console.log("in data");
          deepFetch(data[key]);
          //console.log("exit");
        }
        else{
          stringData[i] = key+" : "+data[key];
          var para = document.createElement("P");               // Create a <p> element
          para.innerText = stringData[i];               // Insert text
          document.getElementById("monitor_data").appendChild(para);
          i++;
        }
      }
    }
  }
  else {
    var para = document.createElement("P");               // Create a <p> element
    para.innerText = data;            // Insert text
    document.getElementById("monitor_data").appendChild(para);
  }
};
