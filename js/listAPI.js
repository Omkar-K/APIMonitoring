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
var ref = firebase.database().ref('api');
getAPI();

function getAPI() {
    var i = 0;
    var container = document.getElementById("list");
    ref.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();

      console.log(childData.url);
      var list = document.createElement("P");
      var btn = document.createElement("BUTTON");
      list.innerText = childData.url;
      btn.innerHTML = "Take a look";
      btn.id = childKey;
      btn.onclick = function() {
        gotoAPI(childData.url,
          childData.monitorTime,
          childData.interval,
          childData.numberOfUsers,
          childData.APIType)
      }
      container.appendChild(list);
      container.appendChild(btn);
      container.appendChild(document.createElement("br"));

      });
    });
  }
function gotoAPI(url, monitorTime, interval, users, apiType) {

  sessionStorage.setItem("url", url);
  sessionStorage.setItem("monitorTime", monitorTime);
  sessionStorage.setItem("interval", interval);
  sessionStorage.setItem("users", users);

  if(apiType=="publicAPI")
    window.location.href = 'publicMonitorAPI.html';
  else
    window.location.href = 'privateMonitorAPI.html';
}
