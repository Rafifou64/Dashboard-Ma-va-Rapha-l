export class Task {
    libelleTask: string;
    idState: number;

    constructor(libelle : string, idState : number)
    {
        this.libelleTask = libelle;
        this.idState = idState;
    }

    getState()
    {
        return this.idState;
    }

    setState(idState: number)
    {
        this.idState = idState;
    }
}