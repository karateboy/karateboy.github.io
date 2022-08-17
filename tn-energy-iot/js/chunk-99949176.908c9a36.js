(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-99949176"],{2593:function(e){e.exports=JSON.parse('{"code":"en","messages":{"alpha":"The {_field_} field may only contain alphabetic characters","alpha_num":"The {_field_} field may only contain alpha-numeric characters","alpha_dash":"The {_field_} field may contain alpha-numeric characters as well as dashes and underscores","alpha_spaces":"The {_field_} field may only contain alphabetic characters as well as spaces","between":"The {_field_} field must be between {min} and {max}","confirmed":"The {_field_} field confirmation does not match","digits":"The {_field_} field must be numeric and exactly contain {length} digits","dimensions":"The {_field_} field must be {width} pixels by {height} pixels","email":"The {_field_} field must be a valid email","excluded":"The {_field_} field is not a valid value","ext":"The {_field_} field is not a valid file","image":"The {_field_} field must be an image","integer":"The {_field_} field must be an integer","length":"The {_field_} field must be {length} long","max_value":"The {_field_} field must be {max} or less","max":"The {_field_} field may not be greater than {length} characters","mimes":"The {_field_} field must have a valid file type","min_value":"The {_field_} field must be {min} or more","min":"The {_field_} field must be at least {length} characters","numeric":"The {_field_} field may only contain numeric characters","oneOf":"The {_field_} field is not a valid value","regex":"The {_field_} field format is invalid","required_if":"The {_field_} field is required","required":"The {_field_} field is required","size":"The {_field_} field size must be less than {size}KB","double":"The {_field_} field must be a valid decimal"}}')},"5aa9":function(e,t,i){e.exports=i.p+"img/login-v2.72cd8a26.svg"},"67df":function(e,t,i){e.exports=i.p+"img/register-v2.0a9e487c.svg"},"6d80":function(e,t,i){},9249:function(e,t,i){},a55b:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"auth-wrapper auth-v2"},[a("b-row",{staticClass:"auth-inner m-0"},[a("b-col",{staticClass:"d-none d-lg-flex align-items-center p-5",attrs:{lg:"8"}},[a("div",{staticClass:"w-100 d-lg-flex align-items-center justify-content-center px-5"},[a("b-img",{attrs:{fluid:"",src:i("67df"),alt:"Login V2"}})],1)]),a("b-col",{staticClass:"d-flex align-items-center auth-bg px-2 p-lg-5",attrs:{lg:"4"}},[a("b-col",{staticClass:"px-xl-2 mx-auto",attrs:{sm:"8",md:"6",lg:"12"}},[a("b-card-title",{staticClass:"font-weight-bold mb-1",attrs:{"title-tag":"h1"}},[e._v(" 台南節電 – 智慧能源大數據平台 ")]),a("b-card-text",{staticClass:"mb-2"},[e._v(" 請登入您的帳號 "),a("sub",[e._v(e._s(e.loginCountDown)+" 秒後自動登入")])]),a("validation-observer",{ref:"loginValidation"},[a("b-form",{staticClass:"auth-login-form mt-2",on:{submit:function(e){e.preventDefault()}}},[a("b-form-group",{attrs:{label:"Email","label-for":"login-email"}},[a("validation-provider",{attrs:{name:"Email",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("b-form-input",{attrs:{id:"login-email",state:!(i.length>0)&&null,name:"login-email",placeholder:"john@example.com"},model:{value:e.userEmail,callback:function(t){e.userEmail=t},expression:"userEmail"}}),a("small",{staticClass:"text-danger"},[e._v(e._s(i[0]))])]}}])})],1),a("b-form-group",[a("div",{staticClass:"d-flex justify-content-between"},[a("label",{attrs:{for:"login-password"}},[e._v("密碼")]),a("b-link",{attrs:{to:{name:"auth-forgot-password-v2"}}},[a("small",[e._v("忘記密碼?")])])],1),a("validation-provider",{attrs:{name:"Password",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("b-input-group",{staticClass:"input-group-merge",class:i.length>0?"is-invalid":null},[a("b-form-input",{staticClass:"form-control-merge",attrs:{id:"login-password",state:!(i.length>0)&&null,type:e.passwordFieldType,name:"login-password",placeholder:"············"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("b-input-group-append",{attrs:{"is-text":""}},[a("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:e.passwordToggleIcon},on:{click:e.togglePasswordVisibility}})],1)],1),a("small",{staticClass:"text-danger"},[e._v(e._s(i[0]))])]}}])})],1),a("b-button",{attrs:{type:"submit",variant:"primary",block:""},on:{click:e.validationForm}},[e._v(" 登入 ")])],1)],1)],1)],1)],1)],1)},n=[],r=i("5530"),s=i("7bb1"),l={en:/^[A-Z]*$/i,cs:/^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,da:/^[A-ZÆØÅ]*$/i,de:/^[A-ZÄÖÜß]*$/i,es:/^[A-ZÁÉÍÑÓÚÜ]*$/i,fa:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,fr:/^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,it:/^[A-Z\xC0-\xFF]*$/i,lt:/^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,nl:/^[A-ZÉËÏÓÖÜ]*$/i,hu:/^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,pl:/^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,pt:/^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,ro:/^[A-ZĂÂÎŞŢ]*$/i,ru:/^[А-ЯЁ]*$/i,sk:/^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,sr:/^[A-ZČĆŽŠĐ]*$/i,sv:/^[A-ZÅÄÖ]*$/i,tr:/^[A-ZÇĞİıÖŞÜ]*$/i,uk:/^[А-ЩЬЮЯЄІЇҐ]*$/i,ar:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,az:/^[A-ZÇƏĞİıÖŞÜ]*$/i,el:/^[Α-ώ]*$/i},o={en:/^[0-9A-Z]*$/i,cs:/^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,da:/^[0-9A-ZÆØÅ]$/i,de:/^[0-9A-ZÄÖÜß]*$/i,es:/^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,fa:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,fr:/^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,it:/^[0-9A-Z\xC0-\xFF]*$/i,lt:/^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,hu:/^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,nl:/^[0-9A-ZÉËÏÓÖÜ]*$/i,pl:/^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,pt:/^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,ro:/^[0-9A-ZĂÂÎŞŢ]*$/i,ru:/^[0-9А-ЯЁ]*$/i,sk:/^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,sr:/^[0-9A-ZČĆŽŠĐ]*$/i,sv:/^[0-9A-ZÅÄÖ]*$/i,tr:/^[0-9A-ZÇĞİıÖŞÜ]*$/i,uk:/^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,ar:/^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,az:/^[0-9A-ZÇƏĞİıÖŞÜ]*$/i,el:/^[0-9Α-ώ]*$/i},d={en:/^[0-9A-Z_-]*$/i,cs:/^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,da:/^[0-9A-ZÆØÅ_-]*$/i,de:/^[0-9A-ZÄÖÜß_-]*$/i,es:/^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,fa:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,fr:/^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,it:/^[0-9A-Z\xC0-\xFF_-]*$/i,lt:/^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,nl:/^[0-9A-ZÉËÏÓÖÜ_-]*$/i,hu:/^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,pl:/^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,pt:/^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,ro:/^[0-9A-ZĂÂÎŞŢ_-]*$/i,ru:/^[0-9А-ЯЁ_-]*$/i,sk:/^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,sr:/^[0-9A-ZČĆŽŠĐ_-]*$/i,sv:/^[0-9A-ZÅÄÖ_-]*$/i,tr:/^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,uk:/^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,ar:/^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/,az:/^[0-9A-ZÇƏĞİıÖŞÜ_-]*$/i,el:/^[0-9Α-ώ_-]*$/i},c=function(e,t){var i=(void 0===t?{}:t).locale,a=void 0===i?"":i;return Array.isArray(e)?e.every((function(e){return c(e,{locale:a})})):a?(l[a]||l.en).test(e):Object.keys(l).some((function(t){return l[t].test(e)}))},u=[{name:"locale"}],f={validate:c,params:u},m=function(e,t){var i=(void 0===t?{}:t).locale,a=void 0===i?"":i;return Array.isArray(e)?e.every((function(e){return m(e,{locale:a})})):a?(d[a]||d.en).test(e):Object.keys(d).some((function(t){return d[t].test(e)}))},_=[{name:"locale"}],p={validate:m,params:_},g=function(e,t){var i=(void 0===t?{}:t).locale,a=void 0===i?"":i;return Array.isArray(e)?e.every((function(e){return g(e,{locale:a})})):a?(o[a]||o.en).test(e):Object.keys(o).some((function(t){return o[t].test(e)}))},h=[{name:"locale"}],v={validate:g,params:h},b=function(e,t){var i=void 0===t?{}:t,a=i.min,n=i.max;return Array.isArray(e)?e.every((function(e){return!!b(e,{min:a,max:n})})):Number(a)<=e&&Number(n)>=e},A=[{name:"min"},{name:"max"}],$={validate:b,params:A},y=function(e,t){var i=t.target;return String(e)===String(i)},x=[{name:"target",isTarget:!0}],w={validate:y,params:x},Z=function(e,t){var i=t.length;if(Array.isArray(e))return e.every((function(e){return Z(e,{length:i})}));var a=String(e);return/^[0-9]*$/.test(a)&&a.length===i},T=[{name:"length",cast:function(e){return Number(e)}}],C={validate:Z,params:T},O=function(e,t){var i=(void 0===t?{}:t).multiple,a=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return i&&!Array.isArray(e)&&(e=String(e).split(",").map((function(e){return e.trim()}))),Array.isArray(e)?e.every((function(e){return a.test(String(e))})):a.test(String(e))},j=[{name:"multiple",default:!1}],k={validate:O,params:j};function S(e){return null===e||void 0===e}function F(e){return Array.isArray(e)&&0===e.length}function I(e){return"function"===typeof e}function z(e){return I(Array.from)?Array.from(e):E(e)}function E(e){for(var t=[],i=e.length,a=0;a<i;a++)t.push(e[a]);return t}var q=function(e){return Array.isArray(e)?e.every((function(e){return/^-?[0-9]+$/.test(String(e))})):/^-?[0-9]+$/.test(String(e))},P={validate:q},D=function(e,t){var i=t.length;return!S(e)&&("string"===typeof e&&(e=z(e)),"number"===typeof e&&(e=String(e)),e.length||(e=z(e)),e.length===i)},N=[{name:"length",cast:function(e){return Number(e)}}],V={validate:D,params:N},U=function(e,t){var i=t.length;return!S(e)&&(Array.isArray(e)?e.every((function(e){return U(e,{length:i})})):String(e).length>=i)},J=[{name:"length",cast:function(e){return Number(e)}}],L={validate:U,params:J},B=function(e,t){var i=t.regex;return Array.isArray(e)?e.every((function(e){return B(e,{regex:i})})):i.test(String(e))},R=[{name:"regex",cast:function(e){return"string"===typeof e?new RegExp(e):e}}],K={validate:B,params:R},X=function(e,t){var i=(void 0===t?{allowFalse:!0}:t).allowFalse,a={valid:!1,required:!0};return S(e)||F(e)?a:!1!==e||i?(a.valid=!!String(e).trim().length,a):a},Y=!0,G=[{name:"allowFalse",default:!0}],H={validate:X,params:G,computesRequired:Y},M=i("d4d7"),Q=i("2593"),W=(i("ac1f"),i("00b4"),function(e){return e>=0}),ee=function(e){var t=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/,i=t.test(e);return i},te=function(e){var t=/^(?:3[47][0-9]{13})$/,i=t.test(e);return i},ie=function(e){if(void 0===e||null===e||0===e.length)return!0;var t=/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;return t.test(e)},ae=Object(s["c"])("required",H),ne=Object(s["c"])("email",k);Object(s["c"])("min",L),Object(s["c"])("confirmed",w),Object(s["c"])("regex",K),Object(s["c"])("between",$),Object(s["c"])("alpha",f),Object(s["c"])("integer",P),Object(s["c"])("digits",C),Object(s["c"])("alpha-dash",p),Object(s["c"])("alpha-num",v),Object(s["c"])("length",V),Object(s["c"])("positive",{validate:W,message:"Please enter positive number!"}),Object(s["c"])("credit-card",{validate:te,message:"It is not valid credit card!"}),Object(s["c"])("password",{validate:ee,message:"Your {_field_} must contain at least one uppercase, one lowercase, one special character and one digit"}),Object(s["c"])("url",{validate:ie,message:"URL is invalid"});Object(s["d"])({en:{messages:Q.messages,names:{email:"Email",password:"Password"},fields:{password:{min:"{_field_} is too short, you want to get hacked?"}}},ar:{messages:M.messages,names:{email:"البريد الإلكتروني",password:"كلمة السر"},fields:{password:{min:"كلمة السر قصيرة جداً سيتم اختراقك"}}}});var re={data:function(){return{passwordFieldType:"password"}},methods:{togglePasswordVisibility:function(){this.passwordFieldType="password"===this.passwordFieldType?"text":"password"}}},se=i("bc3a"),le=i.n(se),oe=i("0613"),de=i("2f62"),ce=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"toastification"},[i("div",{staticClass:"d-flex align-items-start"},[i("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:e.variant,size:"1.8rem"}},[i("feather-icon",{attrs:{icon:e.icon,size:"15"}})],1),i("div",{staticClass:"d-flex flex-grow-1"},[i("div",[e.title?i("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+e.variant,domProps:{textContent:e._s(e.title)}}):e._e(),e.text?i("small",{staticClass:"d-inline-block text-body",domProps:{textContent:e._s(e.text)}}):e._e()]),i("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto",on:{click:function(t){return e.$emit("close-toast")}}},[e.hideClose?e._e():i("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},ue=[],fe=i("e8a3"),me={components:{BAvatar:fe["a"]},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},_e=me,pe=(i("c5a2"),i("2877")),ge=Object(pe["a"])(_e,ce,ue,!1,null,"0f2e7fd3",null),he=ge.exports,ve={components:{ValidationProvider:s["b"],ValidationObserver:s["a"]},mixins:[re],data:function(){var e=5,t=0;return{status:"",password:"abc123",userEmail:"sales@wecc.com.tw",sideImg:i("5aa9"),required:ae,email:ne,loginCountDown:e,loginTimer:t}},computed:{passwordToggleIcon:function(){return"password"===this.passwordFieldType?"EyeIcon":"EyeOffIcon"},imgUrl:function(){return"dark"===oe["a"].state.appConfig.layout.skin?(this.sideImg=i("ff0f"),this.sideImg):this.sideImg}},mounted:function(){var e=this;this.loginTimer=setInterval((function(){e.loginCountDown--,0===e.loginCountDown&&(clearInterval(e.loginTimer),e.validationForm())}),1e3)},beforeDestroy:function(){clearInterval(this.loginTimer)},methods:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(de["b"])(["setLogin"])),Object(de["b"])("user",["setUserInfo"])),{},{validationForm:function(){var e=this;this.$refs.loginValidation.validate().then((function(t){if(t){var i={user:e.userEmail,password:e.password};le.a.post("/login",i).then((function(t){var i=t.data;if(i.ok){var a=i.userData,n=a.user;e.setUserInfo(n),e.setLogin(!0),n.isAdmin?e.$ability.update([{action:"manage",subject:"all"}]):e.$ability.update(a.group.abilities),e.$router.push("/")}else e.$toast({component:he,props:{title:"帳號或密碼錯誤",icon:"UserIcon"}})})).catch((function(t){e.$toast({component:he,props:{title:"帳號或密碼錯誤",icon:"UserIcon"}})}))}}))}})},be=ve,Ae=(i("da51"),Object(pe["a"])(be,a,n,!1,null,null,null));t["default"]=Ae.exports},c5a2:function(e,t,i){"use strict";i("6d80")},d4d7:function(e){e.exports=JSON.parse('{"code":"ar","messages":{"alpha":"{_field_} يجب ان يحتوي على حروف فقط","alpha_num":"{_field_} قد يحتوي فقط على حروف وارقام","alpha_dash":"{_field_} قد يحتوي على حروف او الرموز - و _","alpha_spaces":"{_field_} قد يحتوي فقط على حروف ومسافات","between":"قيمة {_field_} يجب ان تكون ما بين {min} و {max}","confirmed":"{_field_} لا يماثل التأكيد","digits":"{_field_} يجب ان تحتوي فقط على ارقام والا يزيد عددها عن {length} رقم","dimensions":"{_field_} يجب ان تكون بمقاس {width} بكسل في {height} بكسل","email":"{_field_} يجب ان يكون بريدا اليكتروني صحيح","excluded":"الحقل {_field_} غير صحيح","ext":"نوع ملف {_field_} غير صحيح","image":"{_field_} يجب ان تكون صورة","integer":"الحقل {_field_} يجب ان يكون عدداً صحيحاً","length":"حقل {_field_} يجب الا يزيد عن {length}","max_value":"قيمة الحقل {_field_} يجب ان تكون اصغر من {min} او تساويها","max":"الحقل {_field_} يجب ان يحتوي على {length} حروف على الأكثر","mimes":"نوع ملف {_field_} غير صحيح","min_value":"قيمة الحقل {_field_} يجب ان تكون اكبر من {min} او تساويها","min":"الحقل {_field_} يجب ان يحتوي على {length} حروف على الأقل","numeric":"{_field_} يمكن ان يحتوي فقط على ارقام","oneOf":"الحقل {_field_} يجب ان يكون قيمة صحيحة","regex":"الحقل {_field_} غير صحيح","required":"{_field_} مطلوب","required_if":"حقل {_field_} مطلوب","size":"{_field_} يجب ان يكون اقل من {size} كيلوبايت","double":"يجب أن يكون الحقل {_field_} عددًا عشريًا صالحًا"}}')},da51:function(e,t,i){"use strict";i("9249")},ff0f:function(e,t,i){e.exports=i.p+"img/login-v2-dark.58db2eaf.svg"}}]);
//# sourceMappingURL=chunk-99949176.908c9a36.js.map