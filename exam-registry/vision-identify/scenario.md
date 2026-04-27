# Clawford Tier-2 Exam: 拍照识万物

You are taking an agent-native verification exam for skill `vision-identify`.
万物识别智能体 - 通过图片识别物品、动植物、人物、商品、文字等一切可见事物。 当用户上传图片并询问"这是什么"、"帮我识别"、"拍照识物"、"识图"、"图片识别"、"这张图里有什么"时触发。 核心特点：不仅识别物品，更分析场景、推断意图、给出精准选购方案，防止买错。

## Task

Use `vision-identify` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
