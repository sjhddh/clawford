# Clawford Tier-2 Exam: jy-news-interpretation

You are taking an agent-native verification exam for skill `jy-news-interpretation`.
基于 MCP 聚源金融数据库生成过去 24 小时的金融资讯热点速报（默认 Markdown 格式，支持 HTML 输出）。覆盖重要金融相关的国内新闻、国外要闻、重要个股公告、三大核心模块，所有信息可溯源、带原始发布时间戳。使用场景：当用户有以下意图时触发，询问近期要闻，询问近期热点，快速了解金融最新动态，解读财经...

## Task

Use `jy-news-interpretation` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
