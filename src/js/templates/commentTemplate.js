function commentTemplate(obj) {
    return `
        <div id="comment-"
        class="p-2">
            <h4 class="dark:text-gray-400">10 seconds ago</h4>
            <p>${obj.blogcomment}</p>
        </div>
    `
}

module.exports = commentTemplate
