import './Comment.css';

export default function EditButton() {
    return (
        <div className="EditButton">
            <div className="delete-button">
                <img src="icon-delete.svg" alt="delete icon" />
                <h5>Delete</h5>
            </div>
            <div className="edit-button">
                <img src="icon-edit.svg" alt="delete icon" />
                <h5>Edit</h5>
            </div>
        </div>
    )
}