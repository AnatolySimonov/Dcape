CREATE TABLE  order_service(
	order_id INT,
	customer_name VARCHAR(100),
    phone_number VARCHAR(15),
    email VARCHAR(64),
    company_name VARCHAR(200),
    task_details TEXT(500),
    file_path VARCHAR(200),
    newsletter_consent BOOLEAN
);