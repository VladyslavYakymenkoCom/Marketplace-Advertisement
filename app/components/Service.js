var CurrentUser;

var paginationIndex = 1;

var currentPagesIds = 1;

function getCurrentPagesIds() {
    let db = getArtBase();

    var arr = [];

    for (let i = paginationIndex - 1; i < paginationIndex + 4; i++) {
        arr.push(db.arts[i]);
    }

    return arr;
}

function getArtBase() {
    return JSON.parse(localStorage.getItem("articleBase"));
}

function setArtBase(artBase) {
    localStorage.removeItem("articleBase");

    localStorage.setItem("articleBase", JSON.stringify(artBase));
}

function removeArticleFromBase(articleToRemove) {
    let db = getArtBase();

    db.arts = db.arts.filter(function(elem) {
        return elem.id != articleToRemove.id;
    });

    setArtBase(db);
}


(function() {

    var artBase = getArtBase();

    if (artBase.arts.length == 0) {
        artBase = {
            id: 1,
            arts: [{
                id: 1,
                Title: "Test1",
                Author: "admin",
                AuthorId: 1,
                Desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus totam libero minus deleniti, quisquam qui numquam. Magni quibusdam laudantium facere maxime cupiditate voluptatum molestiae, officia ut maiores necessitatibus, assumenda et.",
                Date: (new Date()).toLocaleDateString()
            }, {
                id: 2,
                Title: "Test2",
                Author: "admin",
                AuthorId: 1,
                Desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto aspernatur, nesciunt saepe alias optio earum voluptate praesentium nisi reiciendis! Harum, id quaerat sed fugit error tempora facere nostrum cumque dolores.",
                Date: (new Date()).toLocaleDateString()
            }, {
                id: 3,
                Title: "Test3",
                Author: "admin",
                AuthorId: 1,
                Desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio expedita, corporis et, voluptate ab reprehenderit est hic. Impedit illum, vel perspiciatis iusto cumque magnam a tenetur molestias sit doloribus.",
                Date: (new Date()).toLocaleDateString()
            }, {
                id: 4,
                Title: "Test4",
                Author: "admin",
                AuthorId: 1,
                Desc: "TEST",
                Date: (new Date()).toLocaleDateString()
            }, {
                id: 5,
                Title: "Test5",
                Author: "admin",
                AuthorId: 1,
                Desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi voluptas vero est, nulla porro sequi fugiat soluta. Assumenda sequi, incidunt. Laborum libero labore iste commodi perspiciatis temporibus modi fugit aut!",
                Date: (new Date()).toLocaleDateString()
            }, {
                id: 6,
                Title: "Test6",
                Author: "admin",
                AuthorId: 1,
                Desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi voluptas vero est, nulla porro sequi fugiat soluta. Assumenda sequi, incidunt. Laborum libero labore iste commodi perspiciatis temporibus modi fugit aut!",
                Date: (new Date()).toLocaleDateString()
            }, {
                id: 7,
                Title: "Test7",
                Author: "admin",
                AuthorId: 1,
                Desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi voluptas vero est, nulla porro sequi fugiat soluta. Assumenda sequi, incidunt. Laborum libero labore iste commodi perspiciatis temporibus modi fugit aut!",
                Date: (new Date()).toLocaleDateString()
            }, {
                id: 8,
                Title: "Test8",
                Author: "admin",
                AuthorId: 1,
                Desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi voluptas vero est, nulla porro sequi fugiat soluta. Assumenda sequi, incidunt. Laborum libero labore iste commodi perspiciatis temporibus modi fugit aut!",
                Date: (new Date()).toLocaleDateString()
            }, {
                id: 9,
                Title: "Test9",
                Author: "admin",
                AuthorId: 1,
                Desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi voluptas vero est, nulla porro sequi fugiat soluta. Assumenda sequi, incidunt. Laborum libero labore iste commodi perspiciatis temporibus modi fugit aut!",
                Date: (new Date()).toLocaleDateString()
            }, {
                id: 10,
                Title: "Test10",
                Author: "admin",
                AuthorId: 1,
                Desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi voluptas vero est, nulla porro sequi fugiat soluta. Assumenda sequi, incidunt. Laborum libero labore iste commodi perspiciatis temporibus modi fugit aut!",
                Date: (new Date()).toLocaleDateString()
            }, {
                id: 11,
                Title: "Test11",
                Author: "admin",
                AuthorId: 1,
                Desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi voluptas vero est, nulla porro sequi fugiat soluta. Assumenda sequi, incidunt. Laborum libero labore iste commodi perspiciatis temporibus modi fugit aut!",
                Date: (new Date()).toLocaleDateString()
            }, {
                id: 12,
                Title: "Test12",
                Author: "admin",
                AuthorId: 1,
                Desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi voluptas vero est, nulla porro sequi fugiat soluta. Assumenda sequi, incidunt. Laborum libero labore iste commodi perspiciatis temporibus modi fugit aut!",
                Date: (new Date()).toLocaleDateString()
            }, {
                id: 13,
                Title: "Test13",
                Author: "admin",
                AuthorId: 1,
                Desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi voluptas vero est, nulla porro sequi fugiat soluta. Assumenda sequi, incidunt. Laborum libero labore iste commodi perspiciatis temporibus modi fugit aut!",
                Date: (new Date()).toLocaleDateString()
            }, ]
        }

        setArtBase(artBase);
    }
})();