export class Client { 
    id: number;
    name: string;
    createDate: Date;
    updateDate?: Date;

    constructor(client?) {
        var client = client || {};

        this.id = client.id || null;
        this.name = client.name || null;
        this.createDate = client.createDate || new Date();
        this.updateDate = client.updateDate || null;
    }
}
