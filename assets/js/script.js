function looping_course() {
    const parent = document.querySelector(".container-course")
    const child = document.querySelector(".card-course")
    for (let i = 0; i < 10; i++) {
        parent.appendChild(child.cloneNode(true))
    }
}

looping_course()