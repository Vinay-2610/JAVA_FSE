DELIMITER //

CREATE PROCEDURE SafeTransferFunds(
    IN p_fromAccount INT,
    IN p_toAccount INT,
    IN p_amount DECIMAL(10,2)
)
BEGIN

    DECLARE v_balance DECIMAL(10,2);

    SELECT Balance
    INTO v_balance
    FROM Accounts
    WHERE AccountID = p_fromAccount;

    IF v_balance < p_amount THEN

        SELECT 'Insufficient Funds' AS Message;

    ELSE

        START TRANSACTION;

        UPDATE Accounts
        SET Balance = Balance - p_amount
        WHERE AccountID = p_fromAccount;

        UPDATE Accounts
        SET Balance = Balance + p_amount
        WHERE AccountID = p_toAccount;

        COMMIT;

        SELECT 'Transfer Successful' AS Message;

    END IF;
END //

DELIMITER ;

CALL SafeTransferFunds(1,2,200);

CREATE TABLE Employees(
Employeeid int,
Name varchar(100),
Salary int);

insert into Employees values( 1,'bannu',60000);
insert into Employees values(2,'blessy',50000);

select * from employees;

DELIMITER //

CREATE PROCEDURE UPDATESALARY(
in p_empid int,
in p_percentage decimal(5,2)
)
BEGIN

    DECLARE v_count INT;
    select count(*)
    into v_count
    from employees
    where Employeeid = p_empid;
    
    if v_count = 0 then
       select 'Employee not found ' as message;
	else
        update Employees
        set salary = salary + (Salary * p_percentage / 100)
        where Employeeid = p_empid;
        
        select 'Salary Updated successfully' as message;
	end if;
        
END //

DELIMITER ;
SELECT EmployeeID, Name, Salary
FROM Employees;
CALL UPDATESALARY(2,10);

-- scenario3
DELIMITER //

CREATE PROCEDURE AddNewCustomer(
    IN p_customerid INT,
    IN p_name VARCHAR(100),
    IN p_dob DATE,
    IN p_balance DECIMAL(10,2)
)
BEGIN

    DECLARE v_count INT;

    SELECT COUNT(*)
    INTO v_count
    FROM Customers
    WHERE CustomerID = p_customerid;

    IF v_count > 0 THEN

        SELECT 'CustomerID already exists' AS Message;

    ELSE

        INSERT INTO Customers
        (CustomerID, Name, DOB, Balance, LastModified)
        VALUES
        (p_customerid, p_name, p_dob, p_balance, NOW());

        SELECT 'Customer Added Successfully' AS Message;

    END IF;

END //

DELIMITER ;