function A(g,f,b){function e(a,d,n,b,e,f){var k=c();k?("undefined"===typeof f&&(f=!0),d&&("undefined"!=typeof k.onload?k.onload=function(){"200"==k.status||"206"==k.status?(k.fileSize=e||k.getResponseHeader("Content-Length"),d(k)):n&&n();k=null}:k.onreadystatechange=function(){4==k.readyState&&("200"==k.status||"206"==k.status?(k.fileSize=e||k.getResponseHeader("Content-Length"),d(k)):n&&n(),k=null)}),k.open("GET",a,f),k.overrideMimeType&&k.overrideMimeType("text/plain; charset=x-user-defined"),b&&
k.setRequestHeader("Range","bytes="+b[0]+"-"+b[1]),k.setRequestHeader("If-Modified-Since","Sat, 1 Jan 1970 00:00:00 GMT"),k.send(null)):n&&n()}function c(){var a=null;window.XMLHttpRequest?a=new XMLHttpRequest:window.ActiveXObject&&(a=new ActiveXObject("Microsoft.XMLHTTP"));return a}function a(a,d){var b=c();b&&(d&&("undefined"!=typeof b.onload?b.onload=function(){"200"==b.status&&d(this);b=null}:b.onreadystatechange=function(){4==b.readyState&&("200"==b.status&&d(this),b=null)}),b.open("HEAD",a,
    !0),b.send(null))}function d(a,d){var c,f;function h(a){var d=~~(a[0]/c)-f;a=~~(a[1]/c)+1+f;0>d&&(d=0);a>=blockTotal&&(a=blockTotal-1);return[d,a]}function g(l,f){for(;m[l[0]];)if(l[0]++,l[0]>l[1]){f&&f();return}for(;m[l[1]];)if(l[1]--,l[0]>l[1]){f&&f();return}var h=[l[0]*c,(l[1]+1)*c-1];e(a,function(a){parseInt(a.getResponseHeader("Content-Length"),10)==d&&(l[0]=0,l[1]=blockTotal-1,h[0]=0,h[1]=d-1);a={data:a.N||a.responseText,offset:h[0]};for(var b=l[0];b<=l[1];b++)m[b]=a;f&&f()},b,h,k,!!f)}var k,
    r=new B("",0,d),m=[];c=c||2048;f="undefined"===typeof f?0:f;blockTotal=~~((d-1)/c)+1;for(var q in r)r.hasOwnProperty(q)&&"function"===typeof r[q]&&(this[q]=r[q]);this.a=function(a){var d;g(h([a,a]));d=m[~~(a/c)];if("string"==typeof d.data)return d.data.charCodeAt(a-d.offset)&255;if("unknown"==typeof d.data)return IEBinary_getByteAt(d.data,a-d.offset)};this.f=function(a,d){g(h(a),d)}}(function(){a(g,function(a){a=parseInt(a.getResponseHeader("Content-Length"),10)||-1;f(new d(g,a))})})()}
