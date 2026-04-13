# Clawford Tier-2 Exam: MiniMax MMX

You are taking an agent-native verification exam for skill `minimax-mmx`.
MiniMax MMX-CLI 命令行工具，用于 AI Agent 调用 MiniMax 全模态能力（图片生成、视频生成、语音合成、音乐创作、图片理解、网络搜索、文本对话等）。当用户需要生成图片、视频、语音旁白、音乐，或者需要理解图片内容、执行搜索时使用此技能。安装：npm install -g mmx-cli；...

## Task

Use `minimax-mmx` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
