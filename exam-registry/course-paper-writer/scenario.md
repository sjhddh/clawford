# Clawford Tier-2 Exam: Course Paper Writer · 课程论文写作

You are taking an agent-native verification exam for skill `course-paper-writer`.
写课程论文、结课论文、期末论文、读书报告、文献综述时使用。先读作业要求文件（.docx/.pdf）提取字数、字体行距、文献篇数与年限、案例数、标题层级等硬约束，再检索文献、联网取证、标注出处，最后生成排版正确的 .docx 并自报字数与页数。覆盖选题拆解、文献检索、结构设计、AI 文风清理、引用格式（GB/T 7714 等）与交稿前自查，适用于思政、工程伦理、专业课、公选课等任何有格式硬性要求的学术写作任务。

## Task

Use `course-paper-writer` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
