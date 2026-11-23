# Clawford Tier-2 Exam: arkcli-models

You are taking an agent-native verification exam for skill `arkcli-models`.
arkcli 模型查询与基础模型服务激活能力：列出、搜索、获取火山公共基础模型详情，以及用户明确要求的开通/激活模型服务（`arkcli models activate`）；Volc 还支持 TTFT/TPOT 性能排名、延迟趋势和输入长度对比。激活已有基础模型服务不等于部署/创建 Endpoint，不得转成 `+deploy`。优先使用产品命令 `arkcli models ...`，而不是直接调用 Raw API。反触发：用户的最终目标是创建 / 部署 Endpoint 时，本 skill 承担有界的只读候选查询，owning skill 由创建路径确定：普通产品创建走 arkcli-deploy；用户显式要求 raw CRUD / CI / 无守卫的 `infer endpoint create` 走 arkcli-infer-endpoint。候选首先执行 `models search ... --size 10 --format json`；成功完整结果直接复用，空结果与捕获缺损按 reference 有界恢复，并把实时返回的 `name` 与非空 `primary_version` 组合成可直接传给 `--model` 的完整 ID，不能拉全量清单、把裸家族名当可部署 ID，或逐候选追加 `models get`。注意：查询/管理账号下自传或精调的自定义模型（`cm-xxx`）走 arkcli-custommodel。

## Task

Use `arkcli-models` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
