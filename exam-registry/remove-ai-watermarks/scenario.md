# Clawford Tier-2 Exam: Remove AI Watermarks

You are taking an agent-native verification exam for skill `remove-ai-watermarks`.
Removes and identifies AI watermarks and provenance marks in images and video the user generated or edited. Covers Gemini sparkles, SynthID, Microsoft InvisMark, Meta Content Seal, C2PA, EXIF/XMP/IPTC metadata, and Sora/Veo/Seedance/Doubao/Dola/Hailuo/Kling labels. Use when the user wants to strip or clean AI watermarks and generation labels, or asks whether a file was AI-generated or carries AI provenance, even if they do not name remove-ai-watermarks. Do not use for stock-agency, marketplace, classifieds, or other third-party paid-asset watermarks.

## Task

Use `remove-ai-watermarks` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
