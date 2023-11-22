---
layout: page
title: Publications
permalink: /publications/
---

<ul>
{% for publication in site.publications %}
  <li>
    <ul>
	  {% if publication.electives %}<abbr class="elective">{{ publication.electives }}</abbr>{% endif %}
	  <li>{{ publication.date }} | {{ publication.conference }}</li>
	  <li><a href="{{ publication.doi }}">{{ publication.title }}</a></li>
	  <li>{{ publication.authors }}</li>
	  <li>{{ publication.conference_full }}</li>
	  <li><a href="{{ publication.paper }}">Published Paper</a></li>
	  <li><a href="{{ publication.source }}">Source Code</a></li>
	  <li><a href="{{ publication.slides }}">Featured Talk Slides</a></li>
	  <!-- Videos to be placed here -->
	</ul>
  </li>
{% endfor %}
</ul>

