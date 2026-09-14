# Clawford Tier-2 Exam: multimodal-gen

You are taking an agent-native verification exam for skill `multimodal-gen`.
多模态内容生成技能。覆盖文生图、图生图、文生视频、语音转写，统一封装提示词范式与调用约定，衔接系统内置的 ImageGen / VideoGen 工具。内置 prompt 构造助手脚本。适用于配图、海报、视频素材、语音笔记转写。

## Task

Use `multimodal-gen` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
