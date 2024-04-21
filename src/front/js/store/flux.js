const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			token: undefined,
			localStorageChecked: undefined,
			questionnaires: []
		},

		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			logIn: async (body) => {
				const response = await fetch(
					process.env.BACKEND_URL + "/api/log-ins", {
						method: "POST",
						body: JSON.stringify(body),
						headers: {
							"Content-Type": "application/json"
						}
					}
				);
				if (response.status !== 201) return false;
				const responseBody = await response.json();
				setStore({
					token: responseBody.access_token
				});
				localStorage.setItem("token", responseBody.access_token);

				return true;
			},

			checkIfTokenInLocalStorage: () => {
				if (localStorage.getItem("token")){
					setStore({
						token: localStorage.getItem("token")
					});
				}
					// localStorageChecked: true
			},

			fetchPrivateEndpoint: async () => {
				const store = getStore();
				const response = await fetch(
					process.env.BACKEND_URL + "/api/private", {
						headers: {
							"Content-type": "application/json",
							"Authorization": "Bearer " + store.token
						}
					}
				);
				const body = await response.json();
				setStore({
					privateData: body
				});
			},

			logUserOut: () => {
				setStore({
					token: undefined
				});
				if (localStorage.getItem("token")) {
					localStorage.reomoveItem("token");
				}
				console.log(getStore().token)
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			processQuestionnaire: async (questionnaire) => {
				const response = await fetch(
					process.env.BACKEND_URL + "/api/questionnaire",{
						method: "POST",
						body: JSON.stringify({full_name: questionnaire.full_name, phone_number: questionnaire.phone_number, burner_email: questionnaire.burner_email, campers: questionnaire.campers, space_required: questionnaire.space_required, leader_question: questionnaire.leader_question, camp_donation: questionnaire.camp_donation, early_arrival: questionnaire.early_arrival, why_go: questionnaire.why_go }),
						headers: {
							"Content-Type": "application/json"
						}
					}
					);
					if (response.status !== 201) return false;
					const responseBody = await response.json();
					console.log(responseBody)

					return true;
			},

			getAllQuestionnaires: async () => {

				const response = await fetch(process.env.BACKEND_URL + "/api/questionnaires",{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						// Authorization: "Bearer " + store.token
					},
				})
				if (response.status !== 200) return false;
				const responseBody = await response.json()
				console.log(responseBody)
				setStore({ questionnaires: responseBody});
				return true;
			}


		}
	};
};

export default getState;
