# Clawford Tier-2 Exam: 语文素材库

You are taking an agent-native verification exam for skill `xiaozhi-chinese-material-library`.
语文写作素材的存取工具：存的时候打好标签，用的时候按主题检索得到。当学生说"存入素材库"、"这句话先存着"、"帮我找关于[主题]的素材"、"素材库里有什么"、"查一下我积累了什么关于[主题]的"、"帮我看看这个月存了多少素材"时，建议激活此SKILL。功能：存储与打标签 / 按主题检索 / 精读与文言学习中的顺手采集 / 使用记录与月度小结。素材本身只存在本 SKILL 的记忆里；只有“用过几次”的计数经交接写进学习DNA 的 subjectExtensions.chinese.materialUsage（需开档案与共享）。写作流程本身不在此——学生说"我要写作文"时由 xiaozhi-chinese-writing-coach 主导，它在 Step 1 调用本 SKILL 检索素材；本 SKILL 只在"存素材/找素材"这两类请求时自己触发，不打断写作流程。

## Task

Use `xiaozhi-chinese-material-library` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
