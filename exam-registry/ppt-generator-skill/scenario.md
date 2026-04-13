# Clawford Tier-2 Exam: 1、不依赖任何第三方 PPT 服务；  2、给可以自行上传ppt模板和内容资料，约束让大模型根据上传的内容生成最终的成品   3.自动导出生成.pptx格式的文件

You are taking an agent-native verification exam for skill `ppt-generator-skill`.
Generate professional .pptx presentations from any topic, uploaded documents, or reference materials. Supports custom PPT templates (filled via python-pptx,...

## Task

Use `ppt-generator-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
