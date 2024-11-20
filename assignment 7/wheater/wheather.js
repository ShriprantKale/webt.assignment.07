

document.getElementById("btn").onclick=function(){

    // alert("button 1 clicked");
    const city=document.getElementById("city").value
    const unit=document.getElementById("unit").value
    const apikey='e412eb53c20df98c5a46dd3d20bce46f';
    const apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`

    document.getElementById('wheather').innerHTML=''
    document.getElementById('error').innerHTML=''
 
    const xhr=new XMLHttpRequest()
    xhr.open("GET",apiurl,true)
    xhr.onload=function(){
        if(xhr.status===200){
            const data =JSON.parse(xhr.responseText)
            displaywheather(data,unit);

        }
        else(
            document.getElementById('error').innerHTML='something went wrong '

        )
    }
    xhr.onerror=function(){
        document.getElementById('error').innerHTML='network error'
    }
    xhr.send();

}
function displaywheather(data,unit){
    const container=document.getElementById('wheather')
    const tempunit=unit==='op1' ?'C ':'F'
    const whhtml=`<h2> Weather in ${dat.name}</h2>
    <p>TEMPERATURE:${data.main.temp}${tempunit}</p>
    `;

    container.innerHTML=whhtml;

    
    

}
