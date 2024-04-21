import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const UserDashboard = ({questionnaire}) => {
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
        <div className="text-light">
            <h2>Camp Questionnaires</h2>
            <table className="table text-light">
                <thead>
                <tr>
                    <th>QnA Id</th>
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
                        <tr key={index}>
                            <td>{questionnaire.id}</td>
                            <td>{questionnaire.full_name}</td>
                            <td>{questionnaire.burner_email}</td>
                            <td>{questionnaire.phone_number}</td>
                            <td>{questionnaire.campers}</td>
                            <td>{questionnaire.space_required}</td>
                            <td>{questionnaire.camp_donation}</td>
                            <td>{questionnaire.early_arrival}</td>
                            <td>{questionnaire.leader_question}</td>
                            <td>{questionnaire.why_go}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};