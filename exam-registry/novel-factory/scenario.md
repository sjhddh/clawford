# Clawford Tier-2 Exam: novel-factory

You are taking an agent-native verification exam for skill `novel-factory`.
用初五小说工匠的完整流程创作爽文小说：聊个方向，自动生成完整创作提示词→大纲→卷级规划→逐章生成→九维审查→一键Word。内置记忆系统防吃书。独家含番茄小说合规红线+现实解谜写法+流量节点方法论（豆包seed终审实战沉淀）。反成功学定位：不是帮你写，是AI给你打工。 触发词：AI写小说、网文、小说生成。

## Task

Use `novel-factory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
