(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{202:function(e,t,a){e.exports=a(360)},207:function(e,t,a){},360:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),i=(a(207),a(19)),o=a(69),s=a(21),u=a(47),m=a(68),d=a.n(m),E=a(15),p=a(33),f=a.n(p),b=a(65),g=a.n(b),h=a(20),v=a.n(h),x=a(60),O=a.n(x),y=a(64),j=a.n(y),C=a(62),w=a.n(C),k=a(63),S=a.n(k),B=a(61),N=a.n(B),P=a(59),T=a.n(P),W=a(136),q=a.n(W),D=a(26),M=a.n(D),z=a(58),A=a.n(z),F=a(42),G=a.n(F),L=a(25),I=a.n(L),J=a(43),R=a.n(J),U=a(41),V=a.n(U),Y=a(44),$=a.n(Y),H={title:"",description:"",muscles:"",id:""},K=Object(E.withStyles)(function(e){return{button:{margin:e.spacing.unit}}})(function(e){var t=e.classes,a=e.exercise,c=e.open,l=e.setOpen,o=e.editMode,s=e.onCreateExercise,m=e.onSaveEdit,d=e.muscles,E=Object(n.useState)(H),p=Object(i.a)(E,2),f=p[0],b=p[1];Object(n.useEffect)(function(){b(c?H:a)},[a,c]);var g=function(e,t){var a=Object(u.a)({},f);a[e.target.name]=t?t.key:e.target.value,b(a)},h=!f.title||!f.muscles;return r.a.createElement("form",null,r.a.createElement(I.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement($.a,{name:"title",label:"Title",onChange:g,margin:"normal",value:f.title})),r.a.createElement(I.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(V.a,null,"Muscle group"),r.a.createElement(R.a,{value:f.muscles,name:"muscles",onChange:g},d.map(function(e){return r.a.createElement(A.a,{key:e,value:e},e)})),r.a.createElement(G.a,null,"Required")),r.a.createElement(I.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement($.a,{name:"description",label:"Description",multiline:!0,rows:4,onChange:g,margin:"normal",value:f.description})),o?r.a.createElement(M.a,{className:t.button,variant:"contained",onClick:function(){m(f)},color:"secondary",disabled:h},"Save"):r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{className:t.button,variant:"contained",onClick:function(){return l(!1)},color:"secondary"},"Cancel"),r.a.createElement(M.a,{className:t.button,variant:"contained",onClick:function(){var e=Object(u.a)({},f,{id:f.title.toLowerCase().replace(/ /g,"-")});s(e),b(H),l(!1)},color:"secondary",disabled:h},"Add")))}),Q=function(e){var t=e.muscles,a=e.onCreateExercise,c=Object(n.useState)(!1),l=Object(i.a)(c,2),o=l[0],s=l[1];return r.a.createElement("div",null,r.a.createElement(T.a,{color:"secondary",size:"medium",onClick:function(){return s(!0)}},r.a.createElement(q.a,null)),r.a.createElement(O.a,{open:o,onClose:function(){return s(!1)},"aria-labelledby":"form-dialog-title"},r.a.createElement(N.a,{id:"form-dialog-title"},"Create new exercise"),r.a.createElement(w.a,null,r.a.createElement(S.a,null,"Fill out the form below."),r.a.createElement(K,{onCreateExercise:a,setOpen:s,open:!0,muscles:t})),r.a.createElement(j.a,null)))},X=Object(E.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(function(e){var t=e.classes,a=e.onCreateExercise;return r.a.createElement(f.a,{position:"static"},r.a.createElement(g.a,null,r.a.createElement(v.a,{variant:"h6",color:"inherit",className:t.grow},"Workouts"),r.a.createElement(Q,{muscles:e.muscles,onCreateExercise:a})))}),Z=a(66),_=a.n(Z),ee=a(45),te=a.n(ee),ae=a(67),ne=a.n(ae)()()(function(e){var t=e.muscles,a=e.category,n=e.onSelect,c=e.width,l=a?t.findIndex(function(e){return e===a})+1:0;return r.a.createElement(f.a,{position:"static"},r.a.createElement(_.a,{onChange:function(e,a){n(0===a?"":t[a-1])},value:l,indicatorColor:"secondary",textColor:"secondary",centered:"xs"!==c,variant:"xs"===c?"scrollable":"standard"},r.a.createElement(te.a,{label:r.a.createElement(v.a,{variant:"subtitle1",style:{textTransform:"capitalize"}},"All")}),t.map(function(e){return r.a.createElement(te.a,{key:e,label:r.a.createElement(v.a,{variant:"subtitle1",style:{textTransform:"capitalize"}},e)})})))}),re=a(16),ce=a(137),le=a.n(ce),ie=a(138),oe=a.n(ie),se=Object(E.withStyles)(function(e){var t;return{Paper:(t={padding:2*e.spacing.unit,overflowY:"auto"},Object(s.a)(t,e.breakpoints.up("sm"),{height:"calc(100vh - 64px - 48px)"}),Object(s.a)(t,e.breakpoints.down("xs"),{height:"calc(50vh - 28px - 24px)"}),Object(s.a)(t,"@global",{"html, body, #root":{height:"100%"}}),Object(s.a)(t,"Container",{height:"100%"}),t)}})(function(e){var t=e.classes,a=e.exercises,c=e.category,l=e.onSelect,o=e.onDelete,s=e.onEdit,u=e.muscles,m=e.onCreate,d=e.onEditSelect,E=e.exercise,p=Object(n.useState)(!1),f=Object(i.a)(p,2),b=f[0],g=f[1],h=E.title,v=void 0===h?"Welcome!":h,x=E.description,O=void 0===x?"Please select an exercise on the left.":x;return r.a.createElement(re.a,{container:!0,className:t.Container},r.a.createElement(re.a,{item:!0,xs:12,sm:6},r.a.createElement(re.g,{className:t.Paper},a.map(function(e){var t=Object(i.a)(e,2),a=t[0],n=t[1];return c&&c!==a?null:r.a.createElement("div",{key:a},r.a.createElement(re.h,{variant:"h5",style:{textTransform:"capitalize"}},a),r.a.createElement(re.c,{component:"ul"},n.map(function(e){var t=e.title,a=e.id;return r.a.createElement(re.d,{onClick:function(){return function(e){l(e),g(!1)}(a)},key:t,button:!0},r.a.createElement(re.f,{primary:t}),r.a.createElement(re.e,null,r.a.createElement(re.b,{onClick:function(){return function(e){o(e),E.id===e&&g(!1)}(a)}},r.a.createElement(le.a,null)),r.a.createElement(re.b,{onClick:function(){return function(e){d(e),g(!0)}(a)}},r.a.createElement(oe.a,null))))})))}))),r.a.createElement(re.a,{item:!0,xs:12,sm:6},r.a.createElement(re.g,{className:t.Paper},b?r.a.createElement(K,{editMode:!0,setEditMode:g,exercise:E,onCreate:m,onSaveEdit:function(e){g(!1),s(e)},muscles:u}):r.a.createElement(r.a.Fragment,null,r.a.createElement(re.h,{variant:"h4"},v),r.a.createElement(re.h,{variant:"subtitle1"},O)))))}),ue=["shoulders","chest","arms","back","legs"],me=[{id:"overhead-press",title:"Overhead Press",description:"Delts exercise...",muscles:"shoulders"},{id:"dips",title:"Dips",description:"Triceps exercise...",muscles:"arms"},{id:"barbell-curls",title:"Barbell Curls",description:"Biceps exercise...",muscles:"arms"},{id:"bench-press",title:"Bench Press",description:"Chest exercise...",muscles:"chest"},{id:"pull-ups",title:"Pull Ups",description:"Back and biceps exercise...",muscles:"back"},{id:"deadlifts",title:"Deadlifts",description:"Back and leg exercise...",muscles:"back"},{id:"squats",title:"Squats",description:"Legs exercise...",muscles:"legs"}],de=Object(E.withStyles)(function(e){return{root:{flexGrow:1,marginTop:"10px"},content:{padding:2*e.spacing.unit,textAlign:"center",margin:2*e.spacing.unit,color:e.palette.text.secondary}}})(function(e){var t,a=Object(n.useState)(""),c=Object(i.a)(a,2),l=c[0],m=c[1],E=Object(n.useState)(""),p=Object(i.a)(E,2),f=p[0],b=p[1],g=Object(n.useState)(me),h=Object(i.a)(g,2),v=h[0],x=h[1],O=function(e){var t=[].concat(Object(o.a)(v),[e]);x(t)},y=function(e){var t=ue.reduce(function(e,t){return Object(u.a)({},e,Object(s.a)({},t,[]))},{});return Object.entries(e.reduce(function(e,t){var a=t.muscles;return e[a]=[].concat(Object(o.a)(e[a]),[t]),e},t))}(v);return r.a.createElement("div",null,r.a.createElement(d.a,null),r.a.createElement(X,{muscles:ue,onCreateExercise:O}),r.a.createElement(se,{muscles:ue,onDelete:function(e){var t=v.filter(function(t){return t.id!==e});e===f&&b(""),x(t)},onEditSelect:function(e){b(e)},onEdit:function(e){var t=v.filter(function(t){return t.id!==e.id});x([].concat(Object(o.a)(t),[e]))},onCreate:O,exercise:f?(t=f,v.find(function(e){return e.id===t})):{},onSelect:b,category:l,exercises:y}),r.a.createElement(ne,{muscles:ue,category:l,onSelect:m}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ee=a(46),pe=Object(E.createMuiTheme)({palette:{primary:Ee.indigo,secondary:Ee.blue},typography:{useNextVariants:!0}});l.a.render(r.a.createElement(E.MuiThemeProvider,{theme:pe},r.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[202,1,2]]]);
//# sourceMappingURL=main.3e9c79a5.chunk.js.map