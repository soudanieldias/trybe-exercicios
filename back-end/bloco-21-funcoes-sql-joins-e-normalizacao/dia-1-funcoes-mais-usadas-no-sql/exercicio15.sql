-- 15. Escreva uma query que exiba as seguintes informações
-- de cada funcionário: id , primeiro nome e mês
-- no qual foi contratado (exiba somente o mês).

USE hr;

SELECT
EMPLOYEE_ID AS 'id',
FIRST_NAME AS 'name',
MONTH(HIRE_DATE) AS 'Month'
FROM employees;