// Pasirinkite 5 pasaulio šalis. Suraskite (Google, Wikipedia) jų valstybės plotą (km²) ir gyventojų skaičių.

// Sukurkite naują masyvą su penkių pasaulio šalių objektais, kuriuose būtų nurodyta: šalies pavadinimas, valstybės plotas ir gyventojų skaičius.

// Suskaičiuokite ir suapvalinkite su toFixed(2) koks plotas tenka vienam gyventojui (m²) kiekvienoje šalyje. P.s. reikės padauginti nurodytą skaičių km2 iš 1000000, kad gautumėte m2.



// Atspausdinkite tokią informaciją apie šalis per console.log naudodamiesi for loop arba for/of loop pagal tokį šabloną:



// Šalis: Portugalija, joje gyvena 10.26 mln. gyventojų.
// Valstybės plotas: 92212 km², plotas tenkantis vienam gyventojui: 8987.52 m².

    var pasaulioSalys = [
        {
            pavadinimas: "Portugalija",
            plotas: 92212, 
            gyventojai: 898752
        },
        {
            pavadinimas: "Kinija",
            plotas: 9596961,
            gyventojai: 1444216107
        },
        {
            pavadinimas: "Rusija",
            plotas: 17098242, 
            gyventojai: 145912025
        },
        {
            pavadinimas: "Brazilija",
            plotas: 8515767,
            gyventojai: 212559417
        },
        {
            pavadinimas: "Indija",
            plotas: 3287263, 
            gyventojai: 1380004385
        }
    ];
    
    for (var i = 0; i < pasaulioSalys.length; i++) {
        var salis = pasaulioSalys[i];
        var plotasM2 = (salis.plotas * 1000000) / salis.gyventojai;
    
        console.log("Šalis: " + salis.pavadinimas);
        console.log("Plotas: " + salis.plotas + " km²");
        console.log("Gyventojų skaičius: " + salis.gyventojai);
        console.log("Plotas vienam gyventojui: " + plotasM2.toFixed(2) + " m²");
        
    }