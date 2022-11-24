const positif = document.getElementById("positif")
const negatif = document.getElementById("negatif")
const neutre = document.getElementById("neutral")
const bouton = document.getElementById("bouton")
const art = document.getElementById("art")
const choice = document.getElementsByClassName("choice")
const form = document.getElementById("form")


let content = document.createElement("p")
art.appendChild(content)

const routes =
    [{ path: "neutral", content: "neutral content", index: 2 },
    { path: "positif", content: "positive content", index: 0 },
    { path: "negatif", content: "negative content", index: 1 }]

art.addEventListener("change", (event) => {
    switch (event.target.value) {
        case "positif":
            positif.classList.add("active")
            negatif.classList.remove("active")
            neutre.classList.remove("active")
            break

        case "negatif":
            negatif.classList.add("active")
            positif.classList.remove("active")
            neutre.classList.remove("active")
            break

        case "neutral":
            neutre.classList.add("active")
            negatif.classList.remove("active")
            positif.classList.remove("active")
            break


    }
})



for (let index = 0; index < choice.length; index++) {
    const button = choice[index];
    button.addEventListener("click", (ev) => {
        art.value = ev.target.value;
        for (let i = 0; i < choice.length; i++) {
            const b = choice[i];
            b.classList.remove("active")
        }
        ev.target.classList.add("active");
        const route = routes.filter((item) => item.path === ev.target.id)
        const routrEl = document.getElementById("router")
        routrEl.innerHTML = `<p>${route[0].content}</p>`
        // routrEl. = "style"
    })
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("input")
    const route = routes.filter((item) => item.index === parseInt(event.target.value))
    // const routrEl = document.getElementById("router")
    // routrEl.innerHTML = `<p>${route[0].content}</p>`
    console.log(route, event.target.value);
})

bouton.addEventListener("click", (event) => {
    const valueInput = document.getElementById("input").value
    let value = parseInt(valueInput);

    if (value === 1) {
        positif.classList.add("active")
        negatif.classList.remove("active")
        neutre.classList.remove("active")
    }
    else if (value === 2) {
        negatif.classList.add("active")
        positif.classList.remove("active")
        neutre.classList.remove("active")
    }
    else if (value === 3) {
        neutre.classList.add("active")
        negatif.classList.remove("active")
        positif.classList.remove("active")
    }
    else {
        alert("Index is invalid")
    }
})

