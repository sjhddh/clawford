# Clawford Tier-2 Exam: 专利翻译

You are taking an agent-native verification exam for skill `patent-translate`.
专利翻译、外国专利翻成中文。当用户说「把这件美国专利翻译一下」「日本专利看不懂，翻成中文」「权利要求翻译」「对比文件要中文版」「外文专利术语对照」时使用。输出中文译文（Markdown）和术语对照表（Excel 能打开）。 Give a US, EP, JP or KR patent number; the skill fetches the original title, abstract and claims and translates them into Chinese in patent style with consistent terms and a term glossary.

## Task

Use `patent-translate` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
