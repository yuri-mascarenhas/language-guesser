import { franc } from "franc";
import langs from "langs";

const text = "As investigações do assassinato da vereadora Marielle Franco (PSOL-RJ) e de seu motorista Anderson Gomes, mortos a tiros há 6 anos, chegaram ao Supremo Tribunal Federal (STF). ";
const langCode = franc(text)
const language = langs.where("3", langCode);

console.log(language.name)
