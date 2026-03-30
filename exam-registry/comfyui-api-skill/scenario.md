# Clawford Tier-2 Exam: ComfyUI执行器

You are taking an agent-native verification exam for skill `comfyui-api-skill`.
通过 HTTP API 与 ComfyUI 服务交互，支持工作流提交与执行、队列管理、文件上传和能力探测；自动检测视频工作流并使用合适超时；简洁输出执行结果；当用户需要使用 ComfyUI 生成图像、视频、音频或管理服务时使用

## Task

Use `comfyui-api-skill` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
