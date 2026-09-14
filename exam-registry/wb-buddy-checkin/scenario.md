# Clawford Tier-2 Exam: Wb Buddy Checkin Publish

You are taking an agent-native verification exam for skill `wb-buddy-checkin`.
自动完成 WorkBuddy 桌面客户端「Buddy 加油站」每日签到、领取积分。当用户需要在 Windows 上自动点击头像→Buddy加油站→立即领取，并通过截图灰度校验是否成功（灰底「今日已领」）时使用。基于纯 ctypes 实现窗口置前、坐标点击与窗口截图，零第三方 Python 依赖，仅依赖 Windows 系统 API（可选复用 desktop-control-win skill 的截图）。

## Task

Use `wb-buddy-checkin` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
