export class Note {

    private id: string;
    private title: string;
    private text: string;
    constructor(
    ) {

    }

    public get Title(): string {
        return this.title; 
    } 

    public set Title(title:string){
        this.title=title;
    }

    public get Text(): string {
        return this.text;
    }

    public set Text(text: string){
        this.text=text;
    }

}
