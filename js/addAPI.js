
var numberOfInputs = 1;

// var firebase = require("../firebase/app");
// require("../firebase/database");
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

function getAPIURL() {
      console.time("timer");
      // Selecting the input element and get its value
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      var url = document.getElementById("url").value;
      var key = document.getElementById("key").value;
      var value = document.getElementById("value").value;
      console.log(key);
      if(key!='') {

        url = url + "?" + key + "=" +value;
        console.log(numberOfInputs);
        if(numberOfInputs > 0) {
          for(i=1;i<numberOfInputs;i++) {
            var tempKey = document.getElementById("key"+i).value
            var tempValue = document.getElementById("value"+i).value
            if(tempKey != '' || tempValue != '')
              url = url + "&" + tempKey + "=" + tempValue;
            console.log(url);
          }
        }
      }
      if(monitorTime!='' && interval!='') {
        var monitorTime = document.getElementById("monitorTime").value;
        var interval = document.getElementById("interval").value;
        console.log(monitorTime);
      }

      console.log(url);
      document.getElementById("value").innerHTML = "urlStr";

      sendData();
}
function displayAPIInfo(data) {
      var urlStr = JSON.stringify(data);
      console.log("In display");
      console.log(data.status || data.response_code);
      document.getElementById("info").innerHTML = urlStr;
      console.timeEnd("timer");
}
function sendData() {


      // database.ref('api').push({
      //   url: url,
      //   monitorTime: monitorTime,
      //   interval: interval
      // });
      // sessionStorage.setItem("url", url);
      // sessionStorage.setItem("monitorTime", monitorTime);
      // sessionStorage.setItem("interval", interval);
      window.location.href = 'listAPI.html';

}
function addKeyValue() {

  var container = document.getElementById("keyvalue");
  var inputKey = document.createElement("input");
  var inputValue = document.createElement("input");

  inputKey.type = "text";
  inputValue.type = "text";
  inputKey.id = "key"+numberOfInputs;
  inputValue.id = "value"+numberOfInputs;
  inputKey.placeholder = "Key";
  inputValue.placeholder = "Value";
  console.log(inputKey.id);
  container.appendChild(inputKey);
  container.appendChild(inputValue);
  container.appendChild(document.createElement("br"));

  numberOfInputs = numberOfInputs + 1;
  console.log(numberOfInputs);
}
