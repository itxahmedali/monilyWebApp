(self.webpackChunkmonily=self.webpackChunkmonily||[]).push([[562],{74562:function(e,t,n){"use strict";n.r(t),n.d(t,{documentsModule:function(){return b}});var i=n(61116),l=n(31041),s=n(90702),o=n(96087),c=n(47323),r=n(92099),a=n(46982),u=n(52080),f=n(35366),g=n(83646),m=n(72003),d=n(24419),p=n(43675);function h(e,t){if(1&e&&(f.TgZ(0,"div",11),f.TgZ(1,"a",12),f._UZ(2,"i",13),f.qZA(),f.TgZ(3,"div",14),f.TgZ(4,"h6"),f._uU(5),f.qZA(),f.qZA(),f.qZA()),2&e){const e=t.$implicit;f.xp6(1),f.s9C("href",null==e?null:e.file_url,f.LSH),f.xp6(1),f.Q6J("ngClass","png"==(null==e?null:e.extension)||"jpg"==(null==e?null:e.extension)||"jpeg"==(null==e?null:e.extension)||"svg"==(null==e?null:e.extension)?"fa-file-image-o":"fa-file-text-o"),f.xp6(3),f.Oqu(null==e?null:e.original_filename)}}const Z=[{path:"",children:[{path:"",component:(()=>{class e{constructor(e,t,n,i){this.helperService=e,this.httpService=t,this.localService=n,this.fb=i,this.fileName="",this.filesData=[],this.authToken=this.localService.getJsonValue("authUser"),this.commentForm=this.fb.group({comment:[null,[l.kI.required]]})}ngOnInit(){this.getImages()}onFileSelected(e){this.helperService.uploadImage(e,"reven")}getImages(){this.httpService.getChat(`getFiles?user_id=${this.authToken.userId}`,!0).subscribe(e=>{console.log("===================================="),this.filesData=e.data.data,console.log(this.filesData),console.log("====================================")})}}return e.\u0275fac=function(t){return new(t||e)(f.Y36(g.W),f.Y36(m.e),f.Y36(d.C),f.Y36(l.qu))},e.\u0275cmp=f.Xpm({type:e,selectors:[["app-documents"]],decls:12,vars:3,consts:[[3,"title","active_item"],[1,"container"],[1,"row"],[1,"col-sm-12"],[1,"file-content"],[1,"card"],[1,"card-header"],[1,"mb-3","mt-3"],[1,"card-body","file-manager"],[1,"row","files"],["class","col-sm-3 file-box mt-3 mb-3",4,"ngFor","ngForOf"],[1,"col-sm-3","file-box","mt-3","mb-3"],["target","_blank",1,"file-top",3,"href"],[1,"fa","txt-primary",3,"ngClass"],[1,"file-bottom"]],template:function(e,t){1&e&&(f._UZ(0,"app-breadcrumb",0),f.TgZ(1,"div",1),f.TgZ(2,"div",2),f.TgZ(3,"div",3),f.TgZ(4,"div",4),f.TgZ(5,"div",5),f.TgZ(6,"div",6),f.TgZ(7,"h4",7),f._uU(8,"All Files"),f.qZA(),f.qZA(),f.TgZ(9,"div",8),f.TgZ(10,"div",9),f.YNc(11,h,6,3,"div",10),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA()),2&e&&(f.Q6J("title","Documents")("active_item","Documents"),f.xp6(11),f.Q6J("ngForOf",t.filesData))},directives:[p.L,i.sg,i.mk],styles:[".fileUp[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100px;height:100px;border:5px solid #000;border-radius:100px}.file-content[_ngcontent-%COMP%]   .files[_ngcontent-%COMP%]   .file-box[_ngcontent-%COMP%]{width:unset}.row.files[_ngcontent-%COMP%]{justify-content:space-around}"]}),e})()}]}];let v=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=f.oAB({type:e}),e.\u0275inj=f.cJS({imports:[[u.Bz.forChild(Z)],u.Bz]}),e})(),b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=f.oAB({type:e}),e.\u0275inj=f.cJS({imports:[[i.ez,v,c.bB,s.d,o.A0,l.u5,l.UX,r.m,a.X]]}),e})()}}]);