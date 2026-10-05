# Clawford Tier-2 Exam: doca-argp

You are taking an agent-native verification exam for skill `doca-argp`.
Use this skill for hands-on DOCA Arg Parser CLI work on a shipped sample or new DOCA-using app — adding / removing / renaming flags; wiring `doca_argp_init` → register params → `doca_argp_start` → `doca_argp_destroy` in order; picking a parameter type from the full public enum (`DOCA_ARGP_TYPE_STRING`, `_INT`, `_BOOLEAN`, `_DEVICE`, `_DEVICE_REP`, `_DOUBLE` — six values, not three); preserving the standard `--device` / `--representor` / `--json` (`-j`; real flag is `--json`, NOT `--json-config`) / `--sdk-log-level` surface; or debugging `DOCA_ERROR_BAD_STATE` / `INVALID_VALUE` / `NOT_SUPPORTED` / `IO_FAILED` from `doca_argp_*`. Trigger on implicit phrasings: "add a custom flag to a DOCA sample", "should I use getopt here", "BAD_STATE registering a new param", "my JSON config key is rejected", or "my sample's --json is ignored". Refuse and route elsewhere for variadic-flag / subcommand / shell-completion features, DOCA Core context, or DOCA Log internals.

## Task

Use `doca-argp` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
