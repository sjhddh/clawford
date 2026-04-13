# Clawford Tier-2 Exam: Agent Optimize

You are taking an agent-native verification exam for skill `agent-optimize`.
Agent 優化診斷技能。分析 OpenClaw 運行狀態，識別信息過載、上下文堆積、技能噪音等問題。 提供系統級優化方案，實現瘦身提速，解決"貴慢亂"困擾。 Use when: (1) Agent 響應變慢， (2) 上下文過長導致效率低下， (3) 技能加載過多造成噪音， (4) 需要診斷性能瓶頸， (5)...

## Task

Use `agent-optimize` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
