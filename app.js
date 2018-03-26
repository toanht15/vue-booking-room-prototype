var app = new Vue({
    el: '#app',
    data: {
        title: 'My apartment',
        address: '12 My Street, My City, My Country',
        about: 'This is a description',
        headerImageStyle: {
            'background-image': 'url(sample/header.jpg)'
        },
        amenities: sample.amenities,
        prices: sample.prices,
        contracted: true,
        modalOpen: false
    },
    watch: {
        modalOpen: function () {
            var className = 'modal-open';
            if (this.modalOpen) {
                document.body.classList.add(className);
            } else {
                document.body.classList.remove(className);
            }
        }
    },
    created: function () {
        document.addEventListener('keyup', this.escapeKeyListener);
    },
    destroyed: function () {
      document.removeEventListener('keyup', this.escapeKeyListener)
    },
    methods: {
        escapeKeyListener: function () {
            if (evt.keyCode === 27 && app.modalOpen) {
                app.modalOpen = false;
            }
        }
    }
});
