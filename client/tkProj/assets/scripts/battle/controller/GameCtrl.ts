import ConstValue from "../ConstValue";
import {HeroInfo} from "../info/HeroInfo";
import ModelBase from "../model/ModelBase";
import ModelHero from "../model/ModelHero";
import LogsManager from "../utils/LogsManager";
import {ECamp} from "../utils/UtilsEnum";
import BaseCtrl from "./BaseCtrl";
import BattleCtrl from "./BattleCtrl";
/**
 * @class GameCtrl
 * @extends BaseCtrl
 * @author YeXiao
 * @deprecated 游戏总控制器
 * @since 2019-3-12 17:15:00
 *
 */
export default class GameCtrl extends BaseCtrl {
    private aliveModelArr: ModelHero[] = null; // 战场上的英雄数组
    private currFrame: number = null;  // 当前运行的帧数
    private deadModelArr: ModelHero[] = null;  // 死亡的英雄数组

    constructor(ctrl: BattleCtrl) {
        super(ctrl);
        this.aliveModelArr = [];
        this.deadModelArr = [];
        this.currFrame = 0;
        this.initModelList();
    }
    get ModelArr() {
        return this.aliveModelArr;
    }
    get CurrentFrame() {
        return this.currFrame;
    }
    /**
     * @description 初始化战场上模型
     */
    public initModelList() {
        const tmpArr = [ECamp.camp1, ECamp.camp2];
        for (const iterator of tmpArr) {
            const arr = this.BattleCtrl.LevelCtrl.getHeroInfoByCamp(iterator);
            for (const heroInfo of arr) {
                const model = this.createOneModelByHeroInfo(heroInfo);
                this.aliveModelArr.push(model);
            }
        }
    }
    /**
     * @description 根据英雄数据创建一个英雄单位模型
     * @param hero
     * @returns ModelHero
     */
    public createOneModelByHeroInfo(hero: HeroInfo): ModelHero {
        const model = new ModelHero(this, hero);
        return model;
    }
    /**
     * @description 开始战斗
     */
    public startBattle() {
        LogsManager.getInstance().log("开始一场战斗----->>GameCtrl.startBattle");
        this.initModelsAura();
        this.startGameLoop();
    }
    /**
     * @description 初始化光环
     */
    public initModelsAura() {
        LogsManager.getInstance().log("======>>>>>>初始化光环技能");
        for (const iterator of this.aliveModelArr) {
            iterator.initAura();
        }
    }
    /**
     * @description 开始游戏轮询
     */
    public startGameLoop() {
        this.BattleCtrl.HandleCtrl.sortModelHandle();
        for (let index = 0; index < ConstValue.GAME_TOTAL_FRAME; index++) {
            this.currFrame = index;
            const tmpArr = this.BattleCtrl.HandleCtrl.getCurrentAttackModel();
            if (tmpArr.length > 0 ) {
                this.BattleCtrl.LogicCtrl.doAttackByHeroList(tmpArr);
            }
            this.updateModelFrame();
        }
    }
    /**
     * @description 更新战场上所有英雄的攻击时间
     */
    public updateModelFrame() {
        for (const iterator of this.aliveModelArr) {
            iterator.updateHeroFrame();
        }
    }
    /**
     * - 根据阵营获取归属当前阵营的英雄
     * @returns Array<ModelBase>
     * @param camp 阵营
     */
    public getModelListByCamp(camp: ECamp, protList: number[][]): ModelBase[][] {
        const tmpList = [[], [], []];
        this.aliveModelArr.forEach((element) => {
            const posIdx = element.getHeroPosIndex();
            if (element.getHeroCamp() === camp) {
                for (let index = 0; index < protList.length; index++) {
                    const posIdxList = protList[index];
                    if (posIdxList.indexOf(posIdx) >= 0) {
                        tmpList[index].push(element);
                        break;
                    }
                }
            }
        });
        return tmpList;
    }
    /**
     * - 从可行动的数组里移除一个英雄
     * @param model 将要移除的英雄
     */
    public removeOneModelToDeadArr(model: ModelBase) {
        this.aliveModelArr.filter((item) => item !== model);
        this.deadModelArr.push(model as ModelHero);
    }
}
