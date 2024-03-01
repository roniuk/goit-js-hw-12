import{i,a as y,S as v}from"./assets/vendor-b42c18af.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function d(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=d(t);fetch(t.href,s)}})();const L={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnElem:document.querySelector(".btn")},{form:u,gallery:m,loader:l,btnElem:n}=L;l.classList.add("hidden");const a={key:"42200022-9c7e7676f0f903944c054771a",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:1,totalResults:0,q:""};n.classList.add("hidden");u.addEventListener("submit",async e=>{if(e.preventDefault(),a.q=e.target.elements.input.value.trim(),!navigator.onLine){p();return}if(a.q.trim()===""){e.target.elements.input.value="",i.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#125487",messageColor:"white",messageSize:"25"});return}m.innerHTML="",l.classList.remove("hidden"),a.page=1;const r=await h();a.totalResults=r.totalHits,g(r),n.classList.remove("hidden"),f(),e.target.reset()});n.addEventListener("click",async()=>{a.page+=1;const e=await h();g(e),f(),window.scrollBy({top:465,behavior:"smooth"}),u.elements.input.value=""});async function h(){try{const e=new URLSearchParams(a);return(await y.get(`https://pixabay.com/api/?${e}`)).data}catch(e){if(e.message==="Network Error")p();else throw e}}function g(e){if(e.hits.length===0){i.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#125487",messageColor:"white",messageSize:"25"}),n.classList.add("hidden");return}const r=e.hits.map(o=>`<a class="gallery-link" href="${o.largeImageURL}">
            <img class="gallery-image"
                src="${o.webformatURL}"
                alt="${o.tags}"
            </a>
            <div class="img-content">
                <div>
                    <h3>Likes</h3>
                    <p>${o.likes}</p>
                </div>

                <div>
                    <h3>Views</h3>
                    <p>${o.views}</p>
                </div>

                <div>
                    <h3>Comments</h3>
                    <p>${o.comments}</p>
                </div>

                <div>
                    <h3>Downloads</h3>
                    <p>${o.downloads}</p>
                </div>
            </div>`).join("");m.insertAdjacentHTML("beforeend",r),n.classList.remove("hidden"),new v(".gallery-link").refresh(),l.classList.add("hidden")}function f(){Math.ceil(a.totalResults/a.per_page)===a.page&&(n.classList.add("hidden"),i.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#125487",messageColor:"white",messageSize:"25"}))}function p(){i.show({message:"Sorry, there is no internet connection. Please check your connection and try again.",backgroundColor:"#125487",messageColor:"white",messageSize:"25"})}
//# sourceMappingURL=commonHelpers.js.map
