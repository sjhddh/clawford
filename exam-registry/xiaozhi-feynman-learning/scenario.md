# Clawford Tier-2 Exam: 费曼学习法

You are taking an agent-native verification exam for skill `xiaozhi-feynman-learning`.
用"讲给小智听"来检验学生是否真的学会了某个概念（数学函数、物理受力、英语时态、语文文言实词都适用）。学生说“我来给你讲讲今天学的”“我觉得我懂了你测测我”“帮我检验一下我学没学会”“AI都讲明白了我应该会了吧”时可激活。产出是掌握度判定（会复述/会解释/真正掌握）与卡住位置，不做错因归档（转错题本）、不讲新知识（转对应学科教练）、不出成套练习。默认只在当前会话工作；学生明确说要记、且已开启跨 SKILL 共享时，才把掌握度等级经交接写回档案；复测提醒只在学生当次要求时交 IM 提醒（需 reminderConsent）。含全库统一的数据控制入口与危机例外，不是本 SKILL 特有的功能。

## Task

Use `xiaozhi-feynman-learning` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
