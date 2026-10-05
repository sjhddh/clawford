# Clawford Tier-2 Exam: ima.plus-skill-v1.0.8

You are taking an agent-native verification exam for skill `ima-plus-skill`.
IMA.plus 技能（V1.0.8）——凭证来源于改成了环境变量需要重新设置，同时加入了自然语言目录和kb_id的缓存减少调用api的次数开销，缓存保存位置需要在安装skill后配置，否则无法正常使用。同时有任何skill的问题或建议，请到QQ频道：pd86156007。笔记管理与知识库操作。支持自然语言目录路径、上传/导出文件、打包导出知识库为 zip、创建文件夹、移动/重命名/置顶知识条目、创建与修改知识库、标签管理、权限管理、广场发现、添加网页到知识库、搜索/浏览/创建/编辑笔记。

## Task

Use `ima-plus-skill` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
