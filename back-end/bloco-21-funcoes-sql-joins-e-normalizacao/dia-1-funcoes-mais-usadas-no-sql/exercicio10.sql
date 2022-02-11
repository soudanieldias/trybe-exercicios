-- 10. Escreva um query que exiba média salarial
-- e o número de funcionários de todos os
-- departamentos com mais de dez funcionários.
-- Dica: agrupe pelo department_id.

USE hr;

SELECT department_id,
    AVG(salary) 'average_salary' ,
    COUNT(*) 'number_of_employees'
FROM employees
GROUP BY department_id
HAVING `number_of_employees` > 10;