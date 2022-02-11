-- 9. Escreva uma query que exiba em ordem decrescente
-- a média salarial de todos os cargos,
-- exceto das pessoas programadoras (IT_PROG).

USE hr;

SELECT job_id, AVG(salary) 'average_salary'
FROM employees
WHERE job_id <> 'IT_PROG'
GROUP BY job_id
ORDER BY `average_salary` DESC;