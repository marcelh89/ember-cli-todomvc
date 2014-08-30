document.write('<link rel="stylesheet" href="https://gist-assets.github.com/assets/embed-e8861c84ff85edae1cf9869dd551c98d.css">')
document.write('<div id=\"gist12910543\" class=\"gist\">\n        <div class=\"gist-file\">\n          <div class=\"gist-data gist-syntax\">\n            \n\n\n\n    <div class=\"file-data\">\n      <table cellpadding=\"0\" cellspacing=\"0\" class=\"lines highlight\">\n        <tr>\n          <td class=\"line-numbers\">\n            <span class=\"line-number\" id=\"file-libuttondestroy-hbs-L1\" rel=\"file-libuttondestroy-hbs-L1\">1<\/span>\n            <span class=\"line-number\" id=\"file-libuttondestroy-hbs-L2\" rel=\"file-libuttondestroy-hbs-L2\">2<\/span>\n            <span class=\"line-number\" id=\"file-libuttondestroy-hbs-L3\" rel=\"file-libuttondestroy-hbs-L3\">3<\/span>\n            <span class=\"line-number\" id=\"file-libuttondestroy-hbs-L4\" rel=\"file-libuttondestroy-hbs-L4\">4<\/span>\n            <span class=\"line-number\" id=\"file-libuttondestroy-hbs-L5\" rel=\"file-libuttondestroy-hbs-L5\">5<\/span>\n            <span class=\"line-number\" id=\"file-libuttondestroy-hbs-L6\" rel=\"file-libuttondestroy-hbs-L6\">6<\/span>\n            <span class=\"line-number\" id=\"file-libuttondestroy-hbs-L7\" rel=\"file-libuttondestroy-hbs-L7\">7<\/span>\n            <span class=\"line-number\" id=\"file-libuttondestroy-hbs-L8\" rel=\"file-libuttondestroy-hbs-L8\">8<\/span>\n            <span class=\"line-number\" id=\"file-libuttondestroy-hbs-L9\" rel=\"file-libuttondestroy-hbs-L9\">9<\/span>\n            <span class=\"line-number\" id=\"file-libuttondestroy-hbs-L10\" rel=\"file-libuttondestroy-hbs-L10\">10<\/span>\n            <span class=\"line-number\" id=\"file-libuttondestroy-hbs-L11\" rel=\"file-libuttondestroy-hbs-L11\">11<\/span>\n            <span class=\"line-number\" id=\"file-libuttondestroy-hbs-L12\" rel=\"file-libuttondestroy-hbs-L12\">12<\/span>\n          <\/td>\n          <td class=\"line-data\">\n            <pre class=\"line-pre\"><div class=\"line\" id=\"file-libuttondestroy-hbs-LC1\">{{#each itemController=&quot;todo&quot;}}<\/div><div class=\"line\" id=\"file-libuttondestroy-hbs-LC2\">    &lt;li {{bind-attr class=&quot;isCompleted:completed isEditing:editing&quot;}}&gt;<\/div><div class=\"line\" id=\"file-libuttondestroy-hbs-LC3\">        {{#if isEditing}}<\/div><div class=\"line\" id=\"file-libuttondestroy-hbs-LC4\">            {{input type=&quot;text&quot; class=&quot;edit&quot; value=title focus-out=&quot;acceptChanges&quot;<\/div><div class=\"line\" id=\"file-libuttondestroy-hbs-LC5\">                insert-newline=&quot;acceptChanges&quot;}}<\/div><div class=\"line\" id=\"file-libuttondestroy-hbs-LC6\">        {{else}}<\/div><div class=\"line\" id=\"file-libuttondestroy-hbs-LC7\">            {{input type=&quot;checkbox&quot; checked=isCompleted class=&quot;toggle&quot;}}<\/div><div class=\"line\" id=\"file-libuttondestroy-hbs-LC8\">            &lt;label {{action &quot;editTodo&quot; on=&quot;doubleClick&quot;}}&gt;{{title}}&lt;/label&gt;<\/div><div class=\"line\" id=\"file-libuttondestroy-hbs-LC9\">            &lt;button {{action &quot;removeTodo&quot;}} class=&quot;destroy&quot;&gt;&lt;/button&gt;<\/div><div class=\"line\" id=\"file-libuttondestroy-hbs-LC10\">        {{/if}}<\/div><div class=\"line\" id=\"file-libuttondestroy-hbs-LC11\">    &lt;/li&gt;<\/div><div class=\"line\" id=\"file-libuttondestroy-hbs-LC12\">{{/each}}<\/div><\/pre>\n          <\/td>\n        <\/tr>\n      <\/table>\n    <\/div>\n\n          <\/div>\n          <div class=\"gist-meta\">\n            <a href=\"https://gist.github.com/brownie3003/f17597a322421ecaa0e3/raw/liButtonDestroy.hbs\" style=\"float:right\">view raw<\/a>\n            <a href=\"https://gist.github.com/brownie3003/f17597a322421ecaa0e3#file-libuttondestroy-hbs\">liButtonDestroy.hbs<\/a>\n            hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n          <\/div>\n        <\/div>\n<\/div>\n')
