{% if user.is_superuser %}
	{% include "mqueue_livefeed/js/client.js" %}
{% endif %}
{% include "presence/js/client.js" %}