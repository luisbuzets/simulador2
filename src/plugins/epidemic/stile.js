var Input1 = document.querySelector('#control_people_speed');
Input1.style.setProperty("--value", Input1.value);

if (Input1) {
  var w = parseInt(window.getComputedStyle(Input1, null).getPropertyValue('width'));

Input1.addEventListener("input", function(evt) {
  Input1.style.setProperty("--value", Input1.value);
},false);

//para la etiqueta
var etq = document.querySelector('.etiqueta');
if (etq) {
  
  etq.innerHTML = Input.value+"%";

  var pxls = w / 100;

  etq.style.left = ((Input.value * pxls) - 15) + 'px';

  Input.addEventListener('input', function() {
    
    etq.innerHTML = Input.value+"%";
    etq.style.left = ((Input.value * pxls) - 15) + 'px';

  }, false);
}
}

/******************************************/

var Inpute = document.querySelector('#control_infection_rate');
Inpute.style.setProperty("--value", Inpute.value);

if (Inpute) {
  var w = parseInt(window.getComputedStyle(Inpute, null).getPropertyValue('width'));

Inpute.addEventListener("input", function(evt) {
  Inpute.style.setProperty("--value", Inpute.value);
},false);

//para la etiqueta
var etq = document.querySelector('.etiqueta');
if (etq) {
  
  etq.innerHTML = Input.value+"%";

  var pxls = w / 100;

  etq.style.left = ((Input.value * pxls) - 15) + 'px';

  Input.addEventListener('input', function() {
    
    etq.innerHTML = Input.value+"%";
    etq.style.left = ((Input.value * pxls) - 15) + 'px';

  }, false);
}
}


/******************************************/

var Inputu = document.querySelector('#control_lethality_rate');
Inputu.style.setProperty("--value", Inputu.value);

if (Inputu) {
  var w = parseInt(window.getComputedStyle(Inputu, null).getPropertyValue('width'));

Inputu.addEventListener("input", function(evt) {
  Inputu.style.setProperty("--value", Inputu.value);
},false);

//para la etiqueta
var etq = document.querySelector('.etiqueta');
if (etq) {
  
  etq.innerHTML = Input.value+"%";

  var pxls = w / 100;

  etq.style.left = ((Input.value * pxls) - 15) + 'px';

  Input.addEventListener('input', function() {
    
    etq.innerHTML = Input.value+"%";
    etq.style.left = ((Input.value * pxls) - 15) + 'px';

  }, false);
}
}

/******************************************/

var Inputo = document.querySelector('#control_asymptomatic_rate');
Inputo.style.setProperty("--value", Inputo.value);

if (Inputo) {
  var w = parseInt(window.getComputedStyle(Inputo, null).getPropertyValue('width'));

Inputo.addEventListener("input", function(evt) {
  Inputo.style.setProperty("--value", Inputo.value);
},false);

//para la etiqueta
var etq = document.querySelector('.etiqueta');
if (etq) {
  
  etq.innerHTML = Input.value+"%";

  var pxls = w / 100;

  etq.style.left = ((Input.value * pxls) - 15) + 'px';

  Input.addEventListener('input', function() {
    
    etq.innerHTML = Input.value+"%";
    etq.style.left = ((Input.value * pxls) - 15) + 'px';

  }, false);
}
}


/******************************************/

var Input = document.querySelector('#control_intensive_care_rate');
Input.style.setProperty("--value", Input.value);

if (Input) {
  var w = parseInt(window.getComputedStyle(Input, null).getPropertyValue('width'));

Input.addEventListener("input", function(evt) {
  Input.style.setProperty("--value", Input.value);
},false);

//para la etiqueta
var etq = document.querySelector('.etiqueta');
if (etq) {
  
  etq.innerHTML = Input.value+"%";

  var pxls = w / 100;

  etq.style.left = ((Input.value * pxls) - 15) + 'px';

  Input.addEventListener('input', function() {
    
    etq.innerHTML = Input.value+"%";
    etq.style.left = ((Input.value * pxls) - 15) + 'px';

  }, false);
}
}
