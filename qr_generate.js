document.addEventListener("DOMContentLoaded", function(event) {
    const API_GENERATE_QR = "https://api.qr-code-generator.com/v1/create?access-token=JFoBUqWyJn9n5rZDp6PgbUuP7iQNE7ZCfmaIO7ml7rKdmonIYAUl5fYimMBx7baW";
    var URL = "";
    $("#generate").click(async function() {
        let param = await getData();
        $.post(API_GENERATE_QR, param, function(data, status) {
            if ("success" == status) {
                $("#viewQrCode").append(data.documentElement.innerHTML);
            }
        });
    });
    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
    }, function(tabs) {
        var tab = tabs[0];
        URL = tab.url;
    });
    async function getData() {
        return {
            "frame_name": "no-frame",
            "qr_code_text": URL,
            "image_format": "SVG",
            "qr_code_logo": "no-logo"
        }
    }
});