import React, { useContext, useEffect } from "react";
import {Context} from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const UserDashboard = (questionnaires) => {
    const {store, actions} = useContext(Context);
    const navigate = useNavigate();

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
                  <td>{questionnaire.status}</td>
                  <td>{order.comments.length > 0 ? order.comments[0].message : ""}</td>
                  <td>
                  </td>
                  <td>
                  </td>
                </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
    );
};