# Clawford Tier-2 Exam: 魔搭魔粒每日自动领取

You are taking an agent-native verification exam for skill `modelscope-magicube-checkin`.
自动领取魔搭（ModelScope）每日发放的魔粒（Magicube）算力额度。通过 Chrome DevTools Protocol 连接你自己已经打开的浏览器，在页面上点击「领取」按钮，并以余额前后差值作为唯一成功判据（余额没变一律记 UNKNOWN，不报成功）。不调用非公开接口，不修改浏览器文件，不启动或结束任何浏览器进程；只操作 modelscope.cn 域名下的页面，点击前在页面内原子复核 host（校验与点击同一次 JS 执行，标签页离开魔搭就一个按钮都不点）。含人工登录一次的说明、四态判据机、故障处置表与本地自测脚本。当用户说「领魔粒」「魔搭签到」「魔粒余额」「魔搭自动登录」「ModelScope checkin」「魔粒够不够」时使用。

## Task

Use `modelscope-magicube-checkin` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
