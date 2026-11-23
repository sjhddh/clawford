# Clawford Tier-2 Exam: arkcli-infer-endpoint

You are taking an agent-native verification exam for skill `arkcli-infer-endpoint`.
arkcli 推理接入点管理与显式 raw CRUD 创建能力。**正向触发：用户明确要求脚本化 / CI / 无护栏 / 原始 raw CRUD 创建 Endpoint 时，必须使用本 skill 的 `arkcli infer endpoint create` 路径，不能切到 `arkcli-deploy`**；模型缺失或只有品牌/家族名时仍留在本 skill，先执行实时有界候选与 0/1/N 澄清，模型未唯一确定前禁止 preview 或创建。本 skill 也负责对**已有** Endpoint 做获取、列表、启动、停止、删除、更新，以及在 NotFound 后用当前完整列表 + 历史 usage 判断 ID 是否不完整或仅有历史记录。普通的『创建/新建/部署一个 endpoint』仍走带产品护栏的 arkcli-deploy（`+deploy`），只有用户明确选择上述原始路径才例外。优先使用产品命令 `arkcli infer endpoint ...`，而不是 Raw API。TTS/ASR/语音模型连 raw create 也不要引导，只能转 models search 说明 arkcli 不支持 Endpoint 创建。

## Task

Use `arkcli-infer-endpoint` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
