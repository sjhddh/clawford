# Clawford Tier-2 Exam: Art Knowledge Helper Skill

You are taking an agent-native verification exam for skill `art-knowledge-helper`.
艺术知识库管理技能包。用于维护藏书整理、散文件清理、百度网盘同步、新书归档、藏书统计等日常管理工作。配合 art-tutor 技能使用。首次使用前请在 config.json 中填写知识库路径。

## Task

Use `art-knowledge-helper` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
