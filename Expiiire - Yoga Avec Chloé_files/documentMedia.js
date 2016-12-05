define("documentMedia",["lodash","santaProps","react","core","utils","image"],function(a,b,c,d,e,f){"use strict";var g=d.compMixins;var h=e.linkRenderer;return{displayName:"DocumentMedia",mixins:[g.skinBasedComp,g.skinInfo],propTypes:a.assign({compData:b.Types.Component.compData.isRequired,compProp:b.Types.Component.compProp.isRequired,style:b.Types.Component.style.isRequired,linkRenderInfo:b.Types.Link.linkRenderInfo.isRequired,rootNavigationInfo:b.Types.Component.rootNavigationInfo.isRequired},b.santaTypesUtils.getSantaTypesByDefinition(f)),statics:{useSantaTypes:true},getSkinProperties:function(){var b=this.props.compData;var d=this.props.compProp;var e=b.link?h.renderLink(b.link,this.props.linkRenderInfo,this.props.rootNavigationInfo):{};var f=this.getParams(["contentPaddingLeft","contentPaddingRight","contentPaddingTop"]);var g={title:b.title};g["data-content-padding-left"]=parseInt(f.contentPaddingLeft.value,10);g["data-content-padding-right"]=parseInt(f.contentPaddingRight.value,10);g["data-content-padding-top"]=parseInt(f.contentPaddingTop.value,10);g["data-content-image-height"]=parseInt(this.props.style.height,10);return{"":g,img:this.createChildComponent(b,"core.components.Image","img",{displayName:"Image",id:this.props.id+"img",ref:"img",imageData:b,containerWidth:this.props.style.width,containerHeight:this.props.style.height,displayMode:"full",usePreloader:true}),link:a.assign(e,{target:"_blank"}),label:{parentConst:c.DOM.span,children:b.title,className:this.classSet({hidden:!d.showTitle||a.isEmpty(b.title)})}}}}});