const form = document.querySelector('.formTest');    
const formToCreateNewProject = document.querySelector('.formToCreateNewProject')
const newProject = document.querySelector('.newProject');
const projectMenu = document.querySelector('.projectMenu');
let selectedValue = document.querySelectorAll('.radioBtn');

const radioValue = {
    projectName : 'index'
}

const template = {
    project : [
        {
            project : '',
            tasks :[],
        },
    ]
}

function someFunction(userName, password) {
    if(localStorage.getItem("data")){
        const existingData = JSON.parse(localStorage.getItem("data"));
        for(let i=0 ; i<existingData.project.length;i++){
            if(existingData.project[i].project == radioValue.projectName){
                // const newData = {
                //     project : radioValue.projectName,
                //     tasks : [].push(password)
                // }
                // existingData.project[existingData.project.length] = newData
                // console.log(existingData.project[i])
                existingData.project[i].project = radioValue.projectName
                existingData.project[i].tasks.push(password) 
                localStorage.setItem("data", JSON.stringify(existingData));
            }
        }
        
    }
    else{
        const temp = template
        temp.project[0].project = userName;
        temp.project[0].tasks.push(password);
        localStorage.setItem("data", JSON.stringify(temp))
    }
}

function createRadioButton(nameOfTheProject){
    const labelForRadioBtn = document.createElement('label')
    labelForRadioBtn.setAttribute('for', nameOfTheProject)
    labelForRadioBtn.innerText = nameOfTheProject
    const radioBtn = document.createElement("input");
    radioBtn.setAttribute("type","radio")
    radioBtn.setAttribute("name","radioBtn")
    radioBtn.setAttribute("id",nameOfTheProject)
    radioBtn.setAttribute("value",nameOfTheProject)
    radioBtn.classList.add("radioBtn");
    projectMenu.append(labelForRadioBtn)
    projectMenu.append(radioBtn)
    selectedValue = document.querySelectorAll('.radioBtn');
    radio(selectedValue)
}
function radio(selectedValue){
    selectedValue.forEach((ele)=>{
        ele.addEventListener("click",()=>{
            if(ele.checked){
                radioValue.projectName = ele.value
                console.log(radioValue.projectName)
            }
        })
    })
}


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const userName = document.querySelector('.username');
    const password = document.querySelector('.password');
    someFunction(userName.value, password.value);
})

newProject.addEventListener('click',()=>{
    formToCreateNewProject.style.visibility = 'visible';
})

formToCreateNewProject.addEventListener('submit',(e)=>{
    e.preventDefault();
    const projectName = document.querySelector('.projectName');
    const templateForNewproject = {
        project : projectName.value,
        tasks : [],
    }
    const dataInLocalStorage = JSON.parse(localStorage.getItem('data'))
    dataInLocalStorage.project[dataInLocalStorage.project.length] = templateForNewproject
    localStorage.setItem('data', JSON.stringify(dataInLocalStorage));
    createRadioButton(projectName.value)
    formToCreateNewProject.style.visibility = 'hidden';
});
