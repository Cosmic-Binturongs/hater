-- This connects to the hater DB
\c hater

-- This seeds initial haters

INSERT INTO haters(id, name, login_name, tag, password) 
VALUES (1, 'evan', 'em', '@em', 'password1'),(2, 'jeff', 'jl', '@jl', 'password2'), (3, 'lawrence', 'ly', '@ly', 'password3'),
(4, 'george', 'gc', '@gc', 'password4'), (5, 'jefe', 'jp', '@jp', 'password5'), (6, 'david', 'dw', '@dw', 'password6'),
(7, 'leon', 'lt', '@lt', 'password7'),(8, 'laura', 'lt', '@lt', 'password8'),(9, 'mustafa', 'mb', '@mb', 'password9'),
(10, 'art', 'as', '@as', 'password10');

-- Seeds the accounts first hates

INSERT INTO hates(id, hater_id, h_body) 
VALUES (101, 1, 'I hate dogs'), (102, 2, 'I hate pork'), (103, 3, 'I hate babys'), (104, 4, 'I hate parks'), (105, 5, 'I hate you'),
(106, 6, 'I hate jimmy fallon'), (107, 7, 'I hate summer'), (108, 8, 'i hate cats'), (109, 9, 'I hate vegetables'), (110, 10, 'I hate hot sauce');

-- Seeds criticism

INSERT INTO criticism(id, hater_id, c_body, hates_id) 
VALUES (201, 2, 'wow...', 101), (202, 1, 'that unamerican', 102), (203, 3, 'grow up', 109), (204, 4, 'summer is the best', 107),
(205, 5, 'get out', 105), (206, 6, 'better not have kids then', 103), (207, 7, 'dont watch him then', 106), (208, 8, 'why no like cat?', 108),
(209, 9, 'weak', 110),(210, 10, 'stay out then', 104);