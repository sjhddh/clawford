# Clawford Tier-2 Exam: USA零生图技能

You are taking an agent-native verification exam for skill `usa-image-skill`.
使用 usa0.top 的 OpenAI 兼容 GPT Images API 生成或编辑图片，支持文生图、本地或远程参考图、多图编辑和批量输出；当用户提出生图请求、首次使用、询问安装配置或缺少密钥时，检查 USA_API_KEY；如果未配置，在 Windows 上立即运行技能脚本打开本机安全输入弹窗，让用户在弹窗中输入并保存生图分组 API Key。

## Task

Use `usa-image-skill` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
