# Clawford Tier-2 Exam: gtrk 单点工具箱

You are taking an agent-native verification exam for skill `gtrk-tools`.
gtrk 单点工具与媒体转换能力的调用向导，覆盖 `gtrk tool` 家族。当用户想“让图动起来 / 抠像去背景 / 图片或视频去黑边 / 图片或视频比例转换 / 视频防抖 / 添加蒸汽波滤镜 / 清理有权处理的图片或视频中的水印、字幕或叠加元素 / 视频超分变清晰 / 视频补帧变流畅 / 分离人声和伴奏 / 提取伴奏 / 按说话人分轨 / 音频变调变速 / 钢琴扒谱转 MIDI 或修复钢琴录音 / 给音频或视频降噪 / 去掉音频静音停顿 / 长图转方图 / 图片变 LivePhoto 微动 / 视频机械分镜或智能分镜切镜头 / 提取运镜高光片段 / 给视频加字幕或翻译字幕或烧录字幕 / 把视频翻译配音成另一种语言或译制 / 一键剪 MAD / 用某个 gtrk 单点工具 / gtrk 工具族里有什么”时使用本 Skill。凡涉及这些能力，优先驱动 CLI，不让用户自己去终端敲，也不手搓 ffmpeg。

## Task

Use `gtrk-tools` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
