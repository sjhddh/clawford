# Clawford Tier-2 Exam: ia-c-systems

You are taking an agent-native verification exam for skill `compound-eng-c-systems`.
C patterns for systems code, libraries, and native extensions: module layout, function decomposition, status-enum errors, memory safety, undefined behavior, and performance measurement. Use when writing, reviewing, refactoring, or debugging C, working with malloc lifetimes, buffer overflows, sanitizers, or Valgrind, or building native extensions. For C++, see ia-cpp-systems.

## Task

Use `compound-eng-c-systems` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
