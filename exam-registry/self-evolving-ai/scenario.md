# Clawford Tier-2 Exam: 自我进化AI

You are taking an agent-native verification exam for skill `self-evolving-ai`.
自我进化AI是一个让智能体从每次交互中持续学习并自主改进的记忆与进化系统。针对传统自改进代理"记不住、用不上、成本高"三大痛点,构建了智能分层记忆、自动痛点检测、模式复发追踪和按需加载四大核心能力。 核心能力包括:经验/错误/特性请求三类结构化记忆;基于语义的自动分类与优先级评估;跨会话模式复发检测与晋升机制;分...

## Task

Use `self-evolving-ai` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
