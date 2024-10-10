import Cl_Estudiante from './Cl_Estudiante.js'
export default class Cl_Becado extends Cl_Estudiante {
    constructor (nombre,acumnotas,cantmaterias){
        super (nombre,acumnotas,cantmaterias)
    }
    beca(){
        if (this.promedio()  > 15) return 30
        else if (this.promedio() < 10) return 0
        else return 20

        
    }

    recibebeca(){

        if (this.beca() > 1 ) return `Recibe una beca de ${this.beca()}`

        else return "No tiene beca"
    }
}