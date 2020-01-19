export class Task {
    public id: number;
    public description: string;
    public status: boolean;
    public datecomplete: string;
    constructor (description: string, status: boolean, datecomplete: string, id?: number) {
        this.id = id;
        this.description = description;
        this.status = status;
        this.datecomplete = datecomplete;
    }
}