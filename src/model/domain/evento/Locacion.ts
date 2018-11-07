export class Locacion {

    constructor(public descripcion?: String) {
    }

    static fromJson(locacionJson: any): any {
        const result: Locacion = Object.assign(new Locacion(), locacionJson)
        return result
    }

}