import { franc } from "franc";
import langs from "langs";

const input = process.argv[2];
const langCode = franc(input)
if (langCode !== "und") {
    const language = langs.where("3", langCode);
    console.log(language.name)
} else {
    console.log("[Error] Could not detect language. Please insert a larger sample")
}


