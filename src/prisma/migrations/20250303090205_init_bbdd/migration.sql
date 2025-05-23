-- CreateEnum
CREATE TYPE "UiMode" AS ENUM ('AUTO', 'LIGHT', 'DARK');

-- CreateEnum
CREATE TYPE "Rarity" AS ENUM ('COMMON', 'UNCOMMON', 'RARE', 'MYTHIC');

-- CreateEnum
CREATE TYPE "Color" AS ENUM ('BLACK', 'WHITE', 'RED', 'BLUE', 'GREEN', 'COLORLESS');

-- CreateTable
CREATE TABLE "Languages" (
    "code" VARCHAR(2) NOT NULL,
    "name" VARCHAR(20) NOT NULL,

    CONSTRAINT "Languages_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "password" VARCHAR(150) NOT NULL,
    "ui_mode" "UiMode" DEFAULT 'AUTO',
    "is_blocked" BOOLEAN DEFAULT false,
    "language_code" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sets" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(20) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "is_commander" BOOLEAN NOT NULL,
    "art_cards_count" INTEGER NOT NULL,
    "token_cards_count" INTEGER NOT NULL,
    "black_cards_count" INTEGER NOT NULL,
    "white_cards_count" INTEGER NOT NULL,
    "red_cards_count" INTEGER NOT NULL,
    "green_cards_count" INTEGER NOT NULL,
    "blue_cards_count" INTEGER NOT NULL,
    "colorless_cards_count" INTEGER NOT NULL,
    "land_cards_count" INTEGER NOT NULL,
    "common_cards_count" INTEGER NOT NULL,
    "uncommon_cards_count" INTEGER NOT NULL,
    "rare_cards_count" INTEGER NOT NULL,
    "mythic_cards_count" INTEGER NOT NULL,
    "total_cards" INTEGER NOT NULL,
    "extra_cards" INTEGER NOT NULL,
    "released_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cards" (
    "id" SERIAL NOT NULL,
    "set_number" INTEGER NOT NULL,
    "colors" "Color"[],
    "mana" VARCHAR(100),
    "types" VARCHAR(100)[],
    "subtypes" VARCHAR(100)[],
    "rarity" "Rarity",
    "is_extra" BOOLEAN,
    "is_promo" BOOLEAN,
    "is_bundle" BOOLEAN,
    "is_buy_a_box" BOOLEAN,
    "is_story_spotlight" BOOLEAN,
    "keywords" VARCHAR(100)[],
    "power" VARCHAR(5),
    "defense" VARCHAR(5),
    "loyalty" VARCHAR(5),
    "artist" VARCHAR(150),
    "copyright" VARCHAR(150),
    "treatments" VARCHAR(100)[],
    "set_id" INTEGER NOT NULL,

    CONSTRAINT "Cards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CardAlternatives" (
    "card_alternative_id" INTEGER NOT NULL,
    "card_alternative_of_id" INTEGER NOT NULL,

    CONSTRAINT "CardAlternatives_pkey" PRIMARY KEY ("card_alternative_id","card_alternative_of_id")
);

-- CreateTable
CREATE TABLE "CardReprints" (
    "card_reprint_id" INTEGER NOT NULL,
    "card_reprint_of_id" INTEGER NOT NULL,

    CONSTRAINT "CardReprints_pkey" PRIMARY KEY ("card_reprint_id","card_reprint_of_id")
);

-- CreateTable
CREATE TABLE "CardInfoLanguages" (
    "card_id" INTEGER NOT NULL,
    "language_code" TEXT NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "description" VARCHAR(2000),
    "lore" VARCHAR(2000),

    CONSTRAINT "CardInfoLanguages_pkey" PRIMARY KEY ("card_id","language_code")
);

-- CreateTable
CREATE TABLE "UserCards" (
    "user_id" INTEGER NOT NULL,
    "card_id" INTEGER NOT NULL,
    "treatment" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "UserCards_pkey" PRIMARY KEY ("user_id","card_id","treatment")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_language_code_fkey" FOREIGN KEY ("language_code") REFERENCES "Languages"("code") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cards" ADD CONSTRAINT "Cards_set_id_fkey" FOREIGN KEY ("set_id") REFERENCES "Sets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardAlternatives" ADD CONSTRAINT "CardAlternatives_card_alternative_id_fkey" FOREIGN KEY ("card_alternative_id") REFERENCES "Cards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardAlternatives" ADD CONSTRAINT "CardAlternatives_card_alternative_of_id_fkey" FOREIGN KEY ("card_alternative_of_id") REFERENCES "Cards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardReprints" ADD CONSTRAINT "CardReprints_card_reprint_id_fkey" FOREIGN KEY ("card_reprint_id") REFERENCES "Cards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardReprints" ADD CONSTRAINT "CardReprints_card_reprint_of_id_fkey" FOREIGN KEY ("card_reprint_of_id") REFERENCES "Cards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardInfoLanguages" ADD CONSTRAINT "CardInfoLanguages_language_code_fkey" FOREIGN KEY ("language_code") REFERENCES "Languages"("code") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardInfoLanguages" ADD CONSTRAINT "CardInfoLanguages_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "Cards"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCards" ADD CONSTRAINT "UserCards_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "Cards"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCards" ADD CONSTRAINT "UserCards_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
