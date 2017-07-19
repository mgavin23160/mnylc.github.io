
paypal.Button.render({

    env: 'sandbox', // Or 'sandbox',

    commit: true, // Show a 'Pay Now' button

    payment: function() {
        // Set up the payment here
    },

    onAuthorize: function(data, actions) {
        // Execute the payment here
    }

}, '#paypal-button');

