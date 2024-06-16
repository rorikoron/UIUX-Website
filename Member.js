var data = [
    {
        name: "黃君翰",
        sex: "男",
        background: "國立新竹高中",
        speciality: "音樂、程式",
        hobby: "音樂、程式",
        theme: "音訊處理、音效設計、MaxMSP",
        carrer: `・台灣音樂遊戲 Gadvia 樂曲收錄<br>
        ・2023 M3-秋 日本社團參與發行`,
        subject: `UIUX Design, Sound Design, Live Coding
        `,
        icon_src: "./P_20231209_103230.jpg"
    }, {
        name: "陳文獻",
        sex: "男",
        background: "新北市板橋高中",
        speciality: "程式",
        hobby: "程式，打電玩",
        theme: "NLP",
        carrer: "2023ICPC銅牌",
        subject: `演算法, 離散數學, 資料科學
        `,
        icon_src: "./60061.jpg"
    }, {
        name: "伊東和毅",
        sex: "男",
        background: "台北市立大同高中",
        speciality: "繪畫、程式、語言",
        hobby: "繪畫、程式",
        theme: "無",
        carrer: "精通三語言",
        subject: `Linux與邊緣計算, 程式設計, 計算機概論
        `,
        icon_src: "./11238.jpg"
    }
]
// init index
var data_index = 0;

var name_p, sex_p, background_p, speciality_p, hobby_p, theme_p, icon_p;

// get each;

    
let updateMember = () =>{
    name_p = document.querySelector("#name"),
    sex_p  = document.querySelector("#sex"),
    background_p = document.querySelector("#background"),
    speciality_p = document.querySelector("#speciality"),
    hobby_p = document.querySelector("#hobby"),
    theme_p = document.querySelector("#theme"),
    carrer_p = document.querySelector("#carrer");
    subject_p = document.querySelector("#subject");
    icon_p = document.querySelectorAll(".card_icon")[0];

    let current_data = data[data_index];

    name_p.innerHTML = current_data.name;
    sex_p.innerHTML = current_data.sex;
    background_p.innerHTML = current_data.background;
    speciality_p.innerHTML = current_data.speciality;
    hobby_p.innerHTML = current_data.hobby;
    theme_p.innerHTML = current_data.theme;
    carrer_p.innerHTML = current_data.carrer;
    subject_p.innerHTML = current_data.subject;
    icon_p.setAttribute("src", current_data.icon_src);
}

let updateMember_l = () => {
    data_index = (data_index + data.length-1) % data.length;
    updateMember();
}

let updateMember_r = () => {
    data_index = (data_index+1)%data.length;
    updateMember();
}

window.addEventListener("load", ()=>{
    updateMember();
})

window.addEventListener("DOMContentLoaded", () => {
    
    // storing data to cookie
    data.forEach((element, index) => {
        let element_json = JSON.stringify(element);
        document.cookie = "member"+ index + "=" + element_json;
    });

    // setting arrow
    let arrow_l = document.getElementsByClassName("arrow_l")[0],
        arrow_r = document.getElementsByClassName("arrow_r")[0];

    arrow_l.addEventListener("click", () => {
        updateMember_l();
    });
    
    arrow_r.addEventListener("click", () => {
        updateMember_r();
    });

    window.addEventListener("keydown", (element) => {
        if(element.ctrlKey){
            switch (element.code){
                case "ArrowLeft":
                    updateMember_l();
                    break;
                case "ArrowRight":
                    updateMember_r();
                    break;
            }

        }
    })
})
