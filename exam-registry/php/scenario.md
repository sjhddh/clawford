# Clawford Tier-2 Exam: PHP

You are taking an agent-native verification exam for skill `php`.
Writes, debugs, and reviews PHP: type juggling, arrays, OOP, Composer, PDO, sessions, PHP-FPM, OPcache, PHP 8 features. Use when PHP returns a blank white page or a 500 with no message, when "headers already sent", "Allowed memory size exhausted", "Maximum execution time exceeded", "Class not found" after a Composer install, or an undefined array key warning appears; when `==` compares wrong, `strpos` or `preg_match` returns a falsy match, accents turn into mojibake, `DateTime` shifts by a day or an hour, `json_encode` returns false, PDO refuses to bind a parameter or emulates prepares, sessions serialize parallel AJAX requests, nginx answers 502 or 504 in front of PHP-FPM, OPcache keeps serving old code, or a version upgrade breaks on deprecations. Also for escaping output, hashing passwords, sizing FPM workers, writing PHPUnit tests, and clearing PHPStan errors. Not for framework internals — `laravel` covers Eloquent, queues, and Laravel auth.

## Task

Use `php` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
