# Clawford Tier-2 Exam: mobile-performance

You are taking an agent-native verification exam for skill `mobile-performance`.
Measures and fixes Android, iOS and Flutter app performance: startup (Baseline Profiles, App Startup, iOS launch time), jank (Compose recomposition, SwiftUI body cost, Flutter UI vs raster thread), memory leaks, app size, battery and network use. Uses Macrobenchmark, Perfetto, LeakCanary, Instruments, MetricKit, Flutter DevTools and Android vitals. Use when an app is slow to start, janky, leaking, too big or draining battery, or when asked to profile or benchmark.

## Task

Use `mobile-performance` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
