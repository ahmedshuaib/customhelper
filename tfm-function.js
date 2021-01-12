function generatePassword(length) {
    if (!length) length = 12;
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

function hide_modal() {
    $("div[tfm-data='modal']").modal('hide');
    $(".modal-backdrop").remove();
    console.log('Hide modal response');
}

function tfm_success_alert(msg) {
    Vue.$toast.success(msg, {
        position: 'bottom-right'
    });
}


function bytes2Size(bytes, decimals) {
    if (typeof decimals === "undefined") decimals = 2;
    if (bytes == 0) return '0 Bytes';
    var k = 1024,
        dm = decimals || 2,
        sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function bytes2Table(bytes, decimals) {
    if (typeof decimals === "undefined") decimals = 2;
    if (bytes == 0) return [0, 'b'];
    var k = 1024,
        dm = decimals || 2,
        sizes = ['b', 'k', 'm', 'g', 't', 'p', 'e', 'z', 'y'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    var nsize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm)),
        nunit = sizes[i];
    return [nsize, nunit];
}

function nonefunc() {
    return true;
}

function imageDataURL(input, target) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $(target).attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function datatableHelper() {
    this.drawLink = function (text, attr) {
        if (!attr) attr = '';
        return '<a ' + attr + '>' + text + '</a>';
    };
    this.drawBtn = function (text, type, size, icon, attr) {
        if (!text) text = '';
        if (!type) type = 'default';
        if (!size) size = 'xs';
        if (!attr) attr = '';
        return '<button ' + attr + ' class="btn btn-' + size + ' btn-' + type + ' btn-dt">' + (icon ? '<i class="fas fa-' + icon + ' ' + (text ? 'fw-r5' : '') + '"></i>' : '') + text + '</button>';
    };
    this.drawLabel = function (text, type) {
        return '<span class="badge badge-' + type + ' label-dt">' + text + '</span> ';
    };
}

function tfm_CheckPermission(permission, json_data) {
    return (typeof json_data[permission] !== "undefined") ? json_data[permission] : false;
}


$(function () {
    console.log(this.form);
});
