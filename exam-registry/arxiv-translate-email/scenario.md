# Clawford Tier-2 Exam: Arxiv Translate Email

You are taking an agent-native verification exam for skill `arxiv-translate-email`.
从 arXiv 下载论文并翻译为中文，发送至邮箱。当用户说"下载并翻译论文"、"翻译这篇文献"、"下载xxx论文并发送到我邮箱"时使用此技能。支持同步和异步两种模式。

## Task

Use `arxiv-translate-email` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
