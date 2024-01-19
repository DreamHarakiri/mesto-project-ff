(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{IQ:()=>E,KC:()=>O,vi:()=>w,_t:()=>A});var t={baseUrl:"https://nomoreparties.co/v1/wff-cohort-4",headers:{authorization:"338afc41-7949-4f13-8ec0-c67084a2aa14","Content-Type":"application/json"}},n=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))};function r(e){e.classList.add("popup_is-animated","popup_is-opened"),document.addEventListener("keydown",c)}function o(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",c),setTimeout((function(){return e.classList.remove("popup_is-animated")}),600)}function c(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");t&&o(t)}}function u(e,t,n,o){var c=E.querySelector(".card").cloneNode(!0),u=c.querySelector(".card__image"),a=c.querySelector(".card__title"),i=c.querySelector(".like__counts"),s=c.querySelector(".card__like-button"),p=c.querySelector(".card__delete-button");return a.textContent=e.name,u.src=e.link,u.alt=e.name,i.textContent=e.likes.length,u.addEventListener("click",(function(){var t;t=e,w.src=t.link,w.alt=t.name,O.textContent=t.name,r(A)})),s.addEventListener("click",(function(){o(e,t,c)})),t!==e.owner._id?p.remove():p.addEventListener("click",(function(t){n(t,e._id)})),l(e,t)?s.classList.add("card__like-button_is-active"):s.classList.remove("card__like-button_is-active"),c}function a(e,r){(function(e){return fetch("".concat(t.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:t.headers}).then((function(e){return n(e)}))})(r).then((function(){return e.target.closest(".card").remove()})).catch((function(e){return console.log(e)}))}function i(e,r,o){var c,u=o.querySelector(".card__like-button"),a=o.querySelector(".like__counts");l(e,r)?(c=e._id,fetch("".concat(t.baseUrl,"/cards/likes/").concat(c),{method:"DELETE",headers:t.headers}).then((function(e){return n(e)}))).then((function(t){a.textContent=t.likes.length,u.classList.remove("card__like-button_is-active"),e.likes=t.likes})).catch((function(e){console.log(e)})):function(e){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:t.headers}).then((function(e){return n(e)}))}(e._id).then((function(t){a.textContent=t.likes.length,u.classList.add("card__like-button_is-active"),e.likes=t.likes})).catch((function(e){console.log(e)}))}function l(e,t){return e.likes.some((function(e){return e._id===t}))}var s=function(e,t){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove("popup__input_type_error"),n.classList.remove("popup__input-error_active"),n.textContent=""},p=function(e,t){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove("popup__button_disabled")):(t.disabled=!0,t.classList.add("popup__button_disabled"))},d=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);r.classList.add(t.inactiveButtonClass),r.disabled=!0,n.forEach((function(t){s(e,t),t.setCustomValidity("")}))};function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f=document.querySelector(".popup_type_new-card"),m=document.querySelector(".profile__add-button"),y=document.querySelector(".profile__edit-button"),v=document.querySelector(".popup_type_edit"),h=document.querySelector(".popup"),b=document.querySelector(".popup__button"),S=document.querySelectorAll(".popup"),q=document.querySelectorAll(".popup__close"),g=(document.querySelector(".opened-popup"),document.querySelector(".popup__input_type_card-name"),document.querySelector(".popup__input_type_url"),document.querySelector(".popup__form")),k=document.forms["new-place"],L=document.querySelector(".profile__image"),C=document.querySelector(".popup_type_avatar"),E=document.querySelector("#card-template").content,x=document.querySelector(".places__list"),A=document.querySelector(".popup_type_image"),w=A.querySelector(".popup__image"),O=A.querySelector(".popup__caption"),U=document.querySelector(".popup__input_type_name"),j=document.querySelector(".popup__input_type_description"),T=document.querySelector(".profile__title"),P=document.querySelector(".profile__description"),D=document.forms["new-place"],I=document.forms["edit-profile"],M=document.forms["edit-avatar"],B=M.querySelector(".popup__button"),N=document.querySelector(".profile__image"),J={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},V="";Promise.all([fetch("".concat(t.baseUrl,"/users/me"),{headers:t.headers}).then((function(e){return n(e)})),fetch("".concat(t.baseUrl,"/cards"),{headers:t.headers}).then((function(e){return n(e)}))]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,u,a=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(a.push(r.value),a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];V=o._id,T.textContent=o.name,P.textContent=o.about,console.log("Ид профиля: "+V+"Имя профиля:"+o.name),N.style.backgroundImage="url(".concat(o.avatar,")"),c.forEach((function(e){x.append(u(e,V,a,i))}))})).catch((function(e){return console.log("Ошибка:",e)})),g.addEventListener("submit",(function(e){var r,c;e.preventDefault(),"edit-profile"===e.target.getAttribute("name")&&(r=U.value,c=j.value,fetch("".concat(t.baseUrl,"/users/me"),{method:"PATCH",headers:t.headers,body:JSON.stringify({name:r,about:c})}).then((function(e){return n(e)})),T.textContent=U.value,P.textContent=j.value,o(h))})),k.addEventListener("submit",(function(e){if(e.preventDefault(),"new-place"===e.target.getAttribute("name")){var r=b.textContent;b.textContent="Сохранение..",(c=k.elements["place-name"].value,l=k.elements.link.value,fetch("".concat(t.baseUrl,"/cards"),{method:"POST",headers:t.headers,body:JSON.stringify({name:c,link:l})}).then((function(e){return n(e)}))).then((function(e){var t=u(e,V,a,i);x.prepend(t),k.reset(),console.log("test tuta"),o(f)})).catch((function(e){return console.log("данные не обработанны:",e)})).finally((function(){return b.textContent=r}))}var c,l})),M.addEventListener("submit",(function(e){if(e.preventDefault(),"edit-avatar"===e.target.getAttribute("name")){var r=B.textContent;B.textContent="Сохранение...",(o=M.link.value,fetch("".concat(t.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:t.headers,body:JSON.stringify({avatar:o})}).then((function(e){return n(e)}))).then((function(e){N.style.backgroundImage="url(".concat(e.avatar,")"),closeModal(popupAvatar)})).catch((function(e){console.log(e)})).finally((function(){return B.textContent=r}))}var o})),q.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){o(t)}))})),S.forEach((function(e){e.addEventListener("click",(function(t){t.target.classList===e.classList&&o(e)}))})),m.addEventListener("click",(function(){d(D,J),D.reset(),r(f)})),y.addEventListener("click",(function(){d(I,J),I.reset(),document.querySelector(".popup__input_type_name").value=T.textContent,document.querySelector(".popup__input_type_description").value=P.textContent,r(v)})),L.addEventListener("click",(function(){d(M,J),M.reset(),r(C)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e){var t=Array.from(e.querySelectorAll(".popup__input")),n=e.querySelector(".popup__button");p(t,n),t.forEach((function(r){r.addEventListener("input",(function(){!function(e,t){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?s(e,t):function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add("popup__input_type_error"),r.textContent=n,r.classList.add("popup__input-error_active")}(e,t,t.validationMessage)}(e,r),p(t,n)}))}))}(e)}))}(J)})();