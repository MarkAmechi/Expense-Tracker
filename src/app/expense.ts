export class Expense {
    id = 0;
    date = "empty";
    descript = "empty";
    constructor(id:number,date:string,descript:string){
        this.id=id;
        this.date=date;
        this.descript=descript;
    }
}
