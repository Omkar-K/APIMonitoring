var ajaxTime= new Date().getTime();
var url = sessionStorage.getItem("url");
var monitorTime = sessionStorage.getItem("monitorTime");
var interval = sessionStorage.getItem("interval");
var firebaseConfig = {
  apiKey: "AIzaSyBMpbWneTIHKksbO6sWHopoUfE62jsZMZA",
  authDomain: "monitorapi-3d096.firebaseapp.com",
  databaseURL: "https://monitorapi-3d096.firebaseio.com",
  projectId: "monitorapi-3d096",
  storageBucket: "monitorapi-3d096.appspot.com",
  messagingSenderId: "786388724856",
  appId: "1:786388724856:web:41393478dbeba7f4a0d18d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

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
    },
    error: function(xhr, status, error) {
      var err = eval("(" + xhr.responseText + ")");
      var err_code = eval("(" + xhr.status + ")");
      $('#response').append(JSON.stringify("Status: "+ err.error ))
      $('#response_code').append(JSON.stringify("Code: "+ err_code ))
      console.log(err_code);
    },
    complete: function(xhr, textStatus) {
      $('#response_code').append(JSON.stringify("Code: "+ xhr.status ))
        console.log(xhr.status);
    }
  }).done(function(data, response) {
    deepFetch(data);
    console.log(response)

    var totalTime = new Date().getTime()-ajaxTime;
    console.log(totalTime);
    console.log(data);

    $('#response').append(JSON.stringify("Status: "+ response ))
    $('#response_time').append(JSON.stringify("Time: "+ totalTime + "ms"))
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
