
INSERT INTO `classrooms` (`classroom_id`, `classroom_name`) VALUES
(1, '2ºA'),
(2, '1ºA'),
(3, '3ºA');

INSERT INTO `roles` (`role_id`, `role_name`) VALUES
(1, 'Basic'),
(2, 'Admin');

INSERT INTO `themes` (`theme_id`, `theme_name`) VALUES
(1, 'Historia'),
(2, 'Geografía'),
(3, 'Informática');

INSERT INTO `topics` (`topic_id`, `topic_name`, `theme_id_fk`) VALUES
(1, '2da Guerra Mundial', 1),
(2, 'Guerra de los 100 años', 1),
(3, 'Capitales', 2),
(4, 'DAM', 3);

INSERT INTO `users` (`user_id`, `user_name`, `user_email`, `user_password`, `user_score`, `user_games_played`, `classroom_id_fk`, `role_id_fk`) VALUES
(1, 'Tiburcio', 'Tiburcio@gmail.com', '1234', 80, 3, 1, 2),
(2, 'Pino', 'Pino@gmail.com', '1234', 80, 3, 1, 2),
(4, 'admin', 'admin@admin.com', '$2b$04$RyE3Ti75v2ZZCBli0ApYU.KuQePTjfAZS0LNUx4WZmgd0fyTNRWDC', 0, 0, 1, 2);

INSERT INTO `questions` (`question_id`, `question_content`, `question_difficulty`, `topic_id_fk`) VALUES
(1, '¿Quién ganó la batalla de Hastings?', 1, 1),
(2, '¿En qué año terminó la 2da Guerra Mundial?', 1, 1),
(3, '¿Cual es la capital de Alemania?', 1, 2),
(4, '¿Es Casa Blanca la capital de Marruecos?', 1, 2),
(5, '¿Es HTML un lenguaje de programación?', 1, 3),
(6, '¿Qué es un ORM?', 1, 3),
(14, 'kkkkDadsf asfd', 1, 1),
(15, 'test1', 1, 1),
(16, 'test XXXXXXXXXXXXXXXXXXXX', 1, 1),
(17, 'asdfads', 1, 1),
(18, 'asdf', 1, 1);

INSERT INTO `answers` (`answer_id`, `answer_content`, `answer_status`, `question_id_fk`) VALUES
(1, 'El Rey Harold', 0, 1),
(2, 'El Rey Guillermo', 1, 1),
(3, 'Yo', 0, 1),
(4, '1945', 1, 2),
(5, '1939', 0, 2),
(6, '1944', 0, 2),
(7, 'París', 0, 3),
(8, 'Munich', 0, 3),
(9, 'Berlín', 1, 3),
(10, 'No', 1, 4),
(11, 'Sí', 0, 4),
(12, 'No', 1, 5),
(13, 'Sí', 0, 5),
(14, 'Es un sistema gestor', 0, 5),
(15, 'Un lenguaje de programación', 0, 6),
(16, 'Una librería para Java', 0, 6),
(17, 'Un sistema de acceso a la base de datos', 1, 6),
(18, 'alsdkfqopwej', 0, 16),
(19, 'klkjncxz,vnzxcv', 0, 16),
(20, 'asdfpoiweurpowue', 1, 16),
(21, 'fasfd', 0, 17),
(22, 'asdf', 0, 17),
(23, 'dfasf', 1, 17),
(24, '23123', 0, 18),
(25, '2143234324324', 0, 18),
(26, '234', 1, 18);