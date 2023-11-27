---
layout: default
---

<h2>Main Page</h2>

Primary content goes here.

<pre>
site: {{ site | jsonify | escape }}
page: {{ page | jsonify | escape }}
layout: {{ layout | jsonify | escape }}
content: {{ content | jsonify | escape }}
paginator: {{ paginator | jsonify | escape }}
</pre>
