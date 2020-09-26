
// import this file for static assets
let Obj = {
  botw_vdoq4xvk_json:require('./runs/botw_vdoq4xvk.json'),celeste_7kjpl1gk_json:require('./runs/celeste_7kjpl1gk.json'),cuphead_xd1er442_json:require('./runs/cuphead_xd1er442.json'),d2lod_jdz9zng2_json:require('./runs/d2lod_jdz9zng2.json'),darksouls3_n2y143z2_json:require('./runs/darksouls3_n2y143z2.json'),darksoulsremastered_ndx1pm52_json:require('./runs/darksoulsremastered_ndx1pm52.json'),factorio_ndxjper2_json:require('./runs/factorio_ndxjper2.json'),goiwbf_zd36l5rd_json:require('./runs/goiwbf_zd36l5rd.json'),gtasa_4xk906k0_json:require('./runs/gtasa_4xk906k0.json'),gtavc_nxd1rk8q_json:require('./runs/gtavc_nxd1rk8q.json'),gtav_wkpn1jdr_json:require('./runs/gtav_wkpn1jdr.json'),hades_zd3xmmvd_json:require('./runs/hades_zd3xmmvd.json'),hl1_7dg8xp24_json:require('./runs/hl1_7dg8xp24.json'),hollowknight_02q8o4p2_json:require('./runs/hollowknight_02q8o4p2.json'),hotline_miami_jdreqnk6_json:require('./runs/hotline_miami_jdreqnk6.json'),jumpking_n2y7rvz2_json:require('./runs/jumpking_n2y7rvz2.json'),me_mkeoe9d6_json:require('./runs/me_mkeoe9d6.json'),nfsmw_w20n48dn_json:require('./runs/nfsmw_w20n48dn.json'),outlast_w20wryod_json:require('./runs/outlast_w20wryod.json'),sm64_wkpoo02r_json:require('./runs/sm64_wkpoo02r.json'),terraria_zd3yzvn2_json:require('./runs/terraria_zd3yzvn2.json'),undertale_02qgm7jd_json:require('./runs/undertale_02qgm7jd.json'),
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
      