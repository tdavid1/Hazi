let random = 0;
$(function(){
    $("#Random").click(function(e){
        e.preventDefault();
        random = Math.round(((Math.random() * 100)+1),0);
    });
    $("#Tipp").click(function(e){
        e.preventDefault();
        const szam = $("#szam").val();
        if(random==szam){
            $("#megold").html("Helyes")
        }
        else if(random>szam){
            $("#megold").html("A szám nagyobb")
        }
        else{
            $("#megold").html("A szám kisebb")
        }
    });

});