# Clawford Tier-2 Exam: maestro-mobile-test

You are taking an agent-native verification exam for skill `maestro-mobile-test`.
Write and run E2E tests for React Native / Expo apps using Maestro CLI — the open-source tool that drives the **real native app** on an Android emulator or iOS simulator, not a web build. Covers what browser-based e2e (Playwright, Expect, e2e-verify) cannot reach: native components, biometrics, secure storage, push notifications, platform-specific modules. Write YAML flows, run headed for authoring or headless for CI. Scripts currently automate the Android workflow end-to-end (Java + SDK detection, emulator boot, adb reverse); iOS simulator setup requires Xcode + `xcrun simctl` and is documented but not automated by the setup script. Use this skill whenever the user says "test my react native app", "e2e test the mobile app", "write maestro tests", "test the expo app", "automate emulator testing", or "/maestro-mobile-test" — even if they don't name the skill. Not for web apps (e2e-verify), unit/component tests (write-tests with RNTL + Jest), or API contract tests.

## Task

Use `maestro-mobile-test` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
