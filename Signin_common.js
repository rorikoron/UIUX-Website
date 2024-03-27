let openModal = () => {
    const layer = document.getElementById("modal_layer");
    layer.style.opacity = 1;
    layer.style.visibility = "visible";

    const window = document.getElementById("modal_window");
    window.style.opacity = 1;
    window.style.visibility = "visible";
}
let closeModal = () => {
    const layer = document.getElementById("modal_layer");
    layer.style.opacity = 0;
    layer.style.visibility = "hidden";

    const window = document.getElementById("modal_window");
    window.style.opacity = 0;
    window.style.visibility = "hidden";
}
window.addEventListener("DOMContentLoaded", () => {
    const btn_submit = document.getElementById("submit");
    const layer = document.getElementById("modal_layer");
    const btn_back = document.getElementById("btn_back");
    const btn_toward = document.getElementById("btn_toward");
    btn_submit.addEventListener("click", () => {
        openModal();
    });
    layer.addEventListener("click", () => {
        closeModal();
    })
    btn_back.addEventListener("click", () => {
        closeModal();
    })
    window.addEventListener("keydown", (element) => {
        if(element.altKey && element.code == "Enter"){
            closeModal();
        }
    });


})