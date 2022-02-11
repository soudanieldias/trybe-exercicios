-- 12. Escreva uma query que só exiba as informações
-- dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.

USE hr;

SELECT * FROM employees
WHERE LENGTH(FIRST_NAME) >= 8;
