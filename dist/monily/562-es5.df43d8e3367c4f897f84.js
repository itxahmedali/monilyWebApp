!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}(self.webpackChunkmonily=self.webpackChunkmonily||[]).push([[562],{74562:function(t,i,o){"use strict";o.r(i),o.d(i,{documentsModule:function(){return q}});var l=o(61116),r=o(31041),c=o(90702),a=o(96087),s=o(47323),u=o(92099),f=o(46982),g=o(52080),p=o(35366),m=o(83646),d=o(72003),h=o(24419),v=o(43675);function Z(e,t){if(1&e&&(p.TgZ(0,"div",11),p.TgZ(1,"a",12),p._UZ(2,"i",13),p.qZA(),p.TgZ(3,"div",14),p.TgZ(4,"h6"),p._uU(5),p.qZA(),p.qZA(),p.qZA()),2&e){var n=t.$implicit;p.xp6(1),p.s9C("href",null==n?null:n.file_url,p.LSH),p.xp6(1),p.Q6J("ngClass","png"==(null==n?null:n.extension)||"jpg"==(null==n?null:n.extension)||"jpeg"==(null==n?null:n.extension)||"svg"==(null==n?null:n.extension)?"fa-file-image-o":"fa-file-text-o"),p.xp6(3),p.Oqu(null==n?null:n.original_filename)}}var b,y,x=[{path:"",children:[{path:"",component:(b=function(){function t(n,i,o,l){e(this,t),this.helperService=n,this.httpService=i,this.localService=o,this.fb=l,this.fileName="",this.filesData=[],this.authToken=this.localService.getJsonValue("authUser"),this.commentForm=this.fb.group({comment:[null,[r.kI.required]]})}return n(t,[{key:"ngOnInit",value:function(){this.getImages()}},{key:"onFileSelected",value:function(e){this.helperService.uploadImage(e,"reven")}},{key:"getImages",value:function(){var e=this;this.httpService.getChat("getFiles?user_id=".concat(this.authToken.userId),!0).subscribe(function(t){console.log("===================================="),e.filesData=t.data.data,console.log(e.filesData),console.log("====================================")})}}]),t}(),b.\u0275fac=function(e){return new(e||b)(p.Y36(m.W),p.Y36(d.e),p.Y36(h.C),p.Y36(r.qu))},b.\u0275cmp=p.Xpm({type:b,selectors:[["app-documents"]],decls:12,vars:3,consts:[[3,"title","active_item"],[1,"container"],[1,"row"],[1,"col-sm-12"],[1,"file-content"],[1,"card"],[1,"card-header"],[1,"mb-3","mt-3"],[1,"card-body","file-manager"],[1,"row","files"],["class","col-sm-3 file-box mt-3 mb-3",4,"ngFor","ngForOf"],[1,"col-sm-3","file-box","mt-3","mb-3"],["target","_blank",1,"file-top",3,"href"],[1,"fa","txt-primary",3,"ngClass"],[1,"file-bottom"]],template:function(e,t){1&e&&(p._UZ(0,"app-breadcrumb",0),p.TgZ(1,"div",1),p.TgZ(2,"div",2),p.TgZ(3,"div",3),p.TgZ(4,"div",4),p.TgZ(5,"div",5),p.TgZ(6,"div",6),p.TgZ(7,"h4",7),p._uU(8,"All Files"),p.qZA(),p.qZA(),p.TgZ(9,"div",8),p.TgZ(10,"div",9),p.YNc(11,Z,6,3,"div",10),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA()),2&e&&(p.Q6J("title","Documents")("active_item","Documents"),p.xp6(11),p.Q6J("ngForOf",t.filesData))},directives:[v.L,l.sg,l.mk],styles:[".fileUp[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100px;height:100px;border:5px solid #000;border-radius:100px}.file-content[_ngcontent-%COMP%]   .files[_ngcontent-%COMP%]   .file-box[_ngcontent-%COMP%]{width:unset}.row.files[_ngcontent-%COMP%]{justify-content:space-around}"]}),b)}]}],A=function(){var t=n(function t(){e(this,t)});return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=p.oAB({type:t}),t.\u0275inj=p.cJS({imports:[[g.Bz.forChild(x)],g.Bz]}),t}(),q=((y=n(function t(){e(this,t)})).\u0275fac=function(e){return new(e||y)},y.\u0275mod=p.oAB({type:y}),y.\u0275inj=p.cJS({imports:[[l.ez,A,s.bB,c.d,a.A0,r.u5,r.UX,u.m,f.X]]}),y)}}])}();