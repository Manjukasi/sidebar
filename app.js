let toggleButton = document.querySelector(".icon");
let leftPanel = document.querySelectorAll(".icon-container > div");
let contentElements = document.querySelectorAll('#content > div');
let iconContainer = document.querySelectorAll(".icon-container");


const showContent = (component) => {
    contentHidden();   
    let selectedContent = document.getElementById(component + '-content');
    selectedContent.classList.remove('hidden');
    highLight();
    let selectedIcon = document.getElementById(component + '-icon');
    selectedIcon.classList.add('active');
    selectedIcon.style.color = "pink";

    setTimeout(function() {
      selectedIcon.style.color = "";
    }, 200);
  
} 

toggleButton.addEventListener("click", function() {
      // contentHidden();
      hideSidebar();
  })

  function contentHidden() {
    for (let i = 0; i < contentElements.length; i++) {
        contentElements[i].classList.add('hidden');
      } 
  }
  function hideSidebar() {
    for (let i = 0; i < leftPanel.length; i++) {
      leftPanel[i].classList.toggle("hidden");
    } 
  }
  function highLight() {
    for (let i = 0; i < iconContainer.length; i++) {
      iconContainer[i].classList.remove("active");
    } 
  }




