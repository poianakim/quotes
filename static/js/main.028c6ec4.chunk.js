(this.webpackJsonpquotes=this.webpackJsonpquotes||[]).push([[0],{48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(2),r=n.n(c),s=n(29),i=n.n(s),o=n(4),u=n.n(o),l=n(10),j=n(6),d=n(5),b=n(8),p=n(14),h=n(22);n(37),n(39);h.a.initializeApp({apiKey:"AIzaSyAef8qIjnu82MunJScf7VzoLq1F2bm9YQo",authDomain:"quotes-6d35f.firebaseapp.com",databaseURL:"https://quotes-6d35f.firebaseio.com",projectId:"quotes-6d35f",storageBucket:"quotes-6d35f.appspot.com",messagingSenderId:"419429076627",appId:"1:419429076627:web:b624052634b1dbdf980766",measurementId:"G-H46M93ZX50"});var O=h.a,f=h.a.auth(),m=h.a.firestore(),x=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),i=Object(d.a)(s,2),o=i[0],l=i[1],b=Object(c.useState)(""),h=Object(d.a)(b,2),m=h[0],x=h[1],v=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?r(a):"password"===n&&l(a)},g=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),e.next=4,f.signInWithEmailAndPassword(n,o);case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),x(e.t0.message),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new O.auth.GoogleAuthProvider:"github"===n&&(a=new O.auth.GithubAuthProvider),e.next=4,f.signInWithPopup(a).then((function(e){e.user,e.credential}),(function(e){var t=e.email;e.credential;"auth/account-exists-with-different-credential"===e.code&&f.fetchSignInMethodsForEmail(t).then((function(e){}))}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"landing",children:[Object(a.jsx)("div",{className:"landingpage",children:Object(a.jsxs)("h4",{children:['"Sometimes ',Object(a.jsx)("br",{})," the Books ",Object(a.jsx)("br",{}),' Speak for you"']})}),Object(a.jsxs)("div",{className:"auth-form",children:[Object(a.jsxs)("form",{className:"container",onSubmit:g,children:[Object(a.jsx)("input",{className:"auth-form-1 row",onChange:v,name:"email",type:"email",placeholder:"Email",value:n,required:!0}),Object(a.jsxs)("div",{className:"auth-form-2 row",children:[Object(a.jsx)("input",{onChange:v,name:"password",type:"password",placeholder:"Password",value:o,required:!0}),Object(a.jsx)("input",{type:"submit",value:"Sign In"})]})]}),Object(a.jsxs)("div",{className:"create-acc-btns",children:[Object(a.jsx)("button",{onClick:w,name:"google",children:"Continue with Google"}),Object(a.jsx)("button",{onClick:w,name:"github",children:"Continue with Github"}),Object(a.jsx)(p.b,{to:"/createaccount",children:Object(a.jsx)("input",{type:"submit",value:" Sign Up with Email "})})]}),Object(a.jsx)("h3",{children:m})]})]})},v=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),i=Object(d.a)(s,2),o=i[0],l=i[1],b=Object(c.useState)(""),p=Object(d.a)(b,2),h=p[0],O=p[1],x=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?r(a):"password"===n&&l(a)},v=function(){var e=Object(j.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),e.next=4,f.createUserWithEmailAndPassword(n,o);case 4:return a=f.currentUser.uid,e.next=7,m.collection("profiles").doc(a).set({email:n,userUid:a,displayName:n});case 7:e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),O(e.t0.message),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{onSubmit:v,children:[Object(a.jsx)("input",{onChange:x,name:"email",type:"email",placeholder:"Email",value:n,required:!0}),Object(a.jsx)("input",{onChange:x,name:"password",type:"password",placeholder:"Password",value:o,required:!0}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"submit",value:"Create New Account"}),Object(a.jsx)("h3",{children:h})]})})},g=n(17),w=n.n(g),N=n(21),y=n.n(N),S=function(e){var t=e.quoteObj,n=e.userObj,r=Object(c.useState)(!1),s=Object(d.a)(r,2),i=s[0],o=s[1],l=Object(c.useState)(t.quote),b=Object(d.a)(l,2),h=b[0],O=b[1],f=Object(c.useState)(t.author),x=Object(d.a)(f,2),v=x[0],g=x[1],N=Object(c.useState)(t.title),S=Object(d.a)(N,2),q=S[0],k=S[1],A=function(e){var t=e.target,n=t.value,a=t.name;"title"===a?k(n):"author"===a&&g(n)},C=function(){var e=Object(j.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,m.doc("/quotes/".concat(t.id)).update({quote:h,author:v,title:q,updatedAt:Date.now()});case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure about deleting this quote?")){e.next=6;break}return e.next=4,m.doc("/quotes/".concat(t.id)).delete();case 4:e.next=7;break;case 6:return e.abrupt("return");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"quotes-list",children:i?Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("form",{onSubmit:C,children:[Object(a.jsx)(w.a,{onChange:function(e){var t=e.target.value;O(t)},className:"quote-edit",html:h}),Object(a.jsx)("input",{onChange:A,value:v,type:"text",name:"author",placeholder:"AUTHOR"}),Object(a.jsx)("input",{onChange:A,value:q,type:"text",name:"title",placeholder:"BOOK TITLE"}),Object(a.jsx)("input",{type:"submit",value:"Save this Update"})]})}):Object(a.jsxs)(a.Fragment,{children:[n.uid!==t.creatorId?Object(a.jsx)(p.b,{className:"link",to:"/".concat(t.creatorId),children:Object(a.jsx)("h4",{children:t.createdBy})}):Object(a.jsx)(p.b,{className:"link",to:"/profile",children:Object(a.jsx)("h4",{children:t.createdBy})}),Object(a.jsx)("p",{id:"created-at",children:y()(t.createdAt).format("LL")}),Object(a.jsx)(w.a,{className:"quote-content",html:t.quote,disabled:!0}),Object(a.jsxs)("div",{className:"quote-origin",children:[Object(a.jsxs)("p",{id:"quote-author",children:[t.author,", "]}),Object(a.jsxs)("p",{children:["\u300e",t.title,"\u300f"]}),Object(a.jsxs)("p",{children:["p. ",t.page]})]}),Object(a.jsx)("div",{className:"comment-section",children:Object(a.jsx)("p",{children:t.comment})}),n.uid===t.creatorId&&Object(a.jsxs)("div",{className:"quote-buttons",children:[Object(a.jsx)("button",{onClick:function(){o((function(e){return!e}))},children:"Update"}),Object(a.jsx)("button",{onClick:I,children:" Delete"})]})]})},t.id)},q=function(e){var t=e.userObj,n=(e.profiles,Object(c.useState)("")),r=Object(d.a)(n,2),s=r[0],i=r[1],o=Object(c.useState)(""),b=Object(d.a)(o,2),p=b[0],h=b[1],O=Object(c.useState)(""),x=Object(d.a)(O,2),v=x[0],g=x[1],N=Object(c.useState)([]),y=Object(d.a)(N,2),q=y[0],k=y[1],A=Object(c.useState)(""),C=Object(d.a)(A,2),I=C[0],E=C[1],U=Object(c.useState)(""),L=Object(d.a)(U,2),D=L[0],B=L[1],F=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=f.currentUser.uid,n=f.currentUser.displayName,a=f.currentUser.email,e.next=5,m.collection("profiles").doc(t).set({email:a,userUid:t,displayName:n});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){F(),m.collection("quotes").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(l.a)(Object(l.a)({},e.data()),{},{id:e.id})}));k(t)}))}),[]);var M=function(e){var t=e.target,n=t.name,a=t.value;"author"===n?h(a):"title"===n?g(a):"page"===n?E(a):"comment"===n&&B(a)};return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("span",{className:"share-quotes-label",children:"\ud83d\udcd6 Share Your Favorite Quotes \ud83d\udd8b"}),Object(a.jsxs)("form",{onSubmit:function(e){window.confirm("Do you want to post this quote?")&&(e.preventDefault(),m.collection("quotes").add({quote:s,author:p,title:v,page:I,comment:D,createdAt:Date.now(),creatorId:t.uid,createdBy:t.displayName}),i(""),h(""),g(""),E(""),B(""))},children:[Object(a.jsx)(w.a,{className:"quote-input",onChange:function(e){i(e.target.value)},html:s}),Object(a.jsxs)("div",{className:"row input-detail",children:[Object(a.jsx)("input",{className:"col-xs-6 col-md-3",id:"author-input",onChange:M,value:p,type:"text",name:"author",placeholder:"AUTHOR"}),Object(a.jsx)("input",{className:"col-xs-8 col-md-6",id:"title-input",onChange:M,value:v,type:"text",name:"title",placeholder:"BOOK TITLE"}),Object(a.jsx)("input",{className:"col-xs-4 col-md-2",id:"page-input",onChange:M,value:I,type:"text",name:"page",placeholder:"PAGE"})]}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:"row input-personal",children:[Object(a.jsx)("input",{className:"col-xs-12 col-md-10",id:"comment-input",onChange:M,type:"text",placeholder:"COMMENT",name:"comment",value:D,maxLength:140}),Object(a.jsx)("input",{className:"col-xs-6 col-md-1",id:"quote-submit",type:"submit",value:"post"})]})]}),Object(a.jsx)("div",{className:"row",children:q.map((function(e){return Object(a.jsx)(S,{quoteObj:e,userObj:t},e.id)}))})]})},k=function(e){var t=e.favAuthorObj,n=e.authorListEditMode,r=Object(c.useState)(""),s=Object(d.a)(r,2),i=s[0],o=s[1],l=function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.doc("fav-author/".concat(t.id)).delete();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(j.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.doc("fav-author/".concat(t.id)).update({favoriteAuthor:i,updatedAt:Date.now()});case 2:o(""),function(e){return!e};case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"profile-fav-author",children:[!n&&Object(a.jsx)("ul",{id:"fav-author-list",children:Object(a.jsx)("li",{children:t.favoriteAuthor})}),n&&Object(a.jsxs)("form",{onSubmit:b,children:[Object(a.jsx)("input",{onChange:function(e){var t=e.target.value;o(t)},value:i,type:"text",placeholder:t.favoriteAuthor}),Object(a.jsx)("input",{type:"submit",value:"submit change"}),Object(a.jsx)("button",{id:"delete-fav-author",onClick:l,children:"Delete"})]})]})},A=function(e){var t=e.userObj,n=Object(c.useState)([]),r=Object(d.a)(n,2),s=r[0],i=r[1],o=function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.collection("quotes").where("creatorId","==",t.uid).orderBy("createdAt").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(l.a)(Object(l.a)({},e.data()),{},{id:e.id})}));i(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){o()})),Object(a.jsx)("div",{className:"profile-quote-list",children:Object(a.jsx)("ul",{children:s.map((function(e){return Object(a.jsxs)("li",{children:[Object(a.jsx)("p",{className:"profile-created-at",children:y()(e.createdAt).format("LL")}),Object(a.jsx)(w.a,{className:"profile-quote-content",html:e.quote,disabled:!0}),Object(a.jsxs)("div",{className:"profile-quote-origin",children:[Object(a.jsxs)("p",{className:"profile-quote-author",children:[e.author,", "]}),Object(a.jsxs)("p",{children:["\u300e",e.title,"\u300f"]}),Object(a.jsxs)("p",{children:["p. ",e.page]})]}),Object(a.jsx)("div",{className:"comment-section",children:Object(a.jsx)("p",{children:e.comment})})]},e.id)}))})})},C=function(e){var t=e.userObj,n=Object(c.useState)(t.displayName),r=Object(d.a)(n,2),s=r[0],i=r[1],o=Object(c.useState)(""),p=Object(d.a)(o,2),h=p[0],O=p[1],x=Object(c.useState)([]),v=Object(d.a)(x,2),g=v[0],w=v[1],N=Object(c.useState)(!1),y=Object(d.a)(N,2),S=y[0],q=y[1],C=function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.collection("fav-author").where("creatorId","==",f.currentUser.uid).orderBy("createdAt").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(l.a)(Object(l.a)({},e.data()),{},{id:e.id})}));w(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){C()}),[]);var I=function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.currentUser.updateProfile({displayName:s});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m.collection("profiles").where("userUid","==",t.uid).get().then((function(e){var t=m.batch();e.docs.forEach((function(e){var n=m.collection("profiles").doc(e.id);t.update(n,{displayName:s})})),t.commit().then((function(){console.log("updated profile displayName done")}))}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m.collection("quotes").where("creatorId","==",t.uid).get().then((function(e){var t=m.batch();e.docs.forEach((function(e){var n=m.collection("quotes").doc(e.id);t.update(n,{createdBy:s})})),t.commit().then((function(){console.log("updated quotes done")}))}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(j.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,m.collection("fav-author").add({favoriteAuthor:h,creatorId:t.uid,createdAt:Date.now()});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=Object(b.g)(),B=function(){q((function(e){return!e}))};return Object(a.jsxs)("div",{children:[Object(a.jsxs)("h4",{className:"user-name",children:[t.displayName,"'s profile page"]}),Object(a.jsxs)("div",{className:"box",children:[Object(a.jsxs)("div",{className:"profile-fav-author",children:[Object(a.jsx)("h5",{className:"fav-authors",children:"My Favorite Writers"}),g.map((function(e){return Object(a.jsx)(k,{favAuthorObj:e,authorListEditMode:S},e.id)})),S?Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("form",{className:"row",children:[Object(a.jsx)("input",{onChange:function(e){var t=e.target.value;O(t)},type:"text",name:"favorite-author",value:h,placeholder:"Add a favorite author"}),Object(a.jsx)("input",{onClick:L,type:"submit",value:"Submit"})]}),Object(a.jsx)("button",{className:"fav-author-edit-btn row",onClick:B,children:"Edit Done"})]}):Object(a.jsx)("button",{className:"fav-author-edit-btn",onClick:B,children:"Edit List"})]}),Object(a.jsxs)("div",{className:"profile-quotes",children:[Object(a.jsxs)("h5",{children:[t.displayName,"'s quotes collection"]}),Object(a.jsx)(A,{userObj:t})]})]}),Object(a.jsxs)("form",{onSubmit:function(e){I(),E(),U()},className:"profile-edit row",children:[Object(a.jsx)("input",{type:"text",onChange:function(e){var t=e.target,n=t.name,a=t.value;"displayname"===n&&i(a)},value:s,name:"displayname",placeholder:"User Name",maxLength:"10"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{id:"username-update-btn",type:"submit",value:"Update Username"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{id:"sign-out",onClick:function(){f.signOut(),D.push("/")},children:"Sign Out"})]})},I=function(e){var t=e.profile,n=Object(c.useState)([]),r=Object(d.a)(n,2),s=r[0],i=r[1],o=function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.collection("quotes").orderBy("createdAt").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(l.a)(Object(l.a)({},e.data()),{},{id:e.id})}));i(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){o()})),Object(a.jsx)("div",{className:"profile-quote-list",children:Object(a.jsx)("ul",{children:s.map((function(e){return Object(a.jsx)("li",{children:e.creatorId===t.userUid&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{className:"profile-created-at",children:y()(e.createdAt).format("LL")}),Object(a.jsx)(w.a,{className:"profile-quote-content",html:e.quote,disabled:!0}),Object(a.jsxs)("div",{className:"profile-quote-origin",children:[Object(a.jsxs)("p",{className:"profile-quote-author",children:[e.author,", "]}),Object(a.jsxs)("p",{children:["\u300e",e.title,"\u300f"]}),Object(a.jsxs)("p",{children:["p. ",e.page]})]}),Object(a.jsx)("div",{className:"comment-section",children:Object(a.jsx)("p",{children:e.comment})})]})},e.id)}))})})},E=function(e){var t=e.profile,n=(e.userObj,Object(c.useState)([])),r=Object(d.a)(n,2),s=r[0],i=r[1],o=function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.collection("fav-author").where("creatorId","==",t.id).orderBy("createdAt").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(l.a)(Object(l.a)({},e.data()),{},{id:e.id})}));i(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){o()}),[]),Object(a.jsxs)("div",{children:[Object(a.jsxs)("h4",{className:"user-name",children:[t.displayName,"'s profile page"]}),Object(a.jsxs)("div",{className:"box",children:[Object(a.jsx)("div",{className:"profile-fav-author",children:Object(a.jsxs)("div",{children:[Object(a.jsxs)("h5",{className:"fav-authors",children:[t.displayName,"'s Favorite Writers"]}),Object(a.jsx)("ul",{children:s.map((function(e){return Object(a.jsx)("li",{children:e.favoriteAuthor},e.id)}))})]})}),Object(a.jsxs)("div",{className:"profile-quotes",children:[Object(a.jsxs)("h5",{children:[t.displayName,"'s quotes collection"]}),Object(a.jsx)(I,{profile:t})]})]})]})},U=function(){return Object(a.jsxs)("ul",{className:"navigation",children:[Object(a.jsx)("li",{children:Object(a.jsx)(p.b,{className:"link",to:"/",children:"Home"})}),Object(a.jsx)("li",{children:Object(a.jsx)(p.b,{className:"link",to:"/profile",children:"MyProfile"})})]})},L=function(e){var t=e.profiles,n=e.isLoggedIn,c=e.userObj,r=t.map((function(e){return Object(a.jsx)(b.b,{path:"/".concat(e.id),children:Object(a.jsx)(E,{profile:e,userObj:c})},e.id)}));return Object(a.jsxs)(p.a,{children:[n&&Object(a.jsx)(U,{userObj:c}),Object(a.jsx)(b.d,{children:n?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(b.b,{exact:!0,path:"/",children:Object(a.jsx)(q,{userObj:c,profiles:t})}),r,Object(a.jsx)(b.b,{exact:!0,path:"/profile",children:Object(a.jsx)(C,{userObj:c})})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(b.b,{exact:!0,path:"/",children:Object(a.jsx)(x,{})}),Object(a.jsx)(b.b,{exact:!0,path:"/createaccount",children:Object(a.jsx)(v,{})}),Object(a.jsx)(b.a,{from:"*",to:"/"})]})})]})},D=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!1),i=Object(d.a)(s,2),o=i[0],b=i[1],p=Object(c.useState)(null),h=Object(d.a)(p,2),O=h[0],x=h[1],v=Object(c.useState)([]),g=Object(d.a)(v,2),w=g[0],N=g[1],y=function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.collection("profiles").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(l.a)(Object(l.a)({},e.data()),{},{id:e.id})}));N(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){f.onAuthStateChanged((function(e){e?(b(!0),x(e)):b(!1),r(!0)})),y()}),[]),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h1",{className:"appTitle",children:'"Quotes"'}),n?Object(a.jsx)(L,{profiles:w,userObj:O,isLoggedIn:o}):"Inizializing",Object(a.jsxs)("footer",{children:['\xa9"Quotes" ',(new Date).getFullYear(),Object(a.jsx)("br",{}),"by ",Object(a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/poianakim",children:"POIANA KIM"})]})]})};n(48);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(D,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.028c6ec4.chunk.js.map