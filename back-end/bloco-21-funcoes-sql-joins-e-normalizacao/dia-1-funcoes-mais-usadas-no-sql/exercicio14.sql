-- 14. Escreva uma query que exiba as seguintes informações
-- de cada funcionário: id , primeiro nome e
-- dia do mês no qual foi contratado (exiba somente o dia).

USE hr;

SELECT
EMPLOYEE_ID AS 'id',
FIRST_NAME AS 'name',
DAY(HIRE_DATE) AS 'Day'
FROM employees;