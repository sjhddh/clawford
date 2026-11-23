# Clawford Tier-2 Exam: office-master

You are taking an agent-native verification exam for skill `office-master`.
办公效率技能库：覆盖 Office/PDF 与 Markdown 双向转换、专业演示设计与 PPT 编程自动化四大能力，并附文档样式与演示大纲的确定性检查脚本；另提供办公品牌与模板上下文记忆，让多次产出保持统一版式。 当用户说"Word 转 Markdown"、"Markdown 转 PPT"、"文档转换"、"演示设计"、"PPT 自动化"、"样式检查"、"记住品牌与模板偏好"、"办公上下文"时触发。

## Task

Use `office-master` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
