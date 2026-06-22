SELECT * FROM bankdb.transactions;
-- SCENARIO1

DELIMITER //

CREATE PROCEDURE GenerateMonthlyStatements()
BEGIN

    DECLARE done INT DEFAULT FALSE;
    DECLARE v_tid INT;
    DECLARE v_accid INT;
    DECLARE v_amount DECIMAL(10,2);

    DECLARE trans_cursor CURSOR FOR
    SELECT TransactionID, AccountID, Amount
    FROM Transactions
    WHERE MONTH(TransactionDate) = MONTH(CURDATE())
      AND YEAR(TransactionDate) = YEAR(CURDATE());

    DECLARE CONTINUE HANDLER FOR NOT FOUND
    SET done = TRUE;

    OPEN trans_cursor;

    read_loop: LOOP

        FETCH trans_cursor
        INTO v_tid, v_accid, v_amount;

        IF done THEN
            LEAVE read_loop;
        END IF;

        SELECT
            v_tid AS TransactionID,
            v_accid AS AccountID,
            v_amount AS Amount;

    END LOOP;

    CLOSE trans_cursor;

END //

DELIMITER ;

-- scenario2
delimiter //
create procedure ApplyAnnualFee()
begin
declare v_accountid int;
declare done int default false;
declare acc_cursor cursor for 
select accountid
from accounts;
declare continue handler for not found
set done = true;
open acc_cursor;
read_loop : LOOP
fetch acc_cursor
into v_accountid;
if done then
leave read_loop;
end if;
update accounts
set balance = balance - 100
where accountid = v_accountid;
end loop;
close acc_cursor;
end //
delimiter ;

CALL ApplyAnnualFee();

-- scenario3
DELIMITER //

CREATE PROCEDURE UpdateLoanInterest()
BEGIN

    DECLARE v_loanid INT;
    DECLARE done INT DEFAULT FALSE;

    DECLARE loan_cursor CURSOR FOR
    SELECT LoanID
    FROM Loans;

    DECLARE CONTINUE HANDLER FOR NOT FOUND
    SET done = TRUE;

    OPEN loan_cursor;

    read_loop: LOOP

        FETCH loan_cursor
        INTO v_loanid;

        IF done THEN
            LEAVE read_loop;
        END IF;

        UPDATE Loans
        SET InterestRate = InterestRate + 1
        WHERE LoanID = v_loanid;

    END LOOP;

    CLOSE loan_cursor;

END //

DELIMITER ;