/** * @author python2ts.py * @description auto built *  */export interface IDBAttr {     id:number,     key:string,     name:string,}let tmpDb:{[index:string]:IDBAttr} = {   "1":{id:1,key:"hp",name:"血量"},   "2":{id:2,key:"phyAtk",name:"物理攻击力"},   "3":{id:3,key:"phydef",name:"物理防御力"},   "4":{id:4,key:"magicAtk",name:"魔法攻击力"},   "5":{id:5,key:"magicAtk",name:"魔法防御力"},   "6":{id:6,key:"crit",name:"暴击率"},   "7":{id:7,key:"atkSpeed",name:"攻速"},   "8":{id:8,key:"block",name:"格挡率"},};export class DBAttr {    static _instance:DBAttr;    static getInstance():DBAttr{        if( DBAttr._instance == null ){            DBAttr._instance = new DBAttr();        }        return DBAttr._instance;    }    private readonly _db:{[index:string]:IDBAttr} = null;    constructor(){        this._db = tmpDb;    }    getDBAttrById(id:string):IDBAttr{        return this._db[id];    }    getAllDBAttr(){        return this._db;    }}