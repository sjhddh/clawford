# Clawford Tier-2 Exam: 小红书短视频全解析

You are taking an agent-native verification exam for skill `xiaohongshu-video-studio`.
小红书短视频一站式解析与创作工场。用户直接输入小红书视频链接加一句简单要求即可：视频转文字（字幕/口播/画面内容）、内容分析总结、爆款视频拆解（按带货/流量逻辑拆结构分段、脚本类型、爆款归因、六维评分报告，照着学照着抄）、视频转脚本（镜头/运镜/转场/情绪/时间线/屏幕文字）、爆款脚本生成（原骨架改写成你的脚本，或按方向/目的/商品原创口播脚本，含分段表与六维质检评分）、视频提示词反推（画面和内容转成 agent 可理解的提示词）。底层经 Cue Omni Reader 远程端点解析（自动绕过小红书反爬），再由大模型按场景加工交付。

## Task

Use `xiaohongshu-video-studio` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
