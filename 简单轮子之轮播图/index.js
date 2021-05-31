window.addEventListener('load', function() {
    var focus = document.querySelector('.focus');
    var left = document.querySelector('.left');
    var right = document.querySelector('.right');
    var focus_ul = document.querySelector('.focus_ul');
    var circle_ul = document.querySelector('.circle_ul');
    var imgWidth = focus_ul.children[0].offsetWidth;
    var num = 0;
    var circle_num = 0;


    focus.addEventListener('mouseenter', function() {
        left.style.display = 'block';
        right.style.display = 'block';
        clearInterval(timer);
    })

    focus.addEventListener('mouseleave', function() {
        left.style.display = 'none';
        right.style.display = 'none';
        timer = setInterval(function() {
            right.click();
        }, 1500);
    })

    for (var i = 0; i < focus_ul.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('data-index', i);
        circle_ul.appendChild(li);

        li.addEventListener('click', function() {
            var index = this.getAttribute('data-index');
            num = index;
            animate(focus_ul, -index * imgWidth);
            for (var j = 0; j < circle_ul.children.length; j++) {
                circle_ul.children[j].className = '';
            }
            circle_ul.children[index].className = 'current';
        })
    }
    circle_ul.firstElementChild.className = 'current';

    focus_ul.appendChild(focus_ul.firstElementChild.cloneNode(true));

    right.addEventListener('click', function() {
        if (num == focus_ul.children.length - 1) {
            focus_ul.style.left = 0;
            num = 0;
        }
        num++;
        circle_num = num;
        animate(focus_ul, -num * imgWidth);
        if (num == focus_ul.children.length - 1) {
            circle_num = 0;
        }
        for (var j = 0; j < circle_ul.children.length; j++) {
            circle_ul.children[j].className = '';
        }
        circle_ul.children[circle_num].className = 'current';
    })

    left.addEventListener('click', function() {
        if (num == 0) {
            focus_ul.style.left = -(focus_ul.children.length - 1) * imgWidth + 'px';
            num = circle_ul.children.length;
        }
        num--;
        circle_num = num;
        animate(focus_ul, -num * imgWidth);
        // if (num == focus_ul.children.length - 1) {
        //     circle_num = 0;
        // }
        for (var j = 0; j < circle_ul.children.length; j++) {
            circle_ul.children[j].className = '';
        }
        circle_ul.children[circle_num].className = 'current';
    })

    var timer = setInterval(function() {
        right.click();
    }, 1500);
})