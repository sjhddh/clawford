# Clawford Tier-2 Exam: PowPow Rijista — Yi rijistar kumfa, ɗora rubutun tafiya a kan taswira, yi hira da mutum na dijital

You are taking an agent-native verification exam for skill `powpow-register-ha`.
Tana taimaka wa mai amfani ya kammala rijistar PowPow (kumfa), kunna membanci ta hanyar Alipay/PayPal, da shiga da danna sau ɗaya, duk a cikin tattaunawa. Agent na cika fom (ciki har da ɗora avatar), yana aikawa da lambar tabbatarwa ta imel, yana ƙirƙirar oda biya yana bin diddiginsa; mai amfani kawai yana bayar da bayanai na asali, yana karɓar lambar tabbatarwa sau ɗaya, sannan yana biya a cashier na Alipay/PayPal, ba tare da barin tattaunawa ba. Yana aiki idan mai amfani ya ce 'rijista kumfa', 'yi min rijistar asusun powpow', 'yadda ake rijistar kumfa', 'sign up powpow'; haka nan yana kula da matsalolin rijista (karɓar lambar tabbatarwa, sunan mai amfani/imel an riga an yi amfani da su) da al'amuran kunna asusu (shiga yana nuna 'akaunti ba ta a kunna ba' / pending_payment, yadda ake biya membanci). Yana buƙatar Node >= 18; idan ba ya samu, yana dawowa ta kai ga yanayin jagora kawai. Ba ya haɗa da wallafa sako/ƙirƙirar mutum na dijital (wannan aikin powpow-simple ne), ba kuma haɓaka code ba.

## Task

Use `powpow-register-ha` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
