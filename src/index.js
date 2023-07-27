const template = {
    project : [
        {
            name : "index",
            task : [],
            date : [],
        }
    ]
}

const somethingAgain = {
    name : "wohoho",
    task : [],
    date : []
}



localStorage.setItem("project", JSON.stringify(template))
const allData = JSON.parse(localStorage.getItem('project'))
allData.project[0].name = "abcd"
allData.project.push(somethingAgain)
localStorage.setItem("project", JSON.stringify(allData))

const button = document.querySelector(".btnTest")

button.addEventListener("click",()=>{
    const somethingAgain1 = {
        name : "2123",
        task : [],
        date : []
    }
    const allData = JSON.parse(localStorage.getItem('project'))
    allData.project.push(somethingAgain1)
    localStorage.setItem("project", JSON.stringify(allData))
})

