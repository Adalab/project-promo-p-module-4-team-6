'use strict';

const data = {
    palette: '',
    name:'',
    job:'',
    photo:'',
    email: '',
    phone:'',
    linkedin: '',
    github: '',
};

'use strict';
//añadir los colapsables a las secciones
//abrir el colapsable que tenga el evento click
//cerrar todos los colapsables que no estén abiertos

/*CONSTANTS GLOBALES*/

const jsDesign = document.querySelector('.js-design');
const jsStuffed = document.querySelector('.js-stuffed');
const jsShare = document.querySelector('.js-share');
const jsArrow1 = document.querySelector('.js-arrow1');
const jsArrow2 = document.querySelector('.js-arrow2');
const jsArrow3 = document.querySelector('.js-arrow3');
const jsDesignContainer = document.querySelector('.js-design-container');
const jsStuffedContainer = document.querySelector('.js-stuffed-container');
const jsShareContainer = document.querySelector('.js-share-container');

/*FUNCIONES EVENTOS Y CONDICIONALES*/

jsDesignContainer.addEventListener('click',()=>{
  jsArrow1.classList.toggle('collapsible');
  if (jsDesign.classList.contains('hidden')) {
    jsDesign.classList.remove('hidden');
  } else {
    jsDesign.classList.add('hidden');
  }
});

jsStuffedContainer.addEventListener('click',()=>{
  jsArrow2.classList.toggle('collapsible');
  jsStuffed.classList.toggle('hidden');
});

jsShareContainer.addEventListener('click', ()=>{
  jsArrow3.classList.toggle('share-legend__arrow');
  jsShare.classList.toggle('hidden');
});


'use strict';
//añadir los colores a la tarjeta de preview
const radio1 = document.querySelector('.js_radio1');
const radio2 = document.querySelector('.js_radio2');
const radio3 = document.querySelector('.js_radio3');
const preview = document.querySelector('.js_preview');

function handleClickRadio1(){
  preview.classList.remove('palette2');
  preview.classList.remove('palette3');
  preview.classList.add('palette1');
  data.palette =  radio1.value;
}

function handleClickRadio2(){
  preview.classList.remove('palette1');
  preview.classList.remove('palette3');
  preview.classList.add('palette2');
  data.palette =  radio2.value;
}

function handleClickRadio3(){
  preview.classList.remove('palette1');
  preview.classList.remove('palette2');
  preview.classList.add('palette3');
  data.palette =  radio3.value;
}



radio1.addEventListener('click', handleClickRadio1);
radio2.addEventListener('click', handleClickRadio2);
radio3.addEventListener('click', handleClickRadio3);


// function handleAllRadios (event){
//   event.preventDefault();

// }

// const allRadios = document.querySelectorAll('.js_radio');
// for (const eachRadio of allRadios){
//   eachRadio.addEventListener('click', handleAllRadios);
//   console.log(allRadios);
// }


/*
const paletteValue = `palette${event.currentTarget.value}`;

    preview.classList.remove('palette1');
    preview.classList.remove('palette2');
    preview.classList.remove('palette3');

    preview.classList.add(paletteValue);
*/


'use strict';

//Lograr que cuando la usuaria carga una imagen suya se visualice en la tarjeta preview
//si no añade la usuaria su propia imagen, mostrar la imagen por defecto
//cuando la usuaria haga click en añadir imagen se previsualizará en la tarjeta

const fr = new FileReader();
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');


/**
 * Recoge el archivo añadido al campo de tipo "file"
 * y lo carga en nuestro objeto FileReader para que
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento} e
 */
function getImage(e){
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);

  
}


/**
 * Una vez tenemos los datos listos en el FR podemos
 * trabajar con ellos ;)
 */
function writeImage() {
  /* En la propiedad `result` de nuestro FR se almacena
   * el resultado. Ese resultado de procesar el fichero que hemos cargado
   * podemos pasarlo como background a la imagen de perfil y a la vista previa
   * de nuestro componente.
   */
  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
  data.photo = fr.result;
}


/**
 * Genera un click automático en nuesto campo de tipo "file"
 * que está oculto
 */

// function fakeFileClick() {
//   fileField.click();
// }

/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */
fileField.addEventListener('change', getImage);
'use strict';
////que se envien los datos del formulario y se previsualicen en la tarjeta
//
const dataContainer = document.querySelector('.js-stuffed-form');

const paintName = document.querySelector('.js-name');
const paintJob = document.querySelector('.js-profession');
const paintEmail = document.querySelector('.js-email');
const paintPhone = document.querySelector('.js-phone');
const paintLinkedin = document.querySelector('.js-linkedin');
const paintGit = document.querySelector('.js-git');
const paintRadios = document.querySelectorAll('.js_radio');

const inputName = document.querySelector (".js-forname");
const inputJob = document.querySelector (".js-forjob");
const inputImage = document.querySelector (".js-forimage");
const inputMail = document.querySelector(".js-formail");
const inputPhone = document.querySelector(".js-forphone");
const inputLkdn = document.querySelector ("js-forlkdn");
const inputGit = document.querySelector(".js-forgit");



function paintInput() {
  for (const eachRadio of paintRadios){
    paintRadios.addEventListener('click');
    console.log(eachRadio);
}
}

