(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([["SearchAutocorrectCommon"],{Kv0b:function(e,r,o){o.r(r),o.d(r,"default",(function(){return l}));var t=o("q1tI"),n=o.n(t),c=o("Ye/N"),i=o("qD10"),a=o("vvax"),s=o("n6mq");function l({scope:e,typo:r}){const{corrected:o,correction:t,original:l}=r,u=o?`/search/${e}/?q=${encodeURIComponent(l)}&rs=typo_auto_original&auto_correction_disabled=true`:`/search/${e}/?q=${encodeURIComponent(t)}&rs=typo_suggestion&auto_correction_disabled=true`;return n.a.createElement(s.V,null,o?Object(a.b)(c.a._("Here's what we found for {{ correctionLink }}. Search {{ originalLink }} instead?","Misspelled search query has been auto-corrected. Offer to search for the original query.","Misspelled search query has been auto-corrected. Offer to search for the original query."),{correctionLink:n.a.createElement(s.V,{inline:!0,key:"correctionLink"},t),originalLink:n.a.createElement(i.a,{className:"searchAutocorrectLink",key:"originalLink",to:u},n.a.createElement(s.V,{inline:!0,weight:"bold"},l))}):Object(a.b)(c.a._("Did you mean {{ correctionLink }}?","Search term seems to be misspelled. Offer to search for the correct spelling.","Search term seems to be misspelled. Offer to search for the correct spelling."),{correctionLink:n.a.createElement(i.a,{className:"searchAutocorrectLink",key:"correctionLink",to:u},t)}))}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/js/SearchAutocorrectCommon-c727a920b5b15dc7fa6c.mjs.map