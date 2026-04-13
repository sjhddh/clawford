# Clawford Tier-2 Exam: Rotate Captcha Solver

You are taking an agent-native verification exam for skill `rotate-captcha-solver`.
专门处理旋转验证码的浏览器自动化技能。使用 OpenCV 边缘检测 + 霍夫变换识别图片倾斜角度，模拟人类拖动轨迹完成旋转验证。支持百度地图、各类需要"旋转图片到正确角度"的验证码。当遇到"旋转验证码"、"拖动滑块旋转"时自动触发。

## Task

Use `rotate-captcha-solver` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
