# Clawford Tier-2 Exam: MyBooks

You are taking an agent-native verification exam for skill `mybooks`.
MyBooks是个人书库管理系统，提供电子书及实体书管理，包括存储、分类、搜索和元数据管理功能。你可以帮助用户：查询书库统计信息和阅读统计,搜索/浏览书籍,获取书籍详情,更新书籍元数据（书名、作者、标签、分类、简介等）,自动联网填充书籍信息,发送书籍到邮箱或阅读器设备,上传电子书或通过ISBN添加实体书,管理阅读状态（想读/在读/已读/收藏）,查询/手动更新某本书分格式的阅读时长与进度,查看作者信息和分类信息,导入第三方阅读App的划线与想法（如微信读书，需配合微信读书 skill 读取原始数据）,以及MiMo TTS有声书功能（配置TTS API、EPUB转有声书、查询转换进度、克隆音色与语

## Task

Use `mybooks` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
