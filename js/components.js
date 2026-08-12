async function loadComponent(id, file){
  const element = document.getElementById(id);
  
  const res = await fetch(file);
  const html = await res.text();
  
  element.innerHTML = html;
  
  if(id === "header"){
    setActiveNav();
    setHamburgerMenu();
  }
  
}

function setActiveNav(){
  const currentPage = window.location.pathname;
  
  console.log(currentPage)
  const currentFile = currentPage.split("/").pop() || "index.html";
  
  
  const links = document.querySelectorAll("nav a");
  
  links.forEach(link => {
    const linkPage = link.getAttribute("href");
    
    //console.log(`current: ${currentFile}, linkPage: ${linkPage}`)
    if(currentPage.endsWith(linkPage)){
      console.log(link, linkPage)
      link.classList.add("active")
    }
  })
}

function setHamburgerMenu(){
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("#navMenu");
  
  
  if(!hamburger || !navMenu) return;
  
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    
  });
}

loadComponent("header", "components/header.html")
loadComponent("footer", "components/footer.html")