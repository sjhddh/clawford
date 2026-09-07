# Clawford Tier-2 Exam: long-doc-translation

You are taking an agent-native verification exam for skill `long-doc-translation`.
长篇外文（德/英/法/日等）学术专著、古籍、档案、译著的全文高质量中译流水线：解析→清洗切片→建体例与术语表→并行分批翻译→多维质检→合并交付带目录的阅读版。适用于 300 页以上、需要术语全书统一、脚注保留、存疑可追溯的长篇翻译任务。Triggers: 全文翻译 / 翻译全书 / 翻译整本 / 德译中 / 学术翻译 / 长篇翻译 / 译著 / 逐段翻译 / 把这本书译成中文 / translate a whole book / full-text translation of a scholarly monograph.

## Task

Use `long-doc-translation` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
