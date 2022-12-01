(()=>{"use strict";class e{constructor(e,t,n,l){this.title=e,this.description=t,this.dueDate=n,this.priority=l}edit(){}delete(){}}let t=[];const n=document.querySelector(".project--container"),l=document.querySelector("#project");let d=document.createElement("div"),i=document.createElement("h2"),o=document.querySelector(".add--task"),r=0,a=0;function c(e){if(document.body.style.background="black",document.querySelector(".left--container").style.display="none",d.setAttribute("id","error"),o.style.display="none",i.textContent=e,d.appendChild(i),document.body.appendChild(d),p.hasChildNodes())for(var t=p.children,n=0;n<t.length;n++)t[n].style.display="none";setTimeout(u,2500)}function u(){document.querySelector(".left--container").style.display="flex",document.body.style.background="rgb(203, 213, 225)",document.body.removeChild(d),p.hasChildNodes()&&b(p),o.style.display="flex"}n.addEventListener("click",(function(e){s.style.display="none",e.target.getAttribute("data-id")&&(y.style.display="none");for(let t=n.firstChild;null!==t;t=t.nextSibling)t.getAttribute("data-id")&&(t.style.background="purple",t.firstChild.style.background="purple",e.target==t&&(t.style.background="red",t.firstChild.style.background="red"),e.target.parentNode==t&&(t.style.background="red",t.firstChild.style.background="red"));!function(e){if("red"==e.style.background||e.getAttribute("data-id"))for(let t=p.firstChild;null!==t;t=t.nextSibling)e.getAttribute("data-id")!=t.getAttribute("data-id")?t.style.display="none":t.style.display="grid"}(e.target)}));let s=document.querySelector("#task--notification"),p=document.querySelector(".list--container"),m=document.createElement("div"),y=document.querySelector("#all--list--items");function b(e){for(var t=e.children,n=0;n<t.length;n++)t[n].style.display="grid"}document.querySelector("#project").addEventListener("click",(function(){y.style.display="none";let e=document.createElement("div");e.classList.add("project--list");let t=document.createElement("input");t.setAttribute("type","text"),t.setAttribute("maxlength","20"),t.setAttribute("placeholder","Project Title");let d=document.createElement("button");d.textContent="Submit",d.setAttribute("id","submit"),e.style.display="flex",d.addEventListener("click",(function(){if(y.style.display="none",r>8)return e.style.display="none",void c("Maximum Number of Projects Reached");let t=document.getElementsByTagName("input")[0].value.trim();if(0===t.length)return setTimeout((()=>{y.style.display="block"}),2500),c("Project Title Cannot Be Empty");a++;let d=document.createElement("div");d.setAttribute("id","proj-title"),d.setAttribute("data-ID",a);let i=document.createElement("h2");i.setAttribute("data-ID",a),i.textContent=t,d.appendChild(i),n.removeChild(e),l.style.display="block",n.appendChild(d),r++}));let i=document.createElement("button");i.textContent="Cancel",i.setAttribute("id","delete"),i.addEventListener("click",(function(){l.style.display="block",n.removeChild(e)})),e.appendChild(t),e.appendChild(d),e.appendChild(i),n.appendChild(e),l.style.display="none"})),o.addEventListener("click",(function(){if(s.style.display="none",y.style.display="none",!n.hasChildNodes())return c("Please Create a Project First");if(function(){for(let e=n.firstChild;null!==e;e=e.nextSibling)if("red"==e.style.background)return!1;return!0}())return setTimeout((function(){y.style.display="block"}),2500),c("Please Select a Project First");m.classList.add("form--container");let d=document.createElement("form");d.classList.add("form");let i=document.createElement("div"),r=document.createElement("label");r.setAttribute("for","title"),r.textContent="Title";let a=document.createElement("input");a.setAttribute("type","text"),a.setAttribute("id","title"),a.setAttribute("maxlength","40"),i.appendChild(r),i.appendChild(a);let u=document.createElement("div"),h=document.createElement("label");h.setAttribute("for","description"),h.textContent="Description";let C=document.createElement("textarea");C.setAttribute("name","description"),C.setAttribute("id","desciption"),C.setAttribute("col","20"),C.setAttribute("rows","5"),C.setAttribute("maxlength","200"),u.appendChild(h),u.appendChild(C);let f=document.createElement("div"),E=document.createElement("label");E.setAttribute("for","date"),E.textContent="Due Date";let A=document.createElement("input");A.setAttribute("type","date"),A.setAttribute("id","date"),f.appendChild(E),f.appendChild(A);let g=document.createElement("div"),v=document.createElement("label");v.setAttribute("for","priority"),v.textContent="Priority";let x=document.createElement("select");x.setAttribute("name","priority"),x.setAttribute("id","priority");let k=document.createElement("option");k.setAttribute("value","1"),k.textContent="Low";let S=document.createElement("option");S.setAttribute("value","2"),S.textContent="Medium";let L=document.createElement("option");L.setAttribute("value","3"),L.textContent="High",x.appendChild(k),x.appendChild(S),x.appendChild(L),g.appendChild(v),g.appendChild(x);let j=document.createElement("button");j.setAttribute("id","cancel--task");let D=document.createElement("h2");D.textContent="Cancel",j.appendChild(D);let q=document.createElement("button");q.setAttribute("id","submit--task");let P=document.createElement("h2");P.textContent="Submit",q.appendChild(P),d.appendChild(i),d.appendChild(u),d.appendChild(f),d.appendChild(g),d.appendChild(j),d.appendChild(q),m.appendChild(d),document.querySelector("#add--task--container").insertAdjacentElement("afterend",m),o.style.display="none",l.style.display="none",q.addEventListener("click",(function(d){s.style.display="block",d.preventDefault(),t.push(new e(a.value,C.value,A.value,x.value)),function(e,t,l,d){N.classList.add("todo--cap"),N.setAttribute("data-id",function(){for(let e=n.firstChild;null!==e;e=e.nextSibling)if(e.style.background,"red"===e.style.background)return e.getAttribute("data-id")}());let i=document.createElement("h2");i.textContent="Title";let o=document.createElement("h2");o.textContent="Description";let r=document.createElement("h2");r.textContent="Due Date";let a=document.createElement("h2");a.textContent="Priority";let c=document.createElement("p");c.textContent=e;let u=document.createElement("p");u.setAttribute("id","description--to--do"),u.textContent=t;let s=document.createElement("p");s.textContent=l;let m=document.createElement("p");m.setAttribute("id","priority--to--do"),m.textContent=d;let y=document.createElement("div");y.setAttribute("id","delete--todo--container");let b=document.createElement("button");b.textContent="Delete",b.setAttribute("id","delete--todo"),y.appendChild(b),N.appendChild(i),N.appendChild(o),N.appendChild(r),N.appendChild(a),N.appendChild(c),N.appendChild(u),N.appendChild(s),N.appendChild(m),N.appendChild(y),p.appendChild(N)}(a.value,C.value,A.value,x.value),document.body.removeChild(m),o.style.display="flex",l.style.display="block"})),j.addEventListener("click",(function(){y.style.display="block",document.body.removeChild(m),o.style.display="flex",l.style.display="block",p.hasChildNodes()&&b(p)}));let N=document.createElement("div");if(p.hasChildNodes())for(var T=p.children,w=0;w<T.length;w++)T[w].style.display="none"}))})();