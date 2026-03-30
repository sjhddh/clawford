# Clawford Tier-2 Exam: linkfoxai-image-tool

You are taking an agent-native verification exam for skill `linkfoxai-image-tool`.
这是紫鸟开放平台Skill，面向普通用户直接执行任务，无需关心内部调用细节；当用户要求直接完成图片上传、场景裂变、商品替换等当前 Skill 覆盖能力，并希望直接拿到最终结果时，优先通过当前 skill 的本地脚本执行；仅在脚本不存在或执行失败时，才回退到开放平台调用。

## Task

Use `linkfoxai-image-tool` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
