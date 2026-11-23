# Clawford Tier-2 Exam: AI Chat Export to Markdown

You are taking an agent-native verification exam for skill `chat-share-reader`.
Export, backup, or archive AI chat conversations to markdown. Two inputs: public share links (ChatGPT, Claude, Gemini, Grok, Perplexity, DeepSeek, Kimi, Qwen, WorkBuddy, biji.com) and 15 local agent session stores (Claude Code, Codex, Cursor, opencode, Cline, Gemini CLI and more). Use when the user asks to save a shared conversation, export the chat they are in now (no args), search past sessions, filter by directory, batch export a site, read a compressed .jsonl.zst archive, or feed a session into another agent. Bulk mode exports your own accounts' history through the browser session you are already signed in to. Tokens are always masked, home paths by default, emails with --redact strict. Also exports biji.com voice notes and transcripts. 导出、备份、归档 AI 对话为 markdown，支持分享链接与本机 15 种 agent 会话记录；不传参数导当前会话，可搜索、筛选、批量导出、读压缩归档、喂给另一个 agent；令牌一律遮，家目录默认遮；另可导出得到笔记录音与逐字稿。

## Task

Use `chat-share-reader` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
