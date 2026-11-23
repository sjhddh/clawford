# Clawford Tier-2 Exam: wb-buddy-checkin

You are taking an agent-native verification exam for skill `wb-buddy-checkin`.
自动完成 WorkBuddy 桌面客户端「Buddy 加油站」每日签到与「派猫猫旅行」积分领取。API 直连方案（推荐）：读本机登录态直调官方接口，兼容 5.6.2+ 加密登录态（AES-256-GCM 信封自动解密）；GUI 坐标点击方案兜底（纯 ctypes 窗口置前 + 坐标点击 + 截图灰度校验，零第三方依赖）。猫猫旅行支持只读状态展示与先领后派全自动闭环（写操作需显式 --auto）。

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
