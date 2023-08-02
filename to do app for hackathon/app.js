
let _name = "empty";
// =========================display_none===================
let display_none = (listing_1, listing_2, listing_3, listing_4, listing_5, listing_6) => {
    listing_1.style.display = "none"
    listing_2.style.display = "none"
    listing_3.style.display = "none"
    listing_4.style.display = "none"
    listing_5.style.display = "none"
    listing_6.style.display = "none"
}


// =========================dislayDate==========================
function displayDate() {
    var now = new Date();
    if (now.getHours() == 0) {
        if (now.getSeconds() < 10) {
            time_section.innerText = "12" + ":" + now.getMinutes() + ":0" + now.getSeconds() + " am";
        }
        else {
            time_section.innerText = "12" + ":" + now.getMinutes() + ":" + now.getSeconds() + " am";
        }
        if (now.getMinutes() < 10) {
            time_section.innerText = "12" + ":0" + now.getMinutes() + ":" + now.getSeconds() + " am";
        }
        else {
            time_section.innerText = "12" + ":" + now.getMinutes() + ":" + now.getSeconds() + " am";
        }
    }
    else if (now.getHours() >= 12) {
        if (now.getSeconds() < 10) {
            time_section.innerText = (now.getHours() - 12) + ":0" + now.getMinutes() + ":0" + now.getSeconds() + " pm";
        }
        else {
            time_section.innerText = (now.getHours() - 12) + ":" + now.getMinutes() + ":" + now.getSeconds() + " pm";
        }
        if (now.getMinutes() < 10) {
            time_section.innerText = (now.getHours() - 12) + ":0" + now.getMinutes() + ":" + now.getSeconds() + " pm";
        }
        else {
            time_section.innerText = (now.getHours() - 12) + ":" + now.getMinutes() + ":" + now.getSeconds() + " pm";
        }

    }
    else if (now.getHours() < 12) {
        if (now.getSeconds() < 10) {
            time_section.innerText = now.getHours() + ":" + now.getMinutes() + ":0" + now.getSeconds() + " am";
        }
        else {
            time_section.innerText = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + " am";
        }
        if (now.getMinutes() < 10) {
            time_section.innerText = now.getHours() + ":0" + now.getMinutes() + ":" + now.getSeconds() + " am";
        }
        else {
            time_section.innerText = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + " am";
        }
    }


}


// =======================append add_task on clicking days===============

let add_and_clear_button = (day_name, color_of_buttons, add_task, clear_all, button_flag) => {

    add_task.innerText = "ADD TASK";
    clear_all.innerText = "CLEAR ALL";
    add_task.className = "add_task";
    clear_all.className = "add_task";
    button_field.appendChild(add_task);
    button_field.appendChild(clear_all);
    add_task.style.display = "inline-block"
    clear_all.style.display = "inline-block"
    add_task.style.background = color_of_buttons
    clear_all.style.background = color_of_buttons
    button_field.style.backgroundColor = color_of_buttons

}




// ====================click on add_task=====================

function creatingButton(listing, color_of_buttons, listing_style) {

    listing.className = listing_style
    listing.style.display = "block"

    //   =====================click on add task==============


    let item = document.createElement("div")
    item.className = "input_line"
    // ============creating an input field========
    list = document.createElement("input")
    list.style.background = color_of_buttons;
    list.style.value = "add task";
    list.className = "input"

    // ============creating a delet button========
    del_button = document.createElement("button")
    del_button.innerText = "delete"
    del_button.style.background = color_of_buttons;
    del_button.className = "add_btn"

    // ============creating a add button========
    done_button = document.createElement("button")
    done_button.innerText = "add"
    done_button.style.background = color_of_buttons
    done_button.className = "add_btn"

    listing.appendChild(item)
    item.appendChild(list)
    item.appendChild(del_button)
    item.appendChild(done_button)


    // ===============clicking on delete button====
    del_button.addEventListener("click", function () {
        item.innerHTML = ""
        item.style.height = "0px"
    })
    
    // ===============clicking on add button====
    done_button.addEventListener("click", function () {

        if (list.value != "") {
            // =================notifying para work on clicking done button of inut field=======
            let notifying_para = document.createElement("P")
            let space_div = document.createElement("div")
            let complete = document.createElement("button")
            complete.innerText = "done"
            complete.className = "done_style"
            notifying_para.innerText = list.value
            notifying_para.className = "notifying_para"

            space_div.className = "space_div"
            space_div.appendChild(notifying_para)
            space_div.appendChild(complete)
            notification_div.appendChild(space_div)
            complete.addEventListener("click", function () {
                notifying_para.style.textDecoration = "line-through"
            })
            clear_noti.addEventListener("click", function () {
                space_div.innerHTML = ""
                space_div.style.height = "0px"
            })

        }
        else {
            notifying_para.innerHTML = ""
        }
    })
    // =================clicking on clear all button===========
    clear_all.addEventListener("click", function () {
        listing.innerHTML = ""
        item.style.height = "0px"
        item.innerHTML = ""
        list.innerHTML = ""
        listing.style.backgroundColor = "transparent"
    })

}






