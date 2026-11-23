# Clawford Tier-2 Exam: pet-asset-keying

You are taking an agent-native verification exam for skill `pet-asset-keying`.
Cut pet (anthropomorphized character) assets to transparent PNG — single image or video frame sequences. Primary method is 'outline-cut': slice along the character's own outline so the boundary already sits on the line; do NOT hunt for edges inside the anti-aliasing blur band. No AI model required (no rembg / no torch / no onnx). Use for 'matting', 'remove background', 'transparent PNG', 'hair-edge cutout', 'video frame keying', 'batch cutout', 'gray halo or black edge on border', '抠图', '去背景', '透明底', '发丝边缘', '批量抠像'. Includes calibrated parameters, enclosed-space (crescent/irregular) handling, safety guardrails, a self-check report, and a 'tested backfires — do not retry' list.

## Task

Use `pet-asset-keying` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
