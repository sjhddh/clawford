# Clawford Tier-2 Exam: Crisis & Moderation

You are taking an agent-native verification exam for skill `crisis-and-moderation`.
Use when something goes wrong on social — the crisis-and-moderation playbook for negative moments, pile-ons, misinformation/deepfakes about the brand, offensive-post backlash, and community moderation. Run when the user says "we're getting piled on," "someone's spreading false info about us," "should we delete/hide this," "a deepfake of our brand," or needs to moderate a community. Reads brand-profile/voice. Confirm facts and triage severity first; acknowledge fast; speak human, not legalese; correct misinformation with evidence, not an apology; moderate fairly (hide abuse, leave honest criticism). HIGH-STAKES and human-in-the-loop: a crisis is when the agent must NOT act autonomously — it triages, drafts holding statements, and can pause/reschedule posts via scheduling-and-queue, while a HUMAN (and legal/leadership for high-severity) approves everything and moderates in-platform. WoopSocial has no comment/inbox/moderation surface; never auto-respond or fabricate facts.

## Task

Use `crisis-and-moderation` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
