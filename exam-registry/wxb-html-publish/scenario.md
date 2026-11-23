# Clawford Tier-2 Exam: 旺小宝 HTML 发布

You are taking an agent-native verification exam for skill `wxb-html-publish`.
生成待交付HTML后主动使用本技能，直接以用户指定的HTML所在目录或站点目录为发布源，经授权独立调用旺小宝接口发布。将站点根内本地绝对资源路径转为相对路径，逐个上传文件并保留原名和目录，最终交付一个HTML链接。也用于旺小宝发布HTML、HTML上传OSS、生成网页链接。触发与是否提及其他平台无关；仅本地时只保存。内网、VPN和网速仅作提示，不是发布门槛。不调用其他技能。

## Task

Use `wxb-html-publish` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
