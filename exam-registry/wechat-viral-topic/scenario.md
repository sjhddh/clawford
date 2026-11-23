# Clawford Tier-2 Exam: wechat-viral-topic

You are taking an agent-native verification exam for skill `wechat-viral-topic`.
A topic-selection assistant for WeChat public accounts, short-video creators, comic authors and H5 planners that turns a raw trend into a defensible topic card. It extracts verifiable signals from source material (figures, time windows, platform fit, hashtags, conflict lines, reader pain points), screens drafts against compliance red lines (medical claims, absolute wording, income promises, incentivised sharing, unsourced assertions), and grades headlines for length, formula type and red-line risk. Ships a zero-dependency, offline, standard-library toolchain (scan / riskcheck / titlecheck) plus an 11-case golden set with a re-executable runner and a demo that proves both the block path and the no-false-positive path. Progressive disclosure: frameworks and checklists live in references/. Triggers: topic selection, viral topic, hot take, headline, WeChat article, 100k+ read.

## Task

Use `wechat-viral-topic` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
