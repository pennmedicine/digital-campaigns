document.addEventListener('DOMContentLoaded', function() {

    var fieldMap = {};

    fieldMap.formname = document.querySelector(".calc-formname");
    fieldMap.subject = document.querySelector(".calc-subject");
    fieldMap.referrer = document.querySelector(".calc-referrer");
    fieldMap.utm_source = document.querySelector(".calc-utmSource");
    fieldMap.utm_medium= document.querySelector(".calc-utmMedium");
    fieldMap.utm_campaign = document.querySelector(".calc-utmCampaign");
    fieldMap.utm_term = document.querySelector(".calc-utmTerm");
    fieldMap.utm_content = document.querySelector(".calc-utmContent");
    fieldMap.categoryGA = document.querySelector(".calc-categoryGA");
    fieldMap._ga = document.querySelector(".calc-gaId");
    fieldMap.gclid = document.querySelector(".calc-gclid");
    fieldMap.submitUrl = document.querySelector(".calc-submitUrl");
    fieldMap.redirectUrl = document.querySelector(".calc-redirectUrl");
    console.log(fieldMap);
    var urlParameters = window.location.search.slice(1).split("&");

    urlParameters.forEach(param=> {
        var key = param.split("=")[0];
        var val = param.split("=")[1];
        if(fieldMap[key]) {
            fieldMap[key].value = val;
        }
    })
    if ( document.querySelector('[data-formname]').dataset.formname) {
        fieldMap.formname.value = document.querySelector('[data-formname]').dataset.formname;
        fieldMap.subject.value = document.querySelector('[data-formname]').dataset.formname;
    }

    fieldMap.redirectUrl.value = window.location.href.split("?")[0].split("#")[0] + "/thank-you?formname=" + fieldMap.formname.value + "&categoryGA=" + fieldMap.categoryGA.value;
    fieldMap.referrer.value = document.referrer;
    fieldMap.submitUrl.value = window.location.href;
});