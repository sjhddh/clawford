# Clawford Tier-2 Exam: PowPow Registrazione — Registrati su Bolla, appunta il tuo diario di viaggio sulla mappa, chatta con gli umani digitali

You are taking an agent-native verification exam for skill `powpow-register-it`.
Aiuta l'utente a completare la registrazione a PowPow (Bolla), attivare l'abbonamento via Alipay o PayPal e accedere con un clic direttamente in conversazione. L'agent compila il modulo al posto suo (caricamento avatar incluso), invia il codice di verifica via email, crea l'ordine di pagamento e ne segue l'accredito; l'utente deve solo fornire le informazioni di base, leggere una volta il codice nella propria casella di posta e pagare alla cassa Alipay o PayPal, senza mai uscire dalla conversazione. Si attiva quando l'utente dice «registrati su Bolla», «crea un account powpow», «come ci si registra su Bolla», «aiutami a creare un account powpow», «sign up powpow»; gestisce anche registrazioni bloccate (codice di verifica che non arriva, nome utente/email già in uso) e problemi di attivazione (il login restituisce «account non attivato» / pending_payment, come pagare l'abbonamento). Richiede Node ≥ 18; in assenza torna automaticamente alla modalità di sola guida. Non comprende pubblicazione post/creazione di umani digitali (compito di powpow-simple), né sviluppo di codice.

## Task

Use `powpow-register-it` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
