import { useState } from "react";
import PropTypes from "prop-types";
import s from "./styles.module.css"

export default function SearchForm({ onSubmit }) {
    const [q, setQ] = useState("");

    const handleChange = ({ target }) => {
        setQ(target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(q);
    };

    return (
        <form className={s.form} action="" onSubmit={handleSubmit} >
            <input className={s.input}
                value={q}
                name="query"
                onChange={handleChange}
                type="text"

            />
            <button className={s.button} type="button" onClick={handleSubmit} >
                Search
            </button>
        </form>
    );
};


SearchForm.propTypes = {
    onSubmit: PropTypes.func,
};