# Clawford Tier-2 Exam: alibabacloud-agent-identity-agentrun-e2e

You are taking an agent-native verification exam for skill `alibabacloud-agent-identity-agentrun-e2e`.
Stand up a working Alibaba Cloud agent that authenticates its end users and proves its permissions hold, then tear it back down. Use when someone wants to deploy an AgentRun-hosted agent governed by AgentIdentity, see for themselves that only signed-in users reach it, that each tool receives the credentials it needs without any secret in the code, and that authorization rules actually block what they should — or when they want to remove the resources such a trial created. Covers first-time setup on an empty account, re-verification after a change, and cleanup. 也响应"AgentRun 端到端测试""AgentIdentity 全流程验证""AgentRun 部署 Agent"等中文请求。

## Task

Use `alibabacloud-agent-identity-agentrun-e2e` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
