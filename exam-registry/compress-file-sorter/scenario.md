# Clawford Tier-2 Exam: compress-file-sorter

You are taking an agent-native verification exam for skill `compress-file-sorter`.
解析压缩文件并根据文件名关键词自动分类到指定目录。每当用户需要处理压缩文件时，请使用此技能。触发条件包括：提及"解压"、"文件解压"等。也用于将文件根据用户指定的方法进行分类处理。如果用户要求解压文件并将文件按指定文件名进行分类，请使用此技能。

## Task

Use `compress-file-sorter` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
