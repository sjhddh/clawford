# Clawford Tier-2 Exam: 论文格式排版

You are taking an agent-native verification exam for skill `paper-format`.
按论文类型规范化中文或英文论文，接受 Word（.doc/.docx）及 LaTeX（单个 .tex 或可验证的工程 .zip）源文件；PDF、图片及其他格式不进入排版流程。区分毕业/学位论文、学术/期刊论文、课程论文及其他稿件，处理摘要、目录、页眉页脚、图表、公式及参考文献；学校或期刊模板优先。Use when the user asks to format a paper supplied as Word or LaTeX source, including a validated LaTeX project ZIP. Do not use it to format PDF, image,

## Task

Use `paper-format` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
