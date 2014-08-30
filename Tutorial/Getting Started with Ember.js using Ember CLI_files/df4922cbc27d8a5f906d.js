document.write('<link rel="stylesheet" href="https://gist-assets.github.com/assets/embed-e8861c84ff85edae1cf9869dd551c98d.css">')
document.write('<div id=\"gist13343216\" class=\"gist\">\n        <div class=\"gist-file\">\n          <div class=\"gist-data gist-syntax\">\n            \n\n\n\n    <div class=\"file-data\">\n      <table cellpadding=\"0\" cellspacing=\"0\" class=\"lines highlight\">\n        <tr>\n          <td class=\"line-numbers\">\n            <span class=\"line-number\" id=\"file-remaining-js-L1\" rel=\"file-remaining-js-L1\">1<\/span>\n            <span class=\"line-number\" id=\"file-remaining-js-L2\" rel=\"file-remaining-js-L2\">2<\/span>\n            <span class=\"line-number\" id=\"file-remaining-js-L3\" rel=\"file-remaining-js-L3\">3<\/span>\n            <span class=\"line-number\" id=\"file-remaining-js-L4\" rel=\"file-remaining-js-L4\">4<\/span>\n            <span class=\"line-number\" id=\"file-remaining-js-L5\" rel=\"file-remaining-js-L5\">5<\/span>\n            <span class=\"line-number\" id=\"file-remaining-js-L6\" rel=\"file-remaining-js-L6\">6<\/span>\n            <span class=\"line-number\" id=\"file-remaining-js-L7\" rel=\"file-remaining-js-L7\">7<\/span>\n            <span class=\"line-number\" id=\"file-remaining-js-L8\" rel=\"file-remaining-js-L8\">8<\/span>\n            <span class=\"line-number\" id=\"file-remaining-js-L9\" rel=\"file-remaining-js-L9\">9<\/span>\n            <span class=\"line-number\" id=\"file-remaining-js-L10\" rel=\"file-remaining-js-L10\">10<\/span>\n            <span class=\"line-number\" id=\"file-remaining-js-L11\" rel=\"file-remaining-js-L11\">11<\/span>\n            <span class=\"line-number\" id=\"file-remaining-js-L12\" rel=\"file-remaining-js-L12\">12<\/span>\n            <span class=\"line-number\" id=\"file-remaining-js-L13\" rel=\"file-remaining-js-L13\">13<\/span>\n            <span class=\"line-number\" id=\"file-remaining-js-L14\" rel=\"file-remaining-js-L14\">14<\/span>\n            <span class=\"line-number\" id=\"file-remaining-js-L15\" rel=\"file-remaining-js-L15\">15<\/span>\n            <span class=\"line-number\" id=\"file-remaining-js-L16\" rel=\"file-remaining-js-L16\">16<\/span>\n            <span class=\"line-number\" id=\"file-remaining-js-L17\" rel=\"file-remaining-js-L17\">17<\/span>\n            <span class=\"line-number\" id=\"file-remaining-js-L18\" rel=\"file-remaining-js-L18\">18<\/span>\n            <span class=\"line-number\" id=\"file-remaining-js-L19\" rel=\"file-remaining-js-L19\">19<\/span>\n          <\/td>\n          <td class=\"line-data\">\n            <pre class=\"line-pre\"><div class=\"line\" id=\"file-remaining-js-LC1\"><span class=\"kr\">import<\/span> <span class=\"nx\">Ember<\/span> <span class=\"nx\">from<\/span> <span class=\"s1\">&#39;ember&#39;<\/span><span class=\"p\">;<\/span><\/div><div class=\"line\" id=\"file-remaining-js-LC2\">&nbsp;<\/div><div class=\"line\" id=\"file-remaining-js-LC3\"><span class=\"kd\">var<\/span> <span class=\"nx\">TodosController<\/span> <span class=\"o\">=<\/span> <span class=\"nx\">Ember<\/span><span class=\"p\">.<\/span><span class=\"nx\">ArrayController<\/span><span class=\"p\">.<\/span><span class=\"nx\">extend<\/span><span class=\"p\">({<\/span><\/div><div class=\"line\" id=\"file-remaining-js-LC4\">    <span class=\"nx\">actions<\/span><span class=\"o\">:<\/span> <span class=\"p\">{<\/span><\/div><div class=\"line\" id=\"file-remaining-js-LC5\">            <span class=\"c1\">// ... additional lines truncated for brevity ...<\/span><\/div><div class=\"line\" id=\"file-remaining-js-LC6\">        <span class=\"p\">}<\/span><\/div><div class=\"line\" id=\"file-remaining-js-LC7\">    <span class=\"p\">},<\/span><\/div><div class=\"line\" id=\"file-remaining-js-LC8\">    <\/div><div class=\"line\" id=\"file-remaining-js-LC9\">    <span class=\"nx\">remaining<\/span><span class=\"o\">:<\/span> <span class=\"kd\">function<\/span><span class=\"p\">()<\/span> <span class=\"p\">{<\/span><\/div><div class=\"line\" id=\"file-remaining-js-LC10\">        <span class=\"k\">return<\/span> <span class=\"k\">this<\/span><span class=\"p\">.<\/span><span class=\"nx\">filterBy<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;isCompleted&#39;<\/span><span class=\"p\">,<\/span> <span class=\"kc\">false<\/span><span class=\"p\">).<\/span><span class=\"nx\">get<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;length&#39;<\/span><span class=\"p\">);<\/span><\/div><div class=\"line\" id=\"file-remaining-js-LC11\">    <span class=\"p\">}.<\/span><span class=\"nx\">property<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;@each.isCompleted&#39;<\/span><span class=\"p\">),<\/span><\/div><div class=\"line\" id=\"file-remaining-js-LC12\">&nbsp;<\/div><div class=\"line\" id=\"file-remaining-js-LC13\">    <span class=\"nx\">inflection<\/span><span class=\"o\">:<\/span> <span class=\"kd\">function<\/span><span class=\"p\">()<\/span> <span class=\"p\">{<\/span><\/div><div class=\"line\" id=\"file-remaining-js-LC14\">        <span class=\"kd\">var<\/span> <span class=\"nx\">remaining<\/span> <span class=\"o\">=<\/span> <span class=\"k\">this<\/span><span class=\"p\">.<\/span><span class=\"nx\">get<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;remaining&#39;<\/span><span class=\"p\">);<\/span><\/div><div class=\"line\" id=\"file-remaining-js-LC15\">        <span class=\"k\">return<\/span> <span class=\"p\">(<\/span><span class=\"nx\">remaining<\/span> <span class=\"o\">===<\/span> <span class=\"mi\">1<\/span><span class=\"p\">)<\/span> <span class=\"o\">?<\/span> <span class=\"s1\">&#39;item&#39;<\/span> <span class=\"o\">:<\/span> <span class=\"s1\">&#39;items&#39;<\/span><span class=\"p\">;<\/span><\/div><div class=\"line\" id=\"file-remaining-js-LC16\">    <span class=\"p\">}.<\/span><span class=\"nx\">property<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;remaining&#39;<\/span><span class=\"p\">)<\/span><\/div><div class=\"line\" id=\"file-remaining-js-LC17\"><span class=\"p\">});<\/span><\/div><div class=\"line\" id=\"file-remaining-js-LC18\">&nbsp;<\/div><div class=\"line\" id=\"file-remaining-js-LC19\"><span class=\"kr\">export<\/span> <span class=\"k\">default<\/span> <span class=\"nx\">TodosController<\/span><span class=\"p\">;<\/span><\/div><\/pre>\n          <\/td>\n        <\/tr>\n      <\/table>\n    <\/div>\n\n          <\/div>\n          <div class=\"gist-meta\">\n            <a href=\"https://gist.github.com/brownie3003/df4922cbc27d8a5f906d/raw/remaining.js\" style=\"float:right\">view raw<\/a>\n            <a href=\"https://gist.github.com/brownie3003/df4922cbc27d8a5f906d#file-remaining-js\">remaining.js<\/a>\n            hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n          <\/div>\n        <\/div>\n<\/div>\n')
