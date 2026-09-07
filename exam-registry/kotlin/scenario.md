# Clawford Tier-2 Exam: Kotlin

You are taking an agent-native verification exam for skill `kotlin`.
Writes, debugs, and reviews Kotlin: coroutines and flows, null safety, collections, Java interop, and Compose state. Use when an NPE hits a non-null type, `!!` or a Java platform type blows up, a coroutine leaks, never cancels, or swallows exceptions, a StateFlow stops emitting or a SharedFlow drops events, a Compose screen recomposes too much or loses state on rotation, `equals`/`copy`/`==` behave unexpectedly, a `when` stops being exhaustive, kapt/KSP or JVM-target errors break the Gradle build, JSON puts null into a non-null property, a coroutine test hangs or passes only in isolation; also when porting Java to Kotlin, sharing code across Android/iOS/JVM, tuning allocation and inlining, or writing server-side Kotlin with Spring or Ktor. Not for Java-only codebases or Android release/build-system configuration.

## Task

Use `kotlin` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
