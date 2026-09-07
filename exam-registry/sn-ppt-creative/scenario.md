# Clawford Tier-2 Exam: sn-ppt-creative

You are taking an agent-native verification exam for skill `sn-ppt-creative`.
Creative-mode PPT pipeline. One full-page 16:9 PNG per slide. LLM / VLM calls go through sn-ppt-standard/lib/model_client.py (shared thin client). Text-to-image (the actual png rendering) goes through sn-image-base/scripts/sn_agent_runner.py. Falls back to web image search when T2I generation fails. Expects task_pack.json + info_pack.json already written by sn-ppt-entry.

## Task

Use `sn-ppt-creative` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
