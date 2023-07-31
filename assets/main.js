

// execute script after page load
window.onload = function digital_fn(){

    //toggle button
    let toggle = document.querySelector("#nav.toggle-btn");
    let collapse = document.querySelector("nav.collapse")

    toggle.addEventListener('click',function(event){
        collapse.classList.toggle('active')
        // console.log(toggle);
    });

    //mansonry js
    let grid = document.querySelector("#site-main.recent-work-area.image-flex")

    let mansonry=new Mansonry(grid,{
        itemSelector:'flex-item',
        gutter:100,
        fitwidth:true
    })
}