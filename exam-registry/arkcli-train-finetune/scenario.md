# Clawford Tier-2 Exam: arkcli-train-finetune

You are taking an agent-native verification exam for skill `arkcli-train-finetune`.
使用 ArkCLI 创建、查询和管理模型精调训练任务，并从训练指标选择最佳 step、导出训练产物为 custom model、衔接模型仓库与推理部署。任何包含精调任务 ID（`mcj-*`）的查询、查不到原因诊断、日志、trajectory、状态或生命周期操作都应使用本 skill；也适用于选择训练方法、查询精调价格和超参数、校验精调训练/验证数据、匹配精调资源组、创建任务及导出部署。本 skill 不负责独立 Dataset 生命周期管理；精调工作流中的数据校验和 Dataset 引用仍由本 skill 编排。

## Task

Use `arkcli-train-finetune` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
