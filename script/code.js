let ListInput= document.querySelector('#ListInput');
let sortData = document.querySelector('#sortData');
let addList = document.querySelector('#addList');
let output=document.querySelector('#list')
let Arr=[];


addList.addEventListener("click", (event)=>{
    event.preventDefault()
    // Arr = JSON.parse(localStorage.getItem("names"))
    if(ListInput.value){
        Arr.push(ListInput.value)
        ListInput.value=""
    }else{
        ListInput.style= "#ListInput color:red"
    }
    localStorage.setItem("names",JSON.stringify(Arr))
    output.innerHTML="";
    Arr.forEach( (name)=> {
        output.innerHTML += `
            <li>${name}</li>
        `
    })
})


sortData.addEventListener("click",(e)=>{
    e.preventDefault()
 console.log( Arr.sort());

})