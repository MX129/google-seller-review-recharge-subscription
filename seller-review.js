// Python Jinja2

{% if shipping_address.country == "Ireland" %}

<!-- Google Seller Review -->

<script src="https://apis.google.com/js/platform.js?onload=renderOptIn" async defer></script>

<script>
 var deliveryDate = new Date(); 
 var daysAdded = 5;
 deliveryDate.setDate(deliveryDate.getDate() + daysAdded);
 var dd = String(deliveryDate.getDate()).padStart(2, '0');
 var mm = String(deliveryDate.getMonth() + 1).padStart(2, '0');
 var yyyy = deliveryDate.getFullYear();

 deliveryDate = yyyy + '-' + mm + '-' + dd;
 console.log(deliveryDate);

 window.renderOptIn = function() {
  window.gapi.load('surveyoptin', function() {
   window.gapi.surveyoptin.render(
    {
     // REQUIRED FIELDS
     "merchant_id": 123456789,
     "order_id": "{{order_number}}",
     "email": "{{email}}",
     "delivery_country": "IE",
     "estimated_delivery_date": deliveryDate,
    });
  });
 }
</script>

{% endif %}