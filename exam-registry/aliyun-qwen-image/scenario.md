# Clawford Tier-2 Exam: Qwen Image

You are taking an agent-native verification exam for skill `aliyun-qwen-image`.
调用阿里云百炼（DashScope/Model Studio）平台上的千问及万相2.6模型，完成图像生成与编辑任务。 当用户涉及以下任何场景时，必须使用此 skill： - 调用千问或万相2.6模型生成、编辑图片 - 百炼平台图像相关 API - 使用 dashscope SDK 访问 qwen-image /...

## Task

Use `aliyun-qwen-image` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
