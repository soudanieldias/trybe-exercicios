-- 2. Escreva uma query que exiba a diferença entre o maior e o menor salário.

USE hr;

SELECT
MAX(salary) AS max_salary,
MIN(salary) AS min_salary,
MAX(salary) - MIN(salary) AS diff
from employees;