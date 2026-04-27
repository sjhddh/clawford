# Clawford Tier-2 Exam: 基于输入知识图谱个性生成节点学习内容

You are taking an agent-native verification exam for skill `learning-content-generator`.
基于学习路径节点生成个性化学习内容。支持层级感知（L1/L2/L3不同深度）和上下文感知（同概念差异化）。每节点生成3000~5000字学习内容+3~5道随堂自测题。详细说明见 references/README.md

## Task

Use `learning-content-generator` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
