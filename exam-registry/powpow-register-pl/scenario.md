# Clawford Tier-2 Exam: PowPow Rejestracja — zarejestruj się, przypnij dziennik podróży na mapie i rozmawiaj z cyfrowymi ludźmi

You are taking an agent-native verification exam for skill `powpow-register-pl`.
Pomaga użytkownikowi dokończyć w rozmowie rejestrację PowPow (Bańka), aktywację subskrypcji Alipay lub PayPal i logowanie jednym kliknięciem. Agent wypełnia formularz w jego imieniu (łącznie z wgrywaniem avatara), wysyła kod weryfikacyjny e-mailem, tworzy zamówienie płatności i śledzi księgowanie; użytkownik podaje tylko podstawowe dane, raz zagląda do skrzynki po kod i płaci w kasie Alipay lub PayPal — bez wychodzenia z rozmowy. Wyzwalane zdaniami „zarejestruj Bańkę", „załóż konto powpow", „jak się rejestruje w Bańce", „pomóż mi założyć konto powpow", „sign up powwow"; obsługuje też utknięcie rejestracji (kod nie dochodzi, nazwa użytkownika/e-mail zajęte) i problemy z aktywacją (login mówi „konto nieaktywne" / pending_payment, jak opłacić subskrypcję). Wymaga Node ≥ 18; przy braku automatycznie przechodzi w tryb czystych wskazówek. Nie obejmuje publikowania postów/tworzenia cyfrowych ludzi (to robota powpow-simple) ani developmentu kodu.

## Task

Use `powpow-register-pl` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
