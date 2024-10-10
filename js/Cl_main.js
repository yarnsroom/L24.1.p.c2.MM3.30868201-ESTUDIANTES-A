import Cl_Becado from "./Cl_Becado.js";

let estudiante1 = new Cl_Becado ("Mary",132,8)
let estudiante2 = new Cl_Becado ("Alirio", 315, 35)


let salida = document.getElementById("salida")

salida.innerHTML = ` 

<br> Nombre del estudiante: ${estudiante1.nombre}
<br> Acumulado de notas: ${estudiante1.acumnotas}
<br> Cantidad de materias: ${estudiante1.cantmaterias}
<br> Nota Promedio: ${estudiante1.promedio()}
<br> ${estudiante1.nombre} ${estudiante1.recibebeca()}
<br>
<br> Nombre del estudiante: ${estudiante2.nombre}
<br> Acumulado de notas: ${estudiante2.acumnotas}
<br> Cantidad de materias: ${estudiante2.cantmaterias}
<br> Nota Promedio: ${estudiante2.promedio()}
<br> ${estudiante2.nombre} ${estudiante2.recibebeca()}



`