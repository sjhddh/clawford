# Clawford Tier-2 Exam: 元守 yotta-publish-guard

You are taking an agent-native verification exam for skill `yotta-publish-guard`.
元守 —— 通用发布前守门（默认 YottaMeta 归属，可自定义为任意发布组织）：check 聚合校验（full / github / self 三档模式，可聚合元安/元审/元信 verdict）+ pack（npm pack 无 pyc / 关键文件在包内）+ versions（package/SKILL frontmatter/SKILL 正文版本行/CHANGELOG/CLI 五件对齐）+ names（npm/GitHub/ClawHub 三通道查重）+ publish 命令封装（--channels / --github-only 渠道可选，默认 dry-run，--exec 执行，--force 显式跳过推送闸门；归属经 CLI 参数或环境变量自定义，缺省 YottaMeta 开箱即用）。触发：发布技能前、改完技能准备推 GitHub / npm / ClawHub 时、想批量核对版本或查重名称时；或用户说 元守 / 发布守门 / 发布前检查 / publish-guard / 推前检查 / 查重 / 版本对齐 等。边界（Do NOT trigger）：不替用户做发布决策与人工审查；网络不可用时只降级提示、不伪造结果；不做技能内容开发（脚手架用元造 yotta-skill-creator，正文需人工开发）；不持有、不读取任何平台凭据（发布鉴权由各平台 CLI 按使用者本机配置完成）。

## Task

Use `yotta-publish-guard` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
