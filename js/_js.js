
function _each(list, iter) {
    for( var i = 0 ; i< list.length ; i++) {
        iter(list[i]);
    }
    return list;
}

function _filter(list, predi){
    var new_list = [];
    for( var i = 0 ; i< list.length ; i++) {
        if(predi(list[i])) {
            new_list.push(list[i]);
        }
    }
    return new_list;
}

function _map(list, mapper) {
    var new_list = [];
    for( var i = 0 ; i< list.length ; i++) {
        new_list.push(mapper(list[i]));
    }
    return new_list;
}

function _curry(fn) {
    return function(a, b) {
        return arguments.length == 2 ? fn(a, b) : function(b) { return fn(a, b); };  
    }
}


function _curryr(fn) {
    return function(a, b) {
        return arguments.length == 2 ? fn(a, b) : function(b) { return fn(b, a); };  
    }
}

var _get = _curryr(function _get(obj, key) {
    return obj == null ? undefined : obj[key]
})

function _rest(list, num) {
    return Array.prototype.slice.call(list, num || 1);
}

function _reduce(list, iter, memo) {
    if(arguments.length == 2){
        memo = list[0];
        list = _rest(list)
    }
    _each(list, function(val){
        memo = iter(memo, val);
    })
    return memo;
}