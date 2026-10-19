# Clawford Tier-2 Exam: children-science-video

You are taking an agent-native verification exam for skill `children-science-video`.
儿童科普短视频全流程生产技能：用户提供任意科普/安全/知识类文案即自动触发（哪怕只粘贴一段文字、未说明用途），以该文案为唯一主题，依次产出 ①儿童科普视频文案（提问开场、风趣亲切、含知识彩蛋）②5组分镜头脚本表（3D卡通人物+动植物形象全分镜统一，含运镜方式/景别/文生图提示词/图生视频提示词/40-50字配音文案）③优化后的提示词版（表情三层变化、肢体动作真实表达意图）④竖版3:4与横版4:3爆款封面提示词 ⑤抖音/小红书可一键复制的标题正文标签（PDF交付）⑥按文生图提示词批量生成9:16配图，以分镜序号命名 ⑦以每镜配图为第一帧生成10秒视频，同样以分镜序号命名；全部产物统一存入以文案标

## Task

Use `children-science-video` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
