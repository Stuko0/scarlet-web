const a=document.getElementById("dropdownToggle"),t=document.getElementById("dropDiv"),d=document.getElementById("dropdownMenu"),c=document.getElementById("aboutText"),s=document.getElementById("dropIcon");document.getElementById("hamburger").onclick=function(){const e=document.getElementsByClassName("toggle");for(let o=0;o<e.length;o++)e.item(o).classList.toggle("hidden")};a.addEventListener("click",n=>{n.target&&d.classList.toggle("hidden")});document.addEventListener("click",n=>{const e=n.target;!a.contains(e)&&!d.contains(e)&&(t.classList.remove("md:bg-[url('/primary.png')]","md:bg-center","md:bg-no-repeat","md:bg-contain"),c.classList.remove("text-[#ea580c]","md:text-white"),s.classList.remove("fill-[#ffae27]"),d.classList.add("hidden"))});t.addEventListener("mouseenter",()=>{t.classList.remove("md:hover:bg-[url('/primary.png')]","md:hover:bg-center","md:hover:bg-no-repeat","md:hover:bg-contain"),c.classList.add("text-[#ea580c]","md:text-white"),s.classList.add("fill-[#ffae27]")});t.addEventListener("mouseleave",()=>{t.classList.add("md:bg-[url('/primary.png')]","bg-center","bg-no-repeat","bg-contain"),s.classList.remove("fill-[#ffae27]")});