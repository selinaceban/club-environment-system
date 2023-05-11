//I want to get json temprature data from an API and display it on my website


// 1. Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest()

// 2. Configure it: GET-request for the URL /article/.../load
xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=2a5b0f4b0b0c4b0b0b0b0b0b0b0b0b0b', true)

// 3. Send the request over the network
xhr.send()

// 4. This will be called after the response is received
xhr.onload = function() {
    if (xhr.status != 200) { // analyze HTTP status of the response
        alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
    } else { // show the result
        alert(`Done, got ${xhr.response.length} bytes`); // response is the server response
    }
    }

    xhr.onprogress = function(event) {
        if (event.lengthComputable) {
          alert(`Received ${event.loaded} of ${event.total} bytes`);
        } else {
          alert(`Received ${event.loaded} bytes`); // no Content-Length
        }
      }

        xhr.onerror = function() {
            alert("Request failed");
          }




