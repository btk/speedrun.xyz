
// import this file for static assets
let Obj = {
  botw_vdoq4xvk_json:require('./runs/botw_vdoq4xvk.json'),celeste_7kjpl1gk_json:require('./runs/celeste_7kjpl1gk.json'),cuphead_xd1er442_json:require('./runs/cuphead_xd1er442.json'),factorio_ndxjper2_json:require('./runs/factorio_ndxjper2.json'),gtav_wkpn1jdr_json:require('./runs/gtav_wkpn1jdr.json'),hollowknight_02q8o4p2_json:require('./runs/hollowknight_02q8o4p2.json'),jumpking_n2y7rvz2_json:require('./runs/jumpking_n2y7rvz2.json'),nfsmw_w20n48dn_json:require('./runs/nfsmw_w20n48dn.json'),outlast_w20wryod_json:require('./runs/outlast_w20wryod.json'),sm64_wkpoo02r_json:require('./runs/sm64_wkpoo02r.json'),undertale_02qgm7jd_json:require('./runs/undertale_02qgm7jd.json'),
  search: function searchFile(key) {
    if (this.hasOwnProperty(key)) {
        return this[key];
    } else {
        return -1;
    }
},
  format: function searchFileFormat(extension) {
    var filteredArray = this.filter(function (assetSlug) {
        return assetSlug.includes("-" + extention);
    });
    if (filteredArray.length) {
        return filteredArray;
    } else {
        return -1;
    }
}
}
export default Obj;
      