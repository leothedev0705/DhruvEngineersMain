"use strict";(self.webpackChunkdhruv_engineers=self.webpackChunkdhruv_engineers||[]).push([[476],{476:(n,e,t)=>{t.r(e),t.d(e,{default:()=>O});var r=t(540),a=t(271),i=t(848),o=t(473),s=t(363),c=t(128),l=t(719),d=t(446);class m extends r.Component{getSnapshotBeforeUpdate(n){const e=this.props.childRef.current;if(e&&n.isPresent&&!this.props.isPresent){const n=e.offsetParent,t=n instanceof HTMLElement&&n.offsetWidth||0,r=this.props.sizeRef.current;r.height=e.offsetHeight||0,r.width=e.offsetWidth||0,r.top=e.offsetTop,r.left=e.offsetLeft,r.right=t-r.width-r.left}return null}componentDidUpdate(){}render(){return this.props.children}}function p({children:n,isPresent:e,anchorX:t}){const a=(0,r.useId)(),o=(0,r.useRef)(null),s=(0,r.useRef)({width:0,height:0,top:0,left:0,right:0}),{nonce:c}=(0,r.useContext)(d.Q);return(0,r.useInsertionEffect)((()=>{const{width:n,height:r,top:i,left:l,right:d}=s.current;if(e||!o.current||!n||!r)return;const m="left"===t?`left: ${l}`:`right: ${d}`;o.current.dataset.motionPopId=a;const p=document.createElement("style");return c&&(p.nonce=c),document.head.appendChild(p),p.sheet&&p.sheet.insertRule(`\n          [data-motion-pop-id="${a}"] {\n            position: absolute !important;\n            width: ${n}px !important;\n            height: ${r}px !important;\n            ${m}px !important;\n            top: ${i}px !important;\n          }\n        `),()=>{document.head.removeChild(p)}}),[e]),(0,i.jsx)(m,{isPresent:e,childRef:o,sizeRef:s,children:r.cloneElement(n,{ref:o})})}const u=({children:n,initial:e,isPresent:t,onExitComplete:a,custom:o,presenceAffectsLayout:c,mode:d,anchorX:m})=>{const u=(0,s.M)(g),h=(0,r.useId)();let f=!0,b=(0,r.useMemo)((()=>(f=!1,{id:h,initial:e,isPresent:t,custom:o,onExitComplete:n=>{u.set(n,!0);for(const n of u.values())if(!n)return;a&&a()},register:n=>(u.set(n,!1),()=>u.delete(n))})),[t,u,a]);return c&&f&&(b={...b}),(0,r.useMemo)((()=>{u.forEach(((n,e)=>u.set(e,!1)))}),[t]),r.useEffect((()=>{!t&&!u.size&&a&&a()}),[t]),"popLayout"===d&&(n=(0,i.jsx)(p,{isPresent:t,anchorX:m,children:n})),(0,i.jsx)(l.t.Provider,{value:b,children:n})};function g(){return new Map}var h=t(120);const f=n=>n.key||"";function b(n){const e=[];return r.Children.forEach(n,(n=>{(0,r.isValidElement)(n)&&e.push(n)})),e}const x=({children:n,custom:e,initial:t=!0,onExitComplete:a,presenceAffectsLayout:l=!0,mode:d="sync",propagate:m=!1,anchorX:p="left"})=>{const[g,x]=(0,h.xQ)(m),v=(0,r.useMemo)((()=>b(n)),[n]),y=m&&!g?[]:v.map(f),w=(0,r.useRef)(!0),E=(0,r.useRef)(v),k=(0,s.M)((()=>new Map)),[z,N]=(0,r.useState)(v),[P,C]=(0,r.useState)(v);(0,c.E)((()=>{w.current=!1,E.current=v;for(let n=0;n<P.length;n++){const e=f(P[n]);y.includes(e)?k.delete(e):!0!==k.get(e)&&k.set(e,!1)}}),[P,y.length,y.join("-")]);const S=[];if(v!==z){let n=[...v];for(let e=0;e<P.length;e++){const t=P[e],r=f(t);y.includes(r)||(n.splice(e,0,t),S.push(t))}return"wait"===d&&S.length&&(n=S),C(b(n)),N(v),null}const{forceRender:A}=(0,r.useContext)(o.L);return(0,i.jsx)(i.Fragment,{children:P.map((n=>{const r=f(n),o=!(m&&!g)&&(v===P||y.includes(r));return(0,i.jsx)(u,{isPresent:o,initial:!(w.current&&!t)&&void 0,custom:e,presenceAffectsLayout:l,mode:d,onExitComplete:o?void 0:()=>{if(!k.has(r))return;k.set(r,!0);let n=!0;k.forEach((e=>{e||(n=!1)})),n&&(A?.(),C(E.current),m&&x?.(),a&&a())},anchorX:p,children:n},r)}))})};var v=t(72),y=t.n(v),w=t(825),E=t.n(w),k=t(659),z=t.n(k),N=t(56),P=t.n(N),C=t(159),S=t.n(C),A=t(113),I=t.n(A),M=t(766),R={};function T(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,a,i,o,s=[],c=!0,l=!1;try{if(i=(t=t.call(n)).next,0===e){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==e);c=!0);}catch(n){l=!0,a=n}finally{try{if(!c&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(l)throw a}}return s}}(n,e)||function(n,e){if(n){if("string"==typeof n)return j(n,e);var t={}.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?j(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}R.styleTagTransform=I(),R.setAttributes=P(),R.insert=z().bind(null,"head"),R.domAPI=E(),R.insertStyleElement=S(),y()(M.A,R),M.A&&M.A.locals&&M.A.locals;const Y=function(n){var e=n.slides,t=T((0,r.useState)(0),2),i=t[0],o=t[1],s=T((0,r.useState)(null),2),c=s[0],l=s[1];(0,r.useEffect)((function(){var n=setInterval((function(){m()}),5e3);return function(){return clearInterval(n)}}),[i]);var d=function(n){l(n),o((function(t){var r=t+n;return r>=e.length&&(r=0),r<0&&(r=e.length-1),r}))},m=function(){return d(1)};return r.createElement("div",{className:"carousel-container"},r.createElement(x,{initial:!1,custom:c},r.createElement(a.P.div,{key:i,className:"carousel-slide",custom:c,variants:{enter:function(n){return{x:n>0?1e3:-1e3,opacity:0}},center:{zIndex:1,x:0,opacity:1},exit:function(n){return{zIndex:0,x:n<0?1e3:-1e3,opacity:0}}},initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},drag:"x",dragConstraints:{left:0,right:0},dragElastic:1,onDragEnd:function(n,e){var t=e.offset,r=e.velocity,a=function(n,e){return Math.abs(n)*e}(t.x,r.x);a<-1e4?d(1):a>1e4&&d(-1)}},e[i])),r.createElement("button",{className:"carousel-button prev",onClick:function(){return d(-1)}},"‹"),r.createElement("button",{className:"carousel-button next",onClick:m},"›"),r.createElement("div",{className:"carousel-dots"},e.map((function(n,e){return r.createElement("button",{key:e,className:"carousel-dot ".concat(e===i?"active":""),onClick:function(){l(e>i?1:-1),o(e)}})}))))};var L=t(576),H={};H.styleTagTransform=I(),H.setAttributes=P(),H.insert=z().bind(null,"head"),H.domAPI=E(),H.insertStyleElement=S(),y()(L.A,H),L.A&&L.A.locals&&L.A.locals;const O=function(){var n={hidden:{opacity:0,y:20},visible:{opacity:1,y:0}},e={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},t={hidden:{scale:.8,opacity:0},visible:{scale:1,opacity:1}},i=[r.createElement("div",{className:"slide-content",key:"1"},r.createElement("h2",null,"Welcome to Dhruv Engineers"),r.createElement("p",null,"Leading the way in precision engineering and manufacturing excellence"),r.createElement("a",{href:"#contact",className:"cta-button"},"Get Started")),r.createElement("div",{className:"slide-content",key:"2"},r.createElement("h2",null,"Innovative Solutions"),r.createElement("p",null,"Cutting-edge technology meets engineering expertise"),r.createElement("a",{href:"#services",className:"cta-button"},"Our Services")),r.createElement("div",{className:"slide-content",key:"3"},r.createElement("h2",null,"Quality Assurance"),r.createElement("p",null,"Committed to delivering excellence in every project"),r.createElement("a",{href:"#about",className:"cta-button"},"Learn More")),r.createElement("div",{className:"slide-content",key:"4"},r.createElement("h2",null,"Global Reach"),r.createElement("p",null,"Serving clients worldwide with innovative engineering solutions"),r.createElement("a",{href:"#contact",className:"cta-button"},"Contact Us"))];return r.createElement("div",{className:"home-page"},r.createElement("section",{className:"hero-section"},r.createElement(Y,{slides:i})),r.createElement(a.P.section,{className:"about-section",initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:e},r.createElement("div",{className:"container"},r.createElement(a.P.h2,{variants:n},"About Us"),r.createElement(a.P.p,{variants:n},"With over two decades of experience, Dhruv Engineers has established itself as a leader in precision engineering and manufacturing. Our commitment to quality and innovation drives us to deliver exceptional results for our clients."),r.createElement(a.P.div,{className:"stats-container",variants:e},[{number:"25+",label:"Years Experience"},{number:"500+",label:"Projects Completed"},{number:"100%",label:"Client Satisfaction"},{number:"50+",label:"Expert Engineers"}].map((function(e,t){return r.createElement(a.P.div,{key:t,className:"stat-item",variants:n},r.createElement("h3",null,e.number),r.createElement("p",null,e.label))}))))),r.createElement(a.P.section,{className:"services-section",initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:e},r.createElement("div",{className:"container"},r.createElement(a.P.h2,{variants:n},"Our Services"),r.createElement(a.P.div,{className:"services-grid",variants:e},[{title:"Precision Manufacturing",description:"High-precision components and assemblies"},{title:"Design Engineering",description:"Innovative solutions for complex challenges"},{title:"Quality Testing",description:"Comprehensive quality assurance services"},{title:"Maintenance",description:"Regular maintenance and support services"}].map((function(e,t){return r.createElement(a.P.div,{key:t,className:"service-card",variants:n},r.createElement("h3",null,e.title),r.createElement("p",null,e.description))}))))),r.createElement(a.P.section,{className:"cta-section",initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:e},r.createElement("div",{className:"container"},r.createElement(a.P.h2,{variants:n},"Ready to Start Your Project?"),r.createElement(a.P.p,{variants:n},"Contact us today to discuss how we can help bring your ideas to life."),r.createElement(a.P.a,{href:"#contact",className:"cta-button",variants:n},"Get in Touch"))),r.createElement(a.P.section,{id:"machinery",className:"machinery-section",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:e},r.createElement("div",{className:"container"},r.createElement(a.P.h2,{className:"section-title",variants:n},"Our Machinery"),r.createElement(a.P.div,{className:"machinery-grid",variants:e},r.createElement(a.P.div,{className:"machinery-item",variants:t,whileHover:{scale:1.05},whileTap:{scale:.95}},r.createElement("h3",null,"CNC Machines"),r.createElement("p",null,"Latest CNC machines for high precision manufacturing")),r.createElement(a.P.div,{className:"machinery-item",variants:t,whileHover:{scale:1.05},whileTap:{scale:.95}},r.createElement("h3",null,"Laser Cutting"),r.createElement("p",null,"Advanced laser cutting technology for precise fabrication")),r.createElement(a.P.div,{className:"machinery-item",variants:t,whileHover:{scale:1.05},whileTap:{scale:.95}},r.createElement("h3",null,"Milling Machines"),r.createElement("p",null,"High-quality milling machines for complex parts")),r.createElement(a.P.div,{className:"machinery-item",variants:t,whileHover:{scale:1.05},whileTap:{scale:.95}},r.createElement("h3",null,"Quality Testing"),r.createElement("p",null,"State-of-the-art quality testing equipment"))))),r.createElement(a.P.section,{id:"clients",className:"clients-section",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:e},r.createElement("div",{className:"container"},r.createElement(a.P.h2,{className:"section-title",variants:n},"Our Clients"),r.createElement(a.P.div,{className:"clients-list",variants:e},[1,2,3,4,5,6].map((function(n){return r.createElement(a.P.div,{key:n,className:"client-logo",variants:t,whileHover:{scale:1.1,filter:"grayscale(0%)"},whileTap:{scale:.95}},"Client ",n)}))))))}},576:(n,e,t)=>{t.d(e,{A:()=>l});var r=t(601),a=t.n(r),i=t(314),o=t.n(i),s=t(855),c=o()(a());c.i(s.A),c.push([n.id,".home-page {\n  padding-top: 80px;\n  min-height: 100vh;\n  background-color: var(--primary-dark);\n}\n\n/* Hero Section */\n.hero-section {\n  width: 100%;\n  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);\n  color: var(--text-primary);\n  padding: 120px 0;\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n}\n\n.hero-section::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%),\n              linear-gradient(-45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%);\n  background-size: 20px 20px;\n  opacity: 0.1;\n  z-index: 1;\n}\n\n.hero-section .container {\n  position: relative;\n  z-index: 2;\n}\n\n.hero-section h1 {\n  font-size: 3.5rem;\n  margin-bottom: 1.5rem;\n  font-weight: 700;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n  background: linear-gradient(to right, var(--text-primary), var(--accent-teal));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.hero-subtitle {\n  font-size: 1.5rem;\n  margin-bottom: 2rem;\n  opacity: 0.9;\n  color: var(--text-secondary);\n}\n\n.cta-button {\n  display: inline-block;\n  padding: 1rem 2.5rem;\n  background: linear-gradient(135deg, #1d4ed8 0%, #112240 100%);\n  color: #ffffff;\n  text-decoration: none;\n  border-radius: 4px;\n  font-weight: 600;\n  font-size: 1.1rem;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 15px rgba(29, 78, 216, 0.3);\n  border: 1px solid rgba(100, 255, 218, 0.2);\n  position: relative;\n  overflow: hidden;\n}\n\n.cta-button::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, transparent, rgba(100, 255, 218, 0.2), transparent);\n  transition: 0.5s;\n}\n\n.cta-button:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(29, 78, 216, 0.4);\n}\n\n.cta-button:hover::before {\n  left: 100%;\n}\n\n/* Section Styles */\nsection {\n  padding: 80px 0;\n}\n\n.section-title {\n  font-size: 2.5rem;\n  color: #ffffff;\n  margin-bottom: 2rem;\n  text-align: center;\n  position: relative;\n  padding-bottom: 1rem;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n}\n\n.section-title::after {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 80px;\n  height: 3px;\n  background: linear-gradient(90deg, #1d4ed8, #64ffda);\n  border-radius: 2px;\n}\n\n/* About Section */\n.about-section {\n  padding: 5rem 0;\n  background: #ffffff;\n}\n\n.about-section h2 {\n  text-align: center;\n  color: #2c3e50;\n  font-size: 2.5rem;\n  margin-bottom: 2rem;\n  background: linear-gradient(to right, #3498db, #2980b9);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.about-section p {\n  text-align: center;\n  color: #7f8c8d;\n  font-size: 1.2rem;\n  line-height: 1.8;\n  max-width: 800px;\n  margin: 0 auto 3rem;\n}\n\n.stats-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 2rem;\n  margin-top: 3rem;\n}\n\n.stat-item {\n  text-align: center;\n  padding: 2rem;\n  background: #ffffff;\n  border-radius: 20px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s ease;\n  border: 1px solid rgba(52, 152, 219, 0.1);\n}\n\n.stat-item:hover {\n  transform: translateY(-10px);\n  box-shadow: 0 15px 40px rgba(52, 152, 219, 0.15);\n  border-color: rgba(52, 152, 219, 0.3);\n}\n\n.stat-item h3 {\n  font-size: 2.5rem;\n  color: #3498db;\n  margin-bottom: 0.5rem;\n  font-weight: 700;\n}\n\n.stat-item p {\n  color: #7f8c8d;\n  font-size: 1.1rem;\n  margin: 0;\n}\n\n/* Machinery Section */\n.machinery-section {\n  padding: 80px 0;\n  background-color: var(--primary-dark);\n}\n\n.machinery-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 2rem;\n  margin-top: 3rem;\n}\n\n.machinery-item {\n  background: var(--gradient-dark);\n  padding: 2rem;\n  border-radius: 4px;\n  box-shadow: var(--shadow-blue);\n  text-align: center;\n  transition: all 0.3s ease;\n  border: var(--border-teal);\n}\n\n.machinery-item:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--shadow-hover);\n}\n\n.machinery-item h3 {\n  color: var(--text-primary);\n  margin-bottom: 1rem;\n  font-size: 1.5rem;\n}\n\n.machinery-item p {\n  color: var(--text-secondary);\n  line-height: 1.6;\n}\n\n/* Clients Section */\n.clients-section {\n  padding: 80px 0;\n  background-color: var(--primary-light);\n}\n\n.clients-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 2rem;\n  margin-top: 3rem;\n}\n\n.client-logo {\n  background: var(--gradient-dark);\n  padding: 2rem;\n  border-radius: 4px;\n  text-align: center;\n  font-weight: 600;\n  color: var(--text-primary);\n  filter: grayscale(100%);\n  transition: all 0.3s ease;\n  border: var(--border-teal);\n}\n\n.client-logo:hover {\n  filter: grayscale(0%);\n  transform: scale(1.05);\n}\n\n/* Services Section */\n.services-section {\n  padding: 5rem 0;\n  background: linear-gradient(135deg, #f0f4f8 0%, #ffffff 100%);\n}\n\n.services-section h2 {\n  text-align: center;\n  color: #2c3e50;\n  font-size: 2.5rem;\n  margin-bottom: 3rem;\n  background: linear-gradient(to right, #3498db, #2980b9);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.services-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 2rem;\n}\n\n.service-card {\n  background: #ffffff;\n  padding: 2rem;\n  border-radius: 20px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);\n  text-align: center;\n  transition: all 0.3s ease;\n  border: 1px solid rgba(52, 152, 219, 0.1);\n}\n\n.service-card:hover {\n  transform: translateY(-10px);\n  box-shadow: 0 15px 40px rgba(52, 152, 219, 0.15);\n  border-color: rgba(52, 152, 219, 0.3);\n}\n\n.service-card h3 {\n  color: #2c3e50;\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  font-weight: 600;\n}\n\n.service-card p {\n  color: #7f8c8d;\n  line-height: 1.6;\n}\n\n/* CTA Section */\n.cta-section {\n  padding: 5rem 0;\n  background: var(--gradient-dark);\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n}\n\n.cta-section::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(45deg, rgba(52, 152, 219, 0.05) 25%, transparent 25%),\n              linear-gradient(-45deg, rgba(52, 152, 219, 0.05) 25%, transparent 25%);\n  background-size: 20px 20px;\n  opacity: 0.1;\n  z-index: 1;\n}\n\n.cta-section .container {\n  position: relative;\n  z-index: 2;\n}\n\n.cta-section h2 {\n  color: var(--text-primary);\n  font-size: 2.5rem;\n  margin-bottom: 1.5rem;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n  background: linear-gradient(to right, var(--text-primary), var(--accent-teal));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.cta-section p {\n  color: var(--text-secondary);\n  font-size: 1.2rem;\n  line-height: 1.8;\n  max-width: 600px;\n  margin: 0 auto 2rem;\n  opacity: 0.9;\n}\n\n.cta-section .cta-button {\n  display: inline-block;\n  background: linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-blue-dark) 100%);\n  color: white;\n  padding: 15px 40px;\n  border-radius: 4px;\n  text-decoration: none;\n  font-size: 1.1rem;\n  font-weight: 600;\n  transition: all 0.3s ease;\n  border: var(--border-teal);\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  box-shadow: var(--shadow-blue);\n}\n\n.cta-section .cta-button::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, transparent, rgba(100, 255, 218, 0.2), transparent);\n  transition: 0.5s;\n}\n\n.cta-section .cta-button:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-hover);\n  border-color: var(--accent-teal);\n}\n\n.cta-section .cta-button:hover::before {\n  left: 100%;\n}\n\n/* Responsive styles */\n@media (max-width: 768px) {\n  .hero-section h1 {\n    font-size: 2.5rem;\n  }\n\n  .hero-subtitle {\n    font-size: 1.2rem;\n  }\n\n  .section-title {\n    font-size: 2rem;\n  }\n\n  .machinery-grid,\n  .clients-list {\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  }\n\n  .about-section h2,\n  .services-section h2,\n  .cta-section h2 {\n    font-size: 2rem;\n  }\n\n  .stat-item h3 {\n    font-size: 2rem;\n  }\n\n  .about-section p,\n  .cta-section p {\n    font-size: 1.1rem;\n  }\n\n  .stats-container {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@media (max-width: 480px) {\n  .hero-section {\n    padding: 80px 0;\n  }\n\n  .hero-section h1 {\n    font-size: 2rem;\n  }\n\n  .cta-button {\n    padding: 12px 30px;\n    font-size: 1rem;\n  }\n\n  .machinery-grid,\n  .clients-list {\n    grid-template-columns: 1fr;\n  }\n\n  .stats-container {\n    grid-template-columns: 1fr;\n  }\n\n  .about-section h2,\n  .services-section h2,\n  .cta-section h2 {\n    font-size: 1.8rem;\n  }\n\n  .about-section p,\n  .cta-section p {\n    font-size: 1rem;\n  }\n}",""]);const l=c},766:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),a=t.n(r),i=t(314),o=t.n(i)()(a());o.push([n.id,".carousel-container {\n  position: relative;\n  width: 100%;\n  height: 600px;\n  overflow: hidden;\n  background: linear-gradient(135deg, #1a2b4d 0%, #0f172a 100%);\n  position: relative;\n}\n\n/* Breathing background effect */\n.carousel-container::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(135deg, rgba(52, 152, 219, 0.1) 0%, rgba(41, 128, 185, 0.05) 100%);\n  animation: breathe 4s ease-in-out infinite;\n  z-index: 1;\n}\n\n@keyframes breathe {\n  0%, 100% {\n    opacity: 0.3;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.5;\n    transform: scale(1.02);\n  }\n}\n\n.carousel-slide {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  user-select: none;\n  z-index: 2;\n}\n\n/* Update slide content for better contrast */\n.slide-content {\n  text-align: center;\n  padding: 2rem;\n  max-width: 800px;\n  margin: 0 auto;\n  position: relative;\n}\n\n.slide-content h2 {\n  font-size: 2.5rem;\n  margin-bottom: 1rem;\n  background: linear-gradient(to right, #64b5f6, #2196f3);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n\n.slide-content p {\n  font-size: 1.2rem;\n  line-height: 1.6;\n  color: #e2e8f0;\n  margin-bottom: 2rem;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n\n.slide-content .cta-button {\n  background: linear-gradient(135deg, #3498db, #2980b9);\n  color: white;\n  padding: 12px 30px;\n  border-radius: 25px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  font-size: 1.1rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-decoration: none;\n  display: inline-block;\n  position: relative;\n  overflow: hidden;\n}\n\n.slide-content .cta-button::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);\n  transition: 0.5s;\n}\n\n.slide-content .cta-button:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(52, 152, 219, 0.3);\n  border-color: rgba(255, 255, 255, 0.2);\n}\n\n.slide-content .cta-button:hover::before {\n  left: 100%;\n}\n\n/* Update navigation buttons */\n.carousel-button {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  width: 50px;\n  height: 50px;\n  border-radius: 25px;\n  cursor: pointer;\n  font-size: 24px;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n  z-index: 2;\n  backdrop-filter: blur(4px);\n}\n\n.carousel-button:hover {\n  background: rgba(255, 255, 255, 0.2);\n  border-color: rgba(255, 255, 255, 0.3);\n  transform: translateY(-50%) scale(1.1);\n}\n\n.carousel-button.prev {\n  left: 20px;\n}\n\n.carousel-button.next {\n  right: 20px;\n}\n\n/* Update dots navigation */\n.carousel-dots {\n  position: absolute;\n  bottom: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  gap: 10px;\n  z-index: 2;\n}\n\n.carousel-dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  background: rgba(255, 255, 255, 0.2);\n  cursor: pointer;\n  transition: all 0.3s ease;\n  padding: 0;\n}\n\n.carousel-dot:hover {\n  background: rgba(255, 255, 255, 0.4);\n  transform: scale(1.2);\n}\n\n.carousel-dot.active {\n  background: #2196f3;\n  transform: scale(1.2);\n  border-color: rgba(255, 255, 255, 0.5);\n  box-shadow: 0 0 10px rgba(33, 150, 243, 0.5);\n}\n\n/* Responsive Design */\n@media (max-width: 768px) {\n  .carousel-container {\n    height: 400px;\n  }\n\n  .carousel-button {\n    width: 40px;\n    height: 40px;\n    font-size: 20px;\n  }\n\n  .slide-content h2 {\n    font-size: 2rem;\n  }\n\n  .slide-content p {\n    font-size: 1rem;\n  }\n}\n\n@media (max-width: 480px) {\n  .carousel-container {\n    height: 300px;\n  }\n\n  .carousel-button {\n    width: 35px;\n    height: 35px;\n    font-size: 18px;\n  }\n\n  .slide-content h2 {\n    font-size: 1.5rem;\n  }\n\n  .slide-content p {\n    font-size: 0.9rem;\n  }\n\n  .slide-content .cta-button {\n    padding: 10px 20px;\n    font-size: 1rem;\n  }\n} ",""]);const s=o},855:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),a=t.n(r),i=t(314),o=t.n(i)()(a());o.push([n.id,":root {\n  /* Colors */\n  --primary-dark: #0a192f;\n  --primary-light: #112240;\n  --accent-blue: #1d4ed8;\n  --accent-teal: #64ffda;\n  --text-primary: #ffffff;\n  --text-secondary: #ccd6f6;\n  \n  /* Gradients */\n  --gradient-dark: linear-gradient(135deg, var(--primary-light) 0%, var(--primary-dark) 100%);\n  --gradient-accent: linear-gradient(90deg, var(--accent-blue), var(--accent-teal));\n  \n  /* Shadows */\n  --shadow-blue: 0 4px 15px rgba(29, 78, 216, 0.3);\n  --shadow-hover: 0 8px 25px rgba(29, 78, 216, 0.4);\n  \n  /* Borders */\n  --border-teal: 1px solid rgba(100, 255, 218, 0.1);\n  --border-teal-hover: 1px solid rgba(100, 255, 218, 0.2);\n}\n\n/* Global Styles */\nbody {\n  background-color: var(--primary-dark);\n  color: var(--text-secondary);\n  font-family: 'Inter', sans-serif;\n}\n\n.section-title {\n  font-size: 2.5rem;\n  color: var(--text-primary);\n  margin-bottom: 2rem;\n  text-align: center;\n  position: relative;\n  padding-bottom: 1rem;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n}\n\n.section-title::after {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 80px;\n  height: 3px;\n  background: var(--gradient-accent);\n  border-radius: 2px;\n}\n\n.cta-button {\n  display: inline-block;\n  padding: 1rem 2.5rem;\n  background: linear-gradient(135deg, var(--accent-blue) 0%, var(--primary-light) 100%);\n  color: var(--text-primary);\n  text-decoration: none;\n  border-radius: 4px;\n  font-weight: 600;\n  font-size: 1.1rem;\n  transition: all 0.3s ease;\n  box-shadow: var(--shadow-blue);\n  border: var(--border-teal-hover);\n  position: relative;\n  overflow: hidden;\n}\n\n.cta-button::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, transparent, rgba(100, 255, 218, 0.2), transparent);\n  transition: 0.5s;\n}\n\n.cta-button:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-hover);\n}\n\n.cta-button:hover::before {\n  left: 100%;\n}\n\n.card {\n  background: var(--gradient-dark);\n  padding: 2rem;\n  border-radius: 4px;\n  box-shadow: var(--shadow-blue);\n  text-align: center;\n  transition: all 0.3s ease;\n  border: var(--border-teal);\n}\n\n.card:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--shadow-hover);\n}\n\n/* Responsive styles */\n@media (max-width: 768px) {\n  .section-title {\n    font-size: 2rem;\n  }\n}\n\n@media (max-width: 480px) {\n  .section-title {\n    font-size: 1.8rem;\n  }\n  \n  .cta-button {\n    padding: 0.8rem 2rem;\n    font-size: 1rem;\n  }\n} ",""]);const s=o}}]);