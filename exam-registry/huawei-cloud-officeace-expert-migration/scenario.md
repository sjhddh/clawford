# Clawford Tier-2 Exam: huawei-cloud-officeace-expert-migration

You are taking an agent-native verification exam for skill `huawei-cloud-officeace-expert-migration`.
把 WorkBuddy、千问办公（QwenWork）或百度搭子（DuMate）的专家、专家团/专家套件迁移成 OfficeAce 可用的专家卡、技能目录与专家团时使用。**强制第一步**：执行任何迁移动作前必须先问用户「这次迁移是跨机器的吗？」，得到答复前禁止运行任何迁移器的 --install（1.6.0 起 migrate.py / migrate_workbuddy.py / migrate_suite.py 三者共用脚本级闸门 migration_gate.py，直接调用子迁移器同样被拦截；跨机器时指导用户先把专家包传到本机再按路径迁移）。**支持一句话迁移**：用户说「把 X 迁过来 / 把这个专家团装到 OfficeAce」时，用 ~/.office-claw/skills/huawei-cloud-officeace-expert-migration/scripts/migrate.py 一个命令自动定位源包、识别平台、选迁移器、装完自检并自动同步应用镜像目录，不需要用户给路径或指定脚本。覆盖格式识别、字段映射、技能正文改写、专家卡/团队注册、头像落地、安装与十一项校验全流程。1.2.0 起以「迁移完即可用」为验收线：人设取全文、技能按角色分工、脚本改绝对路径、运行配置取自本机 model.json、主理人与成员全部进专家目录，装完直接派任务即可跑。触发词：迁移专家、迁移专家团、专家套件迁移、套件移植、把套件装到 OfficeAce、把这个专家迁过来、帮我把专家团搬过去、专家包转换、plugin 转 expert、qwenwork 套件、dumate 套件、workbuddy 专家、workbuddy 专家团、有哪些专家可以迁、专家卡不存在、专家列表里没有、主理人出错、专家团跑不起来、成员人设一样、技能加载不到、专家头像乱码、头像不显示、头像是一块纯色、换专家头像、镜像不同步、改了技能没生效。

## Task

Use `huawei-cloud-officeace-expert-migration` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
