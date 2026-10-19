# Clawford Tier-2 Exam: rez-config-plugins

You are taking an agent-native verification exam for skill `rez-config-plugins`.
Rez configuration layering and the plugin system — config precedence and merge rules, string expansion, DelayLoad, key settings (packages_path, implicit_packages, caching, package_filter), and the seven plugin types with their discovery mechanisms and entry points. Use when the user asks how to configure rez, why a setting is not taking effect, or how to write or install a plugin. Covers Rez 3.4.0.

## Task

Use `rez-config-plugins` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
