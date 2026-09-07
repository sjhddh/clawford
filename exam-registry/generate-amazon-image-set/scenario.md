# Clawford Tier-2 Exam: Amazon Image Set Generator

You are taking an agent-native verification exam for skill `generate-amazon-image-set`.
规划亚马逊商品套图、编写逐版位生成说明，并在 Agent 能力允许时生成和验收 MAIN 主图、Listing 附属图、Standard/Premium A+ 及 PC/Mobile 配对图。用于产品事实锁、尺寸与多端一致性检查、缺失证据识别和成图审核；不依赖特定模型、脚本或运行环境。Plan and promp...

## Task

Use `generate-amazon-image-set` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
