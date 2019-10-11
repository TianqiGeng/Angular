export class Note {

    id: number;
    title: string;
    text: string;
    status: string;
    noteId: any;
    constructor(
    ) {
     

    }

    public get Title(): string {
        return this.title;
    }

    public set Title(title: string) {
        this.title = title;
    }

    public get Text(): string {
        return this.text;
    }

    public set Text(text: string) {
        this.text = text;
    }

    public get Status(): string {
        return this.status;
    }

    public set Status(status: string) {
        this.status = status;
    }

}
