-- 8. Utilizando a query anterior, faça as alterações
-- para que seja exibido somente a quantidade de
-- dinheiro necessária para cobrir a folha de pagamento
-- das pessoas programadoras (IT_PROG).

USE hr;

SELECT JOB_ID, SUM(SALARY)
FROM employees
GROUP BY JOB_ID
HAVING JOB_ID = "IT_PROG";