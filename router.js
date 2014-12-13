Router.configure({
    notFoundtemplate: "notFound"
});


Router.map(function() {

    this.route('home', {
        path: '/',
        layoutTemplate: "layout",
        template: 'home',
        notFoundTemplate: 'notFound',
        onBeforeAction: function() {
            if (Meteor.isClient) {
                Session.set('clickedOpinion', false)
                Session.set('clickedSubmitTeacher', false)
                $('body,html').scrollTop(0)
                Session.set('teachers', [])
                Session.set('notSearching', true)
                this.next()
            }

        },
        waitOn: function() {
            return Meteor.subscribe('home');
        },
        loadingTemplate: 'spinner'

    });


    this.route('teacherPage', {
        path: '/teachers/:id',
        layoutTemplate: "layout",
        template: 'teacherPage',
        notFoundTemplate: 'notFound',
        loadingTemplate: 'spinner',
        data: function() {
            return Teachers.findOne(this.params.id);
        },
        onBeforeAction: function() {
            if (Meteor.isClient) {
                Session.set('clickedOpinion', false)
                Session.set('clickedSubmitTeacher', false)
                $('body,html').scrollTop(0)
                this.next()
            }

        },
        waitOn: function() {
            return Meteor.subscribe('teacher', this.params.id);
        }

    });

    this.route('IAmAdminSoFuckOffTeachers', {
        path: '/IAmAdminSoFuckOff/teachers',
        template: 'IAmAdminSoFuckOffTeachers',
        notFoundTemplate: 'notFound',
        loadingTemplate: 'spinner',
        data: function() {
            return Teachers.find();
        },
        onBeforeAction: function() {
            if (Meteor.isClient) {
                $('body,html').scrollTop(0)
                this.next()
            }

        },
        waitOn: function() {
            return Meteor.subscribe('IAmAdminSoFuckOffTeachers');
        }

    });



    this.route('IAmAdminSoFuckOffOpinions', {
        path: '/IAmAdminSoFuckOff/opinions',
        template: 'IAmAdminSoFuckOffOpinions',
        notFoundTemplate: 'notFound',
        loadingTemplate: 'spinner',
        data: function() {
            return Opinions.find();
        },
        onBeforeAction: function() {
            if (Meteor.isClient) {
                $('body,html').scrollTop(0)
                this.next()
            }

        },
        waitOn: function() {
            return Meteor.subscribe('IAmAdminSoFuckOffOpinions');
        }

    });




});
Router.configure({
    notFoundTemplate: 'notFound'
});
Router.plugin('dataNotFound', {
    notFoundTemplate: 'notFound'
});
