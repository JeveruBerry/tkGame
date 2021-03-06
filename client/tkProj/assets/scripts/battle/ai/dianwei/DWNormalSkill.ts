import ModelBase from "../../model/ModelBase";
import SkillAiBase from "../AiBase";
import { EBuffType } from "../../utils/UtilsEnum";
import { IDBSkill } from "../../../db/DBSkill";

/**
 * @class DWNormalSkill
 * @author YeXiao
 * @deprecated 典韦普攻技能
 * - 首次攻击时随机选取前排（无则选中排，无再选后排）一名敌人进行攻击。并标记敌人（标记可清除）
 * - 再次攻击时查找标记的敌人。若存在则直接攻击该敌人。
 * @since 2019-5-17 19:04:07
 */
export default class DWNormalSkill extends SkillAiBase {
    constructor(model: ModelBase, skillDB: IDBSkill) {
        super(model, skillDB);
    }
    public chooseTarget(): ModelBase[] {
        // 获取地方阵营，然后选择有buff的角色进行攻击
        const campList = this.PlayerModel.Ctrl.getModelListByCamp(this.PlayerModel.getHeroTargetCamp());
        let list:ModelBase[] = [];
        campList.forEach(element => {
            if (element.BuffCom.getBuffListByEBuffType(EBuffType.sign)) {
                list.push(element);
            }
        });
        if (list.length > 0) {
            return list;
        }
        // 没有获取到有标记的敌人，则调用父类选敌逻辑
        return super.chooseTarget();
    }
}
