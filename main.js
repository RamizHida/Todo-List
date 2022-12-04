(()=>{"use strict";class t{constructor(t,e,n,l){this.title=t,this.description=e,this.dueDate=n,this.priority=l}edit(){}delete(){}}let e=[];const n=document.querySelector(".project--container"),l=document.querySelector("#project");let i=document.createElement("div"),d=document.createElement("h2"),r=document.querySelector(".add--task"),o=document.querySelector("#delete--project--btn"),a=0,c=0;function u(t){if(document.body.style.background="black",document.querySelector(".left--container").style.display="none",i.setAttribute("id","error"),r.style.display="none",d.textContent=t,i.appendChild(d),document.body.appendChild(i),y.hasChildNodes())for(var e=y.children,n=0;n<e.length;n++)e[n].style.display="none";setTimeout(s,2500)}function s(){document.querySelector(".left--container").style.display="flex",document.body.style.background="rgb(203, 213, 225)",document.body.removeChild(i),y.hasChildNodes()&&C(y),r.style.display="flex"}function p(t){if(null==y.firstChild)return;let e=y.children;for(let n=0;n<e.length;n++){let l=e[n];l.getAttribute("data-id")==t&&(y.removeChild(l),n--)}}n.addEventListener("click",(function(t){m.style.display="none",t.target.getAttribute("data-id")&&(h.style.display="none");for(let e=n.firstChild;null!==e;e=e.nextSibling)e.getAttribute("data-id")&&(e.style.background="purple",e.firstChild.style.background="purple",t.target==e&&(e.style.background="red",e.firstChild.style.background="red"),t.target.parentNode==e&&(e.style.background="red",e.firstChild.style.background="red"));!function(t){if("red"==t.style.background||t.getAttribute("data-id"))for(let e=y.firstChild;null!==e;e=e.nextSibling)t.getAttribute("data-id")!=e.getAttribute("data-id")?e.style.display="none":e.style.display="grid"}(t.target)})),o.addEventListener("click",(function(){let t,e=!1;if(null==n.firstChild)return u("No Projects Currently In Inventory");for(let l=n.firstChild;null!=l;l=l.nextSibling)"red"==l.style.background&&l.getAttribute("data-id")&&(e=!0,t=l);if(!e)return u("Please Choose Project To Delete");if(c--,t==n.lastChild&&null==y.firstChild)return n.removeChild(t),void a--;if(e){if(a--,null==t.nextSibling)return p(t.getAttribute("data-id")),void n.removeChild(t);if(null!==t.nextSibling){for(let e=t.nextSibling;null!==e;e=e.nextSibling){let t=e.getAttribute("data-id")-1;e.setAttribute("data-id",t),e.firstChild.setAttribute("data-id",t)}p(t.getAttribute("data-id")),function(t){if(null!=y.firstChild)for(let e=y.firstChild;null!==e;e=e.nextSibling){let n=e.getAttribute("data-id")-1;e.getAttribute("data-id")>t&&e.setAttribute("data-id",n)}}(t.getAttribute("data-id")),n.removeChild(t)}}}));let m=document.querySelector("#task--notification"),y=document.querySelector(".list--container"),b=document.createElement("div"),h=document.querySelector("#all--list--items");function C(t){for(var e=t.children,n=0;n<e.length;n++)e[n].style.display="grid"}document.querySelector("#project").addEventListener("click",(function(){h.style.display="none",o.style.display="none";let t=document.createElement("div");t.classList.add("project--list");let e=document.createElement("input");e.setAttribute("type","text"),e.setAttribute("maxlength","20"),e.setAttribute("placeholder","Project Title");let i=document.createElement("button");i.textContent="Submit",i.setAttribute("id","submit"),t.style.display="flex",i.addEventListener("click",(function(){if(h.style.display="none",o.style.display="block",a>8)return t.style.display="none",void u("Maximum Number of Projects Reached");let e=document.getElementsByTagName("input")[0].value.trim();if(0===e.length)return setTimeout((()=>{h.style.display="block"}),2500),u("Project Title Cannot Be Empty");c++;let i=document.createElement("div");i.setAttribute("id","proj-title"),i.setAttribute("data-ID",c);let d=document.createElement("h2");d.setAttribute("data-ID",c),d.textContent=e,i.appendChild(d),n.removeChild(t),l.style.display="block",n.appendChild(i),a++}));let d=document.createElement("button");d.textContent="Cancel",d.setAttribute("id","delete"),d.addEventListener("click",(function(){l.style.display="block",o.style.display="block",n.removeChild(t)})),t.appendChild(e),t.appendChild(i),t.appendChild(d),n.appendChild(t),l.style.display="none"})),r.addEventListener("click",(function(){if(m.style.display="none",h.style.display="none",!n.hasChildNodes())return u("Please Create a Project First");if(function(){for(let t=n.firstChild;null!==t;t=t.nextSibling)if("red"==t.style.background)return!1;return!0}())return setTimeout((function(){h.style.display="block"}),2500),u("Please Select a Project First");b.classList.add("form--container");let i=document.createElement("form");i.classList.add("form");let d=document.createElement("div"),a=document.createElement("label");a.setAttribute("for","title"),a.textContent="Title";let c=document.createElement("input");c.setAttribute("type","text"),c.setAttribute("id","title"),c.setAttribute("maxlength","40"),d.appendChild(a),d.appendChild(c);let s=document.createElement("div"),p=document.createElement("label");p.setAttribute("for","description"),p.textContent="Description";let f=document.createElement("textarea");f.setAttribute("name","description"),f.setAttribute("id","desciption"),f.setAttribute("col","20"),f.setAttribute("rows","5"),f.setAttribute("maxlength","200"),s.appendChild(p),s.appendChild(f);let g=document.createElement("div"),A=document.createElement("label");A.setAttribute("for","date"),A.textContent="Due Date";let E=document.createElement("input");E.setAttribute("type","date"),E.setAttribute("id","date"),g.appendChild(A),g.appendChild(E);let v=document.createElement("div"),x=document.createElement("label");x.setAttribute("for","priority"),x.textContent="Priority";let k=document.createElement("select");k.setAttribute("name","priority"),k.setAttribute("id","priority");let S=document.createElement("option");S.setAttribute("value","1"),S.textContent="Low";let j=document.createElement("option");j.setAttribute("value","2"),j.textContent="Medium";let L=document.createElement("option");L.setAttribute("value","3"),L.textContent="High",k.appendChild(S),k.appendChild(j),k.appendChild(L),v.appendChild(x),v.appendChild(k);let D=document.createElement("button");D.setAttribute("id","cancel--task");let P=document.createElement("h2");P.textContent="Cancel",D.appendChild(P);let q=document.createElement("button");q.setAttribute("id","submit--task");let N=document.createElement("h2");N.textContent="Submit",q.appendChild(N),i.appendChild(d),i.appendChild(s),i.appendChild(g),i.appendChild(v),i.appendChild(D),i.appendChild(q),b.appendChild(i),document.querySelector("#add--task--container").insertAdjacentElement("afterend",b),r.style.display="none",l.style.display="none",o.style.display="none",q.addEventListener("click",(function(i){m.style.display="block",i.preventDefault(),e.push(new t(c.value,f.value,E.value,k.value)),function(t,e,l,i){T.classList.add("todo--cap"),T.setAttribute("data-id",function(){for(let t=n.firstChild;null!==t;t=t.nextSibling)if(t.style.background,"red"===t.style.background)return t.getAttribute("data-id")}());let d=document.createElement("h2");d.textContent="Title";let r=document.createElement("h2");r.textContent="Description";let o=document.createElement("h2");o.textContent="Due Date";let a=document.createElement("h2");a.textContent="Priority";let c=document.createElement("p");c.textContent=t;let u=document.createElement("p");u.setAttribute("id","description--to--do"),u.textContent=e;let s=document.createElement("p");s.textContent=l;let p=document.createElement("p");p.setAttribute("id","priority--to--do"),p.textContent=i;let m=document.createElement("div");m.setAttribute("id","delete--todo--container");let b=document.createElement("button");b.textContent="Delete",b.setAttribute("id","delete--todo"),m.appendChild(b),T.appendChild(d),T.appendChild(r),T.appendChild(o),T.appendChild(a),T.appendChild(c),T.appendChild(u),T.appendChild(s),T.appendChild(p),T.appendChild(m),y.appendChild(T)}(c.value,f.value,E.value,k.value),document.body.removeChild(b),r.style.display="flex",l.style.display="block",o.style.display="block"})),D.addEventListener("click",(function(){h.style.display="block",o.style.display="block",document.body.removeChild(b),r.style.display="flex",l.style.display="block",y.hasChildNodes()&&C(y)}));let T=document.createElement("div");if(y.hasChildNodes())for(var I=y.children,w=0;w<I.length;w++)I[w].style.display="none"}))})();