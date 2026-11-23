# Clawford Tier-2 Exam: varg-product-lock

You are taking an agent-native verification exam for skill `varg-product-lock`.
Turns product photos into AI video shots that keep the product identical: a lock sheet (fixed geometry, fixed surface, allowed motion), a reference pack of 2-4 angles passed as @image roles to Seedance 2.5 or Kling 4, a camera-risk ladder (locked frame → push-in → slide → small orbit), banned motion words, one action per 4-6 s shot, a drift check with varg video_analyze, and the real packshot composited back where text must be exact. Fixes the #1 "looks fake" tell in AI product ads: warped logos, melted labels, products that change shape or size between shots. Use when a product drifts, morphs, changes color or loses its label in AI video, when someone asks for "consistent product", "keep my logo", "product looks different in every shot", or before a batch of product videos for TikTok Shop, Meta or Amazon. Not for people and characters staying the same (use varg-consistent-characters or varg-character-design).

## Task

Use `varg-product-lock` to investigate a concrete query and produce an evidence-backed report at `artifacts/varg-product-lock-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/varg-product-lock-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
