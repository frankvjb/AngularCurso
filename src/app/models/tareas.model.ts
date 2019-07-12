export interface ITareasModel {

    descripcion: string,
    responsable: string,
    isCompleted: boolean

}

export class TareaModel {
  constructor (
    public descripcion: string = '',
    public responsable: string = '',
    public isCompleted: boolean = false,
  ) {}

}
