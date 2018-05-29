var btn = document.getElementById('btn');
//btn.addEventListener('click', add);

function add(){
	var comment = document.getElementById('text').value;
	if (comment.length > 0 && comment.length < 141) {
		document.getElementById('text').value = '';
		var element = document.getElementById('counter');
		element.style.cssText = 'color : #69CBF8';
		document.getElementById('text').style.cssText = 'heigth: auto';
		element.innerHTML = 140;

		var postSection = document.getElementById('post-section');

		var containerComments = document.createElement('div');
		containerComments.setAtribute('id', 'container-comments');
		postSection.appendChild(containerComments);

		var paragraph = document.createElement('p');
		var textNode = document.createTextNode(comment);
		paragraph.appendChild(textNode);

		var newComment = document.createElement('div');
		newComment.classList.add('comment');
		newComment.appendChild(paragraph);
		containerComments.appendChild(newComment);

		var userName = document.getElementById('user');
		var user = document.createElement('h5');
		var userTextName = document.createTextNode(userName.textContent);
		user.appendChild(userTextName);
		newComment.appendChild(user);

		var divImg = document.createElement('div');
		divImg.classList.add('miniPic');
		var divIcons = document.createElement('div');
		divIcons.classList.add('iconos');

		var check = document.createElement('input');
		check.type = 'checkbox';

		var heart = document.createElement('i');
		heart.classList.add('fa', 'fa-heart', 'heart');

		var trash = document.createElement('i');
		trash.classList.add('fa', 'fa-trash', 'trash');
		divIcons.appendChild(heart);
		divIcons.appendChild(trash);
		divIcons.appendChild(check);

		var posTime = document.createElement('p');
		var textTime = document.createTextNode(moment().format('LT'));
		posTime.appendChild(textTime);
		posTime.id = 'time-size';
		divIcons.appendChild(posTime);
		newComment.appendChild(divIcons);

	}
}