// =============accessig classes form html============
let date_section = document.querySelector(".date_section")
let time_section = document.querySelector(".time_section")
let day_section = document.querySelector(".day_section")
let main = document.querySelector("main")
let header = document.querySelector("header")

let my_day = document.querySelector(".items ul").childNodes[1]
let important = document.querySelector(".items ul").childNodes[3]
let travel = document.querySelector(".items ul").childNodes[5]
let groceries = document.querySelector(".items ul").childNodes[7]
let work = document.querySelector(".items ul").childNodes[9]
let home = document.querySelector(".items ul").childNodes[11]
let to_do = document.querySelector(".items ul").childNodes[13]

let button_field = document.querySelector(".button_field")
let input_line = document.querySelector(".input_line")

let main_display = document.querySelector(".main_display")
let menu = document.querySelector(".menu")

let fa_lightbulb = document.querySelector(".fa-lightbulb")
let fa_bell = document.querySelector(".fa-bell")
let display_img = document.querySelector(".display_img")

let notification_div = document.querySelector(".notification_div")
let clear_noti = document.querySelector(".clear_noti")

let listing_for_my_day = document.querySelector(".listing_for_my_day")
let listing_for_important = document.querySelector(".listing_for_important")
let listing_for_to_do = document.querySelector(".listing_for_to_do")
let listing_for_groceries = document.querySelector(".listing_for_groceries")
let listing_for_home = document.querySelector(".listing_for_home")
let listing_for_travel = document.querySelector(".listing_for_travel")
let listing_for_work = document.querySelector(".listing_for_work")
// ====================creting variables===============
let add_task = document.createElement("button");
let clear_all = document.createElement("button");

let fa_bars = document.querySelector(".fa-bars")
let fa_times = document.querySelector(".fa-times")

// ===displaying date============
let todayDate = new Date();
let date = todayDate.getDate();
let month = todayDate.getMonth();
let year = todayDate.getFullYear();
let hour = todayDate.getHours();
let minute = todayDate.getMinutes();
let seconds = todayDate.getSeconds();

date_section.innerText = date + "-" + (month + 1) + "-" + year

// =====================displayDate calling===============
setInterval(displayDate, 1000);
// ======================eventlistene for add task for all pages==============

add_task.addEventListener("click", function () {
    if (_name === "myDay") {
        creatingButton(listing_for_my_day, "linear-gradient(90deg, #1CB5E0 0%, #000851 100%)", "listing_for_my_day");
    }

})

add_task.addEventListener("click", function () {
    if (_name === "imp") {
        creatingButton(listing_for_important, "linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)", "listing_for_important");
    }
})

add_task.addEventListener("click", function () {
    if (_name === "travel") {
        creatingButton(listing_for_travel, "linear-gradient(90deg, #4b6cb7 0%, #182848 100%)", "listing_for_travel");
    }
})

add_task.addEventListener("click", function () {
    if (_name === "groceries") {
        creatingButton(listing_for_groceries, "linear-gradient(90deg, #0700b8 0%, #00ff88 100%)", "listing_for_groceries");
    }
})

add_task.addEventListener("click", function () {
    if (_name === "work") {
        creatingButton(listing_for_work, "linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)", "listing_for_work");
    }
})


add_task.addEventListener("click", function () {
    if (_name === "home") {
        creatingButton(listing_for_home, "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)", "listing_for_home");
    }
})


add_task.addEventListener("click", function () {
    if (_name === "todo") {
        creatingButton(listing_for_to_do, "linear-gradient(90deg, #efd5ff 0%, #515ada 100%)", "listing_for_to_do");
    }
})
// ==================calling functions for all days=======================\

my_day.addEventListener("click", function () {
    _name = "myDay"
    day_section.innerText = "MY DAY"

    display_img.className = "change_display_img_3"
    button_field.style.backgroundColor = "#B2FFFF"
    listing_for_my_day.style.backgroundColor = "#B2FFFF"

    display_none(listing_for_important, listing_for_to_do, listing_for_groceries, listing_for_home, listing_for_travel, listing_for_work)



        add_and_clear_button(my_day, "linear-gradient(90deg, #1CB5E0 0%, #000851 100%)", add_task, clear_all, true)

})




important.addEventListener("click", function () {
    _name = "imp"
    day_section.innerText = "IMPORTANT"

    button_field.style.backgroundColor = "#AFDBF5 "
    display_img.className = "change_display_img_2"
    listing_for_important.style.backgroundColor = "#AFDBF5"

    display_none(listing_for_my_day, listing_for_to_do, listing_for_groceries, listing_for_home, listing_for_travel, listing_for_work)


        add_and_clear_button(important, "linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)", add_task, clear_all, true)


})



