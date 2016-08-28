let Model = require('./model');
let View = require('./view');
let Router = require('./router');

    buttonPanel.addEventListener('click',e => {
        let route = e.target.dataset.route;
    Router.handle(route);
    });

    new Promise(function(resolve) {
        window.onload = resolve;
    }).then(function() {
        return Model.login(5600712, 2 | 4 | 8 | 8192 | 262144);
    }).then(function() {
        return Model.getUser().then(function(users) {
            header.innerHTML = View.render('header', users[0]);
        });
    }).catch(function(e) {
        console.error(e);
        alert('Ошибка: ' + e.message);
    });

