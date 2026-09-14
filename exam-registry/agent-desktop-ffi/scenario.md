# Clawford Tier-2 Exam: agent-desktop-ffi

You are taking an agent-native verification exam for skill `agent-desktop-ffi`.
C-ABI bindings over agent-desktop's PlatformAdapter. Consumers (Python ctypes, Swift, Node ffi-napi, Go cgo, C++, Ruby fiddle) link libagent_desktop_ffi.{dylib,so,dll} and call `ad_*` functions directly instead of spawning the CLI binary per call. The canonical observe-act workflow is: ad_init → ad_adapter_create[_with_session] → ad_snapshot → parse @e refs → ad_execute_by_ref → ad_free_string → ad_adapter_destroy.

## Task

Use `agent-desktop-ffi` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
