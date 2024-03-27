let isOpen = false;
let toggleMenubar = () => {
    isOpen = !isOpen;

    const menubar =  document.getElementsByClassName("menubar")[0];

    if(isOpen){
        menubar.style.right = "0";
    }else{
        menubar.style.right = "-40%";
    }
}

