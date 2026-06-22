-- Scenario 1

SELECT c.Name,
       TIMESTAMPDIFF(YEAR,c.DOB,CURDATE()) AS Age,
       l.InterestRate
FROM Customers c
JOIN Loans l
ON c.CustomerID = l.CustomerID;

UPDATE Loans
SET InterestRate = InterestRate - 1
WHERE CustomerID = 1;

-- Scenario 2

ALTER TABLE Customers
ADD IsVIP BOOLEAN;

UPDATE Customers
SET IsVIP = TRUE
WHERE Balance > 10000;

-- Scenario 3

SELECT *
FROM Loans
WHERE EndDate BETWEEN CURDATE()
AND DATE_ADD(CURDATE(), INTERVAL 30 DAY);