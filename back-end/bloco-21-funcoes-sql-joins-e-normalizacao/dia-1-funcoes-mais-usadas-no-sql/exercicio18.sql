-- 18: Escreva uma query que exiba
-- as seguintes informações de cada funcionário:
-- nome, sobrenome,
-- tempo que trabalha na empresa (em dias).

SELECT FIRST_NAME,
LAST_NAME,
DATEDIFF(CURRENT_DATE() , HIRE_DATE) 'days_worked'
FROM employees;