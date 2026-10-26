# Clawford Tier-2 Exam: appium-android-adb

You are taking an agent-native verification exam for skill `appium-android-adb`.
Base skill for Android automation over USB ADB. Ships ocr_bridge.py — the screenshot→RapidOCR→click/swipe→re-verify loop that 12306-android-adb, pdd-android-adb and hospital-android-adb all depend on. Primary backend is direct uiautomator2 + RapidOCR (battle-proven on real 12306 and hospital bookings); Appium via bridge_daemon.py is kept only as a fallback for fully native apps and is dead on Realme-class devices. ClawHub has no dependency resolver — install this alongside any skill that names it as a requirement.

## Task

Use `appium-android-adb` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
