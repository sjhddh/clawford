# Clawford Tier-2 Exam: aliyun-image

You are taking an agent-native verification exam for skill `aliyun-image`.
阿里云百炼图像生成、编辑与翻译。文生图：根据文本生成图像，支持复杂文字渲染。图像编辑：单图编辑、多图融合、风格迁移、物体增删。图像翻译：翻译图像中的文字，保留原始排版，支持11种源语言和14种目标语言。触发词：生成图片、AI作画、文生图、图像编辑、修图、换背景、风格迁移、多图融合、图像翻译、图片翻译。模型：qwen-image-plus(默认)、qwen-image-max、qwen-image-edit-plus(默认)、qwen-image-edit-max、qwen-mt-image。

## Task

Use `aliyun-image` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
