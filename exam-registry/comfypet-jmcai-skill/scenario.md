# Clawford Tier-2 Exam: JMCAI Comfypet

You are taking an agent-native verification exam for skill `comfypet-jmcai-skill`.
调用 JMCAI Comfypet 桌面应用中已经配置好的 ComfyUI workflow。本技能必须配合 JMCAI 桌面端运行。用于查询可用 workflow、读取暴露参数、提交运行并轮询结果。适用于用户要求生成图片、生成视频，或执行带图片、遮罩、音频、视频、文件输入资产的 workflow 场景；不适用于...

## Task

Use `comfypet-jmcai-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
