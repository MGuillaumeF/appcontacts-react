(this["webpackJsonpappcontacts-react"]=this["webpackJsonpappcontacts-react"]||[]).push([[0],{102:function(e,t,a){e.exports=a(125)},107:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),l=a.n(r),c=(a(107),a(18)),i=a(35),m=a(31),s=a(181),u=a(177),p=a(170),d=a(17),h=a(43),g=a(89),f=a(172),E=a(167),b=a(169),v=a(63),y=a(126),C=a(79),k=a.n(C),x=a(164),O=Object(x.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function A(){var e=Object(d.b)(),t=e.t,a=e.i18n,r=Object(n.useState)(h.a.language),l=Object(c.a)(r,2),m=l[0],s=l[1],u=h.a.languages,C=o.a.useState(null),x=Object(c.a)(C,2),A=x[0],j=x[1],N=function(){j(null)},T=O();return o.a.createElement("div",{className:T.root},o.a.createElement(E.a,{position:"static"},o.a.createElement(b.a,null,o.a.createElement(y.a,{edge:"start",color:"inherit","aria-label":"menu",className:T.menuButton,onClick:function(e){j(e.currentTarget)}},o.a.createElement(k.a,null)),o.a.createElement(v.a,{variant:"h6",className:T.title},o.a.createElement(i.b,{to:"/",style:{color:"inherit",textDecoration:"none"}},t("application-name"))),o.a.createElement(p.a,{variant:"contained",color:"secondary",onClick:function(){u.length>1&&(a.changeLanguage(u[1]),s(u[1]))}},m))),o.a.createElement(g.a,{id:"simple-menu",anchorEl:A,keepMounted:!0,open:Boolean(A),onClose:N},o.a.createElement(i.b,{style:{color:"inherit",textDecoration:"none"},to:"/"},o.a.createElement(f.a,{onClick:N},t("components.contact-list.link"))),o.a.createElement(i.b,{style:{color:"inherit",textDecoration:"none"},to:"/add"},o.a.createElement(f.a,{onClick:N},t("components.contact-form.link"))),o.a.createElement(i.b,{style:{color:"inherit",textDecoration:"none"},to:"/about"},o.a.createElement(f.a,{onClick:N},t("components.about-us.link")))))}var j=a(90),N={name:"",email:"",tel:""},T=n.createContext({});function P(e){var t=n.useState({currentContactId:1,contacts:[{id:0,email:"jean.dupont@email.fr",name:"DUPONT",tel:"012345689"}],dispatch:function(e){r((function(t){return function(e,t){switch(t.type){case"ADD_CONTACT":return console.log("add clicked",e,t),t.payload.id=e.currentContactId,{contacts:[t.payload].concat(Object(j.a)(e.contacts)),dispatch:e.dispatch,currentContactId:++e.currentContactId};case"DELETE_CONTACT":return console.log("delete clicked",e,t),{contacts:e.contacts.filter((function(e){return e.id!==t.payload.id})),dispatch:e.dispatch,currentContactId:e.currentContactId};default:return e}}(t,e)}))}}),a=Object(c.a)(t,2),o=a[0],r=a[1];return n.createElement(T.Provider,{value:o},e.children)}var S=T.Consumer,D=a(183),w=a(174),M=a(173),W=a(81),I=a.n(W),z=a(171),U=a(127),V=a(175),Z=a(176),$=a(83),_=a.n($),B=a(84),J=a.n(B),R=a(82),q=a.n(R);function G(e){var t=n.useState(!1),a=Object(c.a)(t,2),o=a[0],r=a[1];return n.createElement(S,null,(function(t){return n.createElement(D.a,{expanded:o,onChange:function(){return r((function(e){return!e}))}},n.createElement(M.a,{expandIcon:n.createElement(I.a,null),"aria-controls":"panel1bh-content",id:"panel1bh-header"},n.createElement(v.a,null,n.createElement(q.a,{style:{cursor:"pointer",float:"left",color:"red",marginRight:"1em"},onClick:function(){var a,n;a=e,n=t.dispatch,"undefined"!==typeof a.id&&n({type:"DELETE_CONTACT",payload:{id:a.id}})}}),e.name)),n.createElement(w.a,null,n.createElement(z.a,{"aria-label":"main contact"},n.createElement(U.a,{button:!0},n.createElement(V.a,null,n.createElement(_.a,null)),n.createElement(Z.a,{primary:e.tel})),n.createElement(U.a,{button:!0},n.createElement(V.a,null,n.createElement(J.a,null)),n.createElement(Z.a,{primary:e.email})))))}))}var L=a(178);function F(){var e=Object(d.b)().t;return n.useEffect((function(){console.log("The component is mounted")})),n.createElement(S,null,(function(t){return n.createElement(u.a,{maxWidth:"sm",className:"padding-1"},n.createElement(v.a,{variant:"h4",component:"h2",color:"textPrimary"},e("components.contact-list.title")),t.contacts.length>0?n.createElement(L.a,null,t.contacts.map((function(e){return n.createElement(G,{key:e.id,id:e.id,name:e.name,email:e.email,tel:e.tel})}))):n.createElement(v.a,{variant:"body1",component:"p",color:"textSecondary"},e("components.contact-list.empty-list")))}))}var H=a(91),K=a(179),Q=a(93),X=(a(124),a(182));function Y(e){var t=n.useState(e.value),a=Object(c.a)(t,2),o=a[0],r=a[1],l=function(){return!e.validatorPattern||e.validatorPattern.test(o)},i=function(t){return!e.limitorPattern||e.limitorPattern.test(t)};return n.createElement(X.a,{fullWidth:e.fullWidth,margin:e.margin,label:e.label,required:e.required,helperText:e.message?e.submited&&!l()?e.message.error||e.message.info||"":e.message.info||"":void 0,value:o,error:e.submited&&!l(),onChange:function(t){!function(t){var a=t;e.onChangeMutation&&(a=e.onChangeMutation(t)),e.limitorPattern&&0!==a.length&&!i(a)||(r(a),e.onChange(a))}(t.target.value)}})}function ee(e){var t=Object(d.b)().t,a=n.useState(N),o=Object(c.a)(a,2),r=o[0],l=o[1],i=n.useState(!1),m=Object(c.a)(i,2),s=m[0],h=m[1],g=[{name:"name",limitor:/^[A-Z\-]*$/,validator:/^[A-Z][A-Z\-]+$/,value:r.name,onChangeMutation:function(e){return e.toUpperCase().trim()},onChange:function(e){f(e,"name")}},{name:"email",limitor:/^[A-Za-z0-9\-_\.@]*$/,validator:/^[A-Za-z0-9\-_\.]+@[A-Za-z0-9\-_]+\.[A-Za-z]{2,4}$/,value:r.email,message:!0,onChange:function(e){f(e,"email")}},{name:"tel",limitor:/^((\+\d{0,11})|(\d{0,10}))$/,validator:/^(?:\+\d{11})|(?:\d{10})$/,value:r.tel,message:!0,onChange:function(e){f(e,"tel")}}],f=function(e,t){var a=Object(H.a)({},r);a[t]=e,l(a)},E=function(){var e=!0;return g.forEach((function(t){console.log(e,t.name,r,t.validator.test(t.value)),e=e&&t.validator.test(t.value)})),e};return n.createElement(S,null,(function(a){return n.createElement(u.a,{maxWidth:"sm",className:"padding-1"},n.createElement(Q.a,{className:"padding-1"},n.createElement("h2",null,t("components.contact-form.title")),n.createElement("form",{noValidate:!0,autoComplete:"off"},g.map((function(e,a){return n.createElement(Y,{key:a,fullWidth:!0,submited:s,margin:"normal",label:t("components.contact-form.inputs.".concat(e.name,".label")),required:!0,value:e.value,onChange:e.onChange,limitorPattern:e.limitor,validatorPattern:e.validator,onChangeMutation:e.onChangeMutation,message:e.message?{info:t("components.contact-form.inputs.".concat(e.name,".help-message")),error:t("components.contact-form.inputs.".concat(e.name,".error-message"))}:void 0})})),n.createElement(K.a,{fullWidth:!0,margin:"normal"},n.createElement(p.a,{variant:"contained",color:"primary",onClick:function(){!function(t){E()&&(t.dispatch({type:"ADD_CONTACT",payload:r}),l(N),e.history.push("/")),h(!0)}(a)}},t("components.contact-form.inputs.submit.text"))))))}))}function te(){var e=Object(d.b)().t;return n.createElement(u.a,{maxWidth:"sm",className:"padding-1"},n.createElement(v.a,{variant:"h4",component:"h2",color:"textPrimary"},e("components.about-us.title")),n.createElement(v.a,{variant:"body1",component:"p",color:"textSecondary"},e("components.about-us.description")),n.createElement(v.a,{variant:"body1",component:"p",color:"textSecondary"},e("components.about-us.author")),n.createElement(v.a,{variant:"body1",component:"p",color:"textSecondary"},e("components.about-us.version")))}function ae(){var e=Object(d.b)().t;return n.createElement(n.Fragment,null,n.createElement("h1",{className:"display-5 error"},e("component.error-pages.404.title")),n.createElement("p",null,e("component.error-pages.404.description")))}var ne=a(88),oe=a(180),re={light:Object(ne.a)({palette:{type:"light",primary:oe.a,secondary:oe.a}}),dark:Object(ne.a)({palette:{type:"dark",primary:oe.a,secondary:oe.a}})};var le=function(){var e=o.a.useState(re.light),t=Object(c.a)(e,2),a=t[0],r=t[1],l=Object(d.b)().t;return o.a.createElement(s.a,{theme:a},o.a.createElement(n.Suspense,{fallback:"loading"},o.a.createElement("div",{style:{minHeight:"100vh",marginTop:"0",zIndex:1,backgroundColor:a.palette.background.default}},o.a.createElement(P,null,o.a.createElement(i.a,null,o.a.createElement(A,null),o.a.createElement(u.a,null,o.a.createElement(m.c,null,o.a.createElement(m.a,{exact:!0,path:"/appcontacts-react",component:F}),o.a.createElement(m.a,{exact:!0,path:"/",component:F}),o.a.createElement(m.a,{exact:!0,path:"/add",component:ee}),o.a.createElement(m.a,{exact:!0,path:"/about",component:te}),o.a.createElement(m.a,{component:ae}))))),o.a.createElement(p.a,{style:{position:"absolute",bottom:"1em",left:"1em"},onClick:function(){r("light"===a.palette.type?re.dark:re.light)},variant:"contained",color:"default"},l("theme."+a.palette.type)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ce=a(85),ie=a(86),me=a(87),se={en:{translation:ce},fr:{translation:ie}};h.a.use(me.a).use(d.a).init({resources:se,fallbackLng:["en","fr"],debug:!0,interpolation:{escapeValue:!1}});h.a;l.a.render(o.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},85:function(e){e.exports=JSON.parse('{"application-name":"AppContacts","theme":{"light":"light","dark":"dark"},"components":{"contact-list":{"link":"Home","title":"My Contacts","empty-list":"No contacts found"},"contact-form":{"link":"Add","title":"Add a Contact","inputs":{"name":{"name":"Name","label":"Name..."},"email":{"name":"Email","label":"Email...","help-message":"We\'ll never share your email.","error-message":"Please enter a valid email"},"tel":{"name":"Telephone","label":"Telephone...","help-message":"Main telephone number","error-message":"Please enter a valid telephone number"},"submit":{"text":"ADD"}}},"about-us":{"link":"About Us","title":"About Us","description":"This application is a Contact list of Udemy React learning","author":"By MGuillaumeF","version":"Version 1.0.0"},"error-pages":{"404":{"title":"Error 404","description":"Page not found"}}}}')},86:function(e){e.exports=JSON.parse('{"application-name":"AppContacts","theme":{"light":"clair","dark":"sombre"},"components":{"contact-list":{"link":"Accueil","title":"Mes Contacts","empty-list":"Aucun contact enregistr\xe9"},"contact-form":{"link":"Ajouter","title":"Ajouter un Contact","inputs":{"name":{"name":"Nom","label":"Nom..."},"email":{"name":"Email","label":"Email...","help-message":"Vous ne devez jamais communiquer votre adresse email","error-message":"Veuillez saisir une adresse email valide"},"tel":{"name":"T\xe9l\xe9phone","label":"T\xe9l\xe9phone...","help-message":"Num\xe9ro de t\xe9l\xe9phone principal","error-message":"Veuillez saisir un num\xe9ro de t\xe9l\xe9phone valide"},"submit":{"text":"AJOUTER"}}},"about-us":{"link":"A propos","title":"A Propos","description":"Cette application est une liste de contact, issue d\'un cours React Udemy","author":"Par MGuillaumeF","version":"Version 1.0.0"},"error-pages":{"404":{"title":"Erreur 404","description":"Page non trouv\xe9e"}}}}')}},[[102,1,2]]]);
//# sourceMappingURL=main.671b2ff3.chunk.js.map