-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 09 fév. 2022 à 18:24
-- Version du serveur : 10.4.21-MariaDB
-- Version de PHP : 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `school_chamber`
--

-- --------------------------------------------------------

--
-- Structure de la table `answers`
--

CREATE TABLE `answers` (
  `answer_id` int(11) NOT NULL,
  `answer_content` varchar(255) DEFAULT NULL,
  `answer_status` tinyint(1) DEFAULT NULL,
  `question_id_fk` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `answers`
--

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

-- --------------------------------------------------------

--
-- Structure de la table `classrooms`
--

CREATE TABLE `classrooms` (
  `classroom_id` int(11) NOT NULL,
  `classroom_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `classrooms`
--

INSERT INTO `classrooms` (`classroom_id`, `classroom_name`) VALUES
(1, '2ºA'),
(2, '1ºA'),
(3, '3ºA');

-- --------------------------------------------------------

--
-- Structure de la table `questions`
--

CREATE TABLE `questions` (
  `question_id` int(11) NOT NULL,
  `question_content` varchar(255) DEFAULT NULL,
  `question_difficulty` int(11) DEFAULT NULL,
  `topic_id_fk` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `questions`
--

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

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

CREATE TABLE `roles` (
  `role_id` int(11) NOT NULL,
  `role_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `roles`
--

INSERT INTO `roles` (`role_id`, `role_name`) VALUES
(1, 'Basic'),
(2, 'Admin');

-- --------------------------------------------------------

--
-- Structure de la table `themes`
--

CREATE TABLE `themes` (
  `theme_id` int(11) NOT NULL,
  `theme_name` varchar(255) DEFAULT NULL,
  `theme_img_path` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `themes`
--

INSERT INTO `themes` (`theme_id`, `theme_name`, `theme_img_path`) VALUES
(1, 'History', NULL),
(2, 'Geography', NULL),
(3, 'Computing', NULL),
(14, 'test dimanche 1234', '\\images\\themes\\30727257c625422335becc87030c43a2'),
(15, 'test final', '\\images\\themes\\3bf2c46f47178bb774f37b932daa1d1e');

-- --------------------------------------------------------

--
-- Structure de la table `topics`
--

CREATE TABLE `topics` (
  `topic_id` int(11) NOT NULL,
  `topic_name` varchar(255) DEFAULT NULL,
  `theme_id_fk` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `topics`
--

INSERT INTO `topics` (`topic_id`, `topic_name`, `theme_id_fk`) VALUES
(1, '2da Guerra Mundial', 1),
(2, 'Guerra de los 100 años', 1),
(3, 'Capitales', 2),
(4, 'DAM', 3);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `user_email` varchar(255) DEFAULT NULL,
  `user_password` varchar(255) DEFAULT NULL,
  `user_score` int(11) DEFAULT 0,
  `user_games_played` int(11) DEFAULT 0,
  `classroom_id_fk` int(11) DEFAULT NULL,
  `role_id_fk` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `user_email`, `user_password`, `user_games_played`, `classroom_id_fk`, `role_id_fk`) VALUES
(1, 'Tiburcio', 'Tiburcio@gmail.com', '1234', 3, 1, 2),
(2, 'Pino', 'Pino@gmail.com', '1234', 3, 1, 2),
(4, 'admin', 'admin@admin.com', '$2b$04$RyE3Ti75v2ZZCBli0ApYU.KuQePTjfAZS0LNUx4WZmgd0fyTNRWDC', 0, 1, 2);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`answer_id`),
  ADD KEY `answers_ibfk_1` (`question_id_fk`);

--
-- Index pour la table `classrooms`
--
ALTER TABLE `classrooms`
  ADD PRIMARY KEY (`classroom_id`);

--
-- Index pour la table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`question_id`),
  ADD KEY `questions_ibfk_1` (`topic_id_fk`);

--
-- Index pour la table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`role_id`);

--
-- Index pour la table `themes`
--
ALTER TABLE `themes`
  ADD PRIMARY KEY (`theme_id`);
  
select * from users;

--
-- Index pour la table `topics`
--
ALTER TABLE `topics`
  ADD PRIMARY KEY (`topic_id`),
  ADD KEY `theme_id_fk` (`theme_id_fk`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `classroom_id_fk` (`classroom_id_fk`),
  ADD KEY `role_id_fk` (`role_id_fk`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `answers`
--
ALTER TABLE `answers`
  MODIFY `answer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT pour la table `classrooms`
--
ALTER TABLE `classrooms`
  MODIFY `classroom_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `questions`
--
ALTER TABLE `questions`
  MODIFY `question_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT pour la table `roles`
--
ALTER TABLE `roles`
  MODIFY `role_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `themes`
--
ALTER TABLE `themes`
  MODIFY `theme_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT pour la table `topics`
--
ALTER TABLE `topics`
  MODIFY `topic_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `answers`
--
ALTER TABLE `answers`
  ADD CONSTRAINT `answers_ibfk_1` FOREIGN KEY (`question_id_fk`) REFERENCES `questions` (`question_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `questions_ibfk_1` FOREIGN KEY (`topic_id_fk`) REFERENCES `topics` (`topic_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `topics`
--
ALTER TABLE `topics`
  ADD CONSTRAINT `topics_ibfk_1` FOREIGN KEY (`theme_id_fk`) REFERENCES `themes` (`theme_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`classroom_id_fk`) REFERENCES `classrooms` (`classroom_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `users_ibfk_2` FOREIGN KEY (`role_id_fk`) REFERENCES `roles` (`role_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
