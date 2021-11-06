const commentListDiv = document.getElementById('comment-list-container');

function createMainComment(message, username, mode, parentDiv=commentListDiv) {
    const commentListMessage = document.createElement('div');
    commentListMessage.classList.add('comment-list-message');
    
    let commentHtml = `
        <div class="comment-list-message">
            <div class="user badge">${username}</div>
            <div class="comment-message alert alert-secondary">${message}</div>
            <button class="reply-btn btn btn-secondary btn-sm">Reply</button>
            <div class="reply-list m-3"></div>
        </div>
    `
    if(mode === 'c') {
        parentDiv.append(commentListMessage);
    } else if(mode === 'r') {
        parentDiv.querySelector('.reply-list').append(commentListMessage)
    }
    
    commentListMessage.innerHTML = commentHtml
    commentListMessage.querySelector('.reply-btn').addEventListener('click', createReplyForm.bind(this, commentListMessage));
    
}


function createReplyForm(commentListMessage) {
    const replyFormContainer = document.createElement('div');
    replyFormContainer.classList.add('comment-input')
    const replyForm = `
        <div class="form-group m-3 w-25">
            <label for="comment-data">Your Reply</label>
            <textarea id="comment-data" rows="2" class="form-control" placeholder="Enter your comments"></textarea>
        </div>
        <div class="form-group m-3 w-25">
            <label for="select-user">Select User</label>
            <select name="user" id="select-user" class="form-control">
                <option value="girdhar">Girdhar</option>
                <option value="setu">Setu</option>
                <option value="gaurav">Gaurav</option>
                <option value="ayaan">Ayaan</option>
                <option value="abuzar">Abuzar</option>
                <option value="subham">Subham</option>
            </select>
        </div>
        <button class="btn btn-primary m-3">Reply</button>
    `

    commentListMessage.querySelector('.reply-btn').disabled = true
    commentListMessage.append(replyFormContainer)
    replyFormContainer.innerHTML = replyForm

    // taking reply data from the reply form
    replyFormContainer.querySelector('button').addEventListener('click', createReply.bind(this, replyFormContainer, commentListMessage))
    
}


function createReply(replyFormContainer, commentListMessage) {
    const replyListContainer = document.createElement('div')
    replyListContainer.classList.add('reply-list', 'm-3')

    replyFormContainer.parentNode.removeChild(replyFormContainer);

    const replyMessage = replyFormContainer.querySelector('#comment-data').value
    const repliedUser = replyFormContainer.querySelector('#select-user').value
    
    createMainComment(replyMessage, repliedUser, 'r', commentListMessage)

    
    commentListMessage.querySelector('.reply-btn').disabled = false
}





