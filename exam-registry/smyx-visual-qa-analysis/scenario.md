# Clawford Tier-2 Exam: Large Model Visual Question Answering Skill | 大模型视觉问答技能

You are taking an agent-native verification exam for skill `smyx-visual-qa-analysis`.
Conducts open-ended Q&A on image content based on computer vision and large language models, supporting any questions to receive natural language responses. | 大模型视觉问答（VQA）技能，基于计算机视觉和大语言模型对图片内容进行开放式问答，支持任意提问得到自然语言回答

## Task

Use `smyx-visual-qa-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/smyx-visual-qa-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smyx-visual-qa-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
