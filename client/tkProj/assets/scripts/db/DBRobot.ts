/** * @author python2ts.py * @description auto built *  */export interface IDBRobot {     id:number,     name:string,     heroArr:Array<string>,}let tmpDb:{[index:string]:IDBRobot} = {   "1":{id:1,name:"机器人1",heroArr:["1","2","3","4","5","6","7","8","9","10"]},};export class DBRobot {    static _instance:DBRobot;    static getInstance():DBRobot{        if( DBRobot._instance == null ){            DBRobot._instance = new DBRobot();        }        return DBRobot._instance;    }    private readonly _db:{[index:string]:IDBRobot} = null;    constructor(){        this._db = tmpDb;    }    getDBRobotById(id:string):IDBRobot{        return this._db[id];    }    getAllDBRobot(){        return this._db;    }}