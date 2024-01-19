(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{IQ:()=>C,KC:()=>w,vi:()=>x,_t:()=>A});var t={baseUrl:"https://nomoreparties.co/v1/wff-cohort-4",headers:{authorization:"338afc41-7949-4f13-8ec0-c67084a2aa14","Content-Type":"application/json"}},n=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))};function r(e){e.classList.add("popup_is-animated","popup_is-opened"),document.addEventListener("keydown",c)}function o(e){e.classList.remove("popup_is-opened"),setTimeout((function(){return e.classList.remove("popup_is-animated")}),600)}function c(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");t&&o(t)}}function u(e,t,n,o){var c=C.querySelector(".card").cloneNode(!0),u=c.querySelector(".card__image"),a=c.querySelector(".card__title"),l=c.querySelector(".like__counts"),s=c.querySelector(".card__like-button"),p=c.querySelector(".card__delete-button");return a.textContent=e.name,u.src=e.link,u.alt=e.name,l.textContent=e.likes.length,u.addEventListener("click",(function(){var t,n;t=e.link,n=e.name,x.src=t,x.alt=n,w.textContent=n,r(A)})),s.addEventListener("click",(function(){i(e,t,c)})),t!==e.owner._id?p.remove():p.addEventListener("click",(function(t){n(t,e._id)})),c}function a(e,r){(function(e){return fetch("".concat(t.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:t.headers}).then((function(e){return n(e)}))})(r).then((function(){return e.target.closest(".card").remove()})).catch((function(e){return console.log(e)}))}function i(e,r,o){var c,u=o.querySelector(".card__like-button"),a=o.querySelector(".like__counts");!function(e,t){return e.likes.some((function(e){return e._id===t}))}(e,r)?function(e){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:t.headers}).then((function(e){return n(e)}))}(e._id).then((function(t){a.textContent=t.likes.length,u.classList.add("card__like-button_is-active"),e.likes=t.likes})).catch((function(e){console.log(e)})):(c=e._id,fetch("".concat(t.baseUrl,"/cards/likes/").concat(c),{method:"DELETE",headers:t.headers}).then((function(e){return n(e)}))).then((function(t){a.textContent=t.likes.length,u.classList.remove("card__like-button_is-active"),e.likes=t.likes})).catch((function(e){console.log(e)}))}var l=function(e,t){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove("popup__input_type_error"),n.classList.remove("popup__input-error_active"),n.textContent=""},s=function(e,t){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove("popup__button_disabled")):(t.disabled=!0,t.classList.add("popup__button_disabled"))},p=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);r.classList.add(t.inactiveButtonClass),r.disabled=!0,n.forEach((function(t){l(e,t),t.setCustomValidity("")}))};function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f=document.querySelector(".popup_type_new-card"),_=document.querySelector(".profile__add-button"),m=document.querySelector(".profile__edit-button"),y=document.querySelector(".popup_type_edit"),v=document.querySelector(".popup"),h=document.querySelector(".popup__button"),b=document.querySelectorAll(".popup"),S=document.querySelectorAll(".popup__close"),q=(document.querySelector(".opened-popup"),document.querySelector(".popup__input_type_card-name"),document.querySelector(".popup__input_type_url"),document.querySelector(".popup__form")),g=document.forms["new-place"],k=document.querySelector(".profile__image"),L=document.querySelector(".popup_type_avatar"),C=document.querySelector("#card-template").content,E=document.querySelector(".places__list"),A=document.querySelector(".popup_type_image"),x=A.querySelector(".popup__image"),w=A.querySelector(".popup__caption"),O=document.querySelector(".popup__input_type_name"),U=document.querySelector(".popup__input_type_description"),j=document.querySelector(".profile__title"),T=document.querySelector(".profile__description"),P=document.forms["new-place"],D=document.forms["edit-profile"],I=document.forms["edit-avatar"],M=I.querySelector(".popup__button"),B=document.querySelector(".profile__image"),N={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},J="";Promise.all([fetch("".concat(t.baseUrl,"/users/me"),{headers:t.headers}).then((function(e){return n(e)})),fetch("".concat(t.baseUrl,"/cards"),{headers:t.headers}).then((function(e){return n(e)}))]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,u,a=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(a.push(r.value),a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];J=o._id,j.textContent=o.name,T.textContent=o.about,console.log("Ид профиля: "+J+"Имя профиля:"+o.name),B.style.backgroundImage="url(".concat(o.avatar,")"),c.forEach((function(e){E.append(u(e,J,a))}))})).catch((function(e){return console.log("Ошибка:",e)})),q.addEventListener("submit",(function(e){var r,c;e.preventDefault(),"edit-profile"===e.target.getAttribute("name")&&(r=O.value,c=U.value,fetch("".concat(t.baseUrl,"/users/me"),{method:"PATCH",headers:t.headers,body:JSON.stringify({name:r,about:c})}).then((function(e){return n(e)})),j.textContent=O.value,T.textContent=U.value,o(v))})),g.addEventListener("submit",(function(e){if(e.preventDefault(),"new-place"===e.target.getAttribute("name")){var r=h.textContent;h.textContent="Сохранение..",(c=g.elements["place-name"].value,a=g.elements.link.value,fetch("".concat(t.baseUrl,"/cards"),{method:"POST",headers:t.headers,body:JSON.stringify({name:c,link:a})}).then((function(e){return n(e)}))).then((function(e){var t=u(e,J,i);E.prepend(t),g.reset(),console.log("test tuta"),o(f)})).catch((function(e){return console.log("данные не обработанны:",e)})).finally((function(){return h.textContent=r}))}var c,a})),I.addEventListener("submit",(function(e){if(e.preventDefault(),"edit-avatar"===e.target.getAttribute("name")){var r=M.textContent;M.textContent="Сохранение...",(o=I.link.value,fetch("".concat(t.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:t.headers,body:JSON.stringify({avatar:o})}).then((function(e){return n(e)}))).then((function(e){B.style.backgroundImage="url(".concat(e.avatar,")"),closeModal(popupAvatar)})).catch((function(e){console.log(e)})).finally((function(){return M.textContent=r}))}var o})),S.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){o(t)}))})),b.forEach((function(e){e.addEventListener("click",(function(t){t.target.classList===e.classList&&o(e)}))})),_.addEventListener("click",(function(){p(P,N),P.reset(),r(f)})),m.addEventListener("click",(function(){p(D,N),D.reset(),r(y)})),k.addEventListener("click",(function(){p(I,N),I.reset(),r(L)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e){var t=Array.from(e.querySelectorAll(".popup__input")),n=e.querySelector(".popup__button");s(t,n),t.forEach((function(r){r.addEventListener("input",(function(){!function(e,t){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?l(e,t):function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add("popup__input_type_error"),r.textContent=n,r.classList.add("popup__input-error_active")}(e,t,t.validationMessage)}(e,r),s(t,n)}))}))}(e)}))}(N)})();