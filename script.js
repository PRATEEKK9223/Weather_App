const url="http://api.weatherstack.com/current?access_key=7e29922eff3da159255efb0464d53bdd&query=";



let search=document.querySelector(".search img");
let input=document.querySelector(".search input");

function getUrl(){
    let UserInput=input.value;
    if(!isNaN(UserInput)){
        alert("only text values are allowed");
        return;
    }
    else{
        let NewUrl=url+UserInput;
        return NewUrl;
    }
}

let temp=document.querySelector("#p1 span");
let place=document.querySelector("#p2");
let humidity=document.querySelector("#humid");
let WindSpeed=document.querySelector("#W-speed");
let description=document.querySelector(".description #desc");
let img=document.querySelector(".image img");



search.addEventListener("click",async ()=>{
    let URL=getUrl();
    if(URL===undefined){
        return;
    }
    try{
        let response=await fetch(URL);
        let data=await response.json();
        if(data.error){
            alert("Location is not found");
            return;
        }
        console.log(data);
        temp.innerText=data.current.temperature;
        place.innerText=data.location.name;
        humidity.innerText=data.current.humidity;
        WindSpeed.innerText=data.current.wind_speed;
        description.innerText=data.current.weather_descriptions;
        img.src=data.current.weather_icons;
        
    }catch(err){
        //this is for network issues or fetching isseus
        alert("fails to fetch data Pleas check your internet");
    }
    
       
    
    
})



