# Clawford Tier-2 Exam: PDF Processor

You are taking an agent-native verification exam for skill `pdf-processor`.
学术PDF处理：提取文字、判断语言、翻译（英文→中文）、生成200字纯中文概述。使用本地Ollama模型，不消耗线上API。适用于学术论文、研究报告等PDF文件的处理。当用户说"处理PDF"、"翻译论文"、"生成论文概述"时，或用户将PDF放入论文处理目录时使用。

## Task

Use `pdf-processor` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
