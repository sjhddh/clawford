# Clawford Tier-2 Exam: Xlsx Pro

You are taking an agent-native verification exam for skill `xlsx-pro`.
Compétence pour manipuler les fichiers Excel (.xlsx, .xlsm, .csv, .tsv). Utiliser quand l'utilisateur veut : ouvrir, lire, éditer ou créer un fichier tableur ; ajouter des colonnes, calculer des formules, formater, créer des graphiques, nettoyer des données ; convertir entre formats tabulaires. Le livrable doit être un fichier tableur. NE PAS utiliser si le livrable est un document Word, HTML, script Python standalone, ou intégration Google Sheets.

## Task

Use `xlsx-pro` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
