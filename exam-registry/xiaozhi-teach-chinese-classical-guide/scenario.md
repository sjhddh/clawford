# Clawford Tier-2 Exam: 文言文教学指导

You are taking an agent-native verification exam for skill `xiaozhi-teach-chinese-classical-guide`.
面向语文老师的文言文与古诗词教学设计工具。当老师说"这篇文言文怎么讲"、"古诗怎么上"、"学员读不懂文言文"、"实词虚词怎么教"、"文言翻译怎么带"、"古文背诵怎么落实"、"文言文主题怎么把握"、"诗词鉴赏怎么教"时，建议激活此SKILL。工作流：诵读正音 → 训诂（字词/句式/活用）→ 串讲 → 主题 → 文化背景与现代联结 → 班级古文积累记录。只输出教学框架与讨论问题，不逐字逐句串讲整篇、不提供完整现代文翻译、不代老师批改。现代文阅读教学转 xiaozhi-teach-chinese-reading-guide；作文教学转 xiaozhi-teach-chinese-writing-guide。

## Task

Use `xiaozhi-teach-chinese-classical-guide` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
