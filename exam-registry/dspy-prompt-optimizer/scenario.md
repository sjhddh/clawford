# Clawford Tier-2 Exam: Dspy Prompt Optimizer

You are taking an agent-native verification exam for skill `dspy-prompt-optimizer`.
DSPy：把 LLM 程序写成可组合 Module + 声明式 Signature 的 Python 框架。通过 14 个 teleprompter（optimizer）从 train + dev 集自动编译 prompt 与 few-shot demo。 DSPy: a Python framework for...

## Task

Use `dspy-prompt-optimizer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
