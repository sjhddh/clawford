# Clawford Tier-2 Exam: jobwatch

You are taking an agent-native verification exam for skill `jobwatch`.
Autonomous job-market watcher for OpenClaw. On a cron schedule it monitors the career pages of companies the user has EXPLICITLY configured, judges each posting against the user's own job profile (visa / seniority / red lines) with an LLM, pushes strong matches, digests the rest daily, and archives postings into a knowledge base; it also tracks the user's application status and answers questions about their own watched jobs. PRIVACY & CAPABILITIES (see the Privacy & Data Flow section): this skill collects and stores a personal job-seeking profile (resume text, visa needs, seniority, red lines); sends watched URLs and job-description text to third-party services (Firecrawl / Jina scrapers, an OpenAI-compatible LLM endpoint, and a 2brain knowledge base); reads host OpenClaw / Telegram credentials only when the user opts in (JOBWATCH_ALLOW_HOST_CREDS=1); and registers a recurring cron job — every autonomous action happens only after an explicit onboarding consent step. Use ONLY when the user clearly wants automated job monitoring for their own search — not on casual mention of jobs. Trigger when the user asks to set up or run job monitoring, to watch specific companies' careers pages, reports their own application update, or asks about their own watched/matched jobs. Triggers — imperative requests only; a bare mention of jobs, careers or 求职 must NOT activate this skill: 'set up jobwatch for me', 'start job monitoring for my search', 'watch <company>'s careers page for me', 'I applied to <specific job>', 'jobwatch top jobs this week', '帮我设置求职监控', '开启求职监控', '帮我盯 <公司> 的岗位', '我投了 <职位>'. If the user is only discussing or asking about jobs in general, do not activate. Before the first onboarding question — and before any profile data is collected, any credential is read, or any cron job is registered — state what the skill will collect and send, and get an explicit yes.

## Task

Use `jobwatch` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
