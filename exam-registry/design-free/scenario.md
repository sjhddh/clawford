# Clawford Tier-2 Exam: 设计偏好基础版

You are taking an agent-native verification exam for skill `design-free`.
设计偏好基础客户端（免费版）。通过观察用户在 UI 设计中的选择与反馈,自动提取视觉偏好模式. 支持两大偏好分类: Aesthetic（美学风格）与 Never（禁忌清单）。检测到 3 次以上一致偏好后 自动确认写入偏好档案,保持条目精简紧凑。仅支持 UI 设计媒介,不包含按媒介细分、品牌专属偏好、 dimens...

## Task

Use `design-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
