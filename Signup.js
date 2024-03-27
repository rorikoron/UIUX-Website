let change_field = () => {
    // change aside content
    const aside = document.getElementsByTagName("aside");
    for(let i = 0; i < 3; i++){
        aside[i].style.display = "none"
    }
    aside[current_field].style.display = "inline-block";

    // change input_field
    const field = document.getElementsByClassName("input_field");
    for(let i = 0; i < 3; i++){
        field[i].style.display = "none"
    }
    field[current_field].style.display = "flex";

    // change back either none or block
    const btn_back = document.getElementsByClassName("back")[0];
    if(current_field == 0){
        btn_back.style.display = "none";
    }else{
        btn_back.style.display = "block";
    }

    // change next/verify either none or block
    const btn_next = document.getElementsByClassName("next")[0];
    const btn_verify = document.getElementsByClassName("submit")[0];

    if(current_field == 2){
        btn_next.style.display = "none";
        btn_verify.style.display = "block";
    }else{
        btn_next.style.display = "block";
        btn_verify.style.display = "none";
    }
}

let current_field = 0;

window.addEventListener("DOMContentLoaded", () => {


    change_field();
    const btn_next = document.getElementsByClassName("next")[0];
    const btn_back = document.getElementsByClassName("back")[0];

    btn_next.addEventListener("click", () => {
        current_field++;
        change_field();
    });
    btn_back.addEventListener("click", () => {
        current_field--;
        change_field();
    })
})