# Clawford Tier-2 Exam: imagegen-batch

You are taking an agent-native verification exam for skill `imagegen-batch`.
用 ImageGen 等文生图工具安全地批量生成多张图片，避免并行同名覆盖，并规范命名归档。 当用户需要一次生成 2 张以上图片、批量配图/插图、封面+多张内图、同风格系列图时使用。 核心规则：提示词开头加唯一前缀防覆盖、量水印优先 --auto-crop 自动量测、生成后 mv 重命名并写 manifest、交付前数量核对+裁水印。 留白相框属**可选项**，默认不做，仅当用户明确要求「留白边 / 相框感」时才加； 人物给足标识包防塌脸、批量默认顺序发、失败按 5/15/45s 退避重发、单张重出默认最多 4 版（用户可指定）。

## Task

Use `imagegen-batch` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
