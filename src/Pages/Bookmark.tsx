import { ReactElement } from 'react'

interface Note {
    id: number,
    title: string,
    description?: string,
    cover?: string
    published: Boolean
}

function Bookmark(): ReactElement {
    return (
        <div>
            <h1>Bookmarks</h1>
            <div className="item--cards">
                   {/* {notes && notes.map(note => {
                        return <NoteList key={note.id} notes={notes} setNotes={setNotes} setUpdatingNote={setUpdatingNote} setShowNewNoteForm={setShowNewNoteForm} note={note} />
                    })}   */}
            </div>
        </div>
    )
}

export default Bookmark
