(function(b) {
    b.fn.extend({
        "mouseMove": function(c) {
            $this = b(this);
            $this.hover(function(k) {
                var u = b(this).find(c);
                var p = k.clientX;
                var n = k.clientY;
                var s = parseInt(b(this).offset().top);
                var o = parseInt(s + b(this).height());
                var g = parseInt(b(this).offset().left);
                var d = parseInt(g + b(this).width());
                var m = Math.abs(n - s);
                var j = Math.abs(n - o);
                var i = Math.abs(p - g);
                var f = Math.abs(p - d);
                var h = Math.min(m, j, i, f);
                var q = k.type;
                switch (h) {
                    case m:
                        a("top", q, u);
                        break;
                    case j:
                        a("bottom", q, u);
                        break;
                    case i:
                        a("left", q, u);
                        break;
                    case f:
                        a("right", q, u)
                }
            })
        }
    });
    function a(c, d, f) {
        var e = 300;
        if (c == "top") {
            if (d == "mouseenter") {
                b(b(f)[0]).stop(true, true);
                b(b(f)[0]).css({
                    display: "block",
                    top: "-100%",
                    left: "0"
                }).animate({
                        top: 0,
                        left: 0
                    },
                    e)
            } else {
                b(b(f)[0]).animate({
                        display: "block",
                        top: "-100%",
                        left: "0"
                    },
                    e)
            }
        }
        if (c == "left") {
            if (d == "mouseenter") {
                b(b(f)[0]).stop(true, true);
                b(b(f)[0]).css({
                    display: "block",
                    top: "0",
                    left: "-100%"
                }).animate({
                        left: 0,
                        top: 0
                    },
                    e)
            } else {
                b(b(f)[0]).animate({
                        display: "block",
                        left: "-100%"
                    },
                    e)
            }
        }
        if (c == "bottom") {
            if (d == "mouseenter") {
                b(b(f)[0]).stop(true, true);
                b(b(f)[0]).css({
                    display: "block",
                    top: "100%",
                    left: "0"
                }).animate({
                        top: 0,
                        left: 0
                    },
                    e)
            } else {
                b(b(f)[0]).animate({
                        display: "block",
                        top: "100%",
                        left: "0"
                    },
                    e)
            }
        }
        if (c == "right") {
            if (d == "mouseenter") {
                b(b(f)[0]).stop(true, true);
                b(b(f)[0]).css({
                    display: "block",
                    top: 0,
                    left: "100%"
                }).animate({
                        left: "0%",
                        top: 0
                    },
                    e)
            } else {
                b(b(f)[0]).animate({
                        display: "block",
                        left: "100%"
                    },
                    e)
            }
        }
    }
})(window.jQuery);