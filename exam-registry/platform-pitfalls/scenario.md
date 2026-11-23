# Clawford Tier-2 Exam: platform-pitfalls

You are taking an agent-native verification exam for skill `platform-pitfalls`.
Cross-platform engineering pitfalls playbook: Chinese/non-ASCII encoding defense (Python entrypoints, child processes, file IO, CMake execute_process ENCODING, MSVC /utf-8 vs VSLANG, Windows console code pages, doctest/CTest discovery), PowerShell 5.1 mojibake three-layer fix (UTF-8 BOM + chcp + byte arrays), and 11 C++20 coroutine pitfalls (lambda captures, catch co_await, mutex resume, handle lifetimes, container-overflow spans). Load when authoring or debugging cross-platform build tooling, CI, installers or async C++ — especially anything that must run on Chinese Windows (cp936/GBK) or Windows runners (cp1252). Triggers: 中文乱码, mojibake, UnicodeEncodeError charmap, doctest CTest Chinese test names, PYTHONIOENCODING, VSLANG, code page 936, 璇峰鎻朵, coroutine UAF, ASan container-overflow.

## Task

Use `platform-pitfalls` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
