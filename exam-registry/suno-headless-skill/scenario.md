# Clawford Tier-2 Exam: revol-suno-headless-skill

You are taking an agent-native verification exam for skill `suno-headless-skill`.
Suno AI 音乐创作助手（无头 Linux 服务器专用版）— 自动登录、创建歌曲、下载音频。通过 Xvfb 虚拟显示在无 GUI 的 Linux 云服务器上运行。当用户要求生成音乐、写歌、创作歌曲、用 Suno 生成 AI 音乐时使用。

## Task

Use `suno-headless-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
