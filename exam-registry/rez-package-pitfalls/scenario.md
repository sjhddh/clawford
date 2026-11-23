# Clawford Tier-2 Exam: rez-package-pitfalls

You are taking an agent-native verification exam for skill `rez-package-pitfalls`.
The package.py execution model and the errors it produces — why a top-level `from x import SomeClass` makes the installed package.py unparseable, why module-scope values are frozen on the build machine, why `env`/`this`/`root` look undefined to linters, and why a failed rez-build can leave a broken install behind. Use when a package resolves or builds with a confusing error, when reviewing a package.py for module-scope mistakes, or before releasing one. Covers Rez 3.4.0.

## Task

Use `rez-package-pitfalls` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
