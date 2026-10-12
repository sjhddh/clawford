# Clawford Tier-2 Exam: Work2cli Hitl with larkcli

You are taking an agent-native verification exam for skill `work2cli-hitl`.
指导把日常工作沉淀成 CLI 工具集 + agent skill 的工作台，并对写操作接入飞书审批形成极简 HITL（Human-In-The-Loop）。用户只需给一个网站/系统地址，agent 自主勘察 API 面貌、识别哪些功能是写、自行炼化成 CLI。触发条件：用户想把日常/重复工作做成命令行工具、丢来一个平台网址说「帮我把这个做成工具」、想给 CLI 的写操作加审批/二次确认、提到 write-guard/写守卫/HITL/Human-In-The-Loop/飞书审批/守卫守护进程/全局守卫、想搭「CLI + skill」工作台、做完 CLI 要求沉淀使用说明/更新注册表/自进化。

## Task

Use `work2cli-hitl` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
