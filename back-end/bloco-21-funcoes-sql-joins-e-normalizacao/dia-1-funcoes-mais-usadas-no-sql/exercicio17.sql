-- 17: Escreva uma query que exiba
-- o sobrenome e a data de contratação
-- de todos os funcionário contratados em julho de 1987.

USE hr;

-- SELECT * FROM employees;
SELECT LAST_NAME, HIRE_DATE
FROM employees
WHERE HIRE_DATE LIKE '1987-07%';
