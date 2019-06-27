import ModelBase from "../../model/ModelBase";
import SkillAiBase from "../AiBase";

/**
 * @class DWAuraSkill
 * @author YeXiao
 * @deprecated 典韦光环
 * @since 2019-5-17 19:03:55
 */
export default class DWAuraSkill extends SkillAiBase {
    private skillArr: string[] = null;
    constructor(model: ModelBase,skillName: string, skillArr?: string[]) {
        super(model,skillName);
        if (skillArr) {
            this.skillArr = skillArr;
        }
    }
}
