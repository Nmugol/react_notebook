import NoteCard from "./NoteCard";

const Home = props => {

    let darcMode = props.theme;
    return (
        <div className="note">
            <NoteCard theme={darcMode} noteTitle={'title'} book={'empti'}></NoteCard>
            <NoteCard theme={darcMode} noteTitle={'title'} book={'empti'}></NoteCard>
            <NoteCard theme={darcMode} noteTitle={'title'} book={'empti'}></NoteCard>
            <NoteCard theme={darcMode} noteTitle={'title'} book={'empti'}></NoteCard>
            <NoteCard theme={darcMode} noteTitle={'title'} book={'empti'}></NoteCard>
        </div>
    );
}

export default Home;