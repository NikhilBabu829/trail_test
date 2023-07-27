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