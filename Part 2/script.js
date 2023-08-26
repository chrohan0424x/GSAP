let tl = gsap.timeline();

tl
    .from('.first', {
        delay: 1,
        opacity: 0,
        onStart: function () {
            $('.first').textillate({
                in: {
                    effect: 'fadeInUp',
                    callback: function () {
                        $('.first').textillate('out');
                    }
                },
                out: { effect: 'fadeOutUp' }
            });
        }
    })
    .from('.second', {
        delay: 1,
        opacity: 0,
        onStart: function () {
            $('.second').textillate({
                in: {
                    effect: 'fadeInUp',
                    callback: function () {
                        $('.second').textillate('out');
                    }
                },
                out: { effect: 'fadeOutUp' }
            });
        }
    })
    .from('.third', {
        delay: 1,
        opacity: 0,
        onStart: function () {
            $('.third').textillate({
                in: {
                    effect: 'fadeInUp',
                    callback: function () {
                        $('.third').textillate('out');
                    }
                },
                out: { effect: 'fadeOutUp' }
            });
        }
    })
    .from('.forth', {
        delay: 1,
        opacity: 0,
        onStart: function () {
            $('.forth').textillate({
                in: {
                    effect: 'fadeInUp',
                },
            });
        }
    })
    .to('.top-screen',{
        y: '-100%',
        delay: 1,
        duration: 1.2,
        ease: "Power4.easeOut"
    })