window.onload = function() {
    // Reference na elementy ročníky & měsíce
    let prvniRocnik = document.getElementById("prvniRocnik");
    let mesicePrvniRocnik = document.getElementById("mesicePrvniRocnik");
    let druhyRocnik = document.getElementById("druhyRocnik");
    let mesiceDruhyRocnik = document.getElementById("mesiceDruhyRocnik");
    let arrowBackPrvniRocnik = document.getElementById("arrowBackPrvniRocnik");
    let eyeOff = document.getElementById("eyeOff");
    let eyeOn = document.getElementById("eyeOn");
    let menu = document.getElementById("Menu");

    // Reference na složky měsíců ( první ročník )
    let arrowBackPrvniRocnikMesice = document.getElementById("arrowBackPrvniRocnikMesice");
    
    let zari1 = document.getElementById("zari1");
    let rijen1 = document.getElementById("rijen1")
    let listopad1 = document.getElementById("listopad1");
    let prosinec1 = document.getElementById("prosinec1");
    let leden1 = document.getElementById("leden1");
    let unor1 = document.getElementById("unor1");
    let brezen1 = document.getElementById("brezen1");
    let duben1 = document.getElementById("duben1");
    let kveten1 = document.getElementById("kveten1");
    let cerven1 = document.getElementById("cerven1");

     // Reference na složky měsíců ( sruhý ročník )

     let zari2 = document.getElementById("zari2");
     let rijen2 = document.getElementById("rijen2")
     let listopad2 = document.getElementById("listopad2");
     let prosinec2 = document.getElementById("prosinec2");
     let leden2 = document.getElementById("leden2");
     let unor2 = document.getElementById("unor2");
     let brezen2 = document.getElementById("brezen2");
     let duben2 = document.getElementById("duben2");
     let kveten2 = document.getElementById("kveten2");
     let cerven2 = document.getElementById("cerven2");

    
    // Reference na hodiny ( první ročník )
    
    let zari1Hodiny = document.getElementById("zari1Hodiny");
    let rijen1Hodiny = document.getElementById("rijen1Hodiny");
    let listopad1Hodiny = document.getElementById("listopad1Hodiny");
    let prosinec1Hodiny = document.getElementById("prosinec1Hodiny");
    let leden1Hodiny = document.getElementById("leden1Hodiny");
    let unor1Hodiny = document.getElementById("unor1Hodiny");
    let brezen1Hodiny = document.getElementById("brezen1Hodiny");
    let duben1Hodiny = document.getElementById("duben1Hodiny");
    let kveten1Hodiny = document.getElementById("kveten1Hodiny");
    let cerven1Hodiny = document.getElementById("cerven1Hodiny");

    // REference na hodiny slozky (první ročník)

    let brezen1Prvni = document.getElementById("brezen1prvni");
    
    // Reference na hodiny solzky (druhý ročník)

    let brezen2Prvni = document.getElementById("brezen2prvni");


  


     // Reference na hodiny ( druhý ročník )
    
     let zari2Hodiny = document.getElementById("zari2Hodiny");
     let rijen2Hodiny = document.getElementById("rijen2Hodiny");
     let listopad2Hodiny = document.getElementById("listopad2Hodiny");
     let prosinec2Hodiny = document.getElementById("prosinec2Hodiny");
     let leden2Hodiny = document.getElementById("leden2Hodiny");
     let unor2Hodiny = document.getElementById("unor2Hodiny");
     let brezen2Hodiny = document.getElementById("brezen2Hodiny");
     let duben2Hodiny = document.getElementById("duben2Hodiny");
     let kveten2Hodiny = document.getElementById("kveten2Hodiny");
     let cerven2Hodiny = document.getElementById("cerven2Hodiny");

    // Schování elementů na začátku  
    eyeOn.style.display = "none";   
    arrowBackPrvniRocnik.style.display = "none";
    arrowBackPrvniRocnikMesice.style.display = "none";
    mesicePrvniRocnik.style.display = "none";
    mesiceDruhyRocnik.style.display = "none";
    
    zari1Hodiny.style.display = "none"; 
    rijen1Hodiny.style.display = "none";
    listopad1Hodiny.style.display = "none";
    prosinec1Hodiny.style.display = "none";
    leden1Hodiny.style.display = "none";
    unor1Hodiny.style.display = "none";
    brezen1Hodiny.style.display = "none";
    duben1Hodiny.style.display = "none";
    kveten1Hodiny.style.display = "none";
    cerven1Hodiny.style.display = "none";

    zari2Hodiny.style.display = "none"; 
    rijen2Hodiny.style.display = "none";
    listopad2Hodiny.style.display = "none";
    prosinec2Hodiny.style.display = "none";
    leden2Hodiny.style.display = "none";
    unor2Hodiny.style.display = "none";
    brezen2Hodiny.style.display = "none";
    duben2Hodiny.style.display = "none";
    kveten2Hodiny.style.display = "none";
    cerven2Hodiny.style.display = "none";

    // Zobrazení měsíců pro první ročník
    prvniRocnik.addEventListener("click", function() {
        druhyRocnik.style.display = "none";
        prvniRocnik.style.display = "none";
        mesicePrvniRocnik.style.display = "grid";
        arrowBackPrvniRocnik.style.display = "grid";
    });

    // Zobrazení měsíců pro druhý ročník
    druhyRocnik.addEventListener("click", function() {
        druhyRocnik.style.display = "none";
        prvniRocnik.style.display = "none";
        mesiceDruhyRocnik.style.display = "grid";
        arrowBackPrvniRocnik.style.display = "grid";
    });

    // Zobrazení konkrétního měsíce (např. Září) (první ročník)
    zari1.addEventListener("click", function() {
        mesicePrvniRocnik.style.display = "none";
        zari1Hodiny.style.display = "grid";
        arrowBackPrvniRocnik.style.display = "none";
        arrowBackPrvniRocnikMesice.style.display = "grid";
    });

    rijen1.addEventListener("click", function() {
        mesicePrvniRocnik.style.display = "none";
        rijen1Hodiny.style.display = "grid";
        arrowBackPrvniRocnik.style.display = "none";
        arrowBackPrvniRocnikMesice.style.display = "grid";
    });

    listopad1.addEventListener("click", function() {
        mesicePrvniRocnik.style.display = "none";
        listopad1Hodiny.style.display = "grid";
        arrowBackPrvniRocnik.style.display = "none";
        arrowBackPrvniRocnikMesice.style.display = "grid";
    });

    prosinec1.addEventListener("click", function() {
        mesicePrvniRocnik.style.display = "none";
        prosinec1Hodiny.style.display = "grid";
        arrowBackPrvniRocnik.style.display = "none";
        arrowBackPrvniRocnikMesice.style.display = "grid";
    });

    leden1.addEventListener("click", function() {
        mesicePrvniRocnik.style.display = "none";
        leden1Hodiny.style.display = "grid";
        arrowBackPrvniRocnik.style.display = "none";
        arrowBackPrvniRocnikMesice.style.display = "grid";
    });

    unor1.addEventListener("click", function() {
        mesicePrvniRocnik.style.display = "none";
        unor1Hodiny.style.display = "grid";
        arrowBackPrvniRocnik.style.display = "none";
        arrowBackPrvniRocnikMesice.style.display = "grid";
    });

    brezen1.addEventListener("click", function() {
        mesicePrvniRocnik.style.display = "none";
        brezen1Hodiny.style.display = "grid";
        arrowBackPrvniRocnik.style.display = "none";
        arrowBackPrvniRocnikMesice.style.display = "grid";
        
    });

    duben1.addEventListener("click", function() {
        mesicePrvniRocnik.style.display = "none";
        duben1Hodiny.style.display = "grid";
        arrowBackPrvniRocnik.style.display = "none";
        arrowBackPrvniRocnikMesice.style.display = "grid";
    });

    kveten1.addEventListener("click", function() {
        mesicePrvniRocnik.style.display = "none";
        kveten1Hodiny.style.display = "grid";
        arrowBackPrvniRocnik.style.display = "none";
        arrowBackPrvniRocnikMesice.style.display = "grid";
    });

    cerven1.addEventListener("click", function() {
        mesicePrvniRocnik.style.display = "none";
        cerven1Hodiny.style.display = "grid";
        arrowBackPrvniRocnik.style.display = "none";
        arrowBackPrvniRocnikMesice.style.display = "grid";
    });

     // Zobrazení konkrétního měsíce (např. Září) (druhý ročník)
     zari2.addEventListener("click", function() {
        mesiceDruhyRocnik.style.display = "none";
        zari2Hodiny.style.display = "grid";
        arrowBackPrvniRocnik.style.display = "none";
        arrowBackPrvniRocnikMesice.style.display = "grid";
    });

    rijen2.addEventListener("click", function() {
        mesiceDruhyRocnik.style.display = "none";
        rijen2Hodiny.style.display = "grid";
        arrowBackPrvniRocnik.style.display = "none";
        arrowBackPrvniRocnikMesice.style.display = "grid";
    });

    listopad2.addEventListener("click", function() {
        mesiceDruhyRocnik.style.display = "none";
        listopad2Hodiny.style.display = "grid";
        arrowBackPrvniRocnik.style.display = "none";
        arrowBackPrvniRocnikMesice.style.display = "grid";
    });

    prosinec2.addEventListener("click", function() {
        mesiceDruhyRocnik.style.display = "none";
        prosinec2Hodiny.style.display = "grid";
        arrowBackPrvniRocnik.style.display = "none";
        arrowBackPrvniRocnikMesice.style.display = "grid";
    });

    leden2.addEventListener("click", function() {
        mesiceDruhyRocnik.style.display = "none";
        leden2Hodiny.style.display = "grid";
        arrowBackPrvniRocnik.style.display = "none";
        arrowBackPrvniRocnikMesice.style.display = "grid";
    });

    unor2.addEventListener("click", function() {
        mesiceDruhyRocnik.style.display = "none";
        unor2Hodiny.style.display = "grid";
        arrowBackPrvniRocnik.style.display = "none";
        arrowBackPrvniRocnikMesice.style.display = "grid";
    });

    brezen2.addEventListener("click", function() {
        mesiceDruhyRocnik.style.display = "none";
        brezen2Hodiny.style.display = "grid";
        arrowBackPrvniRocnik.style.display = "none";
        arrowBackPrvniRocnikMesice.style.display = "grid";
    });

    duben2.addEventListener("click", function() {
        mesiceDruhyRocnik.style.display = "none";
        duben2Hodiny.style.display = "grid";
        arrowBackPrvniRocnik.style.display = "none";
        arrowBackPrvniRocnikMesice.style.display = "grid";
    });

    kveten2.addEventListener("click", function() {
        mesiceDruhyRocnik.style.display = "none";
        kveten2Hodiny.style.display = "grid";
        arrowBackPrvniRocnik.style.display = "none";
        arrowBackPrvniRocnikMesice.style.display = "grid";
    });

    cerven2.addEventListener("click", function() {
        mesiceDruhyRocnik.style.display = "none";
        cerven2Hodiny.style.display = "grid";
        arrowBackPrvniRocnik.style.display = "none";
        arrowBackPrvniRocnikMesice.style.display = "grid";
    });





    // Zpět z hodin do měsíců
    arrowBackPrvniRocnikMesice.addEventListener("click", function() {
        
        // první ročník
        zari1Hodiny.style.display = "none";
        rijen1Hodiny.style.display = "none";
        listopad1Hodiny.style.display = "none";
        prosinec1Hodiny.style.display = "none";
        leden1Hodiny.style.display = "none";
        unor1Hodiny.style.display = "none";
        brezen1Hodiny.style.display = "none";
        duben1Hodiny.style.display = "none";
        kveten1Hodiny.style.display = "none";
        cerven1Hodiny.style.display = "none";

        // druhý ročník
        zari2Hodiny.style.display = "none";
        rijen2Hodiny.style.display = "none";
        listopad2Hodiny.style.display = "none";
        prosinec2Hodiny.style.display = "none";
        leden2Hodiny.style.display = "none";
        unor2Hodiny.style.display = "none";
        brezen2Hodiny.style.display = "none";
        duben2Hodiny.style.display = "none";
        kveten2Hodiny.style.display = "none";
        cerven2Hodiny.style.display = "none";
        
        mesicePrvniRocnik.style.display = "grid";
        arrowBackPrvniRocnikMesice.style.display = "none";
        arrowBackPrvniRocnik.style.display = "grid";
    });

    // Tlačítko zpět do hlavního menu ročníků
    arrowBackPrvniRocnik.addEventListener("click", function() {
        arrowBackPrvniRocnik.style.display = "none";
        mesicePrvniRocnik.style.display = "none";
        mesiceDruhyRocnik.style.display = "none";
        prvniRocnik.style.display = "grid";
        druhyRocnik.style.display = "grid";
    });

    // Skyrtí lišty

    header = document.getElementById("header")

    eyeOff.addEventListener("click", function() {
        menu.style.display = "none";
        eyeOn.style.display ="grid";
        eyeOff.style.display = "none";
       
      
        

        // Změna CSS pro .content
    document.querySelector(".content").style.gridTemplateColumns = "100%";
    })

    eyeOn.addEventListener("click", function() {
        menu.style.display = "grid";
        eyeOn.style.display ="none";
        eyeOff.style.display = "grid";

         // Obnoví původní rozložení
    document.querySelector(".content").style.gridTemplateColumns = "80% 20%";
    })

    // Systém řešení
    // reference na reseni

 
    let unor2TretiReseni = document.getElementById("unor2TretiReseniButton");
    let unor2TretiReseniOpen = document.getElementById("reseni2UnorTreti");
    let cancel = document.getElementById("unor2TretiCancel");
    let unor2Video = document.getElementById("unor2Video");

    let brezen2PrvniReseni = document.getElementById("brezen2PrvniReseniButton");
    
    // Skrytí řešení a zrušení tlačítka při načtení stránky
    unor2TretiReseniOpen.style.display = "none";
    cancel.style.display = "none";
    
    // Otevření řešení & skrytí videa
    unor2TretiReseni.addEventListener("click", function() {
        if (unor2TretiReseniOpen.style.display === "grid") {
            // Pokud je řešení již zobrazené, skryj ho
            unor2TretiReseniOpen.style.display = "none";
            cancel.style.display = "none";
            unor2Video.style.display = "grid";
            unor2TretiReseni.style.display = "grid";
        } else {
            // Pokud není zobrazené, otevři ho
            unor2TretiReseniOpen.style.display = "grid";
            cancel.style.display = "grid";
            unor2Video.style.display = "none";
            unor2TretiReseni.style.display = "none";
        }
    });

    brezen2PrvniReseni.addEventListener("click", function(){
        if (brezen2PrvniReseniOpen.style.display === "grid") {
            // Pokud je řešení již zobrazené, skryj ho
            brezen2PrvniReseniOpen.style.display = "none";
            cancel.style.display = "none";
           
        } else {
            // Pokud není zobrazené, otevři ho
            unor2TretiReseniOpen.style.display = "grid";
            cancel.style.display = "grid";
            unor2Video.style.display = "none";
            unor2TretiReseni.style.display = "none";
        }
    })
    
    // Zrušení zobrazení řešení
    cancel.addEventListener("click", function() {
        unor2TretiReseniOpen.style.display = "none";
        cancel.style.display = "none";
        unor2Video.style.display = "grid";
        unor2TretiReseni.style.display = "grid";
    });



    // Reference na videa 1 Ročník

    



    brezen1_1Video = document.getElementById("brezen1_1Video");
    brezen1_1Video.style.display = "none";
    
    // Reference na videa 2 Ročník
    
    
    brezen2_1Video = document.getElementById("brezen2_1Video");
    brezen2_1Video.style.display = "none";

    // zobrazeni videa

    videa = document.getElementById("videa");

    brezen1Prvni.addEventListener("click", function()
    {
        brezen2_1Video.style.display = "none";
        brezen1_1Video.style.display = "grid";
      
    })

    brezen2Prvni.addEventListener("click", function()
    {
        brezen2_1Video.style.display = "grid";
        brezen1_1Video.style.display = "none";
      
    })

};
