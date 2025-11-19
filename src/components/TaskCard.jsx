
import PropTypes from "prop-types";

import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";

const TaskCard = ({ title, tags, handleDelete, index }) => {
    return (
        <article className='task_card'>
            <p className='task_text'>{title}</p>

            <div className='task_card_bottom_line'>
                <div className='task_card_tags'>
                    {tags.map((tag, i) => (
                        <Tag key={i} tagName={tag} selected />
                    ))}
                </div>
                <div
                    className='task_delete'
                    onClick={() => handleDelete(index)}>
                    <img src={deleteIcon} className='delete_icon' alt='delete' />
                </div>
            </div>
        </article>
    );
};

// ✅ PropTypes FIX — ESLint error yahin se araha tha
TaskCard.propTypes = {
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleDelete: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
};

export default TaskCard;
