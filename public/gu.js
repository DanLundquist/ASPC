

/**
 * @author Daniel Lundquist <danilu@stud.ntnu.no>
 * Function for retrieving input from user and calculating the avarage stock price
 * 
 */

 function averageStockCalculation() {
    //Sets values from input
    //TODO: Should be translated to english.
    aksjer1 = document.getElementById("antallAksjer").value;
    kurs1 = document.getElementById("kurs").value;
    aksjer2 = document.getElementById("antallAksjer2").value;
    kurs2 = document.getElementById("kurs2").value;

    aksjer3 = document.getElementById("antallAksjer3").value;
    kurs3 = document.getElementById("kurs3").value;
    aksjer4 = document.getElementById("antallAksjer4").value;
    kurs4 = document.getElementById("kurs4").value;

    aksjer5 = document.getElementById("antallAksjer5").value;
    kurs5 = document.getElementById("kurs5").value;
    aksjer6 = document.getElementById("antallAksjer6").value;
    kurs6 = document.getElementById("kurs6").value;

    aksjer7 = document.getElementById("antallAksjer7").value;
    kurs7 = document.getElementById("kurs7").value;
    aksjer8 = document.getElementById("antallAksjer8").value;
    kurs8 = document.getElementById("kurs8").value;

    aksjer9 = document.getElementById("antallAksjer9").value;
    kurs9 = document.getElementById("kurs9").value;
    aksjer10 = document.getElementById("antallAksjer10").value;
    kurs10 = document.getElementById("kurs10").value;


    //Sets values to 0, so it resets every time this function is called.     
    let totalAksjerKjøpt = 0;
    let sumGjennomsnittligKostnad = 0;

    //Checks if fields have values, add them to calculation if they do.
    if (aksjer1 != null) {
        totalAksjerKjøpt = Number(aksjer1) + Number(totalAksjerKjøpt)
        sumGjennomsnittligKostnad = Number(aksjer1) * Number(kurs1) + Number(sumGjennomsnittligKostnad)
    }

    if (aksjer2 != null) {
        totalAksjerKjøpt = Number(aksjer2) + Number(totalAksjerKjøpt)
        sumGjennomsnittligKostnad = Number(aksjer2) * Number(kurs2) + Number(sumGjennomsnittligKostnad)

    }

    if (aksjer3 != null) {
        totalAksjerKjøpt = Number(aksjer3) + Number(totalAksjerKjøpt)
        sumGjennomsnittligKostnad = Number(aksjer3) * Number(kurs3) + Number(sumGjennomsnittligKostnad)
    }

    if (aksjer4 != null) {
        totalAksjerKjøpt = Number(aksjer4) + Number(totalAksjerKjøpt)
        sumGjennomsnittligKostnad = Number(aksjer4) * Number(kurs4) + Number(sumGjennomsnittligKostnad)

    }

    if (aksjer5 != null) {
        totalAksjerKjøpt = Number(aksjer5) + Number(totalAksjerKjøpt)
        sumGjennomsnittligKostnad = Number(aksjer5) * Number(kurs5) + Number(sumGjennomsnittligKostnad)
    }

    if (aksjer6 != null) {
        totalAksjerKjøpt = Number(aksjer6) + Number(totalAksjerKjøpt)
        sumGjennomsnittligKostnad = Number(aksjer6) * Number(kurs6) + Number(sumGjennomsnittligKostnad)

    }

    if (aksjer7 != null) {
        totalAksjerKjøpt = Number(aksjer7) + Number(totalAksjerKjøpt)
        sumGjennomsnittligKostnad = Number(aksjer7) * Number(kurs7) + Number(sumGjennomsnittligKostnad)
    }

    if (aksjer8 != null) {
        totalAksjerKjøpt = Number(aksjer8) + Number(totalAksjerKjøpt)
        sumGjennomsnittligKostnad = Number(aksjer8) * Number(kurs8) + Number(sumGjennomsnittligKostnad)

    }

    if (aksjer9 != null) {
        totalAksjerKjøpt = Number(aksjer9) + Number(totalAksjerKjøpt)
        sumGjennomsnittligKostnad = Number(aksjer9) * Number(kurs9) + Number(sumGjennomsnittligKostnad)
    }

    if (aksjer10 != null) {
        totalAksjerKjøpt = Number(aksjer10) + Number(totalAksjerKjøpt)
        sumGjennomsnittligKostnad = Number(aksjer10) * Number(kurs10) + Number(sumGjennomsnittligKostnad)

    }

    resultat = sumGjennomsnittligKostnad / totalAksjerKjøpt;

    //Calculation and prints to HTML.
    document.getElementById("resultat").innerHTML = resultat;
    document.getElementById("totaltAksjerKjøpt").innerHTML = totalAksjerKjøpt;
}

function showInputFields() {
    document.getElementById("gu").style.display = "";
}