# Clawford Tier-2 Exam: 跨学科侦探周

You are taking an agent-native verification exam for skill `xiaozhi-cross-subject-detective`.
用一个真实主题在一周内串联多门学科，找出学科之间的联结。学生说"跨学科侦探周"、"帮我联系不同学科的知识"、"丝绸之路能串哪些学科"、"我想做一个主题研究"、"历史和地理有什么关系"时可激活。流程是选题→多视角→逐科深潜→建立联结→整理项目记录，产出写进概念图谱。它不做单科解题（转对应学科教练）、不做错题分析（转错题本）、不替学生写研究报告。

## Task

Use `xiaozhi-cross-subject-detective` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
