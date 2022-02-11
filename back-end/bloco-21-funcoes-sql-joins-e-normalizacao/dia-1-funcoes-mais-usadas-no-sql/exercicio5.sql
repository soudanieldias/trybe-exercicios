-- 5. Escreva uma query que exiba quatro informações:
-- o maior salário,
--  o menor salário,
--  a soma de todos os salários
-- a média dos salários.
-- Todos os valores devem ser formatados para ter apenas duas casas decimais.

USE hr;
SELECT
MAX(SALARY),
MIN(SALARY),
SUM(SALARY),
ROUND(AVG(SALARY), 2)
FROM employees;