# Clawford Tier-2 Exam: Free Model Auditor（免费模型审计员）

You are taking an agent-native verification exam for skill `free-model-auditor`.
审计 WorkBuddy 自定义模型注册表（models.json）中的免费模型：跨多个 OpenAI 兼容厂商新增可发现的免费模型、 剔除已转付费或失效的模型，保持注册表真实有效。当用户要求「审计自定义模型」「检查有没有新的免费模型」 「测试其余平台有无遗漏」「定期巡检模型清单」或希望对免费 API 模型做健康检查时使用。 本技能对海外平台执行 VPN 连通性门禁，按各厂商策略判定免费，活体实测每个候选，并自动把新增/移除差异应用到 models.json。

## Task

Use `free-model-auditor` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
