function openNav() {
    const sideNav = document.getElementById("mySidenav");
    const gptElement = document.getElementById("gpt");
    const typingBar = document.getElementById("typingBar");
    const closeBtn = document.getElementById("closebtn");
    const gpt = document.getElementById("gpt");
  if(window.innerWidth >= 700 ){
    sideNav.style.width = "40%";
    sideNav.style.position = "relative";
    sideNav.style.padding = "60px 20px";
    gptElement.style.width = typingBar.style.width = "55%";
    closeBtn.style.visibility = "visible";
  }
  else{
    sideNav.style.width = "100%";
    sideNav.style.position = "relative";
    sideNav.style.padding = "60px 20px";
    gpt.style.width=0;
    gpt.style.margin = 0;
    closeBtn.style.visibility = "visible";
  }
    
  }
  
  function closeNav() {
    const sideNav = document.getElementById("mySidenav");
    const gptElement = document.getElementById("gpt");
    const typingBar = document.getElementById("typingBar");
    const closeBtn = document.getElementById("closebtn");
    const gpt = document.getElementById("gpt");
    if(window.innerWidth >= 700){
      sideNav.style.width = "0";
    sideNav.style.position = "absolute";
    sideNav.style.padding = "0";
    sideNav.style.right = "0";
    gptElement.style.width = typingBar.style.width = "70%";
    closeBtn.style.visibility = "hidden";
    }
    else{
      sideNav.style.width = "0";
    sideNav.style.position = "relative";
    sideNav.style.padding = "0";
    gpt.style.width="100%";
    gpt.style.margin = "30px 20px 0 20px";
    closeBtn.style.visibility = "visible";
    }
    
  }

