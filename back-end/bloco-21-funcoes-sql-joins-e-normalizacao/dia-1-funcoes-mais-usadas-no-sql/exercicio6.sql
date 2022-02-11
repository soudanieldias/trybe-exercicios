-- 6. Escreva uma query que exiba a quantidade de pessoas
-- que trabalham como pessoas programadoras (IT_PROG).

USE hr;

SELECT JOB_ID , COUNT(*) AS 'total'
FROM employees
WHERE JOB_ID = "IT_PROG";