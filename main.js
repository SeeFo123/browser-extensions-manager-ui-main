let container = document.querySelector(".extensions");
//========================
//   Fetch and Append
//========================

function createCard(link, name, des, active) {
    let card = document.createElement("div");
    card.className = "card";
    let top = `<div class="top">
        <img src="${link}" alt="logo">
        <div class="info">
            <div class="name">${name}</div>
            <p>${des}</p>
            </div>
            </div>`

    let options = document.createElement("div");
    let remove = document.createElement("div");
    let check = document.createElement("span");

    options.className = "options";
    remove.className = "remove";
    remove.innerHTML = "Remove";
    check.className = "check";

    if (active) {
        check.classList.add("active");
    }

    options.appendChild(remove);
    options.appendChild(check);

    card.innerHTML = top;
    card.appendChild(options)
    container.appendChild(card);

}

fetch("./data.json")
    .then((result) => {
        let myData = result.json();
        // console.log(myData);
        return myData;
    }).then((box) => {
        box.forEach(e => {
            createCard(e.logo, e.name, e.description, e.isActive)
        });
    });


// =================
//      Theme
// =================

let sun = document.querySelector(".sun");
let moon = document.querySelector(".moon");

sun.onclick = () => {
    document.body.className = "light";
}

moon.onclick = () => {
    document.body.className = "dark";
}



// =================
// Check and Delete
// =================

container.addEventListener("click", (e) => {

    if (e.target.classList.contains("remove")) {
        e.target.parentElement.parentElement.remove();
    }

    if (e.target.classList.contains("check")) {
        e.target.classList.toggle("active");
    }
})


// =================
//      Filter
// =================

let filters = document.querySelectorAll(".filter li")
let allBtn = document.querySelector(".all");
let activeBtn = document.querySelector(".active");
let inActiveBtn = document.querySelector(".inactive");

allBtn.onclick = (s) => {
    filters.forEach(e => {
        e.classList.remove("actived");
    });
    s.target.classList.add("actived");
    document.querySelectorAll(".check").forEach(e => {
        e.parentElement.parentElement.style.display = "flex";
    });
}

activeBtn.onclick = (s) => {
    filters.forEach(e => {
        e.classList.remove("actived");
    });
    s.target.classList.add("actived");
    document.querySelectorAll(".check").forEach(e => {
        e.parentElement.parentElement.style.display = "flex";
        if (!e.classList.contains("active")) {
            e.parentElement.parentElement.style.display = "none";
        }
    });
}

inActiveBtn.onclick = (s) => {
    filters.forEach(e => {
        e.classList.remove("actived");
    });
    s.target.classList.add("actived");
    document.querySelectorAll(".check").forEach(e => {
        e.parentElement.parentElement.style.display = "flex";
        if (e.classList.contains("active")) {
            e.parentElement.parentElement.style.display = "none";
        }
    });
}
