document.getElementById("btn").onclick = function() {getAPIURL()};
function getAPIURL() {
              console.time("timer");
              // Selecting the input element and get its value
              const proxyurl = "https://cors-anywhere.herokuapp.com/";
              var url = document.getElementById("url").value;
              if(key!='') {
                var key = document.getElementById("key").value;
                var value = document.getElementById("value").value;
                url = url + "?" + key + "=" +value;
              }
              const options = {
                headers: {
                  completed: true
                }
              };
              // Displaying the value
              console.log(url);
              document.getElementById("value").innerHTML = "urlStr";
              fetch(proxyurl +url)
                  .then(res => res.json())
                  .then(res => {
                          console.log(res);
                          displayAPIInfo(res);
                  })
                  .catch(err => {
                      console.log(err);
                  });

          }
function displayAPIInfo(data) {
              var urlStr = JSON.stringify(data);
              console.log("In display");
              console.log(data.status || data.response_code);
              document.getElementById("info").innerHTML = urlStr;
              console.timeEnd("timer");
          }
