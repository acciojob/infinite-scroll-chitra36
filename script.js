var listElm = document.querySelector('#infi-list');

// Add items.
var nextItem = 1;
var loadMore = function() {
for (var i = 0; i < 10; i++) {
var item = document.createElement('li');
item.innerText = 'Item ' + nextItem++;
listElm.appendChild(item);
}
}

//  when scrolled to bottom.
listElm.addEventListener('scroll', function() {
if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
loadMore();
}
});

// Initially load some items.
loadMore();