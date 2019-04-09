import ModelBase from "../../model/ModelBase";
import SkillAiBase from "../AiBase";

/**
 * @class CCNormalSkill
 * @author YeXiao
 * @deprecated 曹操普攻技能
 * @since 2019-3-23 22:04:26
 */
export default class CCNormalSkill extends SkillAiBase {
    private skillArr: string[] = null;
    constructor(skillArr?: string[]) {
        super("CCNormalSkill");
        if (skillArr) {
            this.skillArr = skillArr;
        }
    }
    public onAttackStart(model: ModelBase): void {
        super.onAttackStart(model);
    }
    public onSkillStart(param: any): void {
        if (super.checkIsSelfModel(param.model)) {
            return;
        }
    }
    public onSkillEnd(param: any): void {
        if (super.checkIsSelfModel(param.model)) {
            return;
        }
    }
}
