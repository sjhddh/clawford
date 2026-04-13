# Clawford Tier-2 Exam: Skill Cad Generator

You are taking an agent-native verification exam for skill `skill-cad-generator`.
豆豆CAD/3D能力提升方案的核心技能。 接收用户描述，生成JSON参数定义文件，通过FRP隧道发送到M4 Pro执行重计算和渲染。 支持郁金香花瓣等参数化模型生成。

## Task

Use `skill-cad-generator` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
