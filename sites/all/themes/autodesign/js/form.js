window.onload = prepareForm;

function prepareForm() {
  if(!document.getElementById) {
    return;
  }
  if(!document.getElementById("contactform")) {
    return;
  }
  document.getElementById("contactform").onsubmit = function() {
    var data = "";
    for (var i=0; i<this.elements.length; i++) {
      data+= this.elements[i].name;
      data+= "=";
      data+= escape(this.elements[i].value);
      data+= "&";
    }
    return !sendData(data);
  };
}

function sendData(data) {
  var request = getHTTPObject();
  if (request) {
    displayLoading(document.getElementById("contactform"));
    request.onreadystatechange = function() {
      parseResponse(request);
    };
    request.open( "POST", "/inc/incContactForm.php", true );
    request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    request.send(data);
    document.getElementById("submit").disabled = true;
    return true;
  } else {
    return false;
  }
}

function parseResponse(request) {
  if (request.readyState == 4) {
    if (request.status == 200 || request.status == 304) {
      var container = document.getElementById("formContainer");
      container.innerHTML = request.responseText;
      /*fadeUpErrors(container);*/
      prepareForm();
    }
  }
}

function getHTTPObject() {
  var xhr = false;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    try {
      xhr = new ActiveXObject("Msxml2.XMLHTTP");
    } catch(e) {
      try {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      } catch(e) {
        xhr = false;
      }
    }
  }
  return xhr;
}

function displayLoading(element) {
  var image = document.createElement("img");
  image.setAttribute("src","/images/loader.gif");
  image.setAttribute("alt","Laddar...");
  element.appendChild(image);
}

//function fadeUp(element,red,green,blue) {
//  if (element.fade) {
//    clearTimeout(element.fade);
//  }
//  element.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
//  if (red == 255 && green == 255 && blue == 255) {
//    return;
//  }
//  var newred = red + Math.ceil((255 - red)/10);
//  var newgreen = green + Math.ceil((255 - green)/10);
//  var newblue = blue + Math.ceil((255 - blue)/10);
//  var repeat = function() {
//    fadeUp(element,newred,newgreen,newblue)
//  };
//  element.fade = setTimeout(repeat,100);
//}
//
//function fadeUpErrors(element) {
//  var messages = element.getElementsByTagName("strong");
//  for (var i=0; i<messages.length; i++) {
//    if (messages[i].className == "error") {
//      fadeUp(messages[i],255,153,153);
//    }
//  }
//}