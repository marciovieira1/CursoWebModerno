const EPub = require("epub");
const epubfile = "C:/Users/marci/OneDrive/Documentos/Mirador/designações/mwb_T_202008.epub"
const imagewebroot = "/images/"
const chapterwebroot = epubfile

let epub = new EPub(epubfile, imagewebroot, chapterwebroot);

epub.on("end", function () {
    // epub is now usable
    console.log(epub.metadata.title);
    epub.flow.forEach(function (chapter) {
        if (chapter.title != undefined) {
            console.log(chapter.title)
            //console.log(chapter)
        }
    })
    epub.getChapter("chapter_id", function (err, text) { });
});

epub.parse();
