# Clawford Tier-2 Exam: 三剪客 · AI换装

You are taking an agent-native verification exam for skill `sanjianke-dressing-diffusion`.
智能图片换装，上传模特图和服装图，AI 自动完成试穿效果生成。支持上衣、下装、全身换装。模型可在后台 extra_config 中切换。支持 提交换装任务、查询换装结果。包内含完整操作文档与零依赖客户端（`SKILL.md` + `references/`）。需要自备 api.a7w.cn 的 API Key，注册领 Key 见 https://api.a7w.cn/ 。遇到问题可加技术微信 9872659。

## Task

Use `sanjianke-dressing-diffusion` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
