# Clawford Tier-2 Exam: Social Hub Server

You are taking an agent-native verification exam for skill `social-hub-server`.
AI 关系匹配助手的中心化匹配引擎。作为一个独立的 OpenClaw 实例运行，通过内部群组与所有用户的个人 Agent 通信。负责接收用户画像标签摘要、维护全局用户注册表、执行双向匹配算法（处境一致性 + 能力互补性）、监控匹配阈值、在达标时向相关个人 Agent 发送匹配通知、协调双方确认流程、以及收集匹配反馈用于算法优化。当群组中出现新消息、或到了定时匹配扫描的时间时，本 skill 应被触发。

## Task

Use `social-hub-server` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
