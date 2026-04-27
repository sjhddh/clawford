# Clawford Tier-2 Exam: 学习DNA档案

You are taking an agent-native verification exam for skill `xiaozhi-learning-dna`.
小龙虾"长期记忆"的核心引擎——学习DNA档案。每当学生开始新对话、 自我介绍、填写学习信息、说"记住我"、"我的情况是"、"更新我的档案"， 或任何需要小龙虾了解这个学生是谁时，必须激活此SKILL。 没有学习DNA，小龙虾每次对话都是"失忆状态"；装了此SKILL， 它才能真正记住这个孩子——弱点、风格、目标...

## Task

Use `xiaozhi-learning-dna` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
