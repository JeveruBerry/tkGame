/**
 * @author python2ts.py
 * @description auto built
 * 
 */
export interface IDBHero {
     id:number,
     name:string,
     cardRes:string,
     headRes:string,
     conuntryType:number,
     apt:number,
     atk:number,
     def:number,
     tab:number,
     atkSpeed:number,
     talent:string,
     normalSkill:number,
     smallSkill:Array<string>,
     bigSkill:Array<string>,
     passiveSkill:Array<string>,
     auraSkill:Array<string>,
}
let tmpDb:{[index:string]:IDBHero} = {
   "1":{id:1,name:"曹操",cardRes:"heroBody_1001",headRes:"heroHead_1001",conuntryType:1,apt:10,atk:101,def:47,tab:3,atkSpeed:50,talent:"肉盾",normalSkill:1,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "2":{id:2,name:"典韦",cardRes:"heroBody_1002",headRes:"heroHead_1002",conuntryType:1,apt:10,atk:87,def:54,tab:5,atkSpeed:50,talent:"肉盾",normalSkill:2,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "3":{id:3,name:"夏侯渊",cardRes:"heroBody_1003",headRes:"heroHead_1003",conuntryType:1,apt:12,atk:170,def:64,tab:2,atkSpeed:40,talent:"输出",normalSkill:5,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "4":{id:4,name:"许诸",cardRes:"heroBody_1004",headRes:"heroHead_1004",conuntryType:1,apt:10,atk:70,def:58,tab:1,atkSpeed:45,talent:"输出",normalSkill:7,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "5":{id:5,name:"曹仁",cardRes:"heroBody_1005",headRes:"heroHead_1005",conuntryType:1,apt:7,atk:53,def:31,tab:5,atkSpeed:50,talent:"",normalSkill:9,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "6":{id:6,name:"蔡文姬",cardRes:"heroBody_1006",headRes:"heroHead_1006",conuntryType:1,apt:6,atk:71,def:24,tab:3,atkSpeed:50,talent:"",normalSkill:1,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "7":{id:7,name:"于禁",cardRes:"heroBody_1007",headRes:"heroHead_1007",conuntryType:1,apt:6,atk:49,def:23,tab:3,atkSpeed:50,talent:"",normalSkill:3,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "8":{id:8,name:"曹植",cardRes:"heroBody_1008",headRes:"heroHead_1008",conuntryType:1,apt:7,atk:66,def:19,tab:4,atkSpeed:50,talent:"",normalSkill:5,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "9":{id:9,name:"乐进",cardRes:"heroBody_1009",headRes:"heroHead_1009",conuntryType:1,apt:7,atk:51,def:31,tab:5,atkSpeed:50,talent:"",normalSkill:7,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "10":{id:10,name:"曹洪",cardRes:"heroBody_1010",headRes:"heroHead_1010",conuntryType:1,apt:6,atk:135,def:77,tab:2,atkSpeed:50,talent:"",normalSkill:9,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "11":{id:11,name:"张辽",cardRes:"heroBody_1011",headRes:"heroHead_1011",conuntryType:1,apt:8,atk:80,def:38,tab:3,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "12":{id:12,name:"张郃",cardRes:"heroBody_1012",headRes:"heroHead_1012",conuntryType:1,apt:8,atk:68,def:42,tab:5,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "13":{id:13,name:"徐晃",cardRes:"heroBody_1013",headRes:"heroHead_1013",conuntryType:1,apt:7,atk:43,def:34,tab:1,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "14":{id:14,name:"曹丕",cardRes:"heroBody_1014",headRes:"heroHead_1014",conuntryType:1,apt:8,atk:69,def:39,tab:5,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "15":{id:15,name:"夏侯淳",cardRes:"heroBody_1015",headRes:"heroHead_1015",conuntryType:1,apt:10,atk:99,def:50,tab:3,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "16":{id:16,name:"甄姬",cardRes:"heroBody_1016",headRes:"heroHead_1016",conuntryType:1,apt:12,atk:164,def:60,tab:4,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "17":{id:17,name:"司马懿",cardRes:"heroBody_1018",headRes:"heroHead_1018",conuntryType:1,apt:12,atk:170,def:47,tab:4,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "19":{id:19,name:"郭嘉",cardRes:"heroBody_1020",headRes:"heroHead_1020",conuntryType:1,apt:12,atk:167,def:47,tab:2,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "20":{id:20,name:"刘备",cardRes:"heroBody_2001",headRes:"heroHead_2001",conuntryType:2,apt:12,atk:103,def:88,tab:1,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "21":{id:21,name:"关羽",cardRes:"heroBody_2002",headRes:"heroHead_2002",conuntryType:3,apt:10,atk:79,def:37,tab:3,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "22":{id:22,name:"张飞",cardRes:"heroBody_2003",headRes:"heroHead_2003",conuntryType:2,apt:10,atk:100,def:50,tab:3,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "23":{id:23,name:"赵云",cardRes:"heroBody_2004",headRes:"heroHead_2004",conuntryType:2,apt:10,atk:72,def:58,tab:1,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "24":{id:24,name:"诸葛亮",cardRes:"heroBody_2005",headRes:"heroHead_2005",conuntryType:2,apt:12,atk:166,def:47,tab:4,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "25":{id:25,name:"黄忠",cardRes:"heroBody_2006",headRes:"heroHead_2006",conuntryType:2,apt:10,atk:112,def:40,tab:2,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "26":{id:26,name:"马超",cardRes:"heroBody_2007",headRes:"heroHead_2007",conuntryType:2,apt:10,atk:89,def:52,tab:5,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "27":{id:27,name:"孟获",cardRes:"heroBody_2008",headRes:"heroHead_2008",conuntryType:2,apt:7,atk:69,def:33,tab:3,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "28":{id:28,name:"关平",cardRes:"heroBody_2009",headRes:"heroHead_2009",conuntryType:2,apt:8,atk:37,def:28,tab:2,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "29":{id:29,name:"张星彩",cardRes:"heroBody_2010",headRes:"heroHead_2010",conuntryType:2,apt:8,atk:71,def:21,tab:4,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "30":{id:30,name:"魏延",cardRes:"heroBody_2011",headRes:"heroHead_2011",conuntryType:2,apt:8,atk:70,def:42,tab:5,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "31":{id:31,name:"祝融",cardRes:"heroBody_2012",headRes:"heroHead_2012",conuntryType:2,apt:7,atk:66,def:24,tab:2,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "32":{id:32,name:"廖化",cardRes:"heroBody_2013",headRes:"heroHead_2013",conuntryType:2,apt:6,atk:46,def:29,tab:5,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "33":{id:33,name:"糜竺",cardRes:"heroBody_2014",headRes:"heroHead_2014",conuntryType:2,apt:8,atk:85,def:25,tab:4,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "34":{id:34,name:"关兴",cardRes:"heroBody_2015",headRes:"heroHead_2015",conuntryType:2,apt:7,atk:45,def:26,tab:5,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "35":{id:35,name:"刘禅",cardRes:"heroBody_2016",headRes:"heroHead_2016",conuntryType:2,apt:8,atk:56,def:33,tab:5,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "36":{id:36,name:"张苞",cardRes:"heroBody_2017",headRes:"heroHead_2017",conuntryType:2,apt:7,atk:51,def:32,tab:5,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "37":{id:37,name:"姜维",cardRes:"heroBody_2018",headRes:"heroHead_2018",conuntryType:2,apt:8,atk:90,def:25,tab:4,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "38":{id:38,name:"黄月英",cardRes:"heroBody_2019",headRes:"heroHead_2019",conuntryType:2,apt:10,atk:89,def:49,tab:5,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "39":{id:39,name:"关银屏",cardRes:"heroBody_2020",headRes:"heroHead_2020",conuntryType:2,apt:10,atk:71,def:56,tab:1,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "40":{id:40,name:"庞统",cardRes:"heroBody_2022",headRes:"heroHead_2022",conuntryType:2,apt:12,atk:169,def:47,tab:4,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "41":{id:41,name:"孙权",cardRes:"heroBody_3001",headRes:"heroHead_3001",conuntryType:3,apt:8,atk:55,def:44,tab:1,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "42":{id:42,name:"周瑜",cardRes:"heroBody_3002",headRes:"heroHead_3002",conuntryType:3,apt:12,atk:172,def:48,tab:4,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "43":{id:43,name:"黄盖",cardRes:"heroBody_3003",headRes:"heroHead_3003",conuntryType:3,apt:7,atk:42,def:33,tab:1,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "44":{id:44,name:"太史慈",cardRes:"heroBody_3004",headRes:"heroHead_3004",conuntryType:3,apt:10,atk:108,def:42,tab:2,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "45":{id:45,name:"韩当",cardRes:"heroBody_3005",headRes:"heroHead_3005",conuntryType:3,apt:7,atk:36,def:27,tab:1,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "46":{id:46,name:"程晋",cardRes:"heroBody_3006",headRes:"heroHead_3006",conuntryType:3,apt:6,atk:244,def:113,tab:4,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "47":{id:47,name:"周泰",cardRes:"heroBody_3007",headRes:"heroHead_3007",conuntryType:3,apt:7,atk:75,def:28,tab:2,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "48":{id:48,name:"吕蒙",cardRes:"heroBody_3008",headRes:"heroHead_3008",conuntryType:3,apt:8,atk:67,def:31,tab:3,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "49":{id:49,name:"孙策",cardRes:"heroBody_3009",headRes:"heroHead_3009",conuntryType:3,apt:12,atk:110,def:91,tab:1,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "50":{id:50,name:"孙尚香",cardRes:"heroBody_3010",headRes:"heroHead_3010",conuntryType:3,apt:8,atk:86,def:31,tab:2,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "51":{id:51,name:"鲁肃",cardRes:"heroBody_3011",headRes:"heroHead_3011",conuntryType:3,apt:10,atk:69,def:37,tab:5,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "52":{id:52,name:"张昭",cardRes:"heroBody_3013",headRes:"heroHead_3013",conuntryType:3,apt:10,atk:67,def:38,tab:5,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "53":{id:53,name:"甘宁",cardRes:"heroBody_3014",headRes:"heroHead_3014",conuntryType:3,apt:12,atk:106,def:89,tab:1,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "54":{id:54,name:"小乔",cardRes:"heroBody_3015",headRes:"heroHead_3015",conuntryType:3,apt:12,atk:167,def:52,tab:2,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "55":{id:55,name:"孙坚",cardRes:"heroBody_3016",headRes:"heroHead_3016",conuntryType:3,apt:12,atk:153,def:77,tab:3,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "56":{id:56,name:"步练师",cardRes:"heroBody_3018",headRes:"heroHead_3018",conuntryType:3,apt:10,atk:107,def:40,tab:2,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "57":{id:57,name:"吕布",cardRes:"heroBody_4001",headRes:"heroHead_4001",conuntryType:4,apt:12,atk:154,def:80,tab:3,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "58":{id:58,name:"貂蝉",cardRes:"heroBody_4002",headRes:"heroHead_4002",conuntryType:4,apt:8,atk:71,def:25,tab:3,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "59":{id:59,name:"张角",cardRes:"heroBody_4003",headRes:"heroHead_4003",conuntryType:4,apt:10,atk:106,def:32,tab:4,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "60":{id:60,name:"袁绍",cardRes:"heroBody_4004",headRes:"heroHead_4004",conuntryType:4,apt:8,atk:54,def:44,tab:1,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "61":{id:61,name:"董卓",cardRes:"heroBody_4005",headRes:"heroHead_4005",conuntryType:4,apt:10,atk:54,def:44,tab:1,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "62":{id:62,name:"韩遂",cardRes:"heroBody_4006",headRes:"heroHead_4006",conuntryType:4,apt:7,atk:52,def:30,tab:5,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "63":{id:63,name:"袁术",cardRes:"heroBody_4007",headRes:"heroHead_4007",conuntryType:4,apt:6,atk:52,def:19,tab:2,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "64":{id:64,name:"马腾",cardRes:"heroBody_4008",headRes:"heroHead_4008",conuntryType:4,apt:8,atk:64,def:31,tab:3,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "65":{id:65,name:"于吉",cardRes:"heroBody_4009",headRes:"heroHead_4009",conuntryType:4,apt:12,atk:161,def:47,tab:4,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "66":{id:66,name:"马云禄",cardRes:"heroBody_4011",headRes:"heroHead_4011",conuntryType:4,apt:12,atk:147,def:78,tab:4,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "67":{id:67,name:"华佗",cardRes:"heroBody_4012",headRes:"heroHead_4012",conuntryType:4,apt:12,atk:133,def:74,tab:5,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "68":{id:68,name:"公孙瓒",cardRes:"heroBody_4013",headRes:"heroHead_4013",conuntryType:4,apt:12,atk:147,def:77,tab:4,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
   "69":{id:69,name:"花鬓",cardRes:"heroBody_4015",headRes:"heroHead_4015",conuntryType:4,apt:10,atk:107,def:39,tab:2,atkSpeed:50,talent:"",normalSkill:0,smallSkill:[],bigSkill:[],passiveSkill:[],auraSkill:[]},
};
export class DBHero {
    static _instance:DBHero;
    static getInstance():DBHero{
        if( DBHero._instance == null ){
            DBHero._instance = new DBHero();
        }
        return DBHero._instance;
    }
    private readonly _db:{[index:string]:IDBHero} = null;
    constructor(){
        this._db = tmpDb;
    }
    getDBHeroById(id:string):IDBHero{
        return this._db[id];
    }
    getAllDBHero(){
        return this._db;
    }
}