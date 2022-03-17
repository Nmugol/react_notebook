import NoteCard from "./NoteCard";
import AddNote from "./AddNote";

const Home = props => {

    let darcMode = props.theme;
    return (
        <div className="note">
            <AddNote/>
            <NoteCard theme={darcMode} noteTitle={'title'} book={'empti'}></NoteCard>
            <NoteCard theme={darcMode} noteTitle={'title'} book={'empti'}></NoteCard>
            <NoteCard theme={darcMode} noteTitle={'title'} book={'empti'}></NoteCard>
            <NoteCard theme={darcMode} noteTitle={'title'} book={'empti'}></NoteCard>
            <NoteCard theme={darcMode} noteTitle={'title'} book={'empti'}></NoteCard>
        </div>
    );
}

export default Home;