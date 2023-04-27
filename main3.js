$(function(){
    $("#gomb").click(function(e) {
        e.preventDefault();
        const nev = $("#szoveg").val();
        const meret = $(".meret:checked").val();
        $("#igen").html(meret);
        if(meret=="kicsi"){
            $("#igen").html(nev.toLowerCase());
        }
        else{
            $("#igen").html(nev.toUpperCase());
        }
    });
});