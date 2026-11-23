# Clawford Tier-2 Exam: id-photo-generator

You are taking an agent-native verification exam for skill `id-photo-generator`.
生成合规证件照（一寸、二寸、小一寸、小二寸、身份证、护照、签证等）以及更换证件照底色。当用户上传人物照片并表达"制作证件照/一寸照/两寸照/换底色/蓝底白底红底证件照/生成标准证件照"等意图时使用。核心原则：必须先检测到且仅检测到一张可用人像才允许生成；未识别人像、人像不合格或疑似翻拍合成时绝不生成，并提示用户重新上传。严禁美颜、磨皮、瘦脸等改变面部特征的操作，不得遮挡痣、疤痕等固有标识。

## Task

Use `id-photo-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
