const form = document.querySelector('.formTest');    
const selectedValue = document.querySelectorAll('input[name="radioBtn"]');

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

selectedValue.forEach((ele)=>{
    ele.addEventListener('change',()=>{ 
        radioValue.projectName = ele.value
    }) 
})

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const userName = document.querySelector('.username');
    const password = document.querySelector('.password');
    someFunction(userName.value, password.value);
})
