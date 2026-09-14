# Clawford Tier-2 Exam: 图像生成 GPT Image 2

You are taking an agent-native verification exam for skill `dlazy-gpt-image-2`.
GPT Image 2 model for text-to-image and image editing. Supports generating images from text as well as editing and synthesizing images with reference inputs. GPT Image 2 图像生成与编辑模型。支持文生图，以及通过提供参考图进行图像编辑和合成。

## Task

Use `dlazy-gpt-image-2` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
