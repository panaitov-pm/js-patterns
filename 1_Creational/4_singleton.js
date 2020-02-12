class DataBase {
    constructor(data) {
        if(DataBase.exists) {
            return DataBase.instance;
        }

        DataBase.instance = this;
        DataBase.exists = true;
        this.data = data;
    }

    getData() {
        return this.data;
    }
}

const mongo = new DataBase('Mongo');
console.log('---mongo.getData', mongo.getData());

const mysql = new DataBase('MySql');
console.log('---mysql.getData', mysql.getData());
