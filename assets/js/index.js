
function createMarkdown(type_input, start, message_input, mainColor_input, style_input, logo_input, logoColor_input) {
    let new_fullLink;
    new_fullLink = "![" + type_input + "](" + start + message_input + "-" + mainColor_input + "?style=" + style_input + "&logo=" + logo_input + "&logoColor=" + logoColor_input + ")";
    document.getElementById("markdownOutput").value = new_fullLink;
}

function editLink() {
    let fullLink;
    // (https://img.shields.io/badge/Visual_Studio-Code-478CBF?style=for-the-badge&logo=none-code&logoColor=blue)
    // -->
    let start = "https://img.shields.io/badge/";
    let type_input = document.getElementById("type-input").value;
    let message_input = document.getElementById("message-input").value;
    let mainColor_input = document.getElementById("mainColor-input").value.replace("#", "");
    let style_input = document.getElementById("style").value;
    let logo_input = document.getElementById("logo-input").value;
    let logoColor_input = document.getElementById("logoColor-input").value.replace("#", "");
    fullLink = start + message_input + "-" + mainColor_input + "?style=" + style_input + "&logo=" + logo_input + "&logoColor=" + logoColor_input;
    createMarkdown(type_input, start, message_input, mainColor_input, style_input, logo_input, logoColor_input);
    return fullLink;
}

const form = document.getElementById("badgeForm");
form.addEventListener("input", (event) => {
    const editlink = editLink();
    document.getElementById("badgePreview").src = editlink;
    document.getElementById("urlOutput").value = editlink;
});