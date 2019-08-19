timeOn = 0;
setInterval(function(){
    datejour = new Date();
    min = datejour.getMinutes() ;
    heur =  datejour.getHours();
    if(heur < 10)
    {
        heur = "0"+ heur;
    }
    if(min< 10)
    {
        min  = "0"+min;
    }
    heure = heur +" : " + min;
    document.getElementById("heure").innerHTML = heure;
    if(timeOn >= 15 && document.getElementById('heure').style.display !="none")
    {
        allumerEcran();
    }
},1000);
setInterval(function(){
    if(document.getElementById('ecran').className =="btn_allumer")
    {
        timeOn ++ ;
    }
    else
    {
        timeOn  =0;
    }
    if(timeOn ==15 && document.getElementById('heure').style.display !="none")
    {
        allumerEcran();
        timeOn = 0;
    }
}, 1000);

function allumerEcran()
{
    
    if(document.getElementById('ecran').className =="btn_allumer")
    {
        document.getElementById('ecran').className ="block_ecran";
        document.getElementById('calco').style.display="none";
        document.getElementById('menu').style.display="none";
        
    }else
    {
        document.getElementById('ecran').className ="btn_allumer";
        document.getElementById('menu').style.display="inline-block";
        document.getElementById('heure').style.display="inline-block";
        timeOn = 0;
    }
}

function affCalco()
{
    document.getElementById('heure').style.display="none";
    document.getElementById('calco').style.display="inline-block";
    document.getElementById('menu').style.display="none";
}