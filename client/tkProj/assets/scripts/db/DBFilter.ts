/** * @author python2ts.py * @description auto built *  */export interface IDBFilter {     id:number,     camp:number,     num:number,     atkdis:number,     sType:number,     isHit:number,}let tmpDb:{[index:string]:IDBFilter} = {   "1":{id:1,camp:0,num:1,atkdis:0,sType:2,isHit:0},   "2":{id:2,camp:0,num:1,atkdis:2,sType:1,isHit:0},   "3":{id:3,camp:0,num:0,atkdis:2,sType:0,isHit:1},   "4":{id:4,camp:0,num:0,atkdis:0,sType:1,isHit:1},   "5":{id:5,camp:0,num:1,atkdis:0,sType:0,isHit:0},   "6":{id:6,camp:0,num:0,atkdis:2,sType:0,isHit:1},   "7":{id:7,camp:0,num:1,atkdis:0,sType:0,isHit:0},   "8":{id:8,camp:0,num:0,atkdis:0,sType:1,isHit:1},};export class DBFilter {    static _instance:DBFilter;    static getInstance():DBFilter{        if( DBFilter._instance == null ){            DBFilter._instance = new DBFilter();        }        return DBFilter._instance;    }    private readonly _db:{[index:string]:IDBFilter} = null;    constructor(){        this._db = tmpDb;    }    getDBFilterById(id:string):IDBFilter{        return this._db[id];    }    getAllDBFilter(){        return this._db;    }}