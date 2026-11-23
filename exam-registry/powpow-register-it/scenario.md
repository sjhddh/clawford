# Clawford Tier-2 Exam: PowPow Registrazione — Registrati su Bolla, appunta il tuo diario di viaggio sulla mappa, chatta con gli umani digitali

You are taking an agent-native verification exam for skill `powpow-register-it`.
Aiuta gli utenti a completare la registrazione a PowPow (Bolla) e l'accesso con un clic, tutto dentro la conversazione. L'agent compila il modulo al posto loro (incluso il caricamento dell'avatar) e invia il codice di verifica via e-mail; l'utente fornisce solo le informazioni di base e controlla il codice una volta, senza uscire dalla conversazione. Nell'attuale periodo di prova gratuita della piattaforma, un account registrato può usare subito tutte le funzioni; il pagamento dell'abbonamento (Alipay/PayPal) è un miglioramento di iscrizione opzionale, che l'agent può anch'esso gestire con creazione dell'ordine e tracciamento dell'incasso quando serve. Si attiva quando l'utente dice «registrati a Bolla», «crea un account powpow», «come mi registro a Bolla», «aiutami a creare un account powpow», «sign up powpow»; gestisce anche i blocchi della registrazione (codice di verifica non ricevuto, nome utente/e-mail già occupati) e i problemi di attivazione (il login dice «account non attivato» / pending_payment, come abbonarsi/pagare, Bolla è gratis?). Richiede Node ≥ 18; in caso di indisponibilità, rientro automatico nella modalità di sola guida. Non copre pubblicare/creare umani digitali (quello è compito di powpow-simple) né sviluppo di codice.

## Task

Use `powpow-register-it` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