function paintData() {

  if (data.name === '') {
    paintName.textContent = 'Nombre Apellido';
  } else {
    paintName.innerHTML = data.name;
  }
  if (data.job === '') {
    paintJob.textContent = 'Front-end developer';
  } else {
    paintJob.innerHTML = data.job;
  }
  
  paintEmail.href = `mailto:${data.email}`;
  paintPhone.href = `tel:${data.phone}`;
  paintLinkedin.href = data.linkedin;
  paintGit.href = data.github;
}

function handleKeyData(event) {
  const elementTyping = event.target;
  if (elementTyping.name === 'name') {
    data.name = elementTyping.value;
  }
  //else if (elementTyping.value === 'palette2'){
   // data.palette = elementTyping.value;
  //}

  else if (elementTyping.name === 'profession') {
    data.job = elementTyping.value;
  }
  //
  //else if (elementTyping.name === 'image'){
  //  data.photo = elementTyping.value;
  //}
  else if (elementTyping.name === 'email') {
    data.email = elementTyping.value;
  }
  else if (elementTyping.name === 'phone') {
    data.phone = elementTyping.value;
  }
  else if (elementTyping.name === 'Linkedin') {
    data.linkedin = elementTyping.value;
  }
  else if (elementTyping.name === 'GitHub') {
    data.github = elementTyping.value;
  }
  paintData();
  paintInput();
}



dataContainer.addEventListener('keyup',handleKeyData);



//si la usuaria no rellena todos los datos que salte un error antes del envío al servidor
/* eslint-disable no-undef */
'use strict';
//se van a eliminar todos los campos y la imagen de la tarjeta
const resetBtn = document.querySelector('.js-reset');

const resetName= document.querySelector('.js_reset-name');
const resetJob= document.querySelector('.js_reset-job');
const resetMail= document.querySelector('.js_reset-mail');
const resetPhone= document.querySelector('.js_reset-phone');
const resetLinkedin= document.querySelector('.js_reset-linkedin');
const resetGit= document.querySelector('.js_reset-git');
const resetTitle = document.querySelector('.js_reset-title');
const resetSubtitle = document.querySelector('.js_reset-subtitle');
const resetTelf = document.querySelector('.js_reset-telf');
const resetSend = document.querySelector('.js_reset-send');
const resetLknd = document.querySelector('.js_reset-lknd');
const resetGitHub = document.querySelector('.js_reset-github');

function resetCard() {
  preview.classList.remove('palette1');
  preview.classList.remove('palette2');
  preview.classList.remove('palette3');
  resetTitle.textContent = 'Nombre Apellido';
  resetSubtitle.textContent = 'Front-end developer';
  profilePreview.style.backgroundImage='';
  profileImage.style.backgroundImage='';
  resetTelf.href = '';
  resetSend.href = '';
  resetLknd.href = '';
  resetGitHub.href = '';
}

function resetForm (){
  radio1.checked = '';
  resetName.value='';
  resetJob.value='';
  fileField.value= '';
  resetMail.value='';
  resetPhone.value='';
  resetLinkedin.value='';
  resetGit.value='';
  sectionLink.classList.add('hidden');
  buttonShare.classList.remove('button-grey');
}

function handleResetForm (event){
  event.preventDefault();
  resetForm ();
  resetCard ();
}

resetBtn.addEventListener('click', handleResetForm);
/* eslint-disable indent */
/* eslint-disable strict */
// 'use strict';
// //una vez que se ha rellenado el formulario y previsualizado la tarjeta
// //si pulsa el boton crear tarjeta
// //1. se enviará al servidor los datos del formulario
// //2. ((nos devuelve el servidor un link))//
// //3. quitamos la clase hidden de la segunda seccion de share----tambien se escribe el link generado
// //4. si la usuaria pincha en el boton twiter--->se comparte su enlace en twiter
// //5. al clickar en reset o modificar campos en el formulario el boton crear tarjeta vuelve a estar activa(naranja) y desaparecerá la segunda seccion de share

const buttonShare = document.querySelector('.js-button-share');
const shareLink = document.querySelector('.js-true');
const sectionLink = document.querySelector('.js-section-link');
const publicTwitter = document.querySelector('.js-btn-twitter');
const lknPublicTwitter = document.querySelector('.js-link-twitter');


function handleShareCard(event) {
  event.preventDefault();

  fetch('https://awesome-profile-cards.herokuapp.com/card/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  .then(function(resp) {
    return resp.json();
  })
  .then(function(result) {
    sectionLink.classList.remove('card-hidden');
    buttonShare.classList.add('button-grey');
    lknPublicTwitter.classList.add('link-twitter');
    showURL(result);
    handleButtonTwitter();
     });
}

  function showURL(result) {
    if (result.success) {
      shareLink.innerHTML = '<a class="share-newcard__link" target="blank" href=' + result.cardURL + '>' + result.cardURL + '</a>';
    } else {
      sectionLink.innerHTML = '¡¡Ups!!  No hemos podido generar tu tarjeta. Por favor, rellena todos los campos del formulario.';
     }
 }

buttonShare.addEventListener('click', handleShareCard);
publicTwitter.addEventListener('click',handleButtonTwitter);


function handleButtonTwitter (event) {
  event.preventDefault();
}

 /* publicTwitter.innerHTML = ``; */
//# sourceMappingURL=main.js.map
