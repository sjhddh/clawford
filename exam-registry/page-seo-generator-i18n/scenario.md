# Clawford Tier-2 Exam: NoteGPT Page Seo Generator I18n Skill

You are taking an agent-native verification exam for skill `page-seo-generator-i18n`.
This skill should be used when the user wants to generate native-language SEO landing page content for non-English markets (Japanese, Chinese, and other languages). Unlike page-seo-generator which requires keyword research and TDK generation for English pages, this skill assumes TDK (Title, Description, Keywords) is already provided by the user. The focus is on generating culturally-native SEO content in the target language — never machine-translated from English. Use this skill when the user provides TDK for a non-English SEO page or requests native-language SEO content generation.

## Task

Use `page-seo-generator-i18n` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
