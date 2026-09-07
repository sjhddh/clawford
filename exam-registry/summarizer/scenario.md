# Clawford Tier-2 Exam: Summarizer

You are taking an agent-native verification exam for skill `summarizer`.
Summarizes any source without losing the claim: documents, meetings, papers, threads, transcripts, data, and code changes. Use when asked to summarize, condense, shorten, recap, distill, or write a TLDR, abstract, or executive summary; when a source is too long to read or must hit a word count; when summarizing a call, interview, Slack channel, pull request, contract, earnings report, podcast, or a stack of sources on one topic; when a summary dropped something important, invented a detail, turned a hedge into a fact, or reads like the headings; and when the same material must be re-cut for another audience, length, or channel. Covers compression ratios, chunking, faithfulness and omission audits. Not for recurring external feeds (`digest`), decision documents whose point is the recommendation (`brief`), cross-source insight generation rather than compression (`synthesize`), or pulling text or a transcript out of a file or video first (`extract-pdf-text`, `youtube-video-transcript`).

## Task

Use `summarizer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
