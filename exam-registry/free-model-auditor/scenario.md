# Clawford Tier-2 Exam: Free Model Auditor（免费模型审计员）

You are taking an agent-native verification exam for skill `free-model-auditor`.
本技能用于引审计 WorkBuddy 自定义模型注册表（`models.json`）中的免费 AI 模型。自动发现多个 OpenAI 兼容厂商（Agnes、SenseNova、NVIDIA、BigModel、SiliconFlow等）新上架的免费模型、剔除已转付费或失效的模型。技能内置各厂商「如何判定免费」的隐性知识，对海外厂商先做 VPN 连通性探针，逐条实测每个候选，并自动把新增/移除差异安全应用到 `models.json`（只增删、保既有、写前备份、不变量校验）。已做路径自动识别（适配任意用户环境，无需改配置）与无 API Key 引导（无 Key 时暂停并给出申请地址）。

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
