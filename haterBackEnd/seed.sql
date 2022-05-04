-- This creates and connects the hater DB

\c hater

-- This seeds initial haters(new User_profile, needs 10 users or comment out and scale down dumy data)
-- INSERT INTO auth_user() 
-- VALUES ()

-- This seeds initial haters(new User_profile, needs 10 users)

INSERT INTO hater_app_haters(id, name, tag, user_id) 
VALUES (21, 'evan', '@em', 1),(22, 'jeff', '@jl', 2), (23, 'lawrence', '@ly', 3 ), (24, 'george', '@gc', 4), 
(25, 'jefe', '@jp', 5), (26, 'david', '@dw', 6),
(27, 'leon', '@lt', 7),(28, 'laura', '@lt', 8),(29, 'mustafa', '@mb', 9),
(30, 'art', '@as', 10);

-- This seeds initial haters

-- INSERT INTO hater_app_haters(id, name, login_name, tag, password) 
-- VALUES (1, 'evan', 'em', '@em', 'password1'),(2, 'jeff', 'jl', '@jl', 'password2'), (3, 'lawrence', 'ly', '@ly', 'password3'),
-- (4, 'george', 'gc', '@gc', 'password4'), (5, 'jefe', 'jp', '@jp', 'password5'), (6, 'david', 'dw', '@dw', 'password6'),
-- (7, 'leon', 'lt', '@lt', 'password7'),(8, 'laura', 'lt', '@lt', 'password8'),(9, 'mustafa', 'mb', '@mb', 'password9'),
-- (10, 'art', 'as', '@as', 'password10');

-- Seeds the accounts first hates

INSERT INTO hater_app_hates(id, haters_id, h_body) 
VALUES (101, 1, 'I hate dogs'), (102, 2, 'I hate pork'), (103, 3, 'I hate babys'), (104, 4, 'I hate parks'), (105, 5, 'I hate you'),
(106, 6, 'I hate jimmy fallon'), (107, 7, 'I hate summer'), (108, 8, 'i hate cats'), (109, 9, 'I hate vegetables'), (110, 10, 'I hate hot sauce');

-- Seeds criticism

INSERT INTO hater_app_criticism(id, haters_id, c_body, hates_id) 
VALUES (201, 2, 'wow...', 101), (202, 1, 'that unamerican', 102), (203, 3, 'grow up', 109), (204, 4, 'summer is the best', 107),
(205, 5, 'get out', 105), (206, 6, 'better not have kids then', 103), (207, 7, 'dont watch him then', 106), (208, 8, 'why no like cat?', 108),
(209, 9, 'weak', 110),(210, 10, 'stay out then', 104);


-- Seeds followers

INSERT INTO hater_app_follower(id, hater_being_followed_id, hater_following_id)
VALUES (301, 1, 2), (302, 1, 3), (303, 1, 4), (304, 2, 1), (305, 3, 1);
