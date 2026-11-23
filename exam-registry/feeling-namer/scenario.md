# Clawford Tier-2 Exam: feeling-namer

You are taking an agent-native verification exam for skill `feeling-namer`.
把“烦、累、焦虑、说不上来”这类模糊感受，拆成 2—3 个具体情绪，配“它在保护什么”、一个 5 分钟微行动和一句可说的话。强触发词为“情绪命名”“帮我理理情绪”“我说不清什么感受”。当用户说“我最近很烦”“心里堵得慌”“什么都不想干”时也可触发。不做心理诊断，不替代专业帮助，内置危机识别与转介流程。

## Task

Use `feeling-namer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
