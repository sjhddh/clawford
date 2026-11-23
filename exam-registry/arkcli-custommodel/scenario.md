# Clawford Tier-2 Exam: arkcli-custommodel

You are taking an agent-native verification exam for skill `arkcli-custommodel`.
arkcli 自定义模型仓库管理：从 TOS 导入自定义模型、查询/筛选自定义模型、查看详情、改名、删除、查询可用量化模式、量化已就绪的模型。任何提到自定义模型 ID（`cm-*`）的管理、部署准备，或要求用 `cm-*` 直接对话/推理/试效果的边界判断，都必须使用本 skill。注意：查询火山**公共基础模型**（doubao 等 foundation models）走 arkcli-models；本 skill 只管账号下的自定义模型仓库。

## Task

Use `arkcli-custommodel` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
