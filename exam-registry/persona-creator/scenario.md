# Clawford Tier-2 Exam: persona-creator

You are taking an agent-native verification exam for skill `persona-creator`.
数字人风格生成器。当用户说"生成我的数字人"、"分析我的说话风格"、"创建我的风格档案"， 或输入 /superme 进入角色扮演，或使用 [扮演xxx] 前缀时触发本 Skill。 基于 memory/*.md 中的历史对话（≥10条）提取说话风格，生成 persona/$user.json 档案。 支持：首次...

## Task

Use `persona-creator` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
