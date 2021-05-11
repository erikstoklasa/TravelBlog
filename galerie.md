---
layout: page
title: Galerie
permalink: /galerie/
---

{% assign image_files = site.static_files | where: "image", true %}
{% for myimage in image_files %}
<img src="{{ myimage.path }}" />
{% endfor %}
