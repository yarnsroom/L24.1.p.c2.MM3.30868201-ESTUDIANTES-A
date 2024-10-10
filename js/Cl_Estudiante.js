export default class Cl_Estudiante {
    constructor (nombre,acumnotas,cantmaterias){
        this._nombre = nombre
        this._acumnotas = acumnotas
        this._cantmaterias = cantmaterias
    }

    set nombre (nombre){
        this._nombre = nombre
    }
    get nombre (){
        return this._nombre
    }
    set acumnotas (acumnotas){
        this._acumnotas = acumnotas
    }
    get acumnotas (){
        return this._acumnotas
    }
    set cantmaterias (cantmaterias){
        this._cantmaterias = cantmaterias
    }
    get cantmaterias (){
        return this._cantmaterias
    }

    promedio(){
        return (this.acumnotas / this.cantmaterias)
    }
}