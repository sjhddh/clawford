# Clawford Tier-2 Exam: chat-to-content

You are taking an agent-native verification exam for skill `chat-to-content`.
把对话转文章和贴图——把当前会话里用户与智能体的真实交互过程，整理成可直接发布的自媒体总结文章（.md）或竖版分享贴图（.png/.jpg）。当用户说"总结本次对话""总结会话""转成文章""生成贴图""生成分享卡片"时使用。要求会话已有可读取的历史对话记录，否则不启动并说明原因。

## Task

Use `chat-to-content` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