function B(g,f,b){var e=f||0,c=0;"string"==typeof g?(c=b||g.length,this.a=function(a){return g.charCodeAt(a+e)&255}):"unknown"==typeof g&&(c=b||IEBinary_getLength(g),this.a=function(a){return IEBinary_getByteAt(g,a+e)});this.l=function(a,d){for(var b=Array(d),c=0;c<d;c++)b[c]=this.a(a+c);return b};this.h=function(){return c};this.d=function(a,d){return 0!=(this.a(a)&1<<d)};this.w=function(a){a=(this.a(a+1)<<8)+this.a(a);0>a&&(a+=65536);return a};this.i=function(a){var d=this.a(a),b=this.a(a+1),c=
    this.a(a+2);a=this.a(a+3);d=(((d<<8)+b<<8)+c<<8)+a;0>d&&(d+=4294967296);return d};this.o=function(a){var d=this.a(a),b=this.a(a+1);a=this.a(a+2);d=((d<<8)+b<<8)+a;0>d&&(d+=16777216);return d};this.c=function(a,d){for(var b=[],c=a,e=0;c<a+d;c++,e++)b[e]=String.fromCharCode(this.a(c));return b.join("")};this.e=function(a,d,b){a=this.l(a,d);switch(b.toLowerCase()){case "utf-16":case "utf-16le":case "utf-16be":d=b;var c,e=0,f=1;b=0;c=Math.min(c||a.length,a.length);254==a[0]&&255==a[1]?(d=!0,e=2):255==
a[0]&&254==a[1]&&(d=!1,e=2);d&&(f=0,b=1);d=[];for(var h=0;e<c;h++){var g=a[e+f],k=(g<<8)+a[e+b],e=e+2;if(0==k)break;else 216>g||224<=g?d[h]=String.fromCharCode(k):(g=(a[e+f]<<8)+a[e+b],e+=2,d[h]=String.fromCharCode(k,g))}a=new String(d.join(""));a.g=e;break;case "utf-8":c=0;e=Math.min(e||a.length,a.length);239==a[0]&&187==a[1]&&191==a[2]&&(c=3);f=[];for(b=0;c<e&&(d=a[c++],0!=d);b++)128>d?f[b]=String.fromCharCode(d):194<=d&&224>d?(h=a[c++],f[b]=String.fromCharCode(((d&31)<<6)+(h&63))):224<=d&&240>
d?(h=a[c++],k=a[c++],f[b]=String.fromCharCode(((d&255)<<12)+((h&63)<<6)+(k&63))):240<=d&&245>d&&(h=a[c++],k=a[c++],g=a[c++],d=((d&7)<<18)+((h&63)<<12)+((k&63)<<6)+(g&63)-65536,f[b]=String.fromCharCode((d>>10)+55296,(d&1023)+56320));a=new String(f.join(""));a.g=c;break;default:e=[];f=f||a.length;for(c=0;c<f;){b=a[c++];if(0==b)break;e[c-1]=String.fromCharCode(b)}a=new String(e.join(""));a.g=c}return a};this.f=function(a,b){b()}}document.write("<script type='text/vbscript'>\r\nFunction IEBinary_getByteAt(strBinary, iOffset)\r\n\tIEBinary_getByteAt = AscB(MidB(strBinary,iOffset+1,1))\r\nEnd Function\r\nFunction IEBinary_getLength(strBinary)\r\n\tIEBinary_getLength = LenB(strBinary)\r\nEnd Function\r\n\x3c/script>\r\n");(function(g){g.FileAPIReader=function(f){return function(b,e){var c=new FileReader;c.onload=function(a){e(new B(a.target.result))};c.readAsBinaryString(f)}}})(this);(function(g){var f=g.p={},b={},e=[0,7];f.t=function(c){delete b[c]};f.s=function(){b={}};f.B=function(c,a,d){d=d||{};(d.dataReader||A)(c,function(f){f.f(e,function(){var e="ftypM4A"==f.c(4,7)?ID4:"ID3"==f.c(0,3)?ID3v2:ID3v1;e.m(f,function(){var g=d.tags,s=e.n(f,g),g=b[c]||{},h;for(h in s)s.hasOwnProperty(h)&&(g[h]=s[h]);b[c]=g;a&&a()})})})};f.v=function(c){if(!b[c])return null;var a={},d;for(d in b[c])b[c].hasOwnProperty(d)&&(a[d]=b[c][d]);return a};f.A=function(c,a){return b[c]?b[c][a]:null};g.ID3=
    g.p;f.loadTags=f.B;f.getAllTags=f.v;f.getTag=f.A;f.clearTags=f.t;f.clearAll=f.s})(this);(function(g){var f=g.q={},b="Blues;Classic Rock;Country;Dance;Disco;Funk;Grunge;Hip-Hop;Jazz;Metal;New Age;Oldies;Other;Pop;R&B;Rap;Reggae;Rock;Techno;Industrial;Alternative;Ska;Death Metal;Pranks;Soundtrack;Euro-Techno;Ambient;Trip-Hop;Vocal;Jazz+Funk;Fusion;Trance;Classical;Instrumental;Acid;House;Game;Sound Clip;Gospel;Noise;AlternRock;Bass;Soul;Punk;Space;Meditative;Instrumental Pop;Instrumental Rock;Ethnic;Gothic;Darkwave;Techno-Industrial;Electronic;Pop-Folk;Eurodance;Dream;Southern Rock;Comedy;Cult;Gangsta;Top 40;Christian Rap;Pop/Funk;Jungle;Native American;Cabaret;New Wave;Psychadelic;Rave;Showtunes;Trailer;Lo-Fi;Tribal;Acid Punk;Acid Jazz;Polka;Retro;Musical;Rock & Roll;Hard Rock;Folk;Folk-Rock;National Folk;Swing;Fast Fusion;Bebob;Latin;Revival;Celtic;Bluegrass;Avantgarde;Gothic Rock;Progressive Rock;Psychedelic Rock;Symphonic Rock;Slow Rock;Big Band;Chorus;Easy Listening;Acoustic;Humour;Speech;Chanson;Opera;Chamber Music;Sonata;Symphony;Booty Bass;Primus;Porn Groove;Satire;Slow Jam;Club;Tango;Samba;Folklore;Ballad;Power Ballad;Rhythmic Soul;Freestyle;Duet;Punk Rock;Drum Solo;Acapella;Euro-House;Dance Hall".split(";");
    f.m=function(b,c){var a=b.h();b.f([a-128-1,a],c)};f.n=function(e){var c=e.h()-128;if("TAG"==e.c(c,3)){var a=e.c(c+3,30).replace(/\0/g,""),d=e.c(c+33,30).replace(/\0/g,""),f=e.c(c+63,30).replace(/\0/g,""),g=e.c(c+93,4).replace(/\0/g,"");if(0==e.a(c+97+28))var n=e.c(c+97,28).replace(/\0/g,""),s=e.a(c+97+29);else n="",s=0;e=e.a(c+97+30);return{version:"1.1",title:a,artist:d,album:f,year:g,comment:n,track:s,genre:255>e?b[e]:""}}return{}};g.ID3v1=g.q})(this);(function(g){function f(a,b){var c=b.a(a),e=b.a(a+1),f=b.a(a+2);return b.a(a+3)&127|(f&127)<<7|(e&127)<<14|(c&127)<<21}var b=g.D={};b.b={};b.frames={BUF:"Recommended buffer size",CNT:"Play counter",COM:"Comments",CRA:"Audio encryption",CRM:"Encrypted meta frame",ETC:"Event timing codes",EQU:"Equalization",GEO:"General encapsulated object",IPL:"Involved people list",LNK:"Linked information",MCI:"Music CD Identifier",MLL:"MPEG location lookup table",PIC:"Attached picture",POP:"Popularimeter",REV:"Reverb",
    RVA:"Relative volume adjustment",SLT:"Synchronized lyric/text",STC:"Synced tempo codes",TAL:"Album/Movie/Show title",TBP:"BPM (Beats Per Minute)",TCM:"Composer",TCO:"Content type",TCR:"Copyright message",TDA:"Date",TDY:"Playlist delay",TEN:"Encoded by",TFT:"File type",TIM:"Time",TKE:"Initial key",TLA:"Language(s)",TLE:"Length",TMT:"Media type",TOA:"Original artist(s)/performer(s)",TOF:"Original filename",TOL:"Original Lyricist(s)/text writer(s)",TOR:"Original release year",TOT:"Original album/Movie/Show title",
    TP1:"Lead artist(s)/Lead performer(s)/Soloist(s)/Performing group",TP2:"Band/Orchestra/Accompaniment",TP3:"Conductor/Performer refinement",TP4:"Interpreted, remixed, or otherwise modified by",TPA:"Part of a set",TPB:"Publisher",TRC:"ISRC (International Standard Recording Code)",TRD:"Recording dates",TRK:"Track number/Position in set",TSI:"Size",TSS:"Software/hardware and settings used for encoding",TT1:"Content group description",TT2:"Title/Songname/Content description",TT3:"Subtitle/Description refinement",
    TXT:"Lyricist/text writer",TXX:"User defined text information frame",TYE:"Year",UFI:"Unique file identifier",ULT:"Unsychronized lyric/text transcription",WAF:"Official audio file webpage",WAR:"Official artist/performer webpage",WAS:"Official audio source webpage",WCM:"Commercial information",WCP:"Copyright/Legal information",WPB:"Publishers official webpage",WXX:"User defined URL link frame",AENC:"Audio encryption",APIC:"Attached picture",COMM:"Comments",COMR:"Commercial frame",ENCR:"Encryption method registration",
    EQUA:"Equalization",ETCO:"Event timing codes",GEOB:"General encapsulated object",GRID:"Group identification registration",IPLS:"Involved people list",LINK:"Linked information",MCDI:"Music CD identifier",MLLT:"MPEG location lookup table",OWNE:"Ownership frame",PRIV:"Private frame",PCNT:"Play counter",POPM:"Popularimeter",POSS:"Position synchronisation frame",RBUF:"Recommended buffer size",RVAD:"Relative volume adjustment",RVRB:"Reverb",SYLT:"Synchronized lyric/text",SYTC:"Synchronized tempo codes",
    TALB:"Album/Movie/Show title",TBPM:"BPM (beats per minute)",TCOM:"Composer",TCON:"Content type",TCOP:"Copyright message",TDAT:"Date",TDLY:"Playlist delay",TENC:"Encoded by",TEXT:"Lyricist/Text writer",TFLT:"File type",TIME:"Time",TIT1:"Content group description",TIT2:"Title/songname/content description",TIT3:"Subtitle/Description refinement",TKEY:"Initial key",TLAN:"Language(s)",TLEN:"Length",TMED:"Media type",TOAL:"Original album/movie/show title",TOFN:"Original filename",TOLY:"Original lyricist(s)/text writer(s)",
    TOPE:"Original artist(s)/performer(s)",TORY:"Original release year",TOWN:"File owner/licensee",TPE1:"Lead performer(s)/Soloist(s)",TPE2:"Band/orchestra/accompaniment",TPE3:"Conductor/performer refinement",TPE4:"Interpreted, remixed, or otherwise modified by",TPOS:"Part of a set",TPUB:"Publisher",TRCK:"Track number/Position in set",TRDA:"Recording dates",TRSN:"Internet radio station name",TRSO:"Internet radio station owner",TSIZ:"Size",TSRC:"ISRC (international standard recording code)",TSSE:"Software/Hardware and settings used for encoding",
    TYER:"Year",TXXX:"User defined text information frame",UFID:"Unique file identifier",USER:"Terms of use",USLT:"Unsychronized lyric/text transcription",WCOM:"Commercial information",WCOP:"Copyright/Legal information",WOAF:"Official audio file webpage",WOAR:"Official artist/performer webpage",WOAS:"Official audio source webpage",WORS:"Official internet radio station homepage",WPAY:"Payment",WPUB:"Publishers official webpage",WXXX:"User defined URL link frame"};var e={title:["TIT2","TT2"],artist:["TPE1",
    "TP1"],album:["TALB","TAL"],year:["TYER","TYE"],comment:["COMM","COM"],track:["TRCK","TRK"],genre:["TCON","TCO"],picture:["APIC","PIC"],lyrics:["USLT","ULT"]},c=["title","artist","album","track"];b.m=function(a,b){a.f([0,f(6,a)],b)};b.n=function(a,d){var g=0,p=a.a(g+3);if(4<p)return{version:">2.4"};var n=a.a(g+4),s=a.d(g+5,7),h=a.d(g+5,6),u=a.d(g+5,5),k=f(g+6,a),g=g+10;if(h)var r=a.i(g),g=g+(r+4);var p={version:"2."+p+"."+n,major:p,revision:n,flags:{unsynchronisation:s,extended_header:h,experimental_indicator:u},
    size:k},m;if(s)m={};else{for(var k=k-10,s=a,n=d,h={},u=p.major,r=[],q=0,l;l=(n||c)[q];q++)r=r.concat(e[l]||[l]);for(n=r;g<k;){r=null;q=s;l=g;var w=null;switch(u){case 2:m=q.c(l,3);var t=q.o(l+3),v=6;break;case 3:m=q.c(l,4);t=q.i(l+4);v=10;break;case 4:m=q.c(l,4),t=f(l+4,q),v=10}if(""==m)break;g+=v+t;0>n.indexOf(m)||(2<u&&(w={message:{P:q.d(l+8,6),I:q.d(l+8,5),M:q.d(l+8,4)},k:{K:q.d(l+8+1,7),F:q.d(l+8+1,3),H:q.d(l+8+1,2),C:q.d(l+8+1,1),u:q.d(l+8+1,0)}}),l+=v,w&&w.k.u&&(f(l,q),l+=4,t-=4),w&&w.k.C||
(m in b.b?r=b.b[m]:"T"==m[0]&&(r=b.b["T*"]),r=r?r(l,t,q,w):void 0,r={id:m,size:t,description:m in b.frames?b.frames[m]:"Unknown",data:r},m in h?(h[m].id&&(h[m]=[h[m]]),h[m].push(r)):h[m]=r))}m=h}for(var y in e)if(e.hasOwnProperty(y)){a:{t=e[y];"string"==typeof t&&(t=[t]);v=0;for(g=void 0;g=t[v];v++)if(g in m){a=m[g].data;break a}a=void 0}a&&(p[y]=a)}for(var z in m)m.hasOwnProperty(z)&&(p[z]=m[z]);return p};g.ID3v2=b})(this);(function(){function g(b){var e;switch(b){case 0:e="iso-8859-1";break;case 1:e="utf-16";break;case 2:e="utf-16be";break;case 3:e="utf-8"}return e}var f="32x32 pixels 'file icon' (PNG only);Other file icon;Cover (front);Cover (back);Leaflet page;Media (e.g. lable side of CD);Lead artist/lead performer/soloist;Artist/performer;Conductor;Band/Orchestra;Composer;Lyricist/text writer;Recording Location;During recording;During performance;Movie/video screen capture;A bright coloured fish;Illustration;Band/artist logotype;Publisher/Studio logotype".split(";");
    ID3v2.b.APIC=function(b,e,c,a,d){d=d||"3";a=b;var x=g(c.a(b));switch(d){case "2":var p=c.c(b+1,3);b+=4;break;case "3":case "4":p=c.e(b+1,e-(b-a),x),b+=1+p.g}d=c.a(b,1);d=f[d];x=c.e(b+1,e-(b-a),x);b+=1+x.g;return{format:p.toString(),type:d,description:x.toString(),data:c.l(b,a+e-b)}};ID3v2.b.COMM=function(b,e,c){var a=b,d=g(c.a(b)),f=c.c(b+1,3),p=c.e(b+4,e-4,d);b+=4+p.g;b=c.e(b,a+e-b,d);return{language:f,O:p.toString(),text:b.toString()}};ID3v2.b.COM=ID3v2.b.COMM;ID3v2.b.PIC=function(b,e,c,a){return ID3v2.b.APIC(b,
        e,c,a,"2")};ID3v2.b.PCNT=function(b,e,c){return c.J(b)};ID3v2.b.CNT=ID3v2.b.PCNT;ID3v2.b["T*"]=function(b,e,c){var a=g(c.a(b));return c.e(b+1,e-1,a).toString()};ID3v2.b.TCON=function(b,e,c){return ID3v2.b["T*"].apply(this,arguments).replace(/^\(\d+\)/,"")};ID3v2.b.TCO=ID3v2.b.TCON;ID3v2.b.USLT=function(b,e,c){var a=b,d=g(c.a(b)),f=c.c(b+1,3),p=c.e(b+4,e-4,d);b+=4+p.g;b=c.e(b,a+e-b,d);return{language:f,G:p.toString(),L:b.toString()}};ID3v2.b.ULT=ID3v2.b.USLT})();(function(g){function f(b,a,d,g){var p=b.i(a);if(0==p)g();else{var n=b.c(a+4,4);-1<["moov","udta","meta","ilst"].indexOf(n)?("meta"==n&&(a+=4),b.f([a+8,a+8+8],function(){f(b,a+8,p-8,g)})):b.f([a+(n in e.j?0:p),a+p+8],function(){f(b,a+p,d,g)})}}function b(c,a,d,f,g){g=void 0===g?"":g+"  ";for(var n=d;n<d+f;){var s=a.i(n);if(0==s)break;var h=a.c(n+4,4);if(-1<["moov","udta","meta","ilst"].indexOf(h)){"meta"==h&&(n+=4);b(c,a,n+8,s-8,g);break}if(e.j[h]){var u=a.o(n+16+1),k=e.j[h],u=e.types[u];if("trkn"==
    h)c[k[0]]=a.a(n+16+11),c.count=a.a(n+16+13);else{var h=n+16+4+4,r=s-16-4-4,m;switch(u){case "text":m=a.e(h,r,"UTF-8");break;case "uint8":m=a.w(h);break;case "jpeg":case "png":m={k:"image/"+u,data:a.l(h,r)}}c[k[0]]="comment"===k[0]?{text:m}:m}}n+=s}}var e=g.r={};e.types={0:"uint8",1:"text",13:"jpeg",14:"png",21:"uint8"};e.j={"\u00a9alb":["album"],"\u00a9art":["artist"],"\u00a9ART":["artist"],aART:["artist"],"\u00a9day":["year"],"\u00a9nam":["title"],"\u00a9gen":["genre"],trkn:["track"],"\u00a9wrt":["composer"],
    "\u00a9too":["encoder"],cprt:["copyright"],covr:["picture"],"\u00a9grp":["grouping"],keyw:["keyword"],"\u00a9lyr":["lyrics"],"\u00a9cmt":["comment"],tmpo:["tempo"],cpil:["compilation"],disk:["disc"]};e.m=function(b,a){b.f([0,7],function(){f(b,0,b.h(),a)})};e.n=function(c){var a={};b(a,c,0,c.h());return a};g.ID4=g.r})(this);