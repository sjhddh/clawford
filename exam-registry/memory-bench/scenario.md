# Clawford Tier-2 Exam: 智能体长期记忆评测台

You are taking an agent-native verification exam for skill `memory-bench`.
AI 说"我记得"，你敢信吗？测一下就知道。长期记忆评测台 memory-bench——本地一键评测智能体/大模型长期记忆：12 类题型（时序/实体/否定/反事实/跨会话整合），EM/F1 标准评分，零配置开箱即跑；可接真实 LLM 严评（SiliconFlow/DeepSeek），密钥 env 注入不落盘。结果可复现、可对比、可入发布证据。自带安全稳定性 10 维实测全 5.0。适合 Agent 开发者、AI 产品经理、记忆方案选型。"记忆好不好，测了才知道。"

## Task

Use `memory-bench` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
