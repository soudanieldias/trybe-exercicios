-- 11. Escreva uma query que atualize a coluna PHONE_NUMBER,
-- de modo que todos os telefones iniciados por 515
-- agora devem iniciar com 777.

USE hr;

UPDATE employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';