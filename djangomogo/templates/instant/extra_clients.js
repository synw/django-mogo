{% if user.is_superuser and request.path == "/events/" %}
    {% include "mqueue_livefeed/js/client.js" %}
{% endif %}
{% include "presence/js/client.js" %}