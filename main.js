
if (matchMedia) {
    const mq = window.matchMedia("(min-width:540px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
}
function WidthChange(mq) {
    if (mq.matches) {
      $(openTab);
    } else {
      $(accordian);
    }
}
function openTab(event, navName) {
    // Declare all variables
    var i, containCont, navLink;
    // Get all elements with class="containCont" and hide them
    containCont = document.getElementsByClassName("containCont");
    for (i = 0; i < containCont.length; i++) {
      containCont[i].style.display = "none";
    }
    // Get all elements with class="navLink" and remove the class "active"
    navLink = document.getElementsByClassName("navLink");
    for (i = 0; i < navLink.length; i++) {
      navLink[i].className = navLink[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(navName).style.display = "block";
    event.currentTarget.className += " active";
  }
 
  function accordian() {
    let acc = document.getElementsByClassName("accordian");
    let i;
    for (i=0; i<acc.length; i++) {
      acc[i].addEventListener("click",function(){
        this.classList.toggle("active");
        let panel =this.nextElementSibling;
        if (panel.style.display ==="block") {
          panel.style.display="none";
        } else {
          panel.style.display="block";
        }
      });
    };
  }
 