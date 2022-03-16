const NoteCard = props => {

    let darcMode = props.theme;
    let noteTitle = props.noteTitle;
    let book = props.book;

    return (
        <div className={(darcMode ? 'dark-mode' : 'light-mode') + ' homeCard'}>
            <div className="view">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto est commodi debitis. Id sint eius blanditiis reprehenderit veniam ipsum.
            </div>
            <div>
                <div className="book">{book}</div>
                <div className="title">{noteTitle}</div>
            </div>
        </div>
    );
}

export default NoteCard;