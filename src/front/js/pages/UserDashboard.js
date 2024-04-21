import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const UserDashboard = (questionnaires) => {
    const {store, actions} = useContext(Context);
    const navigate = useNavigate();

    // const [questionnaire, setQuestionnaire] = useState({
    //     burner_email: "",
    //     camp_donation: "",
    //     campers: "",
    //     early_arrival: "",
    //     id: "",
    //     leader_question: "",
    //     phone_number: "",
    //     space_required: "",
    //     why_go: ""
    // })



    useEffect(() => {
        actions.getAllQuestionnaires()
    }, []);

    // useEffect(() => {
    //     if ( !store.token ) {
    //         navigate("/log-in");
    //     }
    // }, [store.token, navigate]);
    
    return (
        <div>
            <h2>Camp Questionnaires</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>Camp Id</th>
                    <th>Full name</th>
                    <th>burner email</th>
                    <th>phone number</th>
                    <th>campers</th>
                    <th>space required</th>
                    <th>camp donation</th>
                    <th>early arrival</th>
                    <th>leadership question</th>
                    <th>why go to buring man</th>
                </tr>
                </thead>
                <tbody>
                    {store?.questionnaires.map((questionnaire, index) => (
                        <React.Fragment key={index}> 
                            <tr>
                                <td>
                                {/* <Link to={"/order/details/" + order.id } >
                                    {order.id} 
                                </Link> */}
                                </td>
                                <td>
                                    {questionnaire.full_name}
                                </td>
                                <td>
                                    {questionnaire.id} {questionnaire.burner_email}
                                </td>
                                <td>{questionnaire.phone_number}</td>
                                <td>{questionnaire.campers}</td>
                                <td>{questionnaire.space_required}</td>
                                <td>{questionnaire.camp_donation}</td>
                                <td>{questionnaire.early_arrival}</td>
                                <td>{questionnaire.leadership_question}</td>
                                <td>{questionnaire.why_go}</td>
                            </tr>
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};