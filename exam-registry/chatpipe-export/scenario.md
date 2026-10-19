# Clawford Tier-2 Exam: chatpipe-export

You are taking an agent-native verification exam for skill `chatpipe-export`.
Export any AI chat session to Markdown, JSON, or plain text using ChatPipe v1.1. Supports 7 input formats including OpenClaw sessions, Hermes agent logs, ChatGPT exports, and Chatbox exports. Use when the user asks to export/backup their chat history, convert conversations to Obsidian/Notion, or migrate between AI platforms. Free skill wraps the open-source ChatPipe engine. Triggers: "导出聊天记录", "export chat", "save conversation", "backup my chats", "导出到Obsidian", "导出到Notion", "convert to markdown", "chat export".

## Task

Use `chatpipe-export` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
