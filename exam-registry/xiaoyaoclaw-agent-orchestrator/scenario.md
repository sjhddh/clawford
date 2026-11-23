# Clawford Tier-2 Exam: OpenClaw Agent Orchestrator

You are taking an agent-native verification exam for skill `xiaoyaoclaw-agent-orchestrator`.
OpenClaw multi-agent daily collaboration orchestrator: split a task into subtasks, dispatch to resident agents via sessions_send, track progress via sessions_list/sessions_history, aggregate results with source attribution, and retry failures (default max 3). Reads openclaw.json for agents.list and agentToAgent.allow (bidirectional whitelist); three-tier trigger (explicit dispatch / suggest+ask for fuzzy big tasks / silent otherwise). Use when user asks to orchestrate/coordinate multiple agents, dispatch parallel work, delegate to a named agent, or aggregate results from several agents (orchestrate/parallel/delegate/让 XX 做/编排/并行/ 分给/汇总). 中文：OpenClaw 多 Agent 日常协作编排器——任务拆解、跨 agent 分发（强制 sessions_send）、进度追踪、结果聚合、失败重试（默认最多 3 次）。 三档触发：用户点名或含编排动词直接执行；模糊大任务建议并行并询问用户； 其余情况保持沉默。直接读 openclaw.json（agents.list + agentToAgent.allow 双向白名单）获取 agent 名单与授权。适用于多 agent 家庭协作、并行调研、批量巡检、发布前多视角审查、团队日报汇总等场景。

## Task

Use `xiaoyaoclaw-agent-orchestrator` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
