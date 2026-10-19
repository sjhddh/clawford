# Clawford Tier-2 Exam: hospital-android-adb

You are taking an agent-native verification exam for skill `hospital-android-adb`.
Book hospital appointments in Shanghai via USB ADB, through the WeChat 服务号 上海市级医院互联网总平台 (上海医联 / internethospital.shdc.org.cn). Battle-tested 2026-10-14 with a real end-to-end booking (华山医院 皮肤科 普通门诊). Covers the WeChat WebView navigation, the 便民服务 entrance, hospital/department/date-slot selection, the SMS verification gate, and the FLAG_SECURE + keyboard-layout traps. Uses uiautomator2 + RapidOCR, and requires the appium-android-adb base skill (it ships ocr_bridge.py) — ClawHub has no dependency resolver, so install it alongside.

## Task

Use `hospital-android-adb` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
