var myToDoList = Backbone.View.extend({
    el: '#mainToDo',
    events: {
        'click a': 'addMoreListItem'
    },
    initialize: function() {

        this.model = new myModel();
        _.bindAll(this, 'render');
        this.render();
    },
    render: function() {
        $(this.el).html('<a>ADD</a>');
        $(this.el).append('<ul id="myList"></ul>');

        var first = this.model.get('firstStep');
        var second = this.model.get('secondStep');

        $('#myList').append('<li>'+first+'</li>');
        $('#myList').append('<li>'+second+'</li>');
    },
    addMoreListItem: function() {
        $('#myList').append('<li>Text</li>');
    }
});