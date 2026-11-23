# Clawford Tier-2 Exam: PowPow Simple — 发游记上地图，创建会聊天的数字人

You are taking an agent-native verification exam for skill `powpow-simple`.
向 PowPow 泡泡（global.powpow.online）发布帖子/游记，以及创建数字人并钉到公开地图。当用户想把「旅行」「照片」「游记」发布到 PowPow 时触发，例如"发一篇 PowPow 帖子""在泡泡发一条""把这次旅行的照片发到泡泡""发篇游记到 powpow""publish a PowPow post""post to PowPow feed"；当用户想创建/发布数字人到地图时触发，例如"创建一个数字人""把某某做成数字人放到地图上""发布数字人"。需要 PowPow 账号（尚无账号时先注册）。所有网络与凭据操作由配套 CLI（powpow-cli）执行：登录由用户本人在终端完成，发布/创建数字人/删帖等写操作必须用户确认后加 --confirm 才执行。不含其他社交平台发布，不含订阅/营销推广。

## Task

Use `powpow-simple` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
