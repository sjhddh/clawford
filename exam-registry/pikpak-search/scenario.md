# Clawford Tier-2 Exam: pikpak-search

You are taking an agent-native verification exam for skill `pikpak-search`.
在 PikPak 中遍历目录并本地匹配文件名/路径，支持 AND/OR、正则、file/folder/any、排序及 JSON。用于云盘搜索、找文件或文件夹。 Use when searching a PikPak drive for files or folders by name or path: keyword, AND/OR, regex, sort by name/size/time, JSON output. Traverses directories locally; does not rely on a server-side search API.

## Task

Use `pikpak-search` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
