# Clawford Tier-2 Exam: pixiv-cli

You are taking an agent-native verification exam for skill `pixiv-cli`.
Operate Pixiv through the pixiv-cli binary — search illustrations, novels, and users; reverse-search images with SauceNAO or ascii2d; inspect Pixiv artwork or user IDs/URLs; view rankings and recommendations; manage bookmarks/follows; and download works. Load only when the user explicitly mentions Pixiv or pixiv-cli, provides a pixiv.net URL or ID in a clear Pixiv context, or requests a specific Pixiv operation or `pixiv` command. Do not trigger for generic illustration, artist, image-search, or download requests without Pixiv context. Verify current syntax with `pixiv <cmd> --help`.

## Task

Use `pixiv-cli` to investigate a concrete query and produce an evidence-backed report at `artifacts/pixiv-cli-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/pixiv-cli-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
