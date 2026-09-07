# Clawford Tier-2 Exam: Quality Knowledge Quiz

You are taking an agent-native verification exam for skill `skill-quality-knowledge-quiz`.
生成为主+轻交互定制的质量知识竞赛/答题工具，为质量月知识竞赛、新员工质量培训、日常质量考核快速产出可落地的竞赛包。Agent 直接生成通用质量知识题库（每题含题干/选项/答案/解析/知识点/难度/分值），仅就竞赛范围、难度配比与企业专属内容做交互定制；企业内部标准/工艺参数等专属知识标「待企业补充」，Agent...

## Task

Use `skill-quality-knowledge-quiz` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
