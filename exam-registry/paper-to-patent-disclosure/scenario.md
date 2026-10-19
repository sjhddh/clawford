# Clawford Tier-2 Exam: 论文专利交底 · PatentMax

You are taking an agent-native verification exam for skill `paper-to-patent-disclosure`.
论文转专利、科研成果转专利交底书。当用户说「我的论文能申请专利吗」「把这篇论文写成专利」「论文转专利」「研究成果想申请专利」「毕业论文里的方法能不能专利保护」时使用。先列出论文里的创新点和公开风险，再生成技术交底书 Word。 Turns your own paper or research results into a patent technical disclosure. Lists the patentable points and publication risks first, then generates a disclosure (Word) for the points you choose.

## Task

Use `paper-to-patent-disclosure` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
