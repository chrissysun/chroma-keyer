let processor = {
    timerCallback: function() {

        // don't process video when you don't need to
        if (this.video.paused || this.video.ended) {
            return;
        }
        
        // remove green from video
        this.computeFrame();

        let self = this;
        setTimeout(function() {
            self.timerCallback();
        }, 0);
    },

    doLoad: function() {
        this.video = document.querySelector('#video');
        this.c1 = document.querySelector('#c1');
        this.ctx1 = this.c1.getContext('2d');
        this.c2 = document.querySelector('#c2');
        this.ctx2 = this.c2.getContext('2d');
    }
};