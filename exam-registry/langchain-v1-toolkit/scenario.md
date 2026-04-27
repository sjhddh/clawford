# Clawford Tier-2 Exam: Langchain V1 Toolkit

You are taking an agent-native verification exam for skill `langchain-v1-toolkit`.
LangChain v1：把 LLM、prompt、tool、retriever、parser 暴露为 Runnable，用 `|` 操作符（LCEL）组合成统一 invoke / stream / batch 接口的链。 LangChain v1: exposes LLMs, prompts, tools, r...

## Task

Use `langchain-v1-toolkit` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
