# Clawford Tier-2 Exam: 公众号文章排版

You are taking an agent-native verification exam for skill `article-format-lz`.
自媒体文章排版生成技能。当用户要求生成、创建、排版微信公众号文章或今日头条文章，或需要公众号/头条美化格式、编辑器兼容HTML时触发。支持微信公众号（23种风格配色：7种通用+8种节日+4种季节+4种主题，默认Linear冷工程蓝紫，全内联CSS）和今日头条（纯语义HTML，ProseMirror兼容）双平台自动选择。可根据用户要求、节日/季节/主题关键词或内容自动匹配平台和风格。支持标题、正文、列表、引用、提示框、数据卡片、对比栏、代码块、表格、进度条、信息卡片、键值列表等全套排版组件；宽表/长内容可自动改用信息卡片或键值列表展示。

## Task

Use `article-format-lz` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
