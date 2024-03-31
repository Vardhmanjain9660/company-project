import React, { useState } from "react";
function TodoList() {
    const [activity, setActivity] = useState("");
    const [listData, setlistData] = useState([]);
    //add a task
    function addActivity() {
        setlistData((listData) => {
            const updatedList = [...listData, activity];
            console.log(updatedList);
            setActivity("");
            return updatedList;
        });
    }
    // delete a task
    function deleteActivity(i) {
        const updatedListData = listData.filter((elem, id) => {
            return i != id;
        });
        setlistData(updatedListData);
    }
    function deleteAll() {
        setlistData([]);
    }
    return (
        //create input field
        <>
            <div className="container">
                <div className="header">TODO LIST</div>
                <input
                    type="text"
                    placeholder="ADD ACTIVITY"
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}
                    //add task
                />
                <button onClick={addActivity}>ADD</button>
                <p className="list-heading">here is your list</p>
                {listData != [] &&
                    listData.map((data, i) => {
                        //delete a task
                        return (
                            <>
                                <p key={i}>
                                    <div className="listData">{data}</div>
                                    <div className="btn-position">
                                        <button
                                            onClick={() => deleteActivity(i)}
                                        >
                                            {" "}
                                            delete(-)
                                        </button>
                                    </div>
                                </p>
                            </>
                        );
                    })}
                {listData.length >= 1 && (
                    <button onClick={deleteAll}> delete all</button>
                )}
            </div>
        </>
    );
}
export default TodoList;
