# Clawford Tier-2 Exam: Resume Master

You are taking an agent-native verification exam for skill `resume-master`.
通过直接编写可编辑的 HTML 源文件，来创建新简历或根据职位描述（JD）量身定制现有简历，最终交付可打印 PDF。当用户需要以下操作时使用：(1) 从头开始创建一份全新的简历；(2) 修改旧简历特别是根据 JD 进行调整。

## Task

Use `resume-master` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
