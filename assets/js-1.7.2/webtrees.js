var edit_window_specs="width=620,height=600,left=75,top=50,resizable=1,scrollbars=1",indx_window_specs="width=600,height=600,left=75,top=50,resizable=1,scrollbars=1",news_window_specs="width=620,height=600,left=75,top=50,resizable=1,scrollbars=1",find_window_specs="width=550,height=600,left=75,top=50,resizable=1,scrollbars=1",mesg_window_specs="width=620,height=600,left=75,top=50,resizable=1,scrollbars=1",chan_window_specs="width=500,height=600,left=75,top=50,resizable=1,scrollbars=1",mord_window_specs="width=500,height=600,left=75,top=50,resizable=1,scrollbars=1",assist_window_specs="width=800,height=600,left=75,top=50,resizable=1,scrollbars=1",gmap_window_specs="width=650,height=600,left=75,top=50,resizable=1,scrollbars=1",fam_nav_specs="width=350,height=550,left=25,top=75,resizable=1,scrollbars=1",pastefield,nameElement,remElement,textDirection=jQuery("html").attr("dir");function helpDialog(d,c){jQuery.getJSON("help_text.php?help="+d+"&mod="+c,function(b){modalNotes(b.content,b.title)})}function modalNotes(d,c){jQuery('<div title="'+c+'"></div>').html(d).dialog({modal:!0,width:500,open:function(){var b=this;jQuery(".ui-widget-overlay").on("click",function(){jQuery(b).dialog("close")})}});return !1}function closePopupAndReloadParent(b){parent.opener&&(b?parent.opener.location=b:parent.opener.location.reload());window.close()}function expand_layer(b){jQuery("#"+b+"_img").toggleClass("icon-plus icon-minus");jQuery("#"+b).slideToggle("fast");jQuery("#"+b+"-alt").toggle();return !1}function edit_interface(d,c,f){c=c||edit_window_specs;window.pastefield=f;d="edit_interface.php?"+jQuery.param(d)+"&ged="+WT_GEDCOM;window.open(d,"_blank",c);return !1}function edit_record(d,c){return edit_interface({action:"edit",xref:d,fact_id:c})}function add_fact(d,c){return edit_interface({action:"add",xref:d,fact:c})}function edit_raw(b){return edit_interface({action:"editraw",xref:b})}function edit_note(b){return edit_interface({action:"editnote",xref:b})}function add_record(d,c){var f=jQuery("#"+c).val();if(f){if("OBJE"===f){window.open("addmedia.php?action=showmediaform&linkid="+encodeURIComponent(d)+"&ged="+encodeURIComponent(WT_GEDCOM),"_blank",edit_window_specs)}else{return add_fact(d,f)}}return !1}function reorder_media(b){return edit_interface({action:"reorder_media",xref:b},mord_window_specs)}function add_new_record(d,c){return edit_interface({action:"add",xref:d,fact:c})}function add_child_to_family(d,c){return edit_interface({action:"add_child_to_family",gender:c,xref:d})}function add_child_to_individual(d,c){return edit_interface({action:"add_child_to_individual",gender:c,xref:d})}function add_parent_to_individual(d,c){return edit_interface({action:"add_parent_to_individual",xref:d,gender:c})}function add_spouse_to_family(d,c){return edit_interface({action:"add_spouse_to_family",xref:d,famtag:c})}function add_unlinked_indi(){return edit_interface({action:"add_unlinked_indi"})}function add_spouse_to_individual(d,c){return edit_interface({action:"add_spouse_to_individual",xref:d,famtag:c})}function linkspouse(d,c){return edit_interface({action:"linkspouse",xref:d,famtag:c,famid:"new"})}function add_famc(b){return edit_interface({action:"addfamlink",xref:b})}function edit_name(d,c){return edit_interface({action:"editname",xref:d,fact_id:c})}function add_name(b){return edit_interface({action:"addname",xref:b})}function accept_changes(b){jQuery.post("action.php",{action:"accept-changes",xref:b,ged:WT_GEDCOM,csrf:WT_CSRF_TOKEN},function(){location.reload()});return !1}function reject_changes(b){jQuery.post("action.php",{action:"reject-changes",xref:b,ged:WT_GEDCOM,csrf:WT_CSRF_TOKEN},function(){location.reload()});return !1}function delete_family(d,c,f){confirm(d)&&jQuery.post("action.php",{action:"delete-family",xref:c,ged:"undefined"===typeof f?WT_GEDCOM:f,csrf:WT_CSRF_TOKEN},function(){location.reload()});return !1}function delete_individual(d,c,f){confirm(d)&&jQuery.post("action.php",{action:"delete-individual",xref:c,ged:"undefined"===typeof f?WT_GEDCOM:f,csrf:WT_CSRF_TOKEN},function(){location.reload()});return !1}function delete_media(d,c,f){confirm(d)&&jQuery.post("action.php",{action:"delete-media",xref:c,ged:"undefined"===typeof f?WT_GEDCOM:f,csrf:WT_CSRF_TOKEN},function(){location.reload()});return !1}function delete_note(d,c,f){confirm(d)&&jQuery.post("action.php",{action:"delete-note",xref:c,ged:"undefined"===typeof f?WT_GEDCOM:f,csrf:WT_CSRF_TOKEN},function(){location.reload()});return !1}function delete_repository(d,c,f){confirm(d)&&jQuery.post("action.php",{action:"delete-repository",xref:c,ged:"undefined"===typeof f?WT_GEDCOM:f,csrf:WT_CSRF_TOKEN},function(){location.reload()});return !1}function delete_source(d,c,f){confirm(d)&&jQuery.post("action.php",{action:"delete-source",xref:c,ged:"undefined"===typeof f?WT_GEDCOM:f,csrf:WT_CSRF_TOKEN},function(){location.reload()});return !1}function delete_fact(d,c,f){confirm(d)&&jQuery.post("action.php",{action:"delete-fact",xref:c,fact_id:f,ged:WT_GEDCOM,csrf:WT_CSRF_TOKEN},function(){location.reload()});return !1}function unlink_media(d,c,f){confirm(d)&&jQuery.post("action.php",{action:"unlink-media",source:c,target:f,ged:WT_GEDCOM,csrf:WT_CSRF_TOKEN},function(){location.reload()});return !1}function copy_fact(d,c){jQuery.post("action.php",{action:"copy-fact",xref:d,fact_id:c,ged:WT_GEDCOM,csrf:WT_CSRF_TOKEN},function(){location.reload()});return !1}function paste_fact(d,c){jQuery.post("action.php",{action:"paste-fact",xref:d,fact_id:jQuery(c).val(),ged:WT_GEDCOM,csrf:WT_CSRF_TOKEN},function(){location.reload()});return !1}function delete_user(d,c){confirm(d)&&jQuery.post("action.php",{action:"delete-user",user_id:c,csrf:WT_CSRF_TOKEN},function(){location.reload()});return !1}function masquerade(b){jQuery.post("action.php",{action:"masquerade",user_id:b,csrf:WT_CSRF_TOKEN},function(){location.reload()});return !1}function reorder_children(b){return edit_interface({action:"reorder_children",xref:b})}function reorder_families(b){return edit_interface({action:"reorder_fams",xref:b})}function reply(d,c){window.open("message.php?to="+encodeURIComponent(d)+"&subject="+encodeURIComponent(c)+"&ged="+encodeURIComponent(WT_GEDCOM),"_blank",mesg_window_specs);return !1}function delete_message(b){window.open("message.php?action=delete&id="+encodeURIComponent(b)+"&ged="+encodeURIComponent(WT_GEDCOM),"_blank",mesg_window_specs);return !1}function change_family_members(b){return edit_interface({action:"changefamily",xref:b})}function addnewsource(b){return edit_interface({action:"addnewsource",xref:"newsour"},null,b)}function addnewrepository(b){return edit_interface({action:"addnewrepository",xref:"newrepo"},null,b)}function addnewnote(b){return edit_interface({action:"addnewnote",noteid:"newnote"},null,b)}function addnewnote_assisted(d,c,f){return edit_interface({action:"addnewnote_assisted",noteid:"newnote",xref:c,census:f},assist_window_specs,d)}function addmedia_links(d,c,f){pastefield=d;insertRowToTable(c,f);return !1}function valid_date(v){var u="JAN FEB MAR APR MAY JUN JUL AUG SEP OCT NOV DEC".split(" "),r="MUHAR SAFAR RABIA RABIT JUMAA JUMAT RAJAB SHAAB RAMAD SHAWW DHUAQ DHUAH".split(" "),t="TSH CSH KSL TVT SHV ADR ADS NSN IYR SVN TMZ AAV ELL".split(" "),p="VEND BRUM FRIM NIVO PLUV VENT GERM FLOR PRAI MESS THER FRUC COMP".split(" "),q="FARVA ORDIB KHORD TIR MORDA SHAHR MEHR ABAN AZAR DEY BAHMA ESFAN".split(" "),s=v.value,o=s.split("("),n="";1<o.length&&(s=o[0],n=o[1]);s=s.toUpperCase();s=s.replace(/\s+/," ");s=s.replace(/(^\s)|(\s$)/,"");s=s.replace(/(\d)([A-Z])/,"$1 $2");s=s.replace(/([A-Z])(\d)/,"$1 $2");s.match(/^Q ([1-4]) (\d\d\d\d)$/)&&(s="BET "+u[3*RegExp.$1-3]+" "+RegExp.$2+" AND "+u[3*RegExp.$1-1]+" "+RegExp.$2);s.match(/^(@#DHIJRI@|HIJRI)( \d?\d )(\d?\d)( \d?\d?\d?\d)$/)&&(s="@#DHIJRI@"+RegExp.$2+r[parseInt(RegExp.$3,10)-1]+RegExp.$4);s.match(/^(@#DJALALI@|JALALI)( \d?\d )(\d?\d)( \d?\d?\d?\d)$/)&&(s="@#DJALALI@"+RegExp.$2+q[parseInt(RegExp.$3,10)-1]+RegExp.$4);s.match(/^(@#DHEBREW@|HEBREW)( \d?\d )(\d?\d)( \d?\d?\d?\d)$/)&&(s="@#DHEBREW@"+RegExp.$2+t[parseInt(RegExp.$3,10)-1]+RegExp.$4);s.match(/^(@#DFRENCH R@|FRENCH)( \d?\d )(\d?\d)( \d?\d?\d?\d)$/)&&(s="@#DFRENCH R@"+RegExp.$2+p[parseInt(RegExp.$3,10)-1]+RegExp.$4);if(/^([^\d]*)(\d+)[^\d](\d+)[^\d](\d+)$/i.exec(s)){r=RegExp.$1;t=parseInt(RegExp.$2,10);p=parseInt(RegExp.$3,10);q=parseInt(RegExp.$4,10);o="DMY";"undefined"===typeof locale_date_format||"MDY"!==locale_date_format&&"YMD"!==locale_date_format||(o=locale_date_format);var j=(new Date).getFullYear(),i=j%100,j=j-i;if("DMY"===o&&31>=t&&12>=p||13<t&&31>=t&&12>=p&&31<q){s=r+t+" "+u[p-1]+" "+(100<=q?q:q<=i?q+j:q+j-100)}else{if("MDY"===o&&12>=t&&31>=p||13<p&&31>=p&&12>=t&&31<q){s=r+p+" "+u[t-1]+" "+(100<=q?q:q<=i?q+j:q+j-100)}else{if("YMD"===o&&12>=p&&31>=q||13<q&&31>=q&&12>=p&&31<t){s=r+q+" "+u[p-1]+" "+(100<=t?t:t<=i?t+j:t+j-100)}}}}s=s.replace(/^[>]([\w ]+)$/,"AFT $1");s=s.replace(/^[<]([\w ]+)$/,"BEF $1");s=s.replace(/^([\w ]+)[-]$/,"FROM $1");s=s.replace(/^[-]([\w ]+)$/,"TO $1");s=s.replace(/^[~]([\w ]+)$/,"ABT $1");s=s.replace(/^[*]([\w ]+)$/,"EST $1");s=s.replace(/^[#]([\w ]+)$/,"CAL $1");s=s.replace(/^([\w ]+) ?- ?([\w ]+)$/,"BET $1 AND $2");s=s.replace(/^([\w ]+) ?~ ?([\w ]+)$/,"FROM $1 TO $2");s=s.replace(/(JANUARY)/,"JAN");s=s.replace(/(FEBRUARY)/,"FEB");s=s.replace(/(MARCH)/,"MAR");s=s.replace(/(APRIL)/,"APR");s=s.replace(/(MAY)/,"MAY");s=s.replace(/(JUNE)/,"JUN");s=s.replace(/(JULY)/,"JUL");s=s.replace(/(AUGUST)/,"AUG");s=s.replace(/(SEPTEMBER)/,"SEP");s=s.replace(/(OCTOBER)/,"OCT");s=s.replace(/(NOVEMBER)/,"NOV");s=s.replace(/(DECEMBER)/,"DEC");s=s.replace(/(JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC) (\d\d?)[, ]+(\d\d\d\d)/,"$2 $1 $3");s=s.replace(/(^| )(\d [A-Z]{3,5} \d{4})/,"$10$2");n&&(s=s+" ("+n);v.value!==s&&(v.value=s)}var menutimeouts=[];function show_submenu(j,i){var n=document.body.scrollWidth+document.documentElement.scrollLeft,p=document.getElementById(j);if(p&&p.style){for(var n=document.all?document.body.offsetWidth:document.body.scrollWidth+document.documentElement.scrollLeft-55,l=0,m=p.childNodes.length,o=0;o<m;o++){var k=p.childNodes[o];k.offsetWidth>l+5&&(l=k.offsetWidth)}p.offsetWidth<l&&(p.style.width=l+"px");if(l=document.getElementById(i)){p.style.left=l.style.left,l=p.offsetLeft+p.offsetWidth+10,l>n&&(p.style.left=n-p.offsetWidth+"px")}0>p.offsetLeft&&(p.style.left="0px");500<p.offsetHeight&&(p.style.height="400px",p.style.overflow="auto");p.style.visibility="visible"}clearTimeout(menutimeouts[j]);menutimeouts[j]=null}function hide_submenu(d){if("number"===typeof menutimeouts[d]){var c=document.getElementById(d);c&&c.style&&(c.style.visibility="hidden");clearTimeout(menutimeouts[d]);menutimeouts[d]=null}}function timeout_submenu(b){"number"!==typeof menutimeouts[b]&&(menutimeouts[b]=setTimeout("hide_submenu('"+b+"')",100))}function statusDisable(b){b=document.getElementById(b);b.checked=!1;b.disabled=!0}function statusEnable(b){document.getElementById(b).disabled=!1}function statusChecked(b){document.getElementById(b).checked=!0}var monthLabels=[,"January","February","March","April","May","June","July","August","September","October","November","December"],monthShort=[,"JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],daysOfWeek="SMTWTFS".split(""),weekStart=0;function cal_setMonthNames(x,w,t,v,r,s,u,q,p,o,j,i){monthLabels[1]=x;monthLabels[2]=w;monthLabels[3]=t;monthLabels[4]=v;monthLabels[5]=r;monthLabels[6]=s;monthLabels[7]=u;monthLabels[8]=q;monthLabels[9]=p;monthLabels[10]=o;monthLabels[11]=j;monthLabels[12]=i}function cal_setDayHeaders(i,h,l,n,j,k,m){daysOfWeek[0]=i;daysOfWeek[1]=h;daysOfWeek[2]=l;daysOfWeek[3]=n;daysOfWeek[4]=j;daysOfWeek[5]=k;daysOfWeek[6]=m}function cal_setWeekStart(b){0<=b&&7>b&&(weekStart=b)}function cal_toggleDate(f,d){var g=document.getElementById(f);if(!g){return !1}if("visible"===g.style.visibility){return g.style.visibility="hidden",!1}if("show"===g.style.visibility){return g.style.visibility="hide",!1}var h=document.getElementById(d);if(!h){return !1}h=/((\d+ (JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC) )?\d+)/.exec(h.value)?new Date(RegExp.$1):new Date;g.innerHTML=cal_generateSelectorContent(d,f,h);if("hidden"===g.style.visibility){return g.style.visibility="visible",!1}"hide"===g.style.visibility&&(g.style.visibility="show");return !1}function cal_generateSelectorContent(i,h,l){var n,j,k;k='<table border="1"><tr>'+('<td><select name="'+i+'_daySelect" id="'+i+'_daySelect" onchange="return cal_updateCalendar(\''+i+"', '"+h+"');\">");for(n=1;32>n;n++){k+='<option value="'+n+'"',l.getDate()===n&&(k+=' selected="selected"'),k+=">"+n+"</option>"}k=k+"</select></td>"+('<td><select name="'+i+'_monSelect" id="'+i+'_monSelect" onchange="return cal_updateCalendar(\''+i+"', '"+h+"');\">");for(n=1;13>n;n++){k+='<option value="'+n+'"',l.getMonth()+1===n&&(k+=' selected="selected"'),k+=">"+monthLabels[n]+"</option>"}k+="</select></td>";k+='<td><input type="text" name="'+i+'_yearInput" id="'+i+'_yearInput" size="5" value="'+l.getFullYear()+'" onchange="return cal_updateCalendar(\''+i+"', '"+h+"');\" /></td></tr>";k+='<tr><td colspan="3">';k+='<table width="100%">';k+="<tr>";j=weekStart;for(n=0;7>n;n++){k+="<td ",k+='class="descriptionbox"',k+=">",k+=daysOfWeek[j],k+="</td>",j++,6<j&&(j=0)}k+="</tr>";var m=new Date(l.getFullYear(),l.getMonth(),1);n=m.getDay();n-=weekStart;m=m.getTime()-86400000*n+43200000;m=new Date(m);for(j=0;6>j;j++){k+="<tr>";for(n=0;7>n;n++){k+="<td ",k=m.getMonth()===l.getMonth()?m.getDate()===l.getDate()?k+'class="descriptionbox"':k+'class="optionbox"':k+'style="background-color:#EAEAEA; border: solid #AAAAAA 1px;"',k+='><a href="#" onclick="return cal_dateClicked(\''+i+"', '"+h+"', "+m.getFullYear()+", "+m.getMonth()+", "+m.getDate()+');">',k+=m.getDate(),k+="</a></td>",m=m.getTime()+86400000,m=new Date(m)}k+="</tr>"}k+="</table>";k+="</td></tr>";return k+="</table>"}function cal_setDateField(f,d,g,h){f=document.getElementById(f);if(!f){return !1}10>h&&(h="0"+h);f.value=h+" "+monthShort[g+1]+" "+d;return !1}function cal_updateCalendar(f,d){var i=document.getElementById(f+"_daySelect");if(!i){return !1}var j=document.getElementById(f+"_monSelect");if(!j){return !1}var h=document.getElementById(f+"_yearInput");if(!h){return !1}j=parseInt(j.options[j.selectedIndex].value,10);i=new Date(h.value,j-1,i.options[i.selectedIndex].value);cal_setDateField(f,i.getFullYear(),i.getMonth(),i.getDate());h=document.getElementById(d);if(!h){return alert("no dateDiv "+d),!1}h.innerHTML=cal_generateSelectorContent(f,d,i);return !1}function cal_dateClicked(f,d,i,j,h){cal_setDateField(f,i,j,h);cal_toggleDate(d,f);return !1}function findWindow(f,d,g,h){h=h||{};h.type=d;h.ged="undefined"===typeof f?WT_GEDCOM:f;window.pastefield=g;window.open("find.php?"+jQuery.param(h),"_blank",find_window_specs);return !1}function findIndi(d,c,f){window.nameElement=c;return findWindow(f,"indi",d)}function findPlace(d,c){return findWindow(c,"place",d)}function findFamily(d,c){return findWindow(c,"fam",d)}function findMedia(d,c,f){return findWindow(f,"media",d,{choose:c||"0all"})}function findSource(d,c,f){window.nameElement=c;return findWindow(f,"source",d)}function findnote(d,c,f){window.nameElement=c;return findWindow(f,"note",d)}function findRepository(d,c){return findWindow(c,"repo",d)}function findSpecialChar(b){return findWindow(void 0,"specialchar",b)}function findFact(d,c){return findWindow(c,"facts",d,{tags:d.value})}function openerpasteid(b){window.opener.paste_id&&window.opener.paste_id(b);window.close()}function paste_id(b){pastefield.value=b}function pastename(b){nameElement&&(nameElement.innerHTML=b);remElement&&(remElement.style.display="block")}function paste_char(b){document.selection?(pastefield.focus(),document.selection.createRange().text=b):pastefield.selectionStart||0===pastefield.selectionStart?(pastefield.value=pastefield.value.substring(0,pastefield.selectionStart)+b+pastefield.value.substring(pastefield.selectionEnd,pastefield.value.length),pastefield.selectionStart=pastefield.selectionEnd=pastefield.selectionStart+b.length):pastefield.value+=b;"NPFX"!==pastefield.id&&"GIVN"!==pastefield.id&&"SPFX"!==pastefield.id&&"SURN"!==pastefield.id&&"NSFX"!==pastefield.id||updatewholename()}function ilinkitem(d,c,f){f="undefined"===typeof f?WT_GEDCOM:f;window.open("inverselink.php?mediaid="+encodeURIComponent(d)+"&linkto="+encodeURIComponent(c)+"&ged="+encodeURIComponent(f),"_blank",find_window_specs);return !1}function message(d,c,f){window.open("message.php?to="+encodeURIComponent(d)+"&method="+encodeURIComponent(c)+"&url="+encodeURIComponent(f),"_blank",mesg_window_specs);return !1}function valid_lati_long(f,d,g){var h=f.value.toUpperCase(),h=h.replace(/(^\s*)|(\s*$)/g,""),h=h.replace(/ /g,":"),h=h.replace(/\+/g,""),h=h.replace(/-/g,g),h=h.replace(/,/g,"."),h=h.replace(/\u00b0/g,":"),h=h.replace(/\u0027/g,":"),h=h.replace(/^([0-9]+):([0-9]+):([0-9.]+)(.*)/g,function(j,i,n,m,l){j=parseFloat(i);j=j+n/60+m/3600;j=Math.round(10000*j)/10000;return l+j}),h=h.replace(/^([0-9]+):([0-9]+)(.*)/g,function(j,i,l,k){j=parseFloat(i);j=Math.round(10000*(j+l/60))/10000;return k+j});(h=h.replace(/(.*)([N|S|E|W]+)$/g,"$2$1"))&&h.charAt(0)!==g&&h.charAt(0)!==d&&(h=d+h);f.value=h}function activate_colorbox(b){jQuery.extend(jQuery.colorbox.settings,{fixed:!0,current:"",previous:"rtl"===textDirection?"\u25b6":"\u25c0",next:"rtl"===textDirection?"\u25c0":"\u25b6",slideshowStart:"\u25cb",slideshowStop:"\u25cf",close:"\u2715"});b&&jQuery.extend(jQuery.colorbox.settings,b);jQuery("body").on("click","a.gallery",function(){jQuery("a[type^=image].gallery").colorbox({photo:!0,maxWidth:"95%",maxHeight:"95%",rel:"gallery",slideshow:!0,slideshowAuto:!1,onComplete:function(){jQuery(".cboxPhoto").wheelzoom()}})})}function autocomplete(b){"undefined"===typeof b&&(b="input[data-autocomplete-type]");jQuery(b).each(function(){var d=jQuery(this).data("autocomplete-type"),f=jQuery(this).data("autocomplete-ged");"undefined"===typeof d&&alert("Missing data-autocomplete-type attribute");"undefined"===typeof f&&jQuery(this).data("autocomplete-ged",WT_GEDCOM);var g=jQuery(this);g.autocomplete({source:function(e,c){var h=null;g.data("autocomplete-extra")&&(h=jQuery(g.data("autocomplete-extra")).val());jQuery.getJSON("autocomplete.php",{field:g.data("autocomplete-type"),ged:g.data("autocomplete-ged"),extra:h,term:e.term},c)},html:!0})})}jQuery.extend($.ui.accordion.prototype.options,{icons:{header:"rtl"===textDirection?"ui-icon-triangle-1-w":"ui-icon-triangle-1-e",activeHeader:"ui-icon-triangle-1-s"}});jQuery.widget("ui.dialog",jQuery.ui.dialog,{_allowInteraction:function(b){if(this._super(b)||b.target.ownerDocument!==this.document[0]||jQuery(b.target).closest(".cke_dialog").length||jQuery(b.target).closest(".cke").length){return !0}},_moveToTop:function(d,c){d&&this.options.modal||this._super(d,c)}});jQuery("body").on("click",".iconz",function(r){function q(){l.parent().css("z-index",100);p();j.addClass("nameZoom");o.hide(0,function(){m.slideDown()})}function n(){m.slideUp(function(){o.show(0);j.removeClass("nameZoom");p();l.parent().css("z-index","")})}function p(){l.toggleClass(function(){return i+" "+i+"-expanded"})}r.stopPropagation();var l=jQuery(this).closest(".person_box_template"),m=l.find(".inout"),o=l.find(".inout2"),j=l.find(".namedef"),i=l.attr("class").match(/(box-style[0-2])/)[1];m.text().length?l.hasClass(i)?q():n():(l.css("cursor","progress"),m.load("expand_view.php?pid="+l.data("pid"),function(){l.css("cursor","");q()}));l.find(".iconz").toggleClass("icon-zoomin icon-zoomout")});jQuery(".menu-language").on("click","li a",function(){jQuery.post("action.php",{action:"language",language:$(this).data("language"),csrf:WT_CSRF_TOKEN},function(){location.reload()})});jQuery(".menu-theme").on("click","li a",function(){jQuery.post("action.php",{action:"theme",theme:$(this).data("theme"),csrf:WT_CSRF_TOKEN},function(){location.reload()})});