travel.addEventListener("click", function () {
    _name = "travel"
    day_section.innerText = "TRAVEL"

    display_img.className = "change_display_img_4"
    button_field.style.backgroundColor = "#ADD8E6"
    listing_for_travel.style.backgroundColor = "#ADD8E6"

    date_section.style.color = "white"
    time_section.style.color = "white"


    display_none(listing_for_my_day, listing_for_to_do, listing_for_groceries, listing_for_home, listing_for_important, listing_for_work)

        add_and_clear_button(travel, "linear-gradient(90deg, #4b6cb7 0%, #182848 100%)", add_task, clear_all, true)

})




groceries.addEventListener("click", function () {
    _name = "groceries"
    day_section.innerText = "GROCERIES"

    display_img.className = "change_display_img_5"
    button_field.style.backgroundColor = "#76ABDF"
    listing_for_groceries.style.backgroundColor = "#76ABDF"

    display_none(listing_for_my_day, listing_for_to_do, listing_for_home, listing_for_important, listing_for_travel, listing_for_work)


        add_and_clear_button(groceries, "linear-gradient(90deg, #0700b8 0%, #00ff88 100%)", add_task, clear_all, true)


})



work.addEventListener("click", function () {
    _name = "work"
    day_section.innerText = "WORK"

    display_img.className = "change_display_img_6"
    button_field.style.backgroundColor = "#87CEEB"
    listing_for_work.style.backgroundColor = "#87CEEB"

    display_none(listing_for_my_day, listing_for_to_do, listing_for_groceries, listing_for_home, listing_for_travel, listing_for_important)


        add_and_clear_button(work, "linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)", add_task, clear_all, true)

})


home.addEventListener("click", function () {
    _name = "home"
    day_section.innerText = "HOME"

    display_img.className = "change_display_img_7"
    button_field.style.backgroundColor = "#81D8D0"
    listing_for_home.style.backgroundColor = "#81D8D0"

    display_none(listing_for_my_day, listing_for_to_do, listing_for_groceries, listing_for_work, listing_for_travel, listing_for_important)


    add_and_clear_button(home, "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)", add_task, clear_all, true)

})



to_do.addEventListener("click", function () {
    _name = "todo"
    day_section.innerText = "TO DO"

    button_field.style.backgroundColor = "#AFDBF5 "
    display_img.className = "change_display_img_8"
    listing_for_to_do.style.backgroundColor = "#AFDBF5"

    display_none(listing_for_my_day, listing_for_home, listing_for_groceries, listing_for_work, listing_for_travel, listing_for_important)


    add_and_clear_button(to_do, "linear-gradient(90deg, #efd5ff 0%, #515ada 100%)", add_task, clear_all, true)


})


// ==========================changing color of screen================
let state = true;
fa_lightbulb.addEventListener("click", function () {
    if (state) {
        main.style.backgroundColor = "#28282B"
        my_day.style.color = "white"
        important.style.color = "white"
        to_do.style.color = "white"
        home.style.color = "white"
        groceries.style.color = "white"
        work.style.color = "white"
        travel.style.color = "white"
        fa_lightbulb.style.color = "white"
        fa_bell.style.color = "white"
        display_img.className = "change_display_img_1"
        day_section.style.color = "white"
        date_section.style.color = "black"
        time_section.style.color = "black"
        menu.style.backgroundColor = "#28282B"
        fa_times.style.color = "white"
        state = false
        
    }
    else {
        main.style.backgroundColor = "#cae9ee"
        my_day.style.color = "black"
        important.style.color = "black"
        to_do.style.color = "black"
        home.style.color = "black"
        groceries.style.color = "black"
        work.style.color = "black"
        travel.style.color = "black"
        fa_lightbulb.style.color = "blue"
        fa_bell.style.color = "blue"
        display_img.className = "display_img"
        day_section.style.color = "black"
        date_section.style.color = "white"
        time_section.style.color = "white"
        menu.style.backgroundColor = "white"
        fa_times.style.color = "black"
        state = true
    }

})
let bell_flag = true
fa_bell.addEventListener("click", function () {
    if (bell_flag) {
        notification_div.style.display = "block"
        bell_flag = false
    }
    else {
        notification_div.style.display = "none"
        bell_flag = true
    }
})

// ==================fa-bars===================
fa_bars.addEventListener("click",function(){
    menu.style.display = "block"
    menu.style.position = "absolute"
    menu.className = "menu_styling"
    menu.style.backgroundColor = "#89bdc4"
    fa_times.style.display = "block"
    notification_div.style.width = "50%"
})
fa_times.addEventListener("click",function(){
    menu.style.display = "none"
})
