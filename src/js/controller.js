let Model = require('./model');
let View = require('./view');

module.exports = {
    musicRoute: function() {
        return Model.getMusic().then(function(music) {
            results.innerHTML = View.render('music', {list: music});
        });
    },
    friendsRoute: function() {
        return Model.getFriends().then(function(friends) {
            results.innerHTML = View.render('friends', {list: friends});
        });
    },
    newsRoute: function() {
        return Model.getNews().then(function(news) {
            results.innerHTML = View.render('news', {list: news.items});
        });
    },
    groupsRoute: function() {
        return Model.getGroups().then(function(groups) {
            results.innerHTML = View.render('groups', {list: groups});
        });
    },
    photosRoute: function() {
        return Model.getAlbums().then(function (albums) {
            results.innerHTML = View.render('albums', {list: albums.items});

            albums.items.forEach(function (album) {
                Model.getPhotos(album.id).then(function (photos) {
                    var container = document.getElementById('album_' + album.id);
                    container.innerHTML = View.render('photos', {list: photos});
                });
            });
        });
    }
};
