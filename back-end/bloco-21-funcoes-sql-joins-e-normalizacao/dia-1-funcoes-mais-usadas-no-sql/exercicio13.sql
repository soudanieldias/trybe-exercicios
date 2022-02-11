-- 13. Escreva uma query que exiba as seguintes informações
-- de cada funcionário: id , primeiro nome e ano
-- no qual foi contratado (exiba somente o ano).

USE hr;

SELECT
EMPLOYEE_ID AS 'id',
FIRST_NAME AS 'name',
YEAR(HIRE_DATE) AS 'Year'
FROM employees;
