import ModelBase from "../model/ModelBase"
/**
 * @class SkillAiBase
 * @author YeXiao
 * @deprecated 英雄战斗技能AI接口,添加新技能ai脚本的时候，需要在AiConst.ts里面声明
 * @since 2019-3-15 15:58:13
 */
export default abstract class SkillAiBase{
    private _skillName:string = null;
    constructor(nameStr:string){
        this._skillName = nameStr;
    }
    printInfo(){
        console.log("name----:",this._skillName);
    }
    /**
     * @description 当一个英雄开始攻击时
     * @param model 攻击的英雄
     */
    onAttackStart(model:ModelBase):void{};
    /**
     * @description 当一个英雄攻击结束时
     * @param model 攻击的英雄
     */
    onAttackEnd(model:ModelBase):void{};
    /**
     * @description 当一个英雄受到攻击时
     * @param model 受击的英雄
     */
    onDefend(model:ModelBase):void{};
    /**
     * @description 当有英雄属性变化时
     * @param model 属性变化的英雄
     */
    onPropChange(model:ModelBase):void{};
    /**
     * @description 当一个英雄死亡时
     * @param model 死亡的英雄
     */
    onDead(model:ModelBase):void{};
    /**
     * @description 当一个英雄被击杀时
     * @param model 被击杀的英雄
     */
    onKill(model:ModelBase):void{};
}