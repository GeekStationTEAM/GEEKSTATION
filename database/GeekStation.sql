DROP DATABASE IF EXISTS `IBL`; 

CREATE SCHEMA IF NOT EXISTS `IBL` DEFAULT CHARACTER SET utf8 ;
USE `IBL` ;

-- -----------------------------------------------------
-- Table `mydb`.`tipo_de_usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IBL`.`tipo_de_usuario` (
  `id_tipo_de_usuario` INT NOT NULL AUTO_INCREMENT,
  `nombre_del_tipo` VARCHAR(45) NOT NULL,
  `descripcion_tipo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_tipo_de_usuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IBL`.`usuario` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido_materno` VARCHAR(45) NOT NULL,
  `apellido_paterno` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `telefono` VARCHAR(45) NOT NULL,
  `pais` VARCHAR(45) NOT NULL,
  `municipio` VARCHAR(45) NOT NULL,
  `direccion` VARCHAR(45) NOT NULL,
  `estado` VARCHAR(45) NOT NULL,
  `rfc` VARCHAR(45) NOT NULL,
  `tipo_de_usuario_id_tipo_de_usuario` INT NOT NULL,
  PRIMARY KEY (`id_usuario`, `tipo_de_usuario_id_tipo_de_usuario`),
  INDEX `fk_usuario_tipo_de_usuario_idx` (`tipo_de_usuario_id_tipo_de_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_tipo_de_usuario`
    FOREIGN KEY (`tipo_de_usuario_id_tipo_de_usuario`)
    REFERENCES `IBL`.`tipo_de_usuario` (`id_tipo_de_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = '		';


-- -----------------------------------------------------
-- Table `mydb`.`pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IBL`.`pedido` (
  `id_pedido` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATE NOT NULL,
  `estado` TEXT NOT NULL,
  `total` VARCHAR(45) NOT NULL,
  `usuario_id_usuario` INT NOT NULL,
  `usuario_tipo_de_usuario_id_tipo_de_usuario` INT NOT NULL,
  PRIMARY KEY (`id_pedido`),
  INDEX `fk_pedido_usuario1_idx` (`usuario_id_usuario` ASC, `usuario_tipo_de_usuario_id_tipo_de_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_pedido_usuario1`
    FOREIGN KEY (`usuario_id_usuario` , `usuario_tipo_de_usuario_id_tipo_de_usuario`)
    REFERENCES `IBL`.`usuario` (`id_usuario` , `tipo_de_usuario_id_tipo_de_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IBL`.`categoria` (
  `id_categoria` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_categoria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IBL`.`producto` (
  `id_producto` INT NOT NULL AUTO_INCREMENT,
  `sku` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  `precio` DOUBLE NOT NULL,
  `url` VARCHAR(45) NOT NULL,
  `stock` VARCHAR(45) NOT NULL,
  `color` VARCHAR(45) NOT NULL,
  `marca` VARCHAR(45) NOT NULL,
  `nombre_producto` VARCHAR(45) NOT NULL,
  `categoria_id_categoria` INT NOT NULL,
  `usuario_id_usuario` INT NOT NULL,
  `usuario_tipo_de_usuario_id_tipo_de_usuario` INT NOT NULL,
  PRIMARY KEY (`id_producto`, `categoria_id_categoria`, `usuario_id_usuario`, `usuario_tipo_de_usuario_id_tipo_de_usuario`),
  INDEX `fk_producto_categoria1_idx` (`categoria_id_categoria` ASC) VISIBLE,
  INDEX `fk_producto_usuario1_idx` (`usuario_id_usuario` ASC, `usuario_tipo_de_usuario_id_tipo_de_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_producto_categoria1`
    FOREIGN KEY (`categoria_id_categoria`)
    REFERENCES `IBL`.`categoria` (`id_categoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_producto_usuario1`
    FOREIGN KEY (`usuario_id_usuario` , `usuario_tipo_de_usuario_id_tipo_de_usuario`)
    REFERENCES `IBL`.`usuario` (`id_usuario` , `tipo_de_usuario_id_tipo_de_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`pago`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `IBL`.`pago` (
  `id_pago` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATE NOT NULL,
  `descuento` VARCHAR(45) NOT NULL,
  `metodo` VARCHAR(45) NOT NULL,
  `iva` VARCHAR(45) NOT NULL,
  `folio_factura` VARCHAR(45) NOT NULL,
  `pedido_id_pedido` INT NOT NULL,
  PRIMARY KEY (`id_pago`, `pedido_id_pedido`),
  INDEX `fk_pago_pedido1_idx` (`pedido_id_pedido` ASC) VISIBLE,
  CONSTRAINT `fk_pago_pedido1`
    FOREIGN KEY (`pedido_id_pedido`)
    REFERENCES `IBL`.`pedido` (`id_pedido`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = '									';
 INSERT INTO tipo_de_usuario(nombre_del_tipo, descripcion_tipo)
 VALUES
 ('administrador', 'puede hacer modificaciones en la página'),
 ('cliente','realiza compras en la página');
 
 INSERT INTO usuario (nombre, apellido_paterno, apellido_materno, email, password, telefono, pais, municipio, direccion, estado, rfc, tipo_de_usuario_id_tipo_de_usuario) 
 values 
('Ana', 'Ortiz', 'Lopez', 'anaortizl@gmail.com', 'adminadmin', '5573892234', 'Mexico', 'Benito Juarez', 'Xola #13', 'CDMX', 'KJCD900914H2A', 1),
('Maria Fernanda', 'Lopez', 'Martinez', 'mlopezmartinez@gmail.com', 'securepass123', '5551234567', 'Mexico', 'Cuernavaca', 'Avenida Reforma #101', 'Morelos', 'LOMA921203XJ2', 2),
('Juan Carlos', 'Ramirez', 'Hernandez', 'jcramirezhernandez@gmail.com', 'mypassword2024', '3337894561', 'Mexico', 'Guadalajara', 'Calle Independencia #17', 'Jalisco', 'RAHC880315KI9', 2),
('Ana Isabel', 'Perez', 'Santos', 'anaperezsantos@gmail.com', 'qwerty7890', '2295671234', 'Mexico', 'Veracruz', 'Boulevard Ruiz Cortines #12', 'Veracruz', 'PESA970521ZK5', 2),
('Roberto', 'Gonzalez', 'Morales', 'rgonzalezmorales@gmail.com', 'helloWorld01', '9984567890', 'Mexico', 'Cancun', 'Calle Palma Real #45', 'Quintana Roo', 'GOMO860730LZ7', 2);


INSERT INTO categoria (nombre, descripcion)
VALUES
('Laptops', 'Laptops para trabajo y juegos'),
('Computadoras', 'Computadoras de escritorio'),
('Tablets', 'Tablets ligeras y versátiles'),
('Smartphones', 'Teléfonos inteligentes'),
('Smartwatch', 'Relojes inteligentes'),
('Audífonos', 'Audífonos de calidad'),
('Cables', 'Cables y accesorios tecnológicos'),
('Webcam', 'Cámaras web para videoconferencias'),
('Teclados', 'Teclados mecánicos y de membrana'),
('Mouse', 'Dispositivos de entrada para computadora'),
('VR', 'Gafas de realidad virtual');

INSERT INTO producto (sku, descripcion, precio, url, stock, marca, color, nombre_producto, categoria_id_categoria, usuario_id_usuario,usuario_tipo_de_usuario_id_tipo_de_usuario) 
values
 ('37592', 'Acer Aspire 3', 8700, 'ibl.com/acer-aspire-3', 400, 'ACER', 'gris', 'Aspire 3', 1, 1, 1),
('81461', 'Acer Chromebook Spin 713', 14000, 'ibl.com/acer-chromebook-spin-713', 380, 'HACER', 'gris', 'Chromebook Spin 713', 2, 1, 1),
('63084', 'All In One HP Intel Celeron-N100', 6899, 'ibl.com/all-in-one-hp-celeron-n100', 200, 'HP', 'gris', 'All In One Celeron', 3, 1, 1),
('29715', 'Amazon Fire HD 10', 4500, 'ibl.com/amazon-fire-hd-10', 550, 'Amazon', 'gris', 'Fire HD 10', 4, 1, 1),
('63184', 'ASUS VivoBook 5', 8600, 'ibl.com/asus-vivobook-5', 300, 'ASUS', 'gris', 'VivoBook 5', 1, 1, 1),
('95217', 'Audífonos Alámbricos JBLC50HIWHT', 69.30, 'ibl.com/audifonos-jbl', 400, 'JBL', 'negro', 'JBLC50HIWHT', 5, 1, 1),
('14376', 'Cable HDMI 10K 8K 4K 2 Metros', 249, 'ibl.com/cable-hdmi-ultra', 350, 'STEREN', 'negro', 'Cable HDMI', 6, 1, 1),
('52804', 'Cámara Web HD 1080P', 206, 'ibl.com/camara-web-hd', 300, 'STEREN', 'negro', 'Cámara Web HD', 7, 1, 1),
('16937', 'Corsair K100 RBG', 220, 'ibl.com/corsair-k100', 330, 'Corsair', 'negro', 'K100 RBG', 8, 1, 1),
('71528', 'Dell Inspiron 14', 15500, 'ibl.com/dell-inspiron-14', 450, 'DELL', 'gris', 'Inspiron 14', 1, 1, 1),
('31694', 'Dell Inspiron 15', 10999, 'ibl.com/dell-inspiron-15', 450, 'DELL', 'gris', 'Inspiron 15', 1, 1, 1),
('83295', 'Dell OPTIPLEX 3070', 5799, 'ibl.com/dell-optiplex-3070', 400, 'DELL', 'gris', 'OPTIPLEX 3070', 9, 1, 1),
('41617', 'Dell OPTIPLEX i5 8GB SSD', 8899, 'ibl.com/dell-optiplex-i5', 300, 'DELL', 'gris', 'OPTIPLEX i5', 9, 1, 1),
('95321', 'Dell Optiplex i5-420', 8399, 'ibl.com/dell-optiplex-i5-420', 290, 'DELL', 'gris', 'Optiplex i5-420', 9, 1, 1),
('68417', 'Dell OPTIPLEX SFF 3080', 5799, 'ibl.com/dell-optiplex-sff', 335, 'DELL', 'gris', 'OPTIPLEX SFF 3080', 9, 1, 1),
('37059', 'Garmin Forerunner 165', 2899, 'ibl.com/garmin-forerunner-165', 654, 'Garmin', 'negro', 'Forerunner 165', 10, 1, 1),
('19468', 'Google Pixel 8', 19000, 'ibl.com/google-pixel-8', 120, 'Google', 'gris', 'Pixel 8', 11, 1, 1),
('27651', 'HP 800 G2 SFF-Core i5', 5999, 'ibl.com/hp-800-g2', 460, 'HP', 'gris', 'HP 800 G2', 9, 1, 1),
('48131', 'HP i5 G420', 6799, 'ibl.com/hp-g420', 550, 'HP', 'gris', 'HP G420', 9, 1, 1),
('72596', 'HP i5 USFF 4 GB RAM', 4299, 'ibl.com/hp-usff', 670, 'HP', 'gris', 'HP USFF', 9, 1, 1),
('10674', 'HP Pavilion x360', 10999, 'ibl.com/hp-pavilion-x360', 300, 'HP', 'gris', 'Pavilion x360', 1, 1, 1),
('94382', 'HP Victus 15', 17000, 'ibl.com/hp-victus-15', 250, 'HP', 'gris', 'Victus 15', 1, 1, 1),
('52710', 'Huawei Band 9', 609, 'ibl.com/huawei-band-9', 600, 'Huawei', 'negro', 'Band 9', 2, 1, 1),
('69843', 'Infinix Note 40 pro', 4500, 'ibl.com/infinix-note-40', 345, 'Infinix', 'gris', 'Note 40 pro', 3, 1, 1),
('10367', 'iPad Pro 11 M2', 20999, 'ibl.com/ipad-pro-11', 250, 'Apple', 'gris', 'iPad Pro 11', 4, 1, 1),
('35948', 'iPhone 15 Pro', 28000, 'ibl.com/iphone-15-pro', 250, 'Apple', 'gris', 'iPhone 15 Pro', 3, 1, 1),
('76211', 'Lenovo IdeaPad 3', 9990, 'ibl.com/lenovo-ideapad-3', 546, 'Lenovo', 'gris', 'IdeaPad 3', 1, 1, 1),
('94853', 'Lenovo sff m710S', 5799, 'ibl.com/lenovo-m710s', 765, 'Lenovo', 'gris', 'M710S i5-7500', 2, 1, 1),
('21617', 'Lenovo Tab P11 Pro', 9500, 'ibl.com/lenovo-tab-p11', 876, 'Lenovo', 'gris', 'Tab P11 Pro', 4, 1, 1),
('57384', 'Lenovo Tiny M720Q', 7499, 'ibl.com/lenovo-m720q', 345, 'Lenovo', 'gris', 'Tiny M720Q', 2, 1, 1),
('62091', 'Lenovo WORKSTATION P520', 11399, 'ibl.com/lenovo-workstation-p520', 654, 'Lenovo', 'gris', 'Workstation P520', 2, 1, 1),
('13748', 'MacBook Air M1', 17990, 'ibl.com/macbook-air-m1', 234, 'Apple', 'gris', 'MacBook Air M1', 4, 1, 1),
('19561', 'Motorola Edge 40', 15990, 'ibl.com/motorola-edge-40', 654, 'Motorola', 'gris', 'Edge 40', 3, 1, 1),
('24735', 'Motorola Edge 50', 7500, 'ibl.com/motorola-edge-50', 765, 'Motorola', 'gris', 'Edge 50 Fusión', 3, 1, 1),
('86912', 'Mouse inalámbrico Logitech', 58, 'ibl.com/mouse-logitech', 987, 'Logitech', 'gris', 'Mouse Logitech', 5, 1, 1),
('45379', 'Mouse inalámbrico vertical', 125, 'ibl.com/mouse-vertical', 345, 'STEREN', 'gris', 'Mouse vertical', 5, 1, 1),
('42608', 'Oppo Reno 11 5G', 7000, 'ibl.com/oppo-reno-11', 654, 'OPPO', 'gris', 'Reno 11 5G', 3, 1, 1),
('35879', 'PC Lenovo sff m79', 6899, 'ibl.com/lenovo-sff-m79', 743, 'Lenovo', 'gris', 'sff m79 AMD A8', 2, 1, 1),
('61134', 'Pico 4 VR', 7999, 'ibl.com/pico-4-vr', 375, 'Pico', 'gris', 'Pico 4', 6, 1, 1),
('79251', 'Samsung Galaxy S23', 22500, 'ibl.com/samsung-galaxy-s23', 583, 'Samsung', 'gris', 'Galaxy S23', 3, 1, 1),
('41836', 'Samsung Galaxy Tab S9', 19000, 'ibl.com/samsung-galaxy-tab-s9', 843, 'Samsung', 'gris', 'Galaxy Tab S9', 4, 1, 1),
('15972', 'Sony MDR-ZX110', 344, 'ibl.com/sony-mdr-zx110', 930, 'Sony', 'gris', 'MDR-ZX110', 7, 1, 1),
('68394', 'Teclado Inalámbrico Xukinroy', 185, 'ibl.com/teclado-xukinroy', 753, 'Xukinroy', 'gris', 'Teclado Ultradelgado', 5, 1, 1),
('15712', 'UGREEN Cable USB C', 184, 'ibl.com/ugreen-usb-c', 865, 'UGREEN', 'gris', 'Cable USB C', 6, 1, 1),
('32948', 'Xiaomi 13 Lite', 12500, 'ibl.com/xiaomi-13-lite', 532, 'Xiaomi', 'gris', 'Xiaomi 13 Lite', 3, 1, 1),
('76501', 'Xiaomi 9', 760, 'ibl.com/xiaomi-9', 765, 'Xiaomi', 'gris', 'Smartwatch Xiaomi 9', 2, 1, 1),
('83174', 'Xiaomi Audífonos Buds 6 Play', 389, 'ibl.com/audifonos-xiaomi-buds-6', 765, 'Xiaomi', 'gris', 'Audífonos Buds 6', 7, 1, 1),
('21649', 'Xiaomi Pad 6', 8000, 'ibl.com/xiaomi-pad-6', 876, 'Xiaomi', 'gris', 'Pad 6', 4, 1, 1),
('19785', 'Xiaomi Poco F6 Pro', 9500, 'ibl.com/xiaomi-poco-f6', 654, 'Xiaomi', 'gris', 'Poco F6 Pro 5G', 3, 1, 1),
('6234', 'Xiaomi Redmi Note 13 pro+', 6900, 'ibl.com/xiaomi-redmi-note-13', 543, 'Xiaomi', 'gris', 'Redmi Note 13 pro+', 3, 1, 1),
('58179', 'Zaklu porta gafas VR', 309, 'ibl.com/zaklu-gafas-vr', 876, 'Zaklu', 'gris', 'Porta gafas VR', 6, 1, 1);




INSERT INTO pedido (fecha, estado, total, usuario_id_usuario, usuario_tipo_de_usuario_id_tipo_de_usuario) VALUES
('2024-11-19', 'pagado', '8700.00', 1, 1),  -- Acer Aspire 3
('2024-11-20', 'pagado', '14000.00', 1, 1), -- Acer Chromebook Spin 713
('2024-11-21', 'pagado', '6899.00', 1, 1),  -- All In One HP Intel Celeron-N100
('2024-11-22', 'pagado', '4500.00', 1, 1),  -- Amazon Fire HD 10
('2024-11-23', 'pagado', '8600.00', 1, 1),  -- ASUS VivoBook 5
('2024-11-24', 'pagado', '69.30', 1, 1),     -- Audífonos Alámbricos JBLC50HIWHT
('2024-11-25', 'pagado', '249.00', 1, 1),    -- Cable HDMI 10K 8K 4K 2 Metros
('2024-11-26', 'pagado', '206.00', 1, 1),    -- Cámara Web HD 1080P
('2024-11-27', 'pagado', '220.00', 1, 1),    -- Corsair K100 RBG
('2024-11-28', 'pagado', '15500.00', 1, 1),  -- Dell Inspiron 14
('2024-11-19', 'pagado', '10999.00', 1, 1),  -- Dell Inspiron 15
('2024-11-20', 'pagado', '5799.00', 1, 1),   -- Dell OPTIPLEX 3070
('2024-11-21', 'pagado', '8899.00', 1, 1),   -- Dell OPTIPLEX i5 8GB SSD
('2024-11-22', 'pagado', '8399.00', 1, 1),   -- Dell Optiplex i5-420
('2024-11-23', 'pagado', '5799.00', 1, 1),   -- Dell OPTIPLEX SFF 3080
('2024-11-24', 'pagado', '2899.00', 1, 1),   -- Garmin Forerunner 165
('2024-11-25', 'pagado', '19000.00', 1, 1),  -- Google Pixel 8
('2024-11-26', 'pagado', '5999.00', 1, 1),   -- HP 800 G2 SFF-Core i5
('2024-11-27', 'pagado', '6799.00', 1, 1),   -- HP i5 G420
('2024-11-28', 'pagado', '4299.00', 1, 1),   -- HP i5 USFF 4 GB RAM
('2024-11-29', 'pagado', '10999.00', 1, 1),  -- HP Pavilion x360
('2024-11-30', 'pagado', '17000.00', 1, 1),  -- HP Victus 15
('2024-12-01', 'pagado', '609.00', 1, 1),    -- Huawei Band 9
('2024-12-02', 'pagado', '4500.00', 1, 1),   -- Infinix Note 40 pro
('2024-12-03', 'pagado', '20999.00', 1, 1);   -- iPad Pro 11 M2


-- SELECT * FROM pedido WHERE id_pedido = 1;
INSERT INTO pago (fecha, descuento, metodo, iva, folio_factura, pedido_id_pedido) 
VALUES ('2024-11-19','20','transferencia', '16','2315',1),
('2024-11-20', '15', 'tarjeta de crédito', '16', '2316', 2), 
('2024-11-21', '10', 'efectivo', '16', '2317', 3),  
('2024-11-22', '25', 'transferencia', '16', '2318', 4), 
('2024-11-23', '0', 'tarjeta de débito', '16', '2319', 5);



