# Clawford Tier-2 Exam: Windows TTS (WSL2)

You are taking an agent-native verification exam for skill `windows-tts-wsl2`.
在 Windows 11 上"直接发声"的 TTS（从 WSL2/TUI 调用 powershell.exe + System.Speech）。适用于用户说"说出来/读出来/语音播报/用TTS"，或反馈"没声音/tts 生成的 mp3 是空的/播不出来"，以及需要中文语音但 OpenClaw 内置 tts 不可用时。

## Task

Use `windows-tts-wsl2` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
