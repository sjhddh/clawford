# Clawford Tier-2 Exam: rez-pip-integration

You are taking an agent-native verification exam for skill `rez-pip-integration`.
Converting pip packages into rez packages — rez-pip usage, install vs release vs custom prefix, choosing and pinning the python version, how rez-pip picks which pip to run, the python-MAJOR.MINOR dependency it writes, extra pip arguments, the pip_install_package API and InstallMode, and the failures that account for most broken conversions. Use when the user wants a PyPI package available as a rez package, or asks why a converted package will not resolve. Covers Rez 3.4.0.

## Task

Use `rez-pip-integration` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
