export class Punto {
    private x: number;
    private y: number;

    constructor(x:number, y:number) {
        this.x = x;
        this.y = y;
    }

    get_x(): number {
        return this.x
    }

    set_x(x:number) {
        this.x = x;
    }

    get_y(): number {
        return this.y
    }

    set_y(y:number) {
        this.y = y;
    }

    toString():string {
        return '(' + this.x + ' , ' + this.y + ')';
    }

} // FIN clase Punto
