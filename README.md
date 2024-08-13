<img width="700" height="400" alt="Screenshot 2024-08-13 at 7 39 59 PM" src="https://github.com/user-attachments/assets/f3aae1fb-d68b-4fb8-a5bc-6b83caf19f19">

## Running The project
Run both the frontend and backend by changing the directory:
```
npm start
uvicorn main:app --reload
```
<img width="700" height="400" alt="Screenshot 2024-08-13 at 7 40 58 PM" src="https://github.com/user-attachments/assets/bf18d695-322b-4856-9112-5fc0c060e8ea">

Drag and drop the nodes to create new edges


<img width="700" height="400" alt="Screenshot 2024-08-13 at 7 41 22 PM" src="https://github.com/user-attachments/assets/6809b48f-1db7-42eb-8cc2-ec9ce978cad0">

On pressing the submit button you get a modal presenting the information of number of nodes, edges and whether the nodes form a DAG or not

<img width="700" height="400" alt="Screenshot 2024-08-13 at 7 41 39 PM" src="https://github.com/user-attachments/assets/28410b88-7def-4074-9e4e-d09495d97f82">

Initially a pop-up is provided to walkthrough the project. If the user requires a walkthrough again then, the user can click on the "Start tour again" button to get the modal.
The project uses [Zustand](https://github.com/pmndrs/zustand) for state management.<br/>
The nodes don't get cleared when refreshed due to persistent storing (local storing) and can only be cleared by clicking the "Clear Nodes" button.

 
