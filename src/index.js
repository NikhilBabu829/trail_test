const form = document.querySelector('.formTest');

const template = {
    project : [
        {
            name : '',
            value :'',
        },
    ]
}
function someFunction(userName, password) {
    if(localStorage.getItem("data")){
        const existingData = JSON.parse(localStorage.getItem("data"));
        console.log(existingData)
        const newData = {
            name : userName,
            value : password
        }
        existingData.project[existingData.project.length] = newData
        localStorage.setItem("data", JSON.stringify(existingData));
    }
    else{
        const temp = template
        temp.project[0].name = userName;
        temp.project[0].value = password;
        localStorage.setItem("data", JSON.stringify(temp))
    }
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const userName = document.querySelector('.username');
    const password = document.querySelector('.password');
    someFunction(userName.value, password.value);
})
