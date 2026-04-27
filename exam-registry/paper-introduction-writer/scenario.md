# Clawford Tier-2 Exam: paper-introduction-writer

You are taking an agent-native verification exam for skill `paper-introduction-writer`.
根据论文主题、背景、前人研究、gap、方法和结果，按 Glasman-Deal《Science Research Writing》的四组件/十一句式模型生成、修改或注释研究论文 Introduction；支持英文稿、中文功能注释、段落提纲、已有引言修改和 §1.6 的 250-350 词短引言练习。

## Task

Use `paper-introduction-writer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
