# Clawford Tier-2 Exam: portrait-compare

You are taking an agent-native verification exam for skill `portrait-compare`.
人脸识别与相似度比对 skill。当用户上传两张照片并询问"是否为同一个人"、"人脸相似度"、"人脸比对"、"人脸识别"、"两张图片是不是同一个人"，或需要计算两张人脸照片的相似度分数时，必须使用此 skill。 适用场景：人证比对、照片对比、身份核验、人脸匹配等任务。即使用户只是说"帮我看看这两张照片是不是同一...

## Task

Use `portrait-compare` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
