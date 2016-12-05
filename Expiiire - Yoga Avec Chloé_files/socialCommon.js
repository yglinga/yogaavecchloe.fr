define("socialCommon/mixins/socialCompMixin",["santaProps"],function(a){"use strict";return{propTypes:{compData:a.Types.Component.compData,urlFormat:a.Types.urlFormat,getMainPageUrl:a.Types.getMainPageUrl,getCurrentUrl:a.Types.getCurrentUrl},getSocialUrl:function(a){var b=this.props.compData?this.props.compData.urlFormat:this.props.urlFormat;if(a){return this.props.getMainPageUrl(b)}return this.props.getCurrentUrl(b,undefined,b!==this.props.urlFormat)}}});define("socialCommon/mixins/facebookComponentMixin",["lodash","reactDOM","santaProps"],function(a,b,c){"use strict";function d(a,b){if(a&&a.height&&a.width&&b&&b.height&&b.width){return a.height!==b.height||a.width!==b.width}return false}return{getInitialState:function(){this.loadScript();this._lastHref=this.getHref(this.props);return null},propTypes:{externalScriptLoader:c.Types.SiteAspects.externalScriptLoader,cookie:c.Types.RequestModel.cookie,currentUrl:c.Types.currentUrl},loadScript:function(){if(typeof window!=="undefined"&&!window.FB){this.props.externalScriptLoader.loadScript("FACEBOOK",null,{currentUrl:this.props.currentUrl,cookie:this.props.cookie})}},parseFacebookPluginDomNode:function(){if(a.has(window,"FB.XFBML.parse")){window.FB.XFBML.parse(b.findDOMNode(this))}},componentDidMount:function(){this.parseFacebookPluginDomNode()},componentDidUpdate:function(b){var c=this.getHref(this.props);if(!a.isEqual(b.compData,this.props.compData)||!a.isEqual(b.compProp,this.props.compProp)||d(b.style,this.props.style)||c!==this._lastHref){this.parseFacebookPluginDomNode()}this._lastHref=c}}});define("socialCommon/mixins/twitterComponentMixin",["lodash","utils","santaProps"],function(a,b,c){"use strict";var d=["da","de","en","es","fr","hi","it","ja","ko","nl","no","pl","pt","ru","sv","tr"];function e(a,c,d){if(a==="userLang"){return b.wixUserApi.getLanguage(c,d)}return a}return{getInitialState:function(){return{width:this.props.style.width,height:this.props.style.height}},propTypes:{compProp:c.Types.Component.compProp.isRequired,cookie:c.Types.RequestModel.cookie,currentUrl:c.Types.currentUrl,id:c.Types.Component.id.isRequired,style:c.Types.Component.style.isRequired},componentDidMount:function(){window.addEventListener("message",this.processMessage)},componentWillUnmount:function(){window.removeEventListener("message",this.processMessage)},processMessage:function(a){if(a.data&&a.data.type==="twitterSize"&&a.data.compId===this.props.id){this.registerReLayout();this.setState(a.data.size)}},getLanguage:function(){var b=e(this.props.compProp.dataLang,this.props.cookie,this.props.currentUrl);return a.includes(d,b)?b:"en"},getSkinProperties:function(){return{"":{style:{width:this.state.width,height:this.state.height}},iframe:{src:this.getIFrameSrc(),width:this.state.width,height:this.state.height}}}}});define("socialCommon",["socialCommon/mixins/socialCompMixin","socialCommon/mixins/facebookComponentMixin","socialCommon/mixins/twitterComponentMixin"],function(a,b,c){"use strict";return{socialCompMixin:a,facebookComponentMixin:b,twitterComponentMixin:c}});