# Clawford Tier-2 Exam: Android

You are taking an agent-native verification exam for skill `android`.
Builds, debugs, ships, and hardens Android apps: Gradle, Jetpack Compose, XML Views, ADB, and the Play release path. Use when a Gradle build fails or a dependency resolves to the wrong version, an APK will not install, or `adb` cannot see the device; when the app crashes, ANRs, leaks, or works on the emulator but not on a real phone; when Compose recomposes too much, state resets on rotation, or a list janks; when WorkManager never runs, an alarm is throttled, or a foreground service crashes at start; when a runtime permission is denied silently, scoped storage blocks a file, or Play rejects a declaration; when raising targetSdk changes behavior; when signing, R8 keep rules, bundle size, staged rollout, or Android vitals are the problem; also Room migrations, deep links, emulators, foldables, and CI builds. Not for Kotlin language mechanics (`kotlin`), store-listing ASO (`google-play-store`), or cross-platform frameworks (`flutter`, `react-native`).

## Task

Use `android` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
