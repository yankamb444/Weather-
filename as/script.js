$(document).ready(function(){ 
    console.log("hello")

    const apikey = "a4f094fdd1faff233757e947bc3ca5cb"

    
    function search (city){
        console.log("clicked")
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apikey}`
        ).then(function(response){
            return response.json()
        }).then(function(data){
    console.log(data)
    var currentweather = $(`
    <h2>${data.name} </h2>
    
    
    `)
    $(".mainforecast").append(currentweather)
        })
    
    }
    
    
    
    $("#searchbutton").on("click", function(event){
        event.preventDefault()
        const city = $("#input").val().trim()
        search (city)
        $("#input").val("")
    })

})
