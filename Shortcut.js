window.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("keydown", (element) => {
        if(element.altKey){
            switch (element.code){
                case "KeyT":
                    location.href = "./index.html";
                    break;
                case "KeyM":
                    location.href = "./Member.html";
                    break;
                case "KeyO":
                    location.href = "./Other.html";
                    break;
                case "KeyC":
                    location.href = "./Contact.html";
                    break;
                case "KeyH":
                    location.href = "./Help.html";
                    break;
                case "KeyS":
                    location.href = "./Signin.html";
                    break;
            }
        }
    })
});