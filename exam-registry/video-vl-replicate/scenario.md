# Clawford Tier-2 Exam: 视频爆款拆解与二创文案生成

You are taking an agent-native verification exam for skill `video-vl-replicate`.
视频爆款拆解与二创文案生成。输入一个短视频（抖音/B站/小红书/视频号等），通过抽取音轨与关键帧、转录带时间戳文案、OCR 提取画面字幕，按时间戳对齐成视听时间线，再基于拆解结果生成二创爆款文案。适用于：拆解爆款视频结构、仿写爆款文案、视频拆条分析、视听内容理解、二创脚本生成。当用户提到拆解视频、二创、爆款文案、视频视听分析、仿写爆款、视频拆条、分析这个视频为什么火时触发。

## Task

Use `video-vl-replicate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
