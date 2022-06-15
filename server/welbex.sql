/*
 Navicat Premium Data Transfer

 Source Server         : localhost_5432
 Source Server Type    : PostgreSQL
 Source Server Version : 140003
 Source Host           : localhost:5432
 Source Catalog        : postgres
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 140003
 File Encoding         : 65001

 Date: 15/06/2022 14:33:01
*/


-- ----------------------------
-- Sequence structure for name_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."name_id_seq";
CREATE SEQUENCE "public"."name_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Table structure for name
-- ----------------------------
DROP TABLE IF EXISTS "public"."name";
CREATE TABLE "public"."name" (
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "date" date NOT NULL,
  "quantity" int4 NOT NULL,
  "distance" float8 NOT NULL,
  "id" int4 NOT NULL GENERATED ALWAYS AS IDENTITY (
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
)
)
;

-- ----------------------------
-- Records of name
-- ----------------------------
INSERT INTO "public"."name" VALUES ('olge', '2022-06-14', 1000, 1000, 1);
INSERT INTO "public"."name" VALUES ('ilya', '2022-06-02', 102, 503, 2);
INSERT INTO "public"."name" VALUES ('aiden', '2022-06-30', 1145, 14540, 3);
INSERT INTO "public"."name" VALUES ('olge', '2022-06-14', 1000, 1000, 4);
INSERT INTO "public"."name" VALUES ('olge', '2022-06-14', 1000, 1000, 5);
INSERT INTO "public"."name" VALUES ('olge', '2022-06-14', 1000, 1000, 6);
INSERT INTO "public"."name" VALUES ('olge', '2022-06-14', 1000, 1000, 7);
INSERT INTO "public"."name" VALUES ('olge', '2022-06-14', 1000, 1000, 8);
INSERT INTO "public"."name" VALUES ('olge', '2022-06-14', 1000, 1000, 9);
INSERT INTO "public"."name" VALUES ('olge', '2022-06-14', 1000, 1000, 10);
INSERT INTO "public"."name" VALUES ('olge', '2022-06-14', 1000, 1000, 11);
INSERT INTO "public"."name" VALUES ('olge', '2022-06-14', 1000, 1000, 12);
INSERT INTO "public"."name" VALUES ('olge', '2022-06-14', 1000, 1000, 13);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."name_id_seq"
OWNED BY "public"."name"."id";
SELECT setval('"public"."name_id_seq"', 14, true);

-- ----------------------------
-- Primary Key structure for table name
-- ----------------------------
ALTER TABLE "public"."name" ADD CONSTRAINT "name_pkey" PRIMARY KEY ("id");
