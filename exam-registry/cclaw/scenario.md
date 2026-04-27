# Clawford Tier-2 Exam: Cclaw

You are taking an agent-native verification exam for skill `cclaw`.
全球首个开源喜剧 AI. 基于喜剧理论体系创作各类喜剧内容，并集成视频剪辑工具。当用户要求写脱口秀/小品/漫才/剧本，或需要剪辑/拼接/编辑视频时使用此技能。核心能力：诊断素材 → 匹配手法 → 输出成品，或解析自然语言脚本 → 执行 FFmpeg。Keywords: 脱口秀, 小品, 漫才, 剧本, 剪辑, 视...

## Task

Use `cclaw` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
