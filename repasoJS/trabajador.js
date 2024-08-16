

function gradeLevel(score) {
    if (score >= 90 && 100) return "A";
    if (score >= 80 && 89) return "B";
    if (score >= 70 && 79) return "C";
    if (score >= 60 && 69) return "D";
    if (score >= 0 && 59 )return "F";
}

const desempeño = [50, 100, 90, 30, 85, 70]
function processEmployeeData (nombre, edad, bono, salario, desempeño){
    const esElegibleBono = salario <= 50000;
    let sumaPromedio = 0
    for (let i =0; i < desempeño.length; i++){
        sumaPromedio += desempeño[i]
    }
    promedioDesempeño = sumaPromedio / desempeño.length

    const rangoDesempeño = gradeLevel(promedioDesempeño)

    const infoTrabajador ={
        nombre: nombre,
        edad : edad,
        esElegibleBono: esElegibleBono ? "es elegible" : "no es elegible",
        promedioDesempeño: promedioDesempeño,
        rangoDesempeño: rangoDesempeño,
    };
    return infoTrabajador;

}
console.log(processEmployeeData("juli", 19, 60000, desempeño))