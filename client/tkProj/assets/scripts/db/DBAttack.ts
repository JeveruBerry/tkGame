// auto build by python scriptexport interface IDBAttack {     id: number ;     buffs: string[] ;     dmg: number ;}const tmpDb: {[index: string ]: IDBAttack } = {   // tslint:disable-next-line: max-line-length   1: {id: 1, buffs: [], dmg: 10},   // tslint:disable-next-line: max-line-length   2: {id: 2, buffs: [], dmg: 11},   // tslint:disable-next-line: max-line-length   3: {id: 3, buffs: [], dmg: 12},   // tslint:disable-next-line: max-line-length   4: {id: 4, buffs: [], dmg: 13},   // tslint:disable-next-line: max-line-length   5: {id: 5, buffs: [], dmg: 14},   // tslint:disable-next-line: max-line-length   6: {id: 6, buffs: [], dmg: 15},   // tslint:disable-next-line: max-line-length   7: {id: 7, buffs: [], dmg: 16},   // tslint:disable-next-line: max-line-length   8: {id: 8, buffs: [], dmg: 17},   // tslint:disable-next-line: max-line-length   9: {id: 9, buffs: [], dmg: 18},};export class DBAttack {    public static getInstance(): DBAttack {        if ( DBAttack.instance == null ) {            DBAttack.instance = new DBAttack();        }        return DBAttack.instance;    }    private static instance: DBAttack;    private readonly db: {[index: string]: IDBAttack} = null;    constructor() {        this.db = tmpDb;    }    public getDBAttackById(id: string): IDBAttack {        return this.db[id];    }    public getAllDBAttack() {        return this.db;    }}
