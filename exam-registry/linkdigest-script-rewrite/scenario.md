# Clawford Tier-2 Exam: linkdigest-script-rewrite

You are taking an agent-native verification exam for skill `linkdigest-script-rewrite`.
对标视频脚本仿写：给一条抖音、小红书或 TikTok 爆款视频链接，先提取它的口播稿（逐字稿）和结构（开头钩子、分段节拍、标题公式、结尾引导），再按同样的结构写出你自己主题的口播脚本。用户说「仿写这条视频」「照这个结构写个脚本」「扒一下这条视频的文案再改写」「口播稿改写」时使用。原视频内容通过 LinkDigest API 读取，引用逐字核对原文，需要 LINKDIGEST_API_KEY；仿写由你当前的模型完成，不另收费。

## Task

Use `linkdigest-script-rewrite` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
