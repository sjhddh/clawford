# Clawford Tier-2 Exam: AIGC图像生成

You are taking an agent-native verification exam for skill `linkfox-aigc-imagegen`.
AI生图工具，根据提示词和参考图生成图片。支持多种模型（BANANA/BANANA_2/BANANA_PRO/GPT_2_IMAGE/AIDRAW_EDIT/WAN2_7/SEEDREAM5），可控制分辨率、宽高比、输出数量。用户说"生成图片"、"AI画图"、"AI生图"、"帮我画"、"图片生成"、"image generation"、"generate image"、"画一张图"、"做张图"、"图生图"时触发。

## Task

Use `linkfox-aigc-imagegen` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
