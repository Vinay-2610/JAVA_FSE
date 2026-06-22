-- scenario1
DELIMITER //

CREATE FUNCTION CalculateAge(p_DOB DATE)
RETURNS INT
BEGIN

    DECLARE age INT;

    SET age = TIMESTAMPDIFF(YEAR, p_DOB, CURDATE());

    RETURN age;

END //

DELIMITER ;
SET GLOBAL log_bin_trust_function_creators = 1;
select calculateage('2003-05-22');

-- SCENARIO2
delimiter //
CREATE function CalculateMonthlyInstallment(
p_loanamount decimal(10,2),
p_interestrate decimal(10,2),
p_years int)
returns decimal(10,2)
begin
declare installment decimal(10,2);
set installment = p_loanamount / (p_years * 12);
return installment;
end //
DELIMITER ;
select calculatemonthlyinstallment(240000,5,20);

-- scenario3
delimiter //
create function HasSufficientBalance(
p_accountid int,
p_amount decimal(10,2) 
)
returns boolean
begin
declare v_balance decimal(10,2);
select balance
into v_balance
from accounts
where Accountid = p_accountid;

if v_balance >= p_amount then
return true;
else
return false;
end if;
end//

select HasSufficientBalance(2,1000);

