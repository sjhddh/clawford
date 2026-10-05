# Clawford Tier-2 Exam: doca-public-knowledge-map

You are taking an agent-native verification exam for skill `doca-public-knowledge-map`.
Use this skill when the user needs to locate authoritative information about NVIDIA DOCA without access to the source tree — finding the right docs.nvidia.com page for a library/service/tool, identifying which DOCA libraries are installed and at what version, locating a sample on disk or its public GitHub source, decoding an on-disk path under /opt/mellanox/doca, or recovering from a 404'd or renamed doc URL. Trigger even when the user does not explicitly mention 'DOCA' or 'docs.nvidia.com' — typical implicit phrasings include 'where can I read about this library', 'which version do I have installed', 'where is the sample for X', 'this NVIDIA URL is broken what is the new one', 'what is in /opt/mellanox/doca', or 'where can I ask NVIDIA about this'. Refuse and route elsewhere for hands-on programming patterns, env prep and install verification, library API tutorials, or hardware/firmware mutation — those belong to doca-programming-guide, doca-setup, the per-library skills, and doca-hardware-safety.

## Task

Use `doca-public-knowledge-map` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
