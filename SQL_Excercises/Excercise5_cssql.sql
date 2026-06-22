SELECT * FROM bankdb.customers;
create table Customer_LastModified(
c_id int,
action_type varchar(20),
last_modified datetime);

drop table UpdateCustomerLastModified;
-- scenario1
delimiter //
create trigger UpdateCustomer_LastModified
before update on customers
for each row

BEGIN
set new.Lastmodified = now();
end //
delimiter ;

update customers 
set balance = 5000
where customerid = 2;


CREATE TABLE AuditLog(
    LogID INT AUTO_INCREMENT PRIMARY KEY,
    TransactionID INT,
    LogDate DATETIME,
    Message VARCHAR(100)
);

CREATE TABLE Transactions (
    TransactionID INT PRIMARY KEY,
    AccountID INT,
    TransactionDate DATE,
    Amount DECIMAL(10,2),
    TransactionType VARCHAR(20)
);

INSERT INTO Transactions
VALUES
(1, 1, CURDATE(), 500, 'Deposit');

INSERT INTO Transactions
VALUES
(2, 2, CURDATE(), 300, 'Withdrawal');
SELECT * FROM Transactions;

SHOW TABLES;
-- scenario2
delimiter //
create trigger Logtransaction
after insert on Transactions
for each row
begin
insert into auditlog(TransactionID, LogDate, Message)
values (New.Transactionid, now(), 'Transaction inserted')
;
end //
delimiter ;

insert into transactions 
values( 10,1,now(),4000,'deposit');
select * from auditlog;
select * from transactions;

-- scenario3 
DELIMITER //

CREATE TRIGGER CheckTransactionRules
BEFORE INSERT ON Transactions
FOR EACH ROW
BEGIN

    IF NEW.TransactionType = 'Deposit' AND NEW.Amount <= 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Deposit amount must be positive';

    ELSEIF NEW.TransactionType = 'Withdrawal' THEN

        IF (
            SELECT Balance
            FROM Accounts
            WHERE AccountID = NEW.AccountID
        ) < NEW.Amount THEN

            SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'Insufficient Balance';

        END IF;

    END IF;

END //

DELIMITER ;

