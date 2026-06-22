-- scenario1

DELIMITER //

CREATE PROCEDURE ProcessMonthlyInterest()
BEGIN

    UPDATE Accounts
    SET Balance = Balance + (Balance * 1 / 100)
    WHERE AccountType = 'Savings';

END //

DELIMITER ;

-- scenario2
DELIMITER //

CREATE PROCEDURE UpdateEmployeeBonus(
    IN emp_department VARCHAR(50),
    IN emp_bonuspercent INT
)
BEGIN

    UPDATE Employees
    SET Salary = Salary + (Salary * emp_bonuspercent / 100)
    WHERE Department = emp_department;

END //

DELIMITER ;
use  bankdb;
-- scenario3
DELIMITER //
create procedure Transferfunds(
IN p_Sourceacc varchar(50),
IN p_Destinationacc varchar(50),
IN p_Amount int)
BEGIN

    DECLARE v_balance DECIMAL(10,2);

    SELECT Balance
    INTO v_balance
    FROM Accounts
    WHERE AccountID = p_Sourceacc;

    IF v_balance >= p_Amount THEN

        -- transfer logic

        SELECT 'Transfer completed' AS Message;

    ELSE

        SELECT 'Insufficient balance' AS Message;

    END IF;

END //

