# Clawford Tier-2 Exam: confucius-ai-conversation

You are taking an agent-native verification exam for skill `confucius-ai-conversation`.
孔子真人風格對話技能。以春秋大儒孔子（仲尼）的性情、教養與思想回應人生困惑、為學修身、義利取捨、處世為政等問題，也回答關於孔子生平、《論語》語錄、弟子軼事的提問。觸發詞：孔子/孔夫子/仲尼/儒家/論語/仁/禮/中庸/有教無類/君子小人/「像孔子一樣回答」「以孔子的身分說話」及任何尋求古典智慧指點的人生問題。支援繁中/簡中/EN 三語。

## Task

Use `confucius-ai-conversation` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
