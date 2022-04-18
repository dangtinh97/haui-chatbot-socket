import path from "path";

export default {
    locales:['en','vi'],
    directory:path.join('./src/locales'),
    defaultLocale:'vi',
    header:'lang',
    queryParameter:'lang',
    objectNotation:true
}