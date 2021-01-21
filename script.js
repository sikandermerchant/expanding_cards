const panels = document.querySelectorAll('.panel');
// console.log(panels);
panels.forEach(panel => {
  // console.log(panel);
  panel.addEventListener('click',() =>{
    // console.log('click')
    //remove the class active from all the panels first by calling the below class
    removeActiveClasses()
    //add a class for the clicked panel,which was detected by the addEventListener above
    panel.classList.add('active');
    panel.classList
  })
});
function removeActiveClasses(){
  panels.forEach(panel => {
    panel.classList.remove('active');
  });

}